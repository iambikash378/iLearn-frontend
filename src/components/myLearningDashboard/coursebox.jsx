import { Card, CardHeader, CardMedia, CardContent, styled } from '@mui/material';
import React from 'react';

const CourseBoxCard = styled(Card)(()=>(
    {
    }
));


function CourseBox({course}){

    return(
        <>
            <CourseBoxCard variant='outlined'>

                <CardHeader>
                    {course.name}
                </CardHeader>

                <CardMedia 
                component='img'
                image= {course.img} />

                <CardContent>
                    {course.description}
                </CardContent>

            </CourseBoxCard>
        </>
    );
}

export default CourseBox;