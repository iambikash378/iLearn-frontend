import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signuppage";
import Dashboard from "./pages/coursedashboard/dashboard";
import MyLearningDashboard from "./pages/myLearningDashboard/myLearningDashboard";
import OldLandingPage from "./pages/oldlandingpage";
import ExplorePage from "./pages/explorecourses/allcourses";
import LectureVideoPage from "./pages/learningPage/lecturesandallpage";
import LandingPage from "./pages/landingPage/landingpage";
import ExploreAllPage from "./pages/explorecourses/explorecoursesFE";


export default function AppRoutes(){
    return(
        <Routes>
            <Route path = "/" element = {<LandingPage />} />
            <Route path = "/login" element = {<LoginPage />} />
            <Route path = "/signup" element = {<SignUpPage />} />
            <Route path = "/oldlanding" element = {<OldLandingPage/>} />
            <Route path = "/dashboard" element = {<Dashboard />} />
            <Route path = "/mylearningdashboard" element = {<MyLearningDashboard/>} />
            <Route path = "/allcourses" element = {<ExplorePage />} />
            <Route path ='/lecturepage' element = {<LectureVideoPage/>} />
            <Route path='/explorepageFE' element = {<ExploreAllPage />} />
        </Routes>
    )
}

