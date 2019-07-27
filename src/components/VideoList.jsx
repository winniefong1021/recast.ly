import VideoListEntry from '../../src/components/VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => <VideoListEntry clickEvent={props.clickEvent} video={video} />)}
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
