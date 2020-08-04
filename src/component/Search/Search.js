import React from 'react';
import './Search.css';

const Search = (props) => {
    return (
        <section>
            <div className="search-container">
                <label>Search Post:</label>
                <input type="text" placeholder="Type to search" value={props.searchText} onChange={(event) => props.searchData(event)}></input>
            </div>
        </section>
    );
}

export default Search;