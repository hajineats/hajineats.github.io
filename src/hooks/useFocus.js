import {
  CONTENT_INDEX,
  messageSeparator,
  terminalPrompt,
  TYPE_INDEX,
  TYPE_SYSTEM_TEXT,
  TYPE_WITH_PROMPT_TEXT,
} from "../utils/messageprotocol";
import { useRef } from "react";
import styled from "styled-components";

export const PromptText = styled.span`
  font-weight: bolder;
  color: navajowhite;
  margin-right: 5px;
`;

export const useFocus = () => {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };

  return [inputRef, focusInput];
};

export const prettierHistory = (history) => {
  return history
    .map((line) => line.split(messageSeparator))
    .map((array) => {
      if (array[TYPE_INDEX].includes(TYPE_WITH_PROMPT_TEXT)) {
        return (
          <>
            <PromptText>{terminalPrompt}</PromptText>
            {array[CONTENT_INDEX]}
          </>
        );
      }
      if (array[TYPE_INDEX].includes(TYPE_SYSTEM_TEXT)) {
        return processBold(array[CONTENT_INDEX]);
      }

      return <></>;
    });
};

const Bold = styled.b`
  background: ;
  color: white;
`;

const processBold = (text) => {
  var words = [];
  const splitText = text.split("**");

  for (var i = 0; i < splitText.length; i++) {
    if (i % 2 != 0) {
      words.push(<Bold>{splitText[i]}</Bold>);
    } else {
      words.push(splitText[i]);
    }
  }

  return words;
};
