import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React from 'react';


const FilterCard = ({selectedFilters, setSelectedFilters, filter, filteredResults, setFilteredResults}) =>{

    const handleToggle = (filterName, filterOption) =>{
        setSelectedFilters( (prev) => {
            const currentOptions = prev[filter.filterName] || [];

            const updatedOptions = currentOptions.includes(filterOption)?
                currentOptions.filter((o) => o !== filterOption)
                : [...currentOptions, filterOption]

            return{
                ...prev,
                [filterName]:updatedOptions
            }
        });

    }

    return(
        <>
            <Typography>{filter.filterName}</Typography>
            <FormGroup>
                {
                    filter.options.map((option) =>(
                        <FormControlLabel 
                            key={option}
                            control={
                                <Checkbox
                                    checked={selectedFilters[filter.filterName]?.includes(option)}
                                    onChange={()=>handleToggle(filter.filterName, option)}
                                />
                            }
                            label={option}
                        />
                    ))
                }
            </FormGroup>
        </>
    )
}

export default FilterCard;