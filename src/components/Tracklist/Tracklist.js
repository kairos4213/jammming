import React from 'react';
import './Tracklist.module.css';
import Track from '../Track/Track';

export default function Tracklist(props) {
  
    return (
        <div className="tracklist">
            {props.tracks && props.tracks.map(track => {
                return (
                    <Track 
                        song={track.song}
                        artist={track.artist}
                        album={track.album}
                        key={track.id}
                    />
                )
            })}
        </div>
    )
}
