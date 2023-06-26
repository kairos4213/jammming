import React, { useState, useEffect } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { data } from '../../util/trackData';


function App() {
  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState('Enter Playlist Name')
  const [playlistTracks, setPlaylistTracks] = useState([])
  const trackInformation = data

  function search(searchInput) {
    const searchValue = searchInput.toLowerCase()
    setSearchResults(() => {
      return trackInformation.filter(value => {
        return value.artist.toLowerCase().includes(searchValue) && searchValue.length > 0 ? value : ''
      })
    })
  }

  function updatePlaylistName(name) {
    setPlaylistName(name)
  }

  function addTrack(track) {
    if (playlistTracks.some(savedTrack => savedTrack.id === track.id))
      return;
    setPlaylistTracks(prevTracks => [...prevTracks, track])
  }

  function removeTrack(track) {
    setPlaylistTracks(prevTracks => {
      prevTracks.filter(savedTrack => savedTrack.id !== track.id)
    })
  }

  return (
    <div className="app">
      <header className="app-header">
      </header>
      <main>
        <SearchBar onSearch={search} />
        <SearchResults 
          searchResults={searchResults}
          addTrack={addTrack}
        />
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          updateName={updatePlaylistName}
          removeTrack={removeTrack}
        />
      </main>
    </div>
  );
}

export default App;
