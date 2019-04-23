import searchYouTube from "../lib/searchYouTube.js";
import YOUTUBE_API_KEY from '../config/youtube.js';

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={() => props.searchEvent()}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       search: 'cat',
//       allVideos: []
//     };

//     // this.handleSearch = this.handleSearch.bind(this);
//   }


// handleSearch(event) {
//   var input = $('.form-control').val();

//   var options = {
//     query: input,
//     max: 5,
//     key: YOUTUBE_API_KEY,
//   };

//   searchYouTube(options, (data) => {
//     console.log('Search: ', data.items);
//     this.setState({
//       allVideos: data.items
//     });
//   });

// }

// render() {
//   return (<div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down" onClick={() => props.searchEvent()} >
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>);
// }


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
