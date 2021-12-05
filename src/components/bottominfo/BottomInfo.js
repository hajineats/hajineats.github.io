import styled from "styled-components";

export default function BottomInfo() {
	const BottomDrop = styled.div`
      //  set document as parent
      position: absolute;
      bottom: 20px;
      width: 100%;
      text-align: center;
	`
	const Details = styled.h1`
      color: #fff;
      font-weight: normal;
      font-size: 16px;
	`

	const SubDetails = styled.p`
      color: aliceblue;
	  font-size: 14px;

	`
	return (
		<BottomDrop>
			<Details>
				© Hajin Kim
			</Details>
			<SubDetails>
				Made with ❤, Dell UltraSharp 27", Kensington Orbit, Mac Mini M1, Microsoft Ergonomic Keyboard, and a bit of music in the background
			</SubDetails>
		</BottomDrop>
	)
}