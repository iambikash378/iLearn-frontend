import React from 'react';
import theme from '../../pages/landingPage/theme';
import {Stack, Box, styled, Icon, IconButton, Paper, Typography} from '@mui/material';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const TopBarBox = styled(Paper)(({theme}) =>({
    display:'flex',
    height:'50px',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'whitesmoke',
    width:'100%'
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

    return(
        <TopBarBox>
            <TopBarLeftIcons>
                <MenuRoundedIcon color = 'primary' fontSize='large' sx={{cursor:'pointer'}} />
            </TopBarLeftIcons>

            <TopBarCenterText variant='h2'> iLearn </TopBarCenterText>
            <TopBarRightIcons direction='row'>
                <CircleNotificationsRoundedIcon color='primary' fontSize='large' sx={{cursor:'pointer'}}/>
                <AccountCircleRoundedIcon color='primary' fontSize='large' sx={{cursor:'pointer'}}/>
                <ArrowDropDownIcon color='primary' fontSize='large' sx={{cursor:'pointer'}}/>
            </TopBarRightIcons>
        </TopBarBox>
    )


}


export default TopBar;