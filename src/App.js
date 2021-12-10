import "./App.css";
import styled from "styled-components";
import BottomInfo from "./components/bottominfo/BottomInfo";
import Terminal from "./components/terminal/Terminal";
const Background = styled.div`
  background-color: yellowgreen;
  height: 100vh;
`;
const Centered = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function App() {
  return (
    <>
      <Background>
        <Centered>
          <Terminal />
        </Centered>
        <BottomInfo />
      </Background>
    </>
  );
}
