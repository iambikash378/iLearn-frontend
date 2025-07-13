// Content Area is the area in the page except the side course content navigation bar and the topbar
import React from "react";
import VideoPlayer from "./videoplayer";
import ReadingContentPart from "./readingcontent";
import styled from "styled-components";

const MarkAsCompleted = styled.div`
    cursor: pointer;
    padding: 10px;
    background-color: #0056d2;
    color:white;
    max-width:150px;
`;

const ContentAreaDiv = styled.div`
    padding-left:30px;
`;


export default function CourseContentArea({activeModule, activeSubmodule, contentLink, setContentLink, isCompleted, setIsCompleted}){

    const {type, url, htmlName, quizId, assignmentId} = activeSubmodule;

    function handleMarkCompleted(submodule){
        setIsCompleted({
            ...isCompleted,
            [submodule.title]: true
        })
    }

    switch (type){
        case 'video':
            return (
                <ContentAreaDiv>
                    <VideoPlayer videoName={url} />
                    <MarkAsCompleted onClick={()=>handleMarkCompleted(activeSubmodule)}>
                        Mark as completed
                    </MarkAsCompleted>
                </ContentAreaDiv>

            )

        case "reading":
            return (
                <ContentAreaDiv>
                    <ReadingContentPart contentLink = {`/reading/${htmlName}`} />
                    <MarkAsCompleted onClick={()=>handleMarkCompleted(activeSubmodule)}>
                        Mark as completed
                    </MarkAsCompleted>
                </ContentAreaDiv>
            )

        default:
            return <ContentAreaDiv>Unsupported module type : {type}</ContentAreaDiv>
    }
}
