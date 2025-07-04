import React from 'react';
import { Container, Typography, Button, Box, Stack, Paper, createTheme, ThemeProvider, Grid, styled } from '@mui/material';
import theme from "../theme.jsx";
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled(Container)(({theme}) => ({
  position:'relative',
  backgroundColor: theme.palette.primary.main,
  height:'4rem',
  // borderColor:'red',
  // borderStyle:'dotted',
  display:'flex',
  justifyContent:'space-around'
}));

const NavbarElementContainer = styled(Stack)(({theme}) =>({
  justifyContent:'center',
  position:'relative',
  alignItems:'center',
  // height:'100%',
  // borderColor:'black',
  // borderStyle:'dotted',
  width:'30%',
  display:'flex',
  justifyContent:'space-around'
  
}))

const NavbarElement = styled(Typography)(({theme}) => ({
  color:'#212121',
  fontWeight:'bold',
  cursor:'pointer',
  // borderColor:'yellow',
  // borderStyle:'dotted',
  '&:hover':{
    color:'#757575'
  }
}));

const NavbarLogo = styled(Box)(({theme})=>({
    width:'5rem',
    height:'100%',
    cursor:'pointer',
    position:'relative',
    left:'0',

}));

const NavbarButtonStack = styled(Stack)(({theme})=>({

}))

const NavbarButton= styled(Button)(({theme})=>({

}));




const NavBar = () => {

    const Navigate = useNavigate();


  return (
    <ThemeProvider theme={theme}>
        <NavbarContainer maxWidth={false}>
          <NavbarLogo component="img" src="/ilearn_logo.png" alt="ilearn logo"></NavbarLogo>
          <NavbarElementContainer direction="row" spacing={2} >
            <NavbarElement> About </NavbarElement>
            <NavbarElement> Features </NavbarElement>
            <NavbarElement> Pricing </NavbarElement>
            <NavbarElement> Testimonials </NavbarElement>

          </NavbarElementContainer>
          <NavbarButtonStack direction={'row'}>
            <NavbarButton variant='outlined' onClick={()=>Navigate('/login')} > <Typography color="black" fontWeight={"bold"}> Sign In</Typography></NavbarButton>
            <NavbarButton variant='contained' onClick={()=>Navigate('/signup')} sx={{backgroundColor:(theme)=>theme.palette.secondary.dark, '&:hover':{backgroundColor:(theme)=>theme.palette.secondary.main}}}><Typography color="black" fontWeight={"bold"} >Register</Typography> </NavbarButton>
          </NavbarButtonStack>
        </NavbarContainer>
    </ThemeProvider>
  );
};

export default NavBar;
