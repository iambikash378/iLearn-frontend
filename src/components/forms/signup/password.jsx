import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";

export default function NewPassword({value, setterFunction}){

    const passwordError = () =>{

    }

    const passwordErrorMessage = "";

    return(
        <FormControl>
        <FormLabel htmlFor = "password"> Password</FormLabel>
            <TextField
                name="password"
                type= "password"
                required
                id = "newpassword"
                placeholder = ""
                error = {passwordError}
                value = {value}
                onChange = {(e) => setterFunction(e.target.value)}
                helperText = {passwordErrorMessage}/>
    </FormControl>
    )

}