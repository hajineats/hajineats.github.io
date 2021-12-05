import {
	CONTENT_INDEX,
	messageSeparator,
	terminalPrompt,
	TYPE_INDEX,
	TYPE_WITH_PROMPT_TEXT
} from "../utils/messageprotocol";
import {useRef} from "react";
import styled from "styled-components";

export const PromptText = styled.span`
  font-weight: bolder;
  color: navajowhite;
  margin-right: 5px;
`

export const useFocus = () => {
	const inputRef = useRef()
	const focusInput = () => {
		inputRef.current.focus()
	}

	return [inputRef, focusInput]
}


export const prettierHistory = (history) => {
	return history
		.map(line => line.split(messageSeparator))
		.map(array => {
			if (array[TYPE_INDEX].includes(TYPE_WITH_PROMPT_TEXT)) {
				return (
					<><PromptText>{terminalPrompt}</PromptText>{array[CONTENT_INDEX]}</>)
			}
			return <></>
		})
		}



