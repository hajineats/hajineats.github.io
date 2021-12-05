import styled from "styled-components";
import {terminalFontSize} from "../../utils/fontsize";
import {useState, useRef, useEffect} from "react";
import {
	terminalPrompt,
	messageSeparator,
	TYPE_SYSTEM_TEXT,
	TYPE_WITH_PROMPT_TEXT,
	CONTENT_INDEX, TYPE_INDEX
} from "../../utils/messageprotocol";
import {prettierHistory, useFocus, PromptText} from "../../hooks/useFocus";

export default function TerminalMainScreen() {
	const [history, setHistory] = useState([])
	const [ref, setFocus] = useFocus()

	useEffect(() => {
		setFocus()
	}, [history])

	const handleKey = (e) => {
		if (e.key === "Enter") {
			const submittedLine = `${TYPE_WITH_PROMPT_TEXT}${messageSeparator}${ref.current.textContent}\n`
			// empty content
			ref.current.textContent = ""

			const newHistory = [...history, submittedLine]
			// prevent newline from forming
			e.preventDefault()
			setHistory(newHistory)
			setFocus()
		}
	}

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
	`
	const TerminalInput = styled.span``


	return (
		<WindowContent>
			{prettierHistory(history)}
			<PromptText>{terminalPrompt}</PromptText>
			<TerminalInput ref={ref} onKeyDown={handleKey} contentEditable={true}>
			</TerminalInput>
		</WindowContent>
	)
}