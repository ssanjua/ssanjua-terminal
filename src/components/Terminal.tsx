import React, { useState, useEffect, useRef } from "react"
import { commands } from "./Command"
import Output from "./Output"
import Hero from "./Hero"

const Terminal = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [output, setOutput] = useState<{ command: string; response: JSX.Element | string }[]>([])
  // const promptText = "guest@ssanjua:~$"
  const [showHero, setShowHero] = useState<boolean>(true)
  const [isSudoActive, setIsSudoActive] = useState<boolean>(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const [previousCommands, setPreviousCommands] = useState<string[]>([])
  const [currentCommandIndex, setCurrentCommandIndex] = useState<number>(-1)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleCommand(inputValue.trim())
    setInputValue("")
    setSuggestions([])
  }

  const autocompleteCommand = (value: string) => {
    const matchingCommands = commands.filter(cmd => cmd.cmd.startsWith(value))
    const suggestions = matchingCommands.map(cmd => cmd.cmd)
    setSuggestions(suggestions)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
    autocompleteCommand(value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault()
      if (currentCommandIndex < previousCommands.length - 1) {
        setCurrentCommandIndex(currentCommandIndex + 1)
        setInputValue(previousCommands[currentCommandIndex + 1])
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault()
      if (currentCommandIndex >= 0) {
        setCurrentCommandIndex(currentCommandIndex - 1)
        setInputValue(currentCommandIndex === 0 ? "" : previousCommands[currentCommandIndex - 1])
      }
    } else if (event.key === "Escape") {
      setInputValue("")
    } else if (event.key === "Tab") {
      event.preventDefault()
      if (suggestions.length > 0) {
        setInputValue(suggestions[0])
      }
    }
  }

  const handleCommand = (command: string) => {
    if (command === "clear") {
      setOutput([])
      setShowHero(false)
      return
    }
    if (command.startsWith("sudo")) {
      setIsSudoActive(true)
    }
    setOutput((prevOutput) => [
      ...prevOutput,
      { command, response: <Output cmd={command} resetSudo={handleResetSudo} /> }
    ])
    setPreviousCommands(prevCommands => [command, ...prevCommands])
  }

  useEffect(() => {
    if (inputRef.current && !isSudoActive) {
      inputRef.current.focus()
    }
  }, [output, isSudoActive])

  const handleResetSudo = () => {
    setIsSudoActive(false)
  }

  useEffect(() => {
  if (inputRef.current && !isSudoActive) {
    inputRef.current.scrollIntoView({ behavior: "smooth" })
    inputRef.current.focus()
  }
}, [output, inputValue, isSudoActive])

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      {showHero && <Hero />}
      <div>
        {output.map((line, index) => (
          <div key={index}>
            <div>
              <span className="prompt">guest</span>@<span className="ssanjua-prompt">ssanjua</span><span className="end-prompt">:~$</span><span>{line.command}</span>
            </div>
            <div className="response">{line.response}</div>
          </div>
        ))}
        {!isSudoActive && (
          <form onSubmit={handleSubmit}>
            <label>
              <span className="prompt">guest</span>@<span className="ssanjua-prompt">ssanjua</span><span className="end-prompt">:~$</span>
              <input
                className="userInput"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                autoFocus
              />
            </label>
          </form>
        )}
        {/* div to scroll */}
        <div ref={inputRef} />
      </div>
    </div>
  )
}

export default Terminal
