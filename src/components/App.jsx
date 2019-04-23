import video from '../data/exampleVideoData.js';
import VideoList from '../../src/components/VideoList.js';
import VideoPlayer from '../../src/components/VideoPlayer.js';

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={video} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={video} />
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    //keep track of all videos and current video in player
    this.state = {
      allVideos: {},
      currentVideo: null
    };

    this.onClickVideo = this.onClickVideo.bind(this);
  }
  //when title of videoListEntry is clicked play that video in videoplayer
  onClickVideo() {
    // this.setState changes currentVideo key to clicked video from videoListEntry
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
            <VideoPlayer video={video} />
          </div>
          <div className="col-md-5">
            <VideoList videos={video} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
