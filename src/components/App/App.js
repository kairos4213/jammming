import React, { useEffect, useState } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { Spotify } from '../../util/Spotify';
import logo from '../../assets/logos/JammmingLogo.png';
import landingImg from '../../assets/images/JammingMainPage.png';
import spotifyLogo from '../../assets/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Jammming Playlist');
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

  function handleBeforeUnload(event) {
    localStorage.removeItem('access_token');
  }

  // useEffect(() => {
  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  function handleSearch(searchInput) {
    if (searchInput.length > 0) {
      Spotify.search(searchInput).then(setSearchResults)
    } else {
      return setSearchResults([]);
    }
  };

  function handleUpdatePlaylistName(name) {
    setPlaylistName(name);
  };

  function handleAddTrack(track) {
    if (playlistTracks.some(savedTrack => savedTrack.id === track.id)) {
      return
    };
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  };

  function handleRemoveTrack(track) {
    setPlaylistTracks(prevTracks => {
      const filteredPlaylist = prevTracks.filter(savedTrack => savedTrack.id !== track.id);
      return filteredPlaylist;
    });
  };

  function handleSavePlaylist() {
    const tracks = playlistTracks.map(track => track.uri);

    Spotify.createPlaylist(playlistName, tracks)
      .then(() => {
        setPlaylistName('New Jamming Playlist');
        setPlaylistTracks([]);
      });
    
    window.alert(`${playlistName} has been saved to your Spotify!`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className='logoWrapper'>
          <img src={logo} alt="Jammming Logo" className='logo' />
          <span>ammming</span>
        </div>
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
          <h2 className='welcomeTitle'>Click below to start creating playlists!</h2>
          <button onClick={handleUserAccess} className='accessButton'><img src={spotifyLogo} alt="Access Spotify Button" className='spotifyLogo'/></button>
          <img src={landingImg} alt="Cartoon Girl Enjoying Music" className='landingImg' />
        </main>
      }
        
    </div>
  );
}

export default App;
