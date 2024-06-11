import React, { useState, useEffect, useRef } from "react";
import { commands } from "./Command";
import Output from "./Output";

const Terminal = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [output, setOutput] = useState<{ command: string; response: JSX.Element | string }[]>([]);
  // const promptText = "guest@ssanjua:~$";
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCommand(inputValue.trim());
    setInputValue("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCommand = (command: string) => {
    if (command === "clear") {
      setOutput([]);
      return;
    } else if (command === "help") {
      const response = commands.map(cmd => `${cmd.cmd}${' '.repeat(cmd.tab)}${cmd.desc}`).join('\n');
      setOutput((prevOutput) => [
        ...prevOutput,
        { command, response: <pre>{response}</pre> }
      ]);
      return;
    }

    setOutput((prevOutput) => [
      ...prevOutput,
      { command, response: <Output cmd={command} /> }
    ]);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [output]);

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
            ref={inputRef}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
