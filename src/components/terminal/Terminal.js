import styled, {css} from "styled-components";
import StatusBar from "./StatusBar";
import {terminalFontSize} from "../../utils/fontsize";
import {useEffect, useRef, useState} from "react";

export default function Terminal() {
	const [clicked, setClicked] = useState(false)
	const [history, setHistory] = useState([])
	const inputRef = useRef()

	const focusInput = ()=>{
		inputRef.current.focus()
	}
	useEffect(() => {
		focusInput()
	}, [history])


	const Window = styled.div`
      width: 800px;
      height: 600px;
      border-radius: 15px;
      position: relative;
      display: flex;
      flex-direction: column;
	`

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

	const SystemText = styled.span`
      font-weight: bolder;
      color: navajowhite;
	`

	const handleKey = (e) => {


		if (e.key === "Enter") {
			const submittedLine = `${inputRef.current.textContent}\n`
			// empty content
			inputRef.current.textContent = ""

			const newHistory = [...history,submittedLine]
			// prevent newline from forming
			e.preventDefault()
			setHistory(newHistory)
			focusInput()

		}
	}

	return (
		<>
			<Window>
				<StatusBar/>
				<WindowContent>
					{history}
					<SystemText>anonymous@hajinkim ></SystemText>
					<TerminalInput ref={inputRef} onKeyDown={handleKey} contentEditable={true}>

					</TerminalInput>
				</WindowContent>
			</Window>
		</>
	)
}