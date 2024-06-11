import React from 'react';
import { commands } from '../Command'

const Help: React.FC = () => {
  const generateTabs = (count: number) => {
    return '\u00A0'.repeat(count)
  }

  return (
    <div className='wrapper'>
      {commands.map(({ cmd, desc, tab }) => (
        <div key={cmd}>
          <span className="command">{cmd}</span>
          {generateTabs(tab)}
          <span> {desc}</span>
        </div>
      ))}
      <div className='help-keys'>
        <div><span className='help-keys-main'>[Tab]</span> {generateTabs(8)} =&gt; autocompletes the command</div>
        <div><span className='help-keys-main'>[⬆][⬇]</span> {generateTabs(7)} =&gt; go back to previous command</div>
        <div><span className='help-keys-main'>[Esc]</span> {generateTabs(8)} =&gt; clear the terminal</div>
      </div>
    </div>
  )
}

export default Help
