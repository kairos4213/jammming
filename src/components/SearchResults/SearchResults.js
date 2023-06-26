import React from 'react';
import './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist'


export default function SearchResults(props) {

    return (
        <div className="searchResults">
            <h2>Search Results</h2>
            <Tracklist 
                tracks={props.searchResults}
                addTrack={props.addTrack}
            />
        </div>
    )
}
