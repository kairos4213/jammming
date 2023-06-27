import React from 'react';
import './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

export default function Playlist({playlistName, playlistTracks, onUpdatePlaylistName, onRemoveTrack}) {

    function handlePlaylistNameChange(event) {
        onUpdatePlaylistName(event.target.value)
    }

    function handleSubmit(event) {
        console.log("Saved")
    }

    return (
        <div className="playlist">
            <input onChange={handlePlaylistNameChange} value={playlistName} placeholder='Enter Playlist Name' />
            <Tracklist
                tracks={playlistTracks} 
                onRemoveTrack={onRemoveTrack}
                isRemove={true}
            />
            <button type="submit" onSubmit={handleSubmit}>Save to Spotify</button>
        </div>
    )
}