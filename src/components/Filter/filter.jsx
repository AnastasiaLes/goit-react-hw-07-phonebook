import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer, FilterName, FilterInput } from './Filter.styled';
import { updateFilter } from 'redux/contactsSlice';

export const FilterField = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.myContacts.filter)
  return (
    <FilterContainer>
      <FilterName>Find contacts by name</FilterName>
      <FilterInput type="text" value={value} onChange={(event) => dispatch(updateFilter(event.currentTarget.value))} />
    </FilterContainer>
  );
};
