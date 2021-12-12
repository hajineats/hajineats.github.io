import styled, {css} from "styled-components";
import {useEffect, useState} from "react";

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

  ${Button}:nth-child(${props => props.screen}) {
    background-color: yellowgreen;
  }
`

const ScreenTitle = styled.h1`
  display: block;
  color: transparent;
  background-color: transparent;
  padding: 15px;
  transition: 2s;
  ${props => props.show && css`
    color: white;
    background-color: darkgray;
  `}

  ${props => !props.show && css`
    color: transparent;
  `}
`
const titles = {
	1: {
		title: "Interactive Console"
	},
	2: {
		title: "Projects"
	},
	3: {
		title: "Void"
	}
}
export default function TopDrop({screen, setScreen}) {
	const [title, setTitle] = useState(titles["1"].title)
	const [isShowTitle, brieflyShow] = useShowTitle()


	useEffect(() => {
		brieflyShow()
	},[brieflyShow])
	const handleSwitchScreen = (toScreen) => {
		setScreen(toScreen)
		setTitle(titles[toScreen].title)
		brieflyShow()
	}

	return (
		<TopContainer screen={screen}>
			<Button onClick={() => handleSwitchScreen(1)}/>
			<Button onClick={() => handleSwitchScreen(2)}/>
			<Button onClick={() => handleSwitchScreen(3)}/>
			<ScreenTitle show={isShowTitle}>
				{title}
			</ScreenTitle>
		</TopContainer>
	)
}

function useShowTitle(){
	const [isShowTitle, setIsShowTitle] = useState(false)
	const brieflyShow = () => {
		setIsShowTitle(true)
		setTimeout(() => {
			setIsShowTitle(false)
		}, 2000)
	}

	return [isShowTitle, brieflyShow]
}
