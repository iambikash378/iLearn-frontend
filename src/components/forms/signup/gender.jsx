import React , {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function GenderRadio({value, setterFunction}){

    return(
        <FormControl>

            <FormLabel id = "gender_radio"> Gender </FormLabel>
            <RadioGroup
                aria-labelledby ="gender_radio"
                defaultValue = "female"
                name = "gender_radio_buttons_group"
                value = {value}
                onChange = {(event) =>{setterFunction(event.target.value)}}
                row>

                <FormControlLabel value = "female" control = {<Radio/>} label ="Female"/>
                <FormControlLabel value = "male" control = {<Radio/>} label ="Male"/>
                <FormControlLabel value = "other" control = {<Radio/>} label ="Other"/>
                <FormControlLabel value = "prefernottosay" control = {<Radio/>} label ="Prefer Not to Say"/>

            </RadioGroup>
        </FormControl>
    )
}
