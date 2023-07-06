import React, { useState } from 'react';
import './SearchBar.module.css';

export default function SearchBar({onSearch}) {
    const [searchInput, setSearchInput] = useState('');

    function handleSearchInputChange(event) {
        setSearchInput(event.target.value);
    }

    function handleSearchSubmit(event) {
        event.preventDefault();
        onSearch(searchInput);
    }

    return (
        <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
                type="search"
                name="searchInput"
                placeholder="Enter Song Name"
                value={searchInput}
                onChange={handleSearchInputChange}
            />
            <button type="submit">Search</button>
        </form>
    )
}
