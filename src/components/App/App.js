import React, { useEffect, useState } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { data } from '../../util/mockSpotifyData';
import { Spotify } from '../../util/Spotify';

const trackInformation = data

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('Jammming Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);

  function handleLogin() {
    if (Spotify.requestAccessToken()) {
      return setLoginStatus(!loginStatus);
    }
  }

  function handleSearch(searchInput) {
    const searchValue = searchInput.toLowerCase()
    setSearchResults(trackInformation.filter(track => 
      track.artist.toLowerCase().includes(searchValue) && searchValue.length > 0
    ))
  }

  function handleUpdatePlaylistName(name) {
    setPlaylistName(name)
  }

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

  return (
    <div className="app">
      <header className="app-header">
      </header>
      {loginStatus ?
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
          <button onClick={handleLogin}>Login to Spotify</button>
        </main>
      }
    </div>
  );
}

export default App;
