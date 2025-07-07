import { Grid, styled, Box } from '@mui/material';
import React , {useEffect, useState} from 'react';
import TopNavBar from '../../components/navbars/topbar';
import { filter, courses } from '../../api/api';
import FilterCard from '../../components/exploreall/filtercard';
import FilterBar from '../../components/exploreall/filterbar';
import ExploreResults from '../../components/exploreall/exploreresults';

const ExplorePageGrid = styled(Grid) ({
    width:'100%',
});


const ExplorePage = (props) => {

    const [filters, setFilters] = useState([]);
    const [selectedFilters, setSelectedFilters]= useState({});
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);


    useEffect(()=>{

        filter.get('/getFilters', {
        })
        .then(res => {
            const data = res.data;
                setFilters(data);
                const initialSelected = {};
                data.forEach(
                    f =>{
                        initialSelected[f.filterName] = [];
                    }
                );
                setSelectedFilters(initialSelected);
                return courses.get("/all");
        })
        .then(
            res=> {
                setResults(res.data);
                setFilteredResults(res.data);
            }
        )
        .catch(err => console.error("Error loading data", err));
    },[]);


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

                <Grid item xs={5}>
                    <TopNavBar />
                </Grid>

                <Grid item xs={4}>
                    <FilterBar 
                        filters={filters} 
                        selectedFilters={selectedFilters} 
                        setSelectedFilters={setSelectedFilters}
                        filteredResults={filteredResults}
                        setFilteredResults={setFilteredResults}
                    />
                </Grid>

                <Grid item xs ={8} >
                    <ExploreResults results={filteredResults} filteredResults={filteredResults} style={{ width: "100%" }}/>
                </Grid>

            </ExplorePageGrid>
        </Box>
    )
}

export default ExplorePage;

