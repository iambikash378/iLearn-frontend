import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";

import React, {useState} from 'react';

export default function Email({value, setterFunction}){

    const emailError = () =>{

    }

    const emailErrorMessage = "";

    return(
        <FormControl>
        <FormLabel htmlFor = "email"> Email</FormLabel>
            <TextField
                name="email"
                required
                id = "email"
                placeholder = "bikash@adhikari.com"
                type = "email"
                error = {emailError}
                value = {value}
                onChange ={(event)=>setterFunction(event.target.value)}
                helperText = {emailErrorMessage}/>
    </FormControl>
    )

}