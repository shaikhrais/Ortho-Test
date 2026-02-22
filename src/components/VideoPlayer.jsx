import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId, opts, className, iframeClassName }) => {
    return (
        <div className={className}>
            <YouTube
                videoId={videoId}
                opts={opts}
                className="w-full h-full"
                iframeClassName={iframeClassName}
            />
        </div>
    );
};

export default VideoPlayer;
