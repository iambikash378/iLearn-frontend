import { Card, CardActions, CardContent, CardHeader, CardMedia } from "@mui/material";

const CourseCard = ({coursedetails}) =>{

    return(
        <>
            <Card sx={{height:'200px', width:'200px', flex:'0 1 auto'}}>
                <CardHeader title={coursedetails.title}/>
                <CardContent>
                    {coursedetails.descriptionShort}
                </CardContent>
                <CardMedia
                    image={coursedetails.imgurl} />
            </Card>
        </>
    )
}

export default CourseCard;