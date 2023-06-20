import Playlist from "./assets/components/Playlist/Playlist";
import SearchBar from "./assets/components/SearchBar/SearchBar";
import SearchResults from "./assets/components/SearchResults/SearchResults";
import Track from "./assets/components/Track/Track";
import Tracklist from "./assets/components/Tracklist/Tracklist";

function App() {
  return (
    <div className="app">
      <header className="app-header">
      </header>
      <main>
        <SearchBar />
        <button>Search</button>
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
