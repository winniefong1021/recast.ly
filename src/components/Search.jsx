
var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(event) => props.inputEvent(event.target.value)} />
    <button className="btn hidden-sm-down" onClick={() => props.searchEvent()}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
