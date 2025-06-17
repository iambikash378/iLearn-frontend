import React, {useState} from 'react';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl'
import GenderRadio from '../components/forms/signup/gender';
import FullName from '../components/forms/signup/fullName';
import Email from '../components/forms/signup/email';
import NewPassword from '../components/forms/signup/password';
import DoB from '../components/forms/signup/dob';

import { Container, Typography, Button, Box, Stack, Paper, createTheme, ThemeProvider, Grid } from '@mui/material';


function SignUpPage(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState();

    const handleSignup = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/user/add",
            {name, email, password, gender, dob}
        ).then(result => {console.log(result)})
        .catch(err => console.log(err) )
    }

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
               <h2> Register </h2>
               <form onSubmit = {handleSignup}>
                <FullName value = {name} setterFunction={setName}/> <br/>
                <Email value = {email} setterFunction={setEmail}/> <br/>
                <NewPassword value = {password} setterFunction={setPassword}/> <br/>
                <GenderRadio value = {gender} setterFunction = {setGender}/> <br/>
                <DoB value = {dob} setterFunction={setDob}/><br/>
                <Button variant = "contained" type = "submit">Register</Button>
            </form>
                </Stack>

            </Box>
        
    </Container>

    )
}

export default SignUpPage;