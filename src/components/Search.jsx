// // var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleSearch = this.handleSearch.bind(this);
  }


  handleSearch(event) {
    //update videoplayer with first video

    //update videolist with data items

  }

  render() {
    return (<div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>);
  }


}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
