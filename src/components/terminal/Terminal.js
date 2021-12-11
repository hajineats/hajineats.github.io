import styled from "styled-components";
import TerminalStatusBar from "./TerminalStatusBar";
import TerminalMainScreen from "./TerminalMainScreen";
const Window = styled.div`
  width: 800px;
  height: 600px;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 400px) {
    height: 400px;
  }
`;
export default function Terminal() {
  return (
    <>
      <Window>
        <TerminalStatusBar />
        <TerminalMainScreen />
      </Window>
    </>
  );
}
