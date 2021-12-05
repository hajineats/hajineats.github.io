import styled, {css} from "styled-components";
import StatusBar from "./StatusBar";
import TerminalMainScreen from "./TerminalMainScreen";

export default function Terminal() {

	const Window = styled.div`
      width: 800px;
      height: 600px;
      border-radius: 15px;
      position: relative;
      display: flex;
      flex-direction: column;
	`
	return (
		<>
			<Window>
				<StatusBar/>
				<TerminalMainScreen/>
			</Window>
		</>
	)
}