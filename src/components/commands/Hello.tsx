import React from 'react'

const hello = {
  "message": [
    "hello you, have you tried 'help'? :)",
    "hi! thanks for being here :)",
    "hello, glad you came :)",
    "hi you! :) if you are lost, try with 'help'... for this terminal, not saying you need help or something... you know..."
  ]
}

const Hello: React.FC = () => {
  const randomIndex = Math.floor(Math.random() * hello.message.length)
  const randomMessage = hello.message[randomIndex]

  return (
    <div className='wrapper'>
      {randomMessage}
    </div>
  )
}

export default Hello
  