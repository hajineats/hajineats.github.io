import styled from "styled-components";
import {useEffect, useState} from "react";


export default function ProjectList() {
	const List = styled.div`
      display: flex;
      flex-direction: column;
      @media (max-height: 1000px) {
        height: 500px;
        overflow: scroll;
      }
	`

	const Container = styled.div`
      display: flex;
      align-items: center;

      & > ${List} {
      }
	`
	const Card = styled.div`
      padding: 10px;
      box-sizing: border-box;
      color: black;
      border-radius: 10px;
      background-color: white;
      margin: 6px;
      width: 400px;
      height: 130px;
      @media (max-width: 400px) {
        width: 300px;
        height: 100px;
      }
	`
	const RepoTitle = styled.div`
      color: rebeccapurple;
      font-weight: bold;
	`
	const RepoDetail = styled.div`
      color: darkgray;
      font-weight: normal;
	`
	const repoDetails = [
		{
			title: "Parallel-Scheduler",
			details: "Fastest for parallel speed in SOFTENG 306",
			longDetails: ""
		},
		{
			title: "Quinzical",
			details: "Fastest for parallel speed in SOFTENG 306",
			longDetails: ""
		},
		{
			title: "chatapp",
			details: "Fastest for parallel speed in SOFTENG 306",
			longDetails: ""
		},
		{
			title: "NZPMC-demo",
			details: "Fastest for parallel speed in SOFTENG 306",
			longDetails: ""
		},
		{
			title: "nzpmc2022-registration",
			details: "Fastest for parallel speed in SOFTENG 306",
			longDetails: ""
		},
		{
			title: "biblenextjs",
			details: "Fastest for parallel speed in SOFTENG 306",
			longDetails: ""
		},
	]
	/**
	 * if from = 0, to = 3, then there will be 3 repos in total (0, 1, 2)
	 * @param from inclusive
	 * @param to exclusive
	 */
	const generateRepoList = (from, to) => {
		const result = []
		for (let i = from; i < to; i++) {
			result.push(<RepoCard title={repoDetails[i].title} detail={repoDetails[i].details}/>)
		}
		return result
	}

	const RepoCard = ({title, detail}) => {
		return (
			<Card>
				<RepoTitle>{title}</RepoTitle>
				<RepoDetail>{detail}</RepoDetail>
			</Card>
		)
	}

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	useEffect(() => {
		const resizeHandler = () => setWindowWidth(window.innerWidth)
		window.addEventListener('resize', resizeHandler)
		return () => window.removeEventListener('resize', resizeHandler)
	})


	return (
		<>
			<Container>
				{windowWidth <= 800 ?
					<List>
						{generateRepoList(0, repoDetails.length)}
					</List>
					: <>
						<List>
							{generateRepoList(0, 3)}
						</List>
						<List>
							{generateRepoList(3, 6)}
						</List>
					</>}


				{/*{conditionalListRender()}*/}
				{/*{windowWidth}*/}
			</Container>
		</>
	)

}