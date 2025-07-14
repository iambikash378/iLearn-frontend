import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const VideoPlayerContainer = styled.div`
    width:100%;
    align:center;
    margin-top:20px;
`

function VideoPlayer({videoName, handleMarkCompleted, activeSubmodule}){
    
    return(
    <VideoPlayerContainer>
        <video height='500px' controls onEnded={()=>handleMarkCompleted(activeSubmodule)}>
            <source src={`${process.env.REACT_APP_CLOUDFRONT_URL}/${videoName}`} />
        </video>
    </VideoPlayerContainer>
    );
}

export default VideoPlayer;


