import React, { useState, useEffect, useRef } from 'react'

type SudoProps = {
  onAccessGranted: () => void
  onAccessDenied: () => void
}

const Sudo: React.FC<SudoProps> = ({ onAccessGranted, onAccessDenied }) => {
  const [password, setPassword] = useState('')
  const [attempts, setAttempts] = useState(0)
  const correctPassword = 'klapauciuss'
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handlePasswordSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password === correctPassword) {
      onAccessGranted()
    } else {
      setAttempts(attempts + 1)
      if (attempts >= 1) {
        onAccessDenied()
      }
    }
    setPassword('')
  }

  return (
    <div>
      <form onSubmit={handlePasswordSubmit}>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={inputRef}
          />
        </label>
      </form>
    </div>
  )
}

export default Sudo
