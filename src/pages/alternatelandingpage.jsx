import React from 'react';
import { Container, Typography, Button, Box, Stack, Paper, createTheme, ThemeProvider, Grid } from '@mui/material';

const LandingPage = () => {
  const handleRegister = () => {
    // navigate to register page
    console.log('Navigate to Register');
  };

  const handleTryAnonymously = () => {
    // start game without registering
    console.log('Continue as Guest');
  };

  const theme = createTheme({
    palette:{
        primary:{
            main: '#35c0ef',
            light: '#aee4f8',
            dark: '#0098de'
        }
    }

  })

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth={false}
    sx = {{
        position:'relative',
        background: 'radial-gradient(circle,rgba(108, 159, 210, 1) 24%, rgba(83, 237, 222, 1) 100%)',
        alignItems: "center",
        justifyContent: "center",
        minHeight:'100vh'
    }}>
    <Box 
    sx = {{
        position: 'absolute',
        top: "50%",
        left: "50%",
        width: '30%',
        height:'70%',
        transform:'translate(-50%, -50%)',
        bgcolor: 'rgba(255,255,255,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:'20px',
        pointerEvents:'none'
    }}>

        <Stack lineHeight='2'>
            <Box sx = {{
                backgroundImage:'url(/ilearn.png)',
                width : '100%',
                height:'200'
            }}>
            </Box>
        </Stack>
         </Box>
    </Container>
    </ThemeProvider>
  );
};

export default LandingPage;
