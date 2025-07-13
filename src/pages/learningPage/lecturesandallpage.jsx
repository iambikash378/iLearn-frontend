// loads on /lecturePage

import React, { useState } from 'react';
import VideoPlayer from './components/contentArea/videoplayer';
import { Grid, Box } from '@mui/material';
import TopBar from '../../components/navbars/topbar';
import Sidebar from '../../components/navbars/sidebar';
import TopNavigation from './components/topNavigation';
import ChatButton from './components/chatButton';
import CourseContentNav from './components/courseContentNavigation/courseContentNavigation/coursecontentnav';
import CourseContentArea from './components/contentArea/contentArea';
import dummyCourse from '../../data/dummyCourse.json';


function LectureVideoPage(){

    const course = dummyCourse;

    const [activeModule, setActiveModule] = useState(course.modules[0]);
    const [activeSubmodule, setActiveSubmodule] = useState(course.modules[0].moduleContents[0]); 
    const [contentLink, setContentLink] = useState('');
    const [isCompleted, setIsCompleted] = useState({});



    return(
        <Box height="100vh">
            <Grid container gap="10px" height="100%">
                <Grid item size={{xs:12}}>
                    <TopBar/>
                </Grid>

                <Grid item size={{xs:2.5}} height="100%" sx={{alignSelf:'centre'}}>
                    <CourseContentNav
                        course={course}
                        isCompleted={isCompleted}
                        setIsCompleted={setIsCompleted}
                        setActiveModule={setActiveModule}
                        setActiveSubmodule={setActiveSubmodule}
                        activeModule={activeModule}
                        activeSubmodule = {activeSubmodule}
                    />
                </Grid>

                <Grid item size={{xs:8.9}}>
                    <Grid container>
                        <Grid item size={{xs:12}}>
                            <TopNavigation course={course} activeModule={activeModule} activeSubmodule={activeSubmodule} setActiveModule={setActiveModule} setActiveSubmodule={setActiveSubmodule}/>
                        </Grid>

                        <Grid item size={{xs:12}} sx={{display:'flex', justifyContent:'center'}}>
                            <CourseContentArea activeModule={activeModule} activeSubmodule={activeSubmodule} isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        <ChatButton/>
        </Box>
    )
};

export default LectureVideoPage;
