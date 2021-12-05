import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import BottomInfo from "./components/bottominfo/BottomInfo"
import Terminal from "./components/terminal/Terminal";

export default function App() {
	const Background = styled.div`
      background-color: yellowgreen;
      height: 100vh;
	`
	const Centered = styled.div`
      height: 100vh;
	  display: flex;
      align-items: center;
      justify-content: center;
	`
	return (<>
		<Background>
			<Centered>
				<Terminal/>
			</Centered>
			<BottomInfo/>
		</Background>

	</>)
}
