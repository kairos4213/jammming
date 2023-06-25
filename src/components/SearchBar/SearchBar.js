import React, { useState } from 'react';
import './SearchBar.module.css';

export default function SearchBar(props) {
    const [searchValue, setSearchValue] = useState('');

    function handleSearchValueChange(event) {
        setSearchValue(event.target.value);
    }

    function handleSearchSubmit(event) {
        event.preventDefault();
        props.search(searchValue);
    }

    return (
        <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
                type="search"
                name="searchInput"
                placeholder="Enter Artist Name"
                value={searchValue}
                onChange={handleSearchValueChange}
            />
            <button type="submit">Search</button>
        </form>
    )
}
