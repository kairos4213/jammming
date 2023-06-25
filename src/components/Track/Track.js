import React from 'react';
import './Track.module.css';

export default function Track(props) {
    return (
        <div className="track">
            <p>Song: {props.song}</p>
            <p>Artist: {props.artist}</p>
            <p>Album: {props.album}</p>
        </div>
    )
}
