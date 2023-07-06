import React, { useState } from 'react';
import styles from './SearchBar.module.css';

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
        <form className={styles.searchBar} onSubmit={handleSearchSubmit}>
            <input
                className={styles.searchInput}
                type="search"
                name="searchInput"
                placeholder="Enter Song Name"
                value={searchInput}
                onChange={handleSearchInputChange}
            />
            <button className={styles.searchSubmit} type="submit">Search</button>
        </form>
    )
}
