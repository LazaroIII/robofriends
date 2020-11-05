import React from 'react';

const SearchBox = ({ searchChange, type }) => {
    
    return (
        <React.Fragment>
            <input type='search' placeholder={`Search ${type}`} onChange={searchChange} className='pa3  ba b--green bg-lightest-blue' />
            <p></p>
            
        </React.Fragment>
    )
}

export default SearchBox;