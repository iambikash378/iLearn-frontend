import {createTheme} from '@mui/material';
import {blue, cyan, lightBlue, lightGreen, purple} from '@mui/material/colors';
  
  
  const theme = createTheme({
    palette:{
        primary:{
            main: lightBlue[200],
            light: lightBlue[100],
            dark: lightBlue[800],
        },
        secondary:{
            main: cyan[500],
            light: cyan[200],
            dark: cyan[800]
        }
    }
  });

  export default theme;
