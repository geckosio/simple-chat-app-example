const geckos = require('@geckos.io/server').default
const { iceServers } = require('@geckos.io/server')

const io = geckos({
  ordered: true,
  maxRetransmits: 10,
  iceServers: process.env.NODE_ENV === 'production' ? iceServers : []
})

io.listen()

io.onConnection(channel => {
  channel.onDisconnect(() => {
    console.log(`${channel.id} got disconnected`)
  })

  channel.emit('chat message', `Welcome to the chat ${channel.id}!`)

  channel.on('chat message', data => {
    channel.room.emit('chat message', data)
  })
})
