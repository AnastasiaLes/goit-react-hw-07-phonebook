import React from 'react';
import { FilterContainer, FilterName, FilterInput } from './Filter.styled';

export const FilterField = ( {addFilter}) => {

  return (
    <FilterContainer>
      <FilterName>Find contacts by name</FilterName>
      <FilterInput type="text" name="filter"
        onChange={addFilter}
      />
    </FilterContainer>
  );
};
