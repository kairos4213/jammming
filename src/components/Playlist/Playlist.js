import React, { useState } from 'react';
import './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

export default function Playlist(props) {

    function handlePlaylistNameChange(event) {
        props.updateName(event.target.value)
    }

    return (
        <div className="playlist">
            <input value={props.playlistName} onChange={handlePlaylistNameChange} />
            <Tracklist
                tracks={props.playlistTracks} 
                removeTrack={props.removeTrack}
                isRemove={true}
            />
            <button>Save to Spotify</button>
        </div>
    )
}