// loads on /lecturePage

import React from 'react';
import VideoPlayer from '../../components/coursecontents/videoplayer';
import { Grid, Box } from '@mui/material';
import TopBar from '../../components/navbars/topbar';
import Sidebar from '../../components/navbars/sidebar';
import SmallNavigation from '../../components/coursecontents/smallNavigation';


function LectureVideoPage(props){

    return(
        <Box height="100vh">
            <Grid container gap="10px" height="100%">
                <Grid item size={{xs:12}}>
                    <TopBar/>
                </Grid>

                <Grid item size={{xs:2}} height="100%" sx={{alignSelf:'centre'}}>
                    <Sidebar/>
                </Grid>

                <Grid item size={{xs:9.9}}>
                    <Grid container>
                        <Grid item size={{xs:12}}>
                            <SmallNavigation/>
                        </Grid>

                        <Grid item size={{xs:12}} sx={{display:'flex', justifyContent:'center'}}>
                            <VideoPlayer />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
};

export default LectureVideoPage;
