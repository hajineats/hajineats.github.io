import styled from "styled-components";

const Button = styled.label`
  display: inline-block;
  width: 50px;
  height: 5px;
  margin: 2px;
  background-color: white;
	cursor: pointer;
`
const TopContainer = styled.div`
  position: absolute;
  top: 20px;
  width: 100%;
  text-align: center;

  ${Button}:nth-child(${props=>props.screen}) {
    background-color: black;
  }
`

export default function TopDrop({screen, setScreen}) {
	return (
		<TopContainer screen={screen}>
			<Button onClick={() => setScreen(1)}/>
			<Button onClick={() => setScreen(2)}/>
			<Button onClick={() => setScreen(3)}/>
		</TopContainer>
	)
}

// /**
//  *
//  * @param currentScreen screen that is currently meant to show
//  * @param forScreen the screen that this button is for
//  * @constructor
//  */
// export function Button({currentScreen, forScreen}) {
//
// }
