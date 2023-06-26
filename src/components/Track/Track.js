import React from 'react';
import './Track.module.css';

export default function Track(props) {

    function handleAddTrack(e) {
        e.stopPropagation()
        props.addTrack(props.track)
    }

    function handleRemoveTrack(e) {
        e.stopPropagation()
        props.removeTrack(props.track)
    }

    const removeOrAddButton = props.isRemove ? 
        <button type="button" onClick={handleRemoveTrack}>Remove Track</button> : 
        <button type="button" onClick={handleAddTrack}>Add Track</button>

    return (
        <div className="track">
            <p>Song: {props.track.song}</p>
            <p>Artist: {props.track.artist}</p>
            <p>Album: {props.track.album}</p>
            {removeOrAddButton}
        </div>
    )
}
