import React from 'react';
import './Track.module.css';

export default function Track(props) {

    function handleAddTrack(event) {
        props.addTrack(props.track)
    }

    function handleRemoveTrack(event) {
        props.removeTrack(props.track)
    }

    const removeOrAddButton = props.isRemove ? 
        <button onClick={handleRemoveTrack}>Remove Track</button> : 
        <button onClick={handleAddTrack}>Add Track</button>

    return (
        <div className="track">
            <p>Song: {props.track.song}</p>
            <p>Artist: {props.track.artist}</p>
            <p>Album: {props.track.album}</p>
            {removeOrAddButton}
        </div>
    )
}
