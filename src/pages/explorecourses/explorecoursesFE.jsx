import { Grid, styled, Box } from '@mui/material';
import React , {useEffect, useState} from 'react';
import TopNavBar from '../../components/navbars/topbar';
import { filter, courses } from '../../api/api';
import FilterCard from '../../components/exploreall/filtercard';
import FilterBar from '../../components/exploreall/filterbar';
import ExploreResults from '../../components/exploreall/exploreresults';
import filtertopics from '../../data/filtertopics.json';
import course from '../../data/courses.json';
import NavBar from '../landingPage/components/navbar';

const ExplorePageGrid = styled(Grid) ({
    width:'100%',
});


const ExploreAllPage = (props) => {


    const [filters, setFilters] = useState(filtertopics);
    const [selectedFilters, setSelectedFilters]= useState({});
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() =>{
        const initialSelected = {};
        filters.forEach(f => { initialSelected[f.filterName] = [] });
        setSelectedFilters(initialSelected);
        setResults(course);
        setFilteredResults(course);
    }, []); 

    useEffect(() => {
        const filtered = results.filter(course =>
          Object.entries(selectedFilters).every(([filterName, options]) => {
            if (!options.length) return true;
            // Match any one of the selected options (loose match)
            const courseField = course[filterName];
            if (Array.isArray(courseField)) {
              return courseField.some(opt => options.includes(opt));
            } else {
              return options.includes(courseField);
            }
          })
        );
        setFilteredResults(filtered);
      }, [selectedFilters, results]);
    

    return(
        <Box sx={{width:'100vw'}}>
            <ExplorePageGrid container>

                <Grid size={{md:12, xs:12}}>
                    <NavBar />
                </Grid>

                <Grid size={{md:12, xs:12}} sx={{display:'flex', justifyContent:'center'}}>
                    <h2> Explore Courses </h2>
                </Grid>

                <Grid size={{md:4, xs:0}} display={{xs:'none', md:'block'}}>
                    <h2>Filters</h2>
                    <FilterBar 
                        filters={filters} 
                        selectedFilters={selectedFilters} 
                        setSelectedFilters={setSelectedFilters}
                        filteredResults={filteredResults}
                        setFilteredResults={setFilteredResults}
                    />

                </Grid>

                <Grid size={{md:8, xs:12}}>
                        <ExploreResults results={filteredResults} filteredResults={filteredResults}/>
                </Grid>

            </ExplorePageGrid>
        </Box>
    )
}

export default ExploreAllPage;

