import { Box } from "@mui/material"
import FilterCard from "./filtercard"

const FilterBar = ({selectedFilters, setSelectedFilters, filters=[], handleToggle, filteredResults, setFilteredResults}) =>{

    return(
        <Box sx={{mt:'10px'}}>
            {
                filters.map( filter =>(
                    <FilterCard 
                        key={filter.filterName}
                        filter={filter} 
                        selectedFilters={selectedFilters} 
                        setSelectedFilters={setSelectedFilters}
                        filteredResults={filteredResults}
                        setFilteredResults={setFilteredResults}
                    />
                ))
            }
        </Box>
    )
}

export default FilterBar;