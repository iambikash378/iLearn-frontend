import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer(props){
    
    return(
    <div>
        <video width='500px' height='500px' controls>
            <source src={`${process.env.REACT_APP_CLOUDFRONT_URL}/randomz.mp4`} />
        </video>
    </div>
    );
}

export default VideoPlayer;


