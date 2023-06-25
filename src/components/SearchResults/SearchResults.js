import React from 'react';
import styles from './SearchResults.module.css';
import albumArt from '../assets/images/adtrAlbumArt.jpg';
import { trackData } from '../../trackData';

export default function SearchResults(props) {

    return (
        <div className={styles.searchResults}>
            {trackData.map(track => {
                return (
                    <div className={styles.resultWrapper} key={track.id}>
                        <img className={styles.albumArt} alt="Album Art" src={albumArt}/>
                        <p className="song">Song: {track.song}</p>
                        <p className="artist">Artist: {track.artist}</p>
                        <p className="album">Album: {track.album}</p>
                    </div>
                )
            })}
        </div>
    )
}