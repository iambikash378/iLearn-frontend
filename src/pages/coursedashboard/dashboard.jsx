import SubjectCard from "./components/subjectcard";
import Sidebar from "../../components/navbars/sidebar";
import { Grid , Container, Box} from "@mui/material";
import TopBar from "../../components/navbars/topbar";
const Dashboard = (props) =>{
    return(
        <>
            <Container disableGutters maxWidth={"false"} sx={{minHeight:'100vh'}}>
                <Grid container sx={{minHeight:'100vh'}}>
                    <Grid item size={{md:1.5, xs:0}} >
                    <Sidebar/>
                    </Grid>
                    <Grid item size={{md:9, xs:12}} sx={{ml:2}}>
                        <Grid container sx={{borderStyle:'dotted', height:'100vh'}}>
                            <Grid item size={{md:12}} sx={{height:"10%", borderStyle:'dotted'}}>
                                <TopBar/>
                            </Grid>

                            <Grid item size={{md:12}}>
                                <Box sx={{display:"flex", flexWrap:'wrap', gap:4, margin:5}}>
                                    <SubjectCard/>
                                    <SubjectCard/>
                                    <SubjectCard/>
                                    <SubjectCard/>
                                    <SubjectCard/>
                                    <SubjectCard/>
                                </Box>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
};

export default Dashboard;