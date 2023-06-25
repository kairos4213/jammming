import React from 'react';
import './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist'


export default function SearchResults(props) {

    return (
        <div className="searchResults">
            <Tracklist tracks={props.searchResults} />
        </div>
    )
}
