import React from 'react';
import { Container, Typography, Button, Box, Stack, Paper, createTheme, ThemeProvider, Grid, styled } from '@mui/material';
import theme from "./theme.jsx";
import NavBar from './components/navbar.jsx';
import TrustedByInstitutions from './components/trustedByInstitutions.jsx';
import Testimonials from './components/testimonials.jsx';
import JoinIlearn from './components/joinIlearn.jsx';
import PriceCard from '../../components/cards/pricingcard.jsx';
import CourseCard from '../../components/cards/coursecard.jsx';
import styledReact from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled(Container)(({theme}) =>({
  minHeight:'100vh',
  position:"relative",
  // borderColor:'purple',
  // borderStyle:'dotted'
}));


const TopCourses = styledReact.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
`;

const MostPopularText = styledReact.h2`
  display:flex;
  justify-content: center;
`;
const LandingPage = () => {

  const navigate = useNavigate();

  return (
      <PageContainer maxWidth={false} disableGutters>
        <NavBar />
        <JoinIlearn />
        <MostPopularText>Most Popular Courses</MostPopularText>
        <TopCourses>
          <CourseCard onClick={()=>navigate('/lecturepage')}/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </TopCourses>
        <TrustedByInstitutions/>
        <Testimonials/>
      </PageContainer>
  );
};

export default LandingPage;
