import styled from "styled-components";
import { terminalFontSize } from "../../utils/fontsize";
import { useState, useEffect } from "react";
import {
  terminalPrompt,
  messageSeparator,
  TYPE_WITH_PROMPT_TEXT,
  TYPE_SYSTEM_TEXT,
} from "../../utils/messageprotocol";
import { prettierHistory, useFocus, PromptText } from "../../hooks/useFocus";
import processCommand from "../../utils/terminalfilesystem/filesystem";

export default function TerminalMainScreen() {
  const [history, setHistory] = useState([]);
  const [ref, setFocus] = useFocus();

  useEffect(() => {
    setFocus();
    // eslint-disable-next-line
  }, [history]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      const command = ref.current.textContent;
      const submittedLine = `${TYPE_WITH_PROMPT_TEXT}${messageSeparator}${command}\n`;
      const systemReturns = `${TYPE_SYSTEM_TEXT}${messageSeparator}${processCommand(
        command
      )}\n`;
      // empty content
      ref.current.textContent = "";

      const newHistory = [...history, submittedLine, systemReturns];
      // prevent newline from forming
      e.preventDefault();
      setHistory(newHistory);
      setFocus();
    }
  };

  const WindowContent = styled.div`
    height: 100%;
    background: grey;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
    color: whitesmoke;
    contenteditable: true;
    font-size: ${terminalFontSize}px;
    white-space: pre-wrap;
    overflow-y: scroll;
  `;
  const TerminalInput = styled.span``;

  const handleTerminalClick = () => {
    setFocus();
  };

  return (
    <WindowContent onClick={handleTerminalClick}>
      {prettierHistory(history)}
      <PromptText>{terminalPrompt}</PromptText>
      <TerminalInput
        ref={ref}
        onKeyDown={handleKey}
        contentEditable={true}
      ></TerminalInput>
    </WindowContent>
  );
}
