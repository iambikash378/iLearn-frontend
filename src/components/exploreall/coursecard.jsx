import { Card, CardActions, CardContent, CardHeader, CardMedia } from "@mui/material";

const CourseCard = ({coursedetails}) =>{

    return(
        <>
            <Card>
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