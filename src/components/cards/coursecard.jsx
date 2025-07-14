import styled from "styled-components";
import { FaRegClock } from "react-icons/fa";
import { TbAntennaBars5 } from "react-icons/tb";



const CourseCardContainer = styled.div`
  margin: 10px;
  height: 320px;
  width: 300px;
  border: 0.5px solid gray;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`;

const Image = styled.img`
    border-radius: 10px;
    margin: 10px;
`
const Company = styled.div`
    margin-left: 10px;
    color: gray;
    font-size: 0.8em;

`;

const Title = styled.h3`
    margin-left:10px;
    margin-top: 5px;
`

const Length = styled.div`
    display:flex;
    align-items: flex-start;
    color:gray;
`;

const ClockIcon = styled(FaRegClock)`
    margin-left: 10px;
`;

const Hours = styled.div`
    margin-left: 5px;
    font-size: 0.9em;
`;

const Difficulty = styled(TbAntennaBars5)`
    font-size: 1.5em;
    margin-left: 5px;
`;

const DifficultyLevel = styled.div`
    display:flex;
    margin-top:5px;
    color: gray;
`;

const Level = styled.div`
    margin-left: 5px;
    font-size: 0.9em;
    margin-top: 3px;
`

export default function CourseCard({onClick}){

    return(
        <CourseCardContainer onClick={onClick}>
            <Image src ='/courses/deeplearning.jpeg'/>
            <Company> Google Inc. </Company>
            <Title> Introduction to AI</Title>
            <Length>
                <ClockIcon/>
                <Hours> 24 hrs</Hours>
            </Length>

            <DifficultyLevel>
                <Difficulty/>
                <Level> Intermmediate </Level>
            </DifficultyLevel>
        </CourseCardContainer>
    )
}