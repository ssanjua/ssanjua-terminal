import React from 'react'
import About from './commands/About'
import Hello from './commands/Hello';
import Education from './commands/Education'
import Email from './commands/Email'
import Cv from './commands/Cv'
import Portfolio from './commands/Portfolio'
import Socials from './commands/Socials';
import Whoami from './commands/Whoami';
import Projects from './commands/Projects';

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
      case 'email':
        return <Email />
      case 'cv':
        return <Cv />
      case 'portfolio':
        return <Portfolio />
      case 'socials':
        return <Socials />
      case 'whoami':
        return <Whoami />
      case 'projects':
        return <Projects />
      default:
        return <div className='wrapper'>not found command: {cmd}</div>
    }
  }

  return (
    <div>
      {getCommandOutput(cmd)}
    </div>
  )
}

export default Output