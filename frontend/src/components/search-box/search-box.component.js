import React from 'react';

import './search-box.styles.css';
export const SearchBox = ({searchType, placeholder, handleChange})=>(
    // 왜 여기에는 searchField에 대해서 올려주지 않느냐.??? 
    // 왜 여기서 state를 설정해 주지 않느냐?
    // The Job of a React Developer
    // 1. Decide on Components
    // 2. Decide the State and where it lives
    // 3. What changes when state changes
    // because of one way data flow, there is no way for the search
    // for state to move and down to card component
    // So instead, we want to place the state in a place where it gives us aceess to whatever needs it
    // we give search component to access app's state 
    <input 
        name={`searchText${searchType}`}
        className="search"
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)

export default SearchBox;