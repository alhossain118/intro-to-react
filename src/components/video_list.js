import React from 'react';
import VideoListItem from './video_list_item';
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  })
  return (
      <ul className="col-md-4 list-group">
      {videoItems}
      </ul>
  );
};
export default VideoList;
// import React from 'react';
//
// const VideoList = (props) => {
//   return (
//     <ul className="col-md-4 list-group">
//         {props.videos.length}
//     </ul>
//   );
// }
//
//
// export default VideoList;
