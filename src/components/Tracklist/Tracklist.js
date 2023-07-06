import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

export default function Tracklist({onAddTrack, onRemoveTrack, tracks, isRemove}) {
  
    return (
        <div className={styles.tracklist}>
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
