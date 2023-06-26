import React from 'react';
import './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

export default function Playlist(props) {

    function handlePlaylistNameChange(event) {
        props.updateName(event.target.value)
    }

    function handleSubmit(event) {
        console.log("Saved")
    }

    return (
        <div className="playlist">
            <input onChange={handlePlaylistNameChange} value={props.playlistName} />
            <Tracklist
                tracks={props.playlistTracks} 
                removeTrack={props.removeTrack}
                isRemove={true}
            />
            <button type="submit" onSubmit={handleSubmit}>Save to Spotify</button>
        </div>
    )
}