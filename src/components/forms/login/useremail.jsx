import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";

import React, {useState} from 'react';

export default function UserEmail({value, setterFunction}){

    const emailError = () =>{

    }

    const emailErrorMessage = "";

    return(
        <FormControl>
        <FormLabel htmlFor = "useremail"> Email/Username</FormLabel>
            <TextField
                name="useremail"
                required
                id = "useremail"
                placeholder = ""
                type = "text"
                error = {emailError}
                value = {value}
                onChange ={(event)=>setterFunction(event.target.value)}
                size = "small"
                helperText = {emailErrorMessage}/>
    </FormControl>
    )

}