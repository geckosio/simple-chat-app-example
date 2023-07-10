import geckos from '@geckos.io/client'

// pass the port and url of the server
const channel = geckos({ port: location.port })

const button = document.getElementById('button')
const text = document.getElementById('text')
const list = document.getElementById('list')
const message = document.getElementById('message')

button.addEventListener('click', function (e) {
  e.preventDefault()
})

const appendMessage = function appendMessage(msg) {
  if (list) {
    const li = document.createElement('li')
    li.innerHTML = msg
    list.appendChild(li)
  }
}

channel.onConnect(function (error) {
  if (error) {
    console.error(error.message)
    message.innerHTML = 'Sorry something went wrong :/'
    appendMessage(error.message)
    return
  } else {
    message.innerHTML = "You're connected :)"
    console.log("You're connected!")
    setTimeout(function () {
      message.remove()
    }, 2500)
  }

  channel.emit('chat message', "Hello everyone, I'm " + channel.id)

  channel.onDisconnect(function () {
    console.log('You got disconnected')
  })

  if (button)
    button.addEventListener('click', function (e) {
      if (text) {
        const content = text.value
        if (content && content.trim().length > 0) {
          channel.emit('chat message', content.trim())
          text.value = ''
        }
      }
    })

  channel.on('chat message', function (data) {
    appendMessage(data)
  })
})
