import React, { useState } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { data } from '../../util/trackData';

const trackInformation = data

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState('Jammming Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([])

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

  return (
    <div className="app">
      <header className="app-header">
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />
        <SearchResults
          searchResults={searchResults}
          onAddTrack={handleAddTrack}
        />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onUpdatePlaylistName={handleUpdatePlaylistName}
          onRemoveTrack={handleRemoveTrack}
        />
      </main>
    </div>
  );
}

export default App;
