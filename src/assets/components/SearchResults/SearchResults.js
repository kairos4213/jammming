import './SearchResults.css'
import albumArt from './images/adtrAlbumArt.jpg'

export default function SearchResults(props) {

    console.log(props.albumArt)
    return (
        <div className="search-results">
            <div className="result-wrapper">
                <img className="album-art" alt="Album Art" src={albumArt}/>
                <p className="song">Song: {props.song}</p>
                <p className="artist">Artist: {props.artist}</p>
                <p className="album">Album: {props.album}</p>
            </div>
        </div>
    )
}