import styled from "styled-components";
import TerminalStatusBar from "./TerminalStatusBar";
import TerminalMainScreen from "./TerminalMainScreen";
import { phoneWidth } from "../../utils/constants";
const Window = styled.div`
  width: 800px;
  height: 600px;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: ${phoneWidth}px) {
    height: 200px;
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
