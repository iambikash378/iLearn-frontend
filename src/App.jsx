import './App.css';

import React from 'react';

import OldLandingPage from './pages/landingpage';

import LoginPage from './pages/loginPage';

import SignUpPage from './pages/signuppage';

import QuestionPage from './pages/questionpage';

import LandingPage from './pages/landingPage/landingpage.jsx';

import Dashboard from './pages/coursedashboard/dashboard.jsx';

import MyLearningDashboard from './pages/myLearningDashboard/myLearningDashboard.jsx';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App= () => {

  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<LandingPage />} />
        <Route path = "/login" element = {<LoginPage />} />
        <Route path = "/signup" element = {<SignUpPage />} />
        <Route path = "/oldlanding" element = {<OldLandingPage />} />
        <Route path = "/dashboard" element = {<Dashboard />} />
        <Route path = "/mylearning" element = {<MyLearningDashboard/>} />
      </Routes>
    </Router>
  )

}


export default App;