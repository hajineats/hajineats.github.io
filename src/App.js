import "./App.css";
import styled, {css} from "styled-components";
import BottomInfo from "./components/bottominfo/BottomInfo";
import Terminal from "./components/terminal/Terminal";
import TopDrop from "./components/topdrop/TopDrop";
import {useState} from "react";

const Carousel = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const Screens = styled.div`
  height: 100vh;
  width: 300%;
  position: absolute;
  top: 0;
  ${(props) => props.screen && css`
    left: ${(props.screen - 1) * -100}%;
  `};
  transition: 0.5s;
`

const Screen = styled.div`
  width: 33.3333%;
  background-color: coral;
  height: 100vh;
  float: left;

  ${(props) => props.first && css`
    background-color: dodgerblue;
  `}
  ${(props) => props.second && css`
    background-color: yellowgreen;
  `}
  ${(props) => props.third && css`
    background-color: cornflowerblue;
  `}

`

// const Background = styled.div`
//   background-color: yellowgreen;
//   height: 100vh;
// `;
const Centered = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function App() {
	const [screen, setScreen] = useState(1)
	return (
		<>

			<Carousel>
				<Screens screen={screen}>
					<Screen first>
						<Centered>
							<Terminal />
						</Centered>

					</Screen>
					<Screen second/>
					<Screen third/>
				</Screens>
			</Carousel>
			<TopDrop screen={screen} setScreen={setScreen}/>
			<BottomInfo />
		</>
	);
}


