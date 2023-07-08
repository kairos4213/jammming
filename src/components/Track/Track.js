import React from 'react';
import styles from './Track.module.css';

export default function Track({track, onAddTrack, onRemoveTrack, isRemove}) {

    function handleAddTrack(e) {
        e.stopPropagation()
        onAddTrack(track)
    }

    function handleRemoveTrack(e) {
        e.stopPropagation()
        onRemoveTrack(track)
    }

    const removeOrAddButton = isRemove ? 
        <button type="button" onClick={handleRemoveTrack}>Remove Track</button> : 
        <button type="button" onClick={handleAddTrack}>Add Track</button>

    return (
        <div className="track">
            <img src={track.image} alt='album cover' className={styles.albumArt}/>
            <p><strong>{track.name}</strong></p>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            {removeOrAddButton}
        </div>
    )
}
