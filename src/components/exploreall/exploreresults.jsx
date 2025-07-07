import CourseCard from "./coursecard";
import { Box } from "@mui/material";

const ExploreResults = ({results}) =>{

    return(
        <Box sx={{width:'100%'}}>
    
            {
            results && results.length > 0 ? (
                results.map((result) =>(
                    <CourseCard coursedetails={result} />
                )) 
            ):(
                <p> Loading Courses...</p>
            )
            }
            
        </Box>
    )
}

export default ExploreResults;