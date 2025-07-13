import React from 'react';
import { Container, Typography, Button, Box, Stack, Paper, createTheme, ThemeProvider, Grid, styled } from '@mui/material';
import theme from "./theme.jsx";
import NavBar from './components/navbar.jsx';


const PageContainer = styled(Container)(({theme}) =>({
  minHeight:'100vh',
  background: theme.palette.primary.light,
  position:"relative",
  // borderColor:'purple',
  // borderStyle:'dotted'
}));




const LandingPage = () => {

  return (
    <ThemeProvider theme={theme}>
      <PageContainer maxWidth={false} disableGutters>
        <NavBar />
        <Container maxWidth="100%" sx={{mt:"5em"}}>
        <Grid container >
          <Grid item size={{xs: 12, md: 6}} justifyContent="center" sx={{mt:'3rem'}}>
              <Typography variant="h3">Your <Typography variant="h1" color={theme.palette.secondary.dark}> ULTIMATE </Typography> Learning Experience</Typography>
          </Grid>
          <Grid item size={{xs:0, md:6}}>
            <Box component="img" src="/dashboard.png" width="80%"></Box>
          </Grid>
        </Grid>
        </Container>
        
      </PageContainer>
    </ThemeProvider>
  );
};

export default LandingPage;
