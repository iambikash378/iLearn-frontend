import CourseCard from "../cards/coursecard";
import { Box } from "@mui/material";

const ExploreResults = ({results}) =>{

    return(
        <Box sx={{width:'100%', display:'flex', flexWrap:'wrap', gap:'10px', m:'10px 0px 0px 0px'}}>
    
            {
            results && results.length > 0 ? (
                results.map((result) =>(
                    <CourseCard course={result} />
                )) 
            ):(
                <p> Loading Courses...</p>
            )
            }
            
        </Box>
    )
}

export default ExploreResults;