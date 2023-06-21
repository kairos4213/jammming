import './SearchResults.css'
import albumArt from './images/adtrAlbumArt.jpg'

export default function SearchResults() {
    return (
        <div className="search-results">
            <div className="result-wrapper">
                <img className="album-art" alt="Album art" src={albumArt}/>
                <p className="song">Song: Second Sucks</p>
                <p className="artist">Artist: A Day to Remember</p>
                <p className="album">Album: What Separates Me from You</p>
            </div>
        </div>
    )
}