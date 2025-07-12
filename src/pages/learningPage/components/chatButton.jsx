import ChatIcon from '@mui/icons-material/Chat';
import { Box, Fab } from '@mui/material';
import theme from '../../landingPage/theme';
import {ThemeProvider} from '@mui/material/styles';

export default function ChatButton(){

    return(
        <ThemeProvider theme={theme}>
            <Box position="fixed" bottom={16} right={16} zIndex={1000}>
                <Fab aria-label="chat" sx={{ backgroundColor: 'white' }} >
                    <ChatIcon sx={{ color: theme.palette.secondary.dark}}/>
                </Fab>
            </Box>
        </ThemeProvider>
    )
}