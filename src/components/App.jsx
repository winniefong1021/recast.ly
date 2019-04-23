import exampleVideo from '../data/exampleVideoData.js';
import VideoList from '../../src/components/VideoList.js';
import VideoPlayer from '../../src/components/VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from '../../src/components/Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedVideo: {
        video: exampleVideo[0]
      },
      allVideos: exampleVideo
    };

    this.onClickVideo = this.onClickVideo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    var options = {
      query: 'cats',
      max: 5,
      key: YOUTUBE_API_KEY,
    };
    this.props.searchYouTube(options, (data) => {

      this.setState({
        clickedVideo: {
          video: data[0]
        },
        allVideos: data
      });
    });

  }

  handleSearch() {

    var input = $('.form-control').val();

    var options = {
      query: input,
      max: 5,
      key: YOUTUBE_API_KEY,
    };

    this.props.searchYouTube(options, (data) => {

      this.setState({
        clickedVideo: {
          video: data[0]
        },
        allVideos: data
      });
    });

  }

  handleInput(event) {

    var input = event;

    var options = {
      query: input,
      max: 5,
      key: YOUTUBE_API_KEY,
    };

    this.props.searchYouTube(options, (data) => {

      this.setState({
        clickedVideo: {
          video: data[0]
        },
        allVideos: data
      });
    });

  }



  onClickVideo(data) {
    this.setState({
      clickedVideo: {
        video: data
      }
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchEvent={this.handleSearch} inputEvent={this.handleInput} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.clickedVideo.video} />
          </div>
          <div className="col-md-5">
            <VideoList clickEvent={this.onClickVideo} videos={this.state.allVideos} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
