import CourseBox from "../../components/myLearningDashboard/coursebox";
import TopBar from "../../components/navbars/topbar";
import {backend, user} from "../../api/api";
import { useEffect, useState } from "react";

export default function MyLearningDashboard(){

    const [courses, setCourses] = useState([]);

    useEffect( ()=> {
        user.get('/courses')
        .then(
            res=>{
                setCourses(res.data)
            }
        )
        .catch (err => {console.error("Error fetching courses", err)});
        },[]);

    return(
        <>
            <TopBar />
            {
                courses.map( (course, index) => (
                    <CourseBox course={course} />
                ))
            }

        </>
    );
}