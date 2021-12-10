import styled from "styled-components";
import { terminalFontSize } from "../../utils/fontsize";
import { useState, useEffect } from "react";
import { fileArray } from "../../utils/terminalfilesystem/filesystem";
import {
  terminalPrompt,
  messageSeparator,
  TYPE_WITH_PROMPT_TEXT,
  TYPE_SYSTEM_TEXT,
} from "../../utils/messageprotocol";
import { prettierHistory, useFocus, PromptText } from "../../hooks/useFocus";
import processCommand from "../../utils/terminalfilesystem/filesystem";
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

      if (command.includes("clear")) {
        setHistory([]);
        return;
      }

      // empty content
      ref.current.textContent = "";

      const newHistory = [...history, submittedLine, systemReturns];
      // prevent newline from forming
      e.preventDefault();
      setHistory(newHistory);
      setFocus();
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const splitCommand = ref.current.textContent.split(" ");
      var lastArg = splitCommand[splitCommand.length - 1];
      // check if command is prefixed with ./
      const isExecPrefixed = lastArg.startsWith("./");
      if (isExecPrefixed) {
        lastArg = lastArg.split("./")[1];
      }

      const fileMatch = fileArray().filter((f) => f.startsWith(lastArg));

      if (fileMatch) {
        if (fileMatch[0]) {
          splitCommand[splitCommand.length - 1] = fileMatch[0];
          ref.current.textContent = isExecPrefixed
            ? ["./", fileMatch[0]].join("")
            : splitCommand.join(" ");
        }
      }
    }
  };

  const TerminalInput = styled.span``;

  const handleTerminalClick = () => {
    setFocus();
  };

  return (
    <WindowContent onClick={handleTerminalClick}>
      {"Type `help` to display possible commands\n"}
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
