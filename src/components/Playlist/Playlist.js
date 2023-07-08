import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

export default function Playlist({playlistName, playlistTracks, onUpdatePlaylistName, onRemoveTrack, onSavePlaylist}) {

    function handlePlaylistNameChange(event) {
        onUpdatePlaylistName(event.target.value)
    }

    return (
        <div className={styles.playlistWrapper}>
            <input onChange={handlePlaylistNameChange} value={playlistName} placeholder='Enter Playlist Name' />
            <Tracklist
                tracks={playlistTracks} 
                onRemoveTrack={onRemoveTrack}
                isRemove={true}
            />
            <button type="submit" onClick={onSavePlaylist} className={styles.submitButton}>Save to Spotify</button>
        </div>
    )
}