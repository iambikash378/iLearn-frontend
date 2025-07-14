import styled from "styled-components";
import { LuBriefcaseBusiness } from "react-icons/lu";


const JoinIlearnContainer = styled.div`
    display:flex;
    background-color: #0056d2;
    width:100%;
    flex-wrap:wrap;
    padding-bottom: 30px;

`;

const LearnLeadTransform = styled.h1`
    width: 100%;
    color: #ffffff;
    display:flex;
    justify-content: center;
`;

const CoursesByJobs = styled.div`
    display:flex;
    justify-content: space-around;
    width:100%;
    margin-top:30px;
`;

const CourseBox = styled.div`
    cursor: pointer;
  }
`;

const CourseImg = styled.img`
    height: 50px;
    width: 50px;
`;

const Explore = styled.p`
    font-weight: bold;
    display:flex;
    width:100%;
    justify-content:center;
    color: #ffffff
`;

const DomainName = styled.div`
    margin-top: 10px;
    display:flex;
    width:100%;
    justify-content:space-around;
    color:white;
`

export default function JoinIlearn(){

    return(
        <JoinIlearnContainer>
            <LearnLeadTransform>
                Learn. Lead. Transform.
            </LearnLeadTransform>
            <Explore>What do you want to learn today ?</Explore>
            <CoursesByJobs>
                <CourseBox>
                    <CourseImg src="/coursebyjobs/data.png" alt="data" style={{marginLeft:'20px'}} />
                    <DomainName>Data Science</DomainName>
                </CourseBox>

                <CourseBox>
                    <CourseImg src="/coursebyjobs/business.png" alt="business" style={{marginLeft:'5px'}}/>
                    <DomainName> Business</DomainName>
                </CourseBox>

                <CourseBox>
                    <CourseImg src="/coursebyjobs/programming.png" alt="programming"/>
                    <DomainName style={{marginLeft: '-20px'}}> Programming </DomainName>
                </CourseBox>

                <CourseBox>
                    <CourseImg src="/coursebyjobs/ai.png" alt="AI"/>
                    <DomainName> AI </DomainName>
                </CourseBox>
            </CoursesByJobs>
        </JoinIlearnContainer>
    )
}