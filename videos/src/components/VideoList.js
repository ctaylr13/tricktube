import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    // on video select is a prop, its just destructured
    // same thing as this.props.onVideoSelect, thats coming into the 
    // parameter 
    const renderedList = videos.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;