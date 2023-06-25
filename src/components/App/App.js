import React, { useState } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { trackData } from '../../util/trackData';


function App() {
  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState('')
  const [playlistTracks, setPlaylistTracks] = useState([])
  const trackInformation = trackData

  function search(searchValue) {
    let results = [trackInformation.filter(track => track.artist === searchValue)]
    console.log(results)
    setSearchResults(searchValue)
  }

  return (
    <div className="app">
      <header className="app-header">
      </header>
      <main>
        <SearchBar search={search} />
        <SearchResults searchResults={searchResults} />
        <Playlist />
      </main>
    </div>
  );
}

export default App;
