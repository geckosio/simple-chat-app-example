import geckos, { iceServers } from '@geckos.io/server'
import http from 'http'
import express from 'express'

const port = 3000
const app = express()
const server = http.createServer(app)
const io = geckos({
  iceServers: process.env.NODE_ENV === 'production' ? iceServers : [],
  portRange: {
    min: 10000,
    max: 10007,
  },
  cors: { allowAuthorization: true },
})

app.use("/", express.static('public'))

io.addServer(server)

io.onConnection((channel) => {
  channel.onDisconnect(() => {
    console.log(`${channel.id} got disconnected`)
  })

  channel.emit('chat message', `Welcome to the chat ${channel.id}!`)

  channel.on('chat message', (data) => {
    channel.room.emit('chat message', data)
  })
})


server.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
})