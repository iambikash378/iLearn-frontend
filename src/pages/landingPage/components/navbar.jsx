import React from 'react';
import { Container, Typography, Button, Box, Stack, Paper, createTheme, ThemeProvider, Grid, styled } from '@mui/material';
import theme from "../theme.jsx";
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled(Container)(({theme}) => ({
  position:'relative',
  backgroundColor: 'white',
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
        <NavbarContainer maxWidth={false}>
          <NavbarLogo component="img" src="/ilearn_logo.png" alt="ilearn logo" onClick={()=> Navigate('/')}></NavbarLogo>
          <NavbarElementContainer direction="row" spacing={2} >
            <NavbarElement onClick={()=>Navigate('/explorepageFE')}> Courses </NavbarElement>
            <NavbarElement> Careers </NavbarElement>
            <NavbarElement> Premium Plans </NavbarElement>
          </NavbarElementContainer>
          <NavbarButtonStack direction={'row'}>
            <NavbarButton variant='text' onClick={()=>Navigate('/loginpagenew')} > <Typography color="black" fontWeight={"bold"}> Sign In</Typography></NavbarButton>
            <NavbarButton variant='outlined' onClick={()=>Navigate('/signuppagenew')} sx={{margin:'5px;'}} ><Typography color="#0056d2" fontWeight={"bold"} >Register</Typography> </NavbarButton>
          </NavbarButtonStack>
        </NavbarContainer>
  );
};

export default NavBar;
