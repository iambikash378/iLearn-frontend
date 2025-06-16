import React, {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl'
import GenderRadio from '../components/forms/signup/gender';
import FullName from '../components/forms/signup/fullName';
import Email from '../components/forms/signup/email';
import NewPassword from '../components/forms/signup/password';
import DoB from '../components/forms/signup/dob';


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
        <div>
            <h2> Sign Up </h2>
            <h3>Fill the form below for registration</h3> 
            <form onSubmit = {handleSignup}>
                <FullName value = {name} setterFunction={setName}/> <br/>
                <Email value = {email} setterFunction={setEmail}/> <br/>
                <NewPassword value = {password} setterFunction={setPassword}/> <br/>
                <GenderRadio value = {gender} setterFunction = {setGender}/> <br/>
                <DoB value = {dob} setterFunction={setDob}/><br/>
                <Button variant = "contained" type = "submit">Register</Button>
            </form>
        </div>
    )
}

export default SignUpPage;