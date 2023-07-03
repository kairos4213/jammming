import React from 'react';
import './Tracklist.module.css';
import Track from '../Track/Track';

export default function Tracklist({onAddTrack, onRemoveTrack, tracks, isRemove}) {
  
    return (
        <div className="tracklist">
            {console.log("I am " + tracks)}
            {tracks && tracks.map(track => {
                return (
                    <Track 
                        track={track}
                        key={track.id}
                        onAddTrack={onAddTrack}
                        onRemoveTrack={onRemoveTrack}
                        isRemove={isRemove}
                    />
            )
            })}
        </div>
    )
}
