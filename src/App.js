import React from 'react'
import './App.css'
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Track from './components/Track/Track';
import Tracklist from './components/Tracklist/Tracklist';

function App() {

  return (
    <div className="app">
      <header className="app-header">
      </header>
      <main>
        <SearchBar />
        <SearchResults />
        <Playlist />
        <Tracklist />
        <Track />
        <button>Save to Spotify</button>
      </main>
    </div>
  );
}

export default App;
