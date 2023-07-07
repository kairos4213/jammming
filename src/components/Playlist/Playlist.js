import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

export default function Playlist({playlistName, playlistTracks, onUpdatePlaylistName, onRemoveTrack, onSavePlaylist}) {

    function handlePlaylistNameChange(event) {
        onUpdatePlaylistName(event.target.value)
    }

    return (
        <div className={styles.playlist}>
            <input onChange={handlePlaylistNameChange} value={playlistName} placeholder='Enter Playlist Name' />
            <Tracklist
                tracks={playlistTracks} 
                onRemoveTrack={onRemoveTrack}
                isRemove={true}
            />
            <button type="button" onClick={onSavePlaylist}>Save to Spotify</button>
        </div>
    )
}