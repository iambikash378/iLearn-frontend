import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";

import React from 'react';

export default function FullName({value, setterFunction}){

    const fullNameError = () =>{

    }

    const nameErrorMessage = "";

    return(
        <FormControl>
        <FormLabel htmlFor = "fullname"> Full Name</FormLabel>
            <TextField
                name="fullname"
                required
                id = "fullname"
                value = {value}
                placeholder = "bikash adhikari"
                error = {fullNameError}
                onChange = {(e)=> setterFunction(e.target.value)}
                helperText = {nameErrorMessage}/>
    </FormControl>
    )

}

