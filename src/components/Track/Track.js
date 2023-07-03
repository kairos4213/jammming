import React from 'react';
import './Track.module.css';

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
            <p>Song: {track.name}</p>
            <p>Artist: {track.artist}</p>
            <p>Album: {track.album}</p>
            {removeOrAddButton}
        </div>
    )
}
