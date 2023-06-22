

export default function SearchBar(searchValue) {

    return (
        <form className="search-bar" onSubmit={() => searchValue}>
            <input name="searchInput" placeholder="Enter artist, song name, or album" />
            <button type="submit">Search</button>
        </form>
    )
}