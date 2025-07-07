import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/oldlandingpage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signuppage";
import Dashboard from "./pages/coursedashboard/dashboard";
import MyLearningDashboard from "./pages/myLearningDashboard/myLearningDashboard";
import OldLandingPage from "./pages/oldlandingpage";
import ExplorePage from "./pages/explorecourses/allcourses";


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

        </Routes>
    )
}

