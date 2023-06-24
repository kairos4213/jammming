import React from 'react'
import './App.css'
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Track from './components/Track/Track';
import Tracklist from './components/Tracklist/Tracklist';

function App() {
  const [trackData, setTrackData] = React.useState("")

  function handleSearch(event) {
    event.preventDefault()

    const search = event.target
    const searchData = new FormData(search)

    // const searchJson = Object.fromEntries(searchData.entries())

    setTrackData(searchData)
  }


  const trackObjects = [
    {
      name: "Second Sucks",
      artist: "A Day to Remember",
      album: "What Separates Me from You",
      id: 1,
      albumArt: "./images/adtrAlbumArt.jpg"
    },
    {
      name: "The Young and the Hopeless",
      artist: "Good Charlotte",
      album: "The Young and the Hopeless",
      id: 2,
      albumArt: ""
    }
  ]

  return (
    <div className="app">
      <header className="app-header">
      </header>
      <main>
        <SearchBar searchValue={handleSearch} />
        {trackData}
        <SearchResults 
          song={trackObjects[0].name}
          artist={trackObjects[0].artist}
          album={trackObjects[0].album}
          albumArt={trackObjects[0].albumArt}
        />
        <Playlist />
        <Tracklist />
        <Track />
        <button>Save to Spotify</button>
      </main>
    </div>
  );
}

export default App;
