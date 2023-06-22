import './App.css'
import Playlist from "./assets/components/Playlist/Playlist";
import SearchBar from "./assets/components/SearchBar/SearchBar";
import SearchResults from "./assets/components/SearchResults/SearchResults";
import Track from "./assets/components/Track/Track";
import Tracklist from "./assets/components/Tracklist/Tracklist";

function App() {

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
        <SearchBar />
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
