import styled, { css } from "styled-components";
const WindowBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: aliceblue;
  display: flex;
  justify-content: flex-start;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ControlContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const Control = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 8px;
  margin-right: 5px;
  ${(props) =>
    props.maximize &&
    css`
      background-color: green;
    `}
  ${(props) =>
    props.minimize &&
    css`
      background-color: orange;
    `}
      ${(props) =>
    props.cancel &&
    css`
      background-color: crimson;
    `}
`;
export default function TerminalStatusBar() {
  return (
    <WindowBar>
      <ControlContainer>
        <Control cancel />
        <Control minimize />
        <Control maximize />
      </ControlContainer>
    </WindowBar>
  );
}
