import styled, {css} from "styled-components";
import StatusBar from "./StatusBar";

export default function Terminal () {
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
      width: 100%;
      background: grey;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
	`

	return (
		<>
			<Window>
				<StatusBar/>
				<WindowContent/>
			</Window>
		</>
	)
}