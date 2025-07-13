import './App.css';

import React from 'react';

import OldLandingPage from './pages/oldlandingpage.jsx';

import LoginPage from './pages/loginPage';

import SignUpPage from './pages/signuppage';

import QuestionPage from './pages/questionpage';

import LandingPage from './pages/landingPage/landingpage.jsx';

import Dashboard from './pages/coursedashboard/dashboard.jsx';

import MyLearningDashboard from './pages/myLearningDashboard/myLearningDashboard.jsx';


import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './routes.jsx';

const App= () => {

  return(
    <Router>
      <AppRoutes />
    </Router>
  )

}


export default App;