import React from 'react';

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';


export default function DoB({value, setterFunction}){

    const dobError = () =>{

    }

    const dobErrorMessage = "";

    return(
        <FormControl>
        <LocalizationProvider dateAdapter = {AdapterDayjs}>
        <FormLabel htmlFor = "dob"> Date Of Birth</FormLabel>
        <DatePicker
            label = ""
            value = {value}
            onChange = {(value) => setterFunction(value)}/>
        </LocalizationProvider>
    </FormControl>
    )

}