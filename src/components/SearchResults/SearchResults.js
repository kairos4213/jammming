import React from 'react';
import './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist'


export default function SearchResults({searchResults, onAddTrack}) {

    return (
        <div className="searchResults">
            <h2>Search Results</h2>
            <Tracklist 
                tracks={searchResults}
                onAddTrack={onAddTrack}
            />
        </div>
    )
}
