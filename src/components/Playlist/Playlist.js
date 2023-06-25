import React from 'react';
import './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

export default function Playlist() {
    return (
        <div className="playlist">
            <Tracklist />
            <button>Save to Spotify</button>
        </div>
    )
}