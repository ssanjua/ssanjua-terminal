import React, { useState, useEffect, useRef } from "react"
import { commands } from "./Command"
import Output from "./Output"

const Terminal = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [output, setOutput] = useState<{ command: string; response: JSX.Element | string }[]>([]);
  // const promptText = "guest@ssanjua:~$"
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
    const matchingCommands = commands.filter(cmd => cmd.cmd.startsWith(value));
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
    }  else if (event.key === "Tab") {
      event.preventDefault()
      if (suggestions.length > 0) {
        setInputValue(suggestions[0])
      }
    }
  }

  const handleCommand = (command: string) => {
    if (command === "clear") {
      setOutput([])
      return
    }
    setOutput((prevOutput) => [
      ...prevOutput,
      { command, response: <Output cmd={command} /> }
    ])
    setPreviousCommands(prevCommands => [command, ...prevCommands]);
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [output])

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div>
        {output.map((line, index) => (
          <div key={index}>
            <div>
            <span className="prompt">guest</span>@<span className="ssanjua-prompt">ssanjua</span><span className="end-prompt">:~$</span><span>{line.command}</span>
            </div>
            <div className="response">{line.response}</div>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  )
}

export default Terminal
