import React, { useEffect, useState } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { Spotify } from '../../util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('Jammming Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      return setAccessToken(localStorage.getItem('access_token'));
    }
  }, [accessToken]);

  function handleUserAccess() {
      Spotify.requestAccessToken()
  };

  function handleSearch(searchInput) {
    Spotify.search(searchInput).then(setSearchResults)
  };

  function handleUpdatePlaylistName(name) {
    setPlaylistName(name);
  };

  function handleAddTrack(track) {
    if (playlistTracks.some(savedTrack => savedTrack.id === track.id)) {
      return
    }
    setPlaylistTracks(prevTracks => [...prevTracks, track])
  }

  function handleRemoveTrack(track) {
    setPlaylistTracks(prevTracks => {
      const filteredPlaylist = prevTracks.filter(savedTrack => savedTrack.id !== track.id)
      return filteredPlaylist
    })
  }

  function handleSavePlaylist() {
    if (!playlistName || !playlistTracks.length) {
      return;
    }

    const tracks = playlistTracks.map(track => {
      return track.uri;
    });

    const mockPlaylist = {name: playlistName, songs: tracks};
    alert("Saved!")
    console.log(mockPlaylist);
  }

  console.log(searchResults);

  return (
    <div className="app">
      <header className="app-header">
      </header>
      {accessToken ?
        <main>
          <SearchBar onSearch={handleSearch} />
          <SearchResults onAddTrack={handleAddTrack} searchResults={searchResults}/>
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onUpdatePlaylistName={handleUpdatePlaylistName}
            onRemoveTrack={handleRemoveTrack}
            onSavePlaylist={handleSavePlaylist}
          />
        </main> :
        <main>
          <button onClick={handleUserAccess}>Access Spotify Account</button>
        </main>
      }
        
    </div>
  );
}

export default App;
