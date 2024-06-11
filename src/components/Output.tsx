import React, { useState } from 'react'
import About from './commands/About'
import Hello from './commands/Hello'
import Education from './commands/Education'
import Email from './commands/Email'
import Cv from './commands/Cv'
import Portfolio from './commands/Portfolio'
import Socials from './commands/Socials'
import Whoami from './commands/Whoami'
import Projects from './commands/Projects'
import Repo from './commands/Repo'
import Help from './commands/Help'
import Linkedin from './commands/Linkedin'
import Hero from './Hero'
import Themes from './commands/Themes'
import Lang from './commands/Lang'
import Sudo from './commands/Sudo'
import Game from './commands/Game'
import Secret from './commands/Secret'

type Props = {
  cmd: string,
  resetSudo: () => void
}

const Output: React.FC<Props> = ({ cmd, resetSudo }) => {
  const [accessGranted, setAccessGranted] = useState<boolean | null>(null)

  const handleAccessGranted = () => {
    setAccessGranted(true)
    resetSudo()
  }

  const handleAccessDenied = () => {
    setAccessGranted(false)
    resetSudo() 
  }

  const getCommandOutput = (cmd: string) => {
    if (cmd.startsWith('sudo')) {
      if (accessGranted === null) {
        return (
          <Sudo
            onAccessGranted={handleAccessGranted}
            onAccessDenied={handleAccessDenied}
          />
        )
      } else if (accessGranted) {
        return <div className='wrapper'>ACCESS GRANTED<p>try <span className='command'>'game'</span></p></div>
      } else {
        return <div className='wrapper'>password incorrect. NOT GRANTED.</div>
      }
    }

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
      case 'repo':
        return <Repo />
      case 'help':
        return <Help />
      case 'linkedin':
        return <Linkedin />
      case 'welcome':
        return <Hero showPrompt={false} />
      case 'themes':
        return <Themes />
      case 'lang':
        return <Lang />
      case 'game':
        return <Game />
      case 'klapauciuss':
        return <Secret />

      default:
        return <div className='wrapper'>not found command: {cmd} you can try <span className='command'>'help'</span></div>
    }
  }

  return (
    <div>
      {getCommandOutput(cmd)}
    </div>
  )
}

export default Output
