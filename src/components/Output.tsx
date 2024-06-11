import React from 'react'
import About from './commands/About'
import Hello from './commands/Hello';
import Education from './commands/Education';

type Props = {
  cmd: string
};

const Output: React.FC<Props> = ({ cmd }) => {
  const getCommandOutput = (cmd: string) => {
    switch (cmd) {
      case 'about':
        return <About />
      case 'hello':
        return <Hello />
      case 'education':
        return <Education />
      default:
        return <div>not found command: {cmd}</div>
    }
  }

  return (
    <div>
      {getCommandOutput(cmd)}
    </div>
  )
}

export default Output