import FilterCard from "./filtercard"

const FilterBar = ({selectedFilters, setSelectedFilters, filters=[], handleToggle, filteredResults, setFilteredResults}) =>{

    return(
        <>
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
        </>
    )
}

export default FilterBar;