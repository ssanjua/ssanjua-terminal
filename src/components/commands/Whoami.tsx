import React from 'react'

const whoamI = {
  "message": [
    "you are a visitor and I'm glad you are here :)",
    "that's an interesting question, whoami? I'm just glad you are here :)",
    "sometimes I wonder the same, whoami? well..."
  ]
};

const Whoami: React.FC = () => {
  const randomIndex = Math.floor(Math.random() * whoamI.message.length)
  const randomMessage = whoamI.message[randomIndex]

  return (
    <div className='wrapper'>
      {randomMessage}
    </div>
  )
}

export default Whoami
