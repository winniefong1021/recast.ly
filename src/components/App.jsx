import video from '../data/exampleVideoData.js';
import VideoList from '../../src/components/VideoList.js';
import VideoPlayer from '../../src/components/VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from '../../src/components/Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedVideo: {
        video: {}
      },
      allVideos: []
    };

    this.onClickVideo = this.onClickVideo.bind(this);
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
    searchYouTube(options, (data) => {
      console.log(data.items);

      this.setState({
        clickedVideo: {
          video: data.items[0]
        },
        allVideos: data.items
      });
      console.log(this.state.allVideos);
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
    if (this.state.allVideos.length === 0) {
      return (<div>Loading... </div>);
    }
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchList={this.state} />
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
