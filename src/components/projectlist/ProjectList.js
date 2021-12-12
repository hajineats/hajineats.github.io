import styled from "styled-components";
const List = styled.div`
      display: flex;
      flex-direction: column;
      & > * {
        margin: 6px;
		width: 400px;
		height: 130px;
      }
	`

const Container = styled.div`
		display: flex;
	
	  align-items: center;
	  & > ${List}{

	  }
	`
const RepoCard = styled.div`
      color: black;
      border-radius: 10px;
      background-color: white;

	`

export default function ProjectList() {



	return (
		<>
			<Container>
				<List>
					<RepoCard username={"hajineats"} repository={"Parallel-Scheduler"}/>
					<RepoCard username={"hajineats"} repository={"Quinzical"}/>
					<RepoCard username={"hajineats"} repository={"chatapp"}/>
				</List>
				<List>
					<RepoCard username={"hajineats"} repository={"NZPMC-demo"}/>
					<RepoCard username={"hajineats"} repository={"nzpmc2022-registration"}/>
					<RepoCard username={"hajineats"} repository={"biblenextjs"}/>
				</List>
			</Container>
		</>
	)

}