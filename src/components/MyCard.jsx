import styled from "styled-components";
import background from "../assets/imgReact.jpg";
import "../index.css";

const CardContainer = styled.div`
	margin: auto;
	width: 50%;
	border-radius: 5px;
	box-shadow: 0px 8px 15px -1px rgba(0, 0, 0, 0.79);
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const BgContainer = styled.img`
	width: 100%;
	border-radius: 5px 5px 0 0;
	height: auto;
	margin-bottom: 0.3em;
`;
const InfosDiv = styled.div`
	width: 80%;
	margin-bottom: 0.3em;
`;
const InfoTitlesDiv = styled.h2`
	font-size: 0.8em;
	width: 80%;
	color: #0d0d0d;
`;
const TextDiv = styled.div`
	font-size: 0.5em;
	width: 80%;
	color: #585a4c;
	margin-bottom: 1.2em;
`;
const ListContainer = styled.ul`
	padding-top: 1.2em;
	font-size: 0.5em;
	border-top: 1px solid rgba(125, 125, 125, 0.3);
	margin-bottom: 0.3em;
`;
const List = styled.li`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.3em;
`;
const MySpan = styled.span`
	color: #025373;
	font-weight: bold;
`;
const Button = styled.div`
	font-weight: bold;
    color: white;
    cursor: pointer;
	background: #025373;
	width: 100%;
	font-size: 0.8em;
	text-align: center;
	border-radius: 0 0 4px 4px;
	padding: 0.5em 0 0.5em 0;
`;

const MyCard = () => {
	return (
		<CardContainer className='card'>
			<BgContainer src={background} />
			<InfoTitlesDiv>React JS</InfoTitlesDiv>
			<TextDiv>
				lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
				dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit
				amet, consectetur
			</TextDiv>
			<InfosDiv>
				<ListContainer>
					<List>
						<MySpan>Date de sortie</MySpan> 29 mai 2013
					</List>
					<List>
						<MySpan>Site web</MySpan> <a href='https://fr.reactjs.org/'>reactjs.com</a>
					</List>
					<List>
						<MySpan>Langage</MySpan>JavaScript
					</List>
				</ListContainer>
			</InfosDiv>
			<Button>En savoir plus</Button>
		</CardContainer>
	);
};

export default MyCard;
