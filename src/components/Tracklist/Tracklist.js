import React from 'react';
import './Tracklist.module.css';
import Track from '../Track/Track';

export default function Tracklist(props) {
  
    return (
        <div className="tracklist">
            {props.tracks && props.tracks.map(track => {
                return (
                    <Track 
                        track={track}
                        key={track.id}
                        addTrack={props.addTrack}
                        removeTrack={props.removeTrack}
                        isRemove={props.isRemove}
                    />
                )
            })}
        </div>
    )
}
