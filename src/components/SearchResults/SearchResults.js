import React from 'react';
import styles from './SearchResults.module.css';
import albumArt from '../assets/images/adtrAlbumArt.jpg';

export default function SearchResults(props) {

    console.log(props.albumArt)
    return (
        <div className="search-results">
            <div className={styles.resultWrapper}>
                <img className={styles.albumArt} alt="Album Art" src={albumArt}/>
                <p className="song">Song: {props.song}</p>
                <p className="artist">Artist: {props.artist}</p>
                <p className="album">Album: {props.album}</p>
            </div>
        </div>
    )
}