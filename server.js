const geckos = require('@geckos.io/server').default
const { iceServers } = require('@geckos.io/server')

const io = geckos({
  ordered: true, // in a game, this should be set to false (default is false)
  maxRetransmits: 10, // in a game, this should be set to 0 (default is 0)
  iceServers: process.env.NODE_ENV === 'production' ? iceServers : []
})

// listen on port 3000 (default is 9208)
io.listen(3000)

io.onConnection(channel => {
  channel.onDisconnect(() => {
    console.log(`${channel.id} got disconnected`)
  })

  channel.emit('chat message', `Welcome to the chat ${channel.id}!`)

  channel.on('chat message', data => {
    channel.room.emit('chat message', data)
  })
})
