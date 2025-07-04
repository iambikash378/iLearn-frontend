import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Container, Box, Stack, Typography } from '@mui/material';
import Password from '../components/forms/login/password';
import UserEmail from '../components/forms/login/useremail';
import backend from '../api/api';

function LoginPage() {

    const [useremail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        backend.post('/user/login', { useremail, password })
          .then(response => {
            const data = response.data;
    
            if (data.token) {
              localStorage.setItem("token", data.token);
              console.log("Token Saved");
    
              navigate("/", {
                state: {
                  hasLoggedIn: true,
                  nameOfUser: data.user
                }
              });
            } else {
              console.log("Login failed:", data.Message || "No token received");
            }
          })
          .catch(err => {
            console.error("Login error:", err);
          });
      };
          

    return(
      

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
          height:'80%',
          transform:'translate(-50%, -50%)',
          bgcolor: 'rgba(255,255,255,0.3)',
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center',
          overflowY: 'auto',
          borderRadius:'20px',
      }}>
                 <Stack maxHeight = {'100%'} position = {'absolute'}
                  sx = {{
                      justifyContent:"center",
                      alignItems:"center"
                  }}>
                 <h2> Login </h2>
                 <form onSubmit = {handleLogin}>
                  <Stack 
                      sx = {{alignItems:'center'}}>
                  <UserEmail value = {useremail} setterFunction={setUserEmail}/> <br/>
                  <Password value = {password} setterFunction={setPassword}/> <br/>
                  <Button variant = "contained" type = "submit" sx ={{textTransform:"none"}}>Login</Button>
                  <Typography>
                      New to iLearn? <Button variant="" onClick ={()=> navigate('/signup')} sx ={{textTransform:"none"}} >Register</Button>
                  </Typography>
                  </Stack>
              </form>
                  </Stack>
  
              </Box>
          
      </Container>
  
    )
}

export default LoginPage;