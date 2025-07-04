import React from 'react';
import {Paper, Stack, styled, Box, Typography, ButtonBase} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

const SidebarPaper = styled(Paper)(()=>({
    backgroundColor:blueGrey[900],
    height:'100%',
    width:"100%",
    borderStyle:'dotted'

}));

const TopInfoPart = styled(Box)(()=>({
 display:'flex'
}))

const NavigationPart=styled(Stack)(()=>({
justifyContent:'space-around', 
height:'100%',
borderStyle:'dotted',
alignItems:'flex-start',

}));

const IndividualNavElements = styled(ButtonBase)(()=>({
    gap:'0.5em'
}));

const NavBarTypoGraphy = styled(Typography)(()=>(
    {
        color:'white'
    }
));

const Sidebar = (props) =>{

    return(
            <SidebarPaper>
                    <TopInfoPart> 
                    <AccountBoxTwoToneIcon color='white' fontSize='large'/>
                    </TopInfoPart>
                    <NavigationPart direction='column'> 
                        <IndividualNavElements direction='row'> 
                            <DashboardCustomizeOutlinedIcon sx={{color:'white'}}/>
                            <NavBarTypoGraphy>Dashboard</NavBarTypoGraphy>
                        </IndividualNavElements>

                        <IndividualNavElements direction='row'> 
                            <CampaignOutlinedIcon sx={{color:'white'}}/>
                            <NavBarTypoGraphy>Announcements</NavBarTypoGraphy>
                        </IndividualNavElements>


                        <IndividualNavElements direction='row'> 
                            <ClassOutlinedIcon sx={{color:'white'}}/>
                            <NavBarTypoGraphy>Classes</NavBarTypoGraphy>
                        </IndividualNavElements>

                        <IndividualNavElements direction='row'> 
                            <AssignmentOutlinedIcon sx={{color:'white'}}/>
                            <NavBarTypoGraphy>Assignments</NavBarTypoGraphy>
                        </IndividualNavElements>

                        <IndividualNavElements direction='row'> 
                            <GradingOutlinedIcon sx={{color:'white'}}/>
                            <NavBarTypoGraphy>Grades</NavBarTypoGraphy>
                        </IndividualNavElements>

                        <IndividualNavElements direction='row'> 
                            <ForumOutlinedIcon sx={{color:'white'}}/>
                            <NavBarTypoGraphy>Discussion</NavBarTypoGraphy>
                        </IndividualNavElements>

                    </NavigationPart>
            </SidebarPaper>
    )
}

export default Sidebar;