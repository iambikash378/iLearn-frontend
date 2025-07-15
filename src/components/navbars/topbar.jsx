import React from 'react';
import theme from '../../pages/landingPage/theme';
import {Stack, Box, styled, Icon, IconButton, Paper, Typography} from '@mui/material';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';


const TopBarBox = styled(Box)(({theme}) =>({
    display:'flex',
    height:'70px',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    borderBottom: '.1em solid #dae1ed'
  }));

const TopBarRightIcons = styled(Stack)(({theme}) => ({
    display:'flex',
    justifyContent:'space-between',
    width:'10%',
    height:'100%',
    alignItems:'center'
}));

const TopBarRightIconElements = styled(Box)(({theme})=>({
    
}));

const TopBarCenterText = styled(Typography)(({theme})=>({
}));

const TopBarLeftIcons = styled(Stack)(({theme}) => ({
}));

const TopBar = () =>{

    const Navigate = useNavigate();

    return(
        <TopBarBox>
            <TopBarLeftIcons>
                <MenuRoundedIcon color = 'primary' fontSize='large' sx={{cursor:'pointer'}} />
            </TopBarLeftIcons>

            <TopBarCenterText variant='h2' onClick={()=> Navigate('/')} sx={{cursor:'pointer'}}> iLearn </TopBarCenterText>
            <TopBarRightIcons direction='row'>
                <CircleNotificationsRoundedIcon color='primary' fontSize='large' sx={{cursor:'pointer'}}/>
                <AccountCircleRoundedIcon color='primary' fontSize='large' sx={{cursor:'pointer'}}/>
                <ArrowDropDownIcon color='primary' fontSize='large' sx={{cursor:'pointer'}}/>
            </TopBarRightIcons>
        </TopBarBox>
    )


}


export default TopBar;