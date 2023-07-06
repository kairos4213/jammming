import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist'


export default function SearchResults({searchResults, onAddTrack}) {

    return (
        <div className={styles.searchResultsWrapper}>
            <h2>Search Results</h2>
            <Tracklist
                className={styles.tracklist} 
                tracks={searchResults}
                onAddTrack={onAddTrack}
            />
        </div>
    )
}
