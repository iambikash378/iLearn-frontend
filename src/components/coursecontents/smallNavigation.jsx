import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';



export default function SmallNavigation({courseName='AIML', currentModule="Basics", currentContent="What is AI?"}){
    return(
        <Paper sx={{display:'flex' , justifyContent:'space-between'}}>

            <Box>
                <Button variant='text'> Prev </Button>
            </Box>

            <Box>
                <Button variant='text'> <Typography sx={{textDecoration: 'underline'}}> {courseName} </Typography></Button>  &gt; 
                <Button variant='text'> <Typography sx={{textDecoration: 'underline'}}> {currentModule} </Typography>  </Button> &gt; 
                <Button variant='text'> <Typography sx={{textDecoration: 'underline'}}> {currentContent}  </Typography>  </Button> 
            </Box>

            <Box>
                <Button variant='text'> Next </Button>
            </Box>
        </Paper>
    )
}