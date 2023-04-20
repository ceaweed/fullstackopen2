const Search = (props) => {
    return (
        <div>
           Search: <input type="text" value={props.newSearch} onChange={props.change}></input>
        </div>
    )
}

export default Search