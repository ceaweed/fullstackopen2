const Search = (props) => {
    return (
        <div>
           Find Countries: <input type="text" value={props.newSearch} onChange={props.change}></input>
        </div>
    )
}

export default Search