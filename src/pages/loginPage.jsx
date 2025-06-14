import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


function LoginPage() {

    const [useremail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        axios.post('http://127.0.0.1:3000/user/login', { useremail, password })
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
        <div>
            <h2> Login </h2>
            <h3>Enter your Login credentials</h3> 
            <form onSubmit = {handleLogin}>
                <label htmlFor = 'username'> <strong> Username / Email</strong></label><br/>
                <input 
                type = "email" 
                id = "username"
                value = {useremail}
                onChange ={(e)=>setUserEmail(e.target.value)} /> <br/>

                <label htmlFor = 'userpassword'><strong>Password </strong> </label> <br/>
                <input type = "password" 
                id = "userpassword"
                value = {password}
                onChange ={(e)=>setPassword(e.target.value)}/> <br/>
                <br/>
                <Button variant = "contained" type = "submit">Login</Button>
            </form>
        </div>
    )
}

export default LoginPage;