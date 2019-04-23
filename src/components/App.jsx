import video from '../data/exampleVideoData.js';
import VideoList from '../../src/components/VideoList.js';
import VideoPlayer from '../../src/components/VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedVideo: {
        video: video[0]
      }
    };

    this.onClickVideo = this.onClickVideo.bind(this);
  }
  componentDidMount() {
    var options = {
      query: 'cats',
      max: 5,
      key: YOUTUBE_API_KEY,
    };
    searchYouTube(options, () => { console.log('hello'); });
  }

  onClickVideo(data) {
    this.setState({
      clicked: !this.state.clicked,
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
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.clickedVideo.video} />
          </div>
          <div className="col-md-5">
            <VideoList clickEvent={this.onClickVideo} videos={video} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
