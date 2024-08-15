import React from "react"

interface HeroProps {
  showPrompt?: boolean
}

const Hero: React.FC<HeroProps> = ({ showPrompt = true }) => {

  return (
    <div className='hero'>
      {showPrompt && (
        <>
          <span className="prompt">guest</span>@<span className="ssanjua-prompt">ssanjua</span><span className="end-prompt">:~$</span>
          <span>welcome to my terminal portfolio</span>
        </>
      )}
      <div>
        <p>hi! my name is Paula, also know as</p>
        <h1 className="terminal-title">SSANJUA</h1>
      </div>
      <div className="ascii-art">

        {`
..::.:::::::::;;;;;;
....:::;+xXx::::;;;;
....:::x+xx$x:::;;;;
....:..x;+x$x::::;;;
......:$&+x&x::::;;;
..::.xX$&xx&&&X;::;;
::::x$$&&&&&&&&&x::;
x;:;&$$$&&&&&&&&&+::
x;:;;X$&&&&&&&&&&$x;
.:::;x$&&&&&&&&Xx+xx
:..;+X&&&&&&&&&Xxxxx
          `}
      </div>
      <p>----</p>
      <span>don't know where to start? try typing<span className="command"> 'help'</span> or just <span className="command">'hello'</span></span>
      <p>----</p>
      <span className="secret-message">klapauciuss</span> <span className="signature">made with ❤️</span>
    </div>
  )
}

export default Hero
