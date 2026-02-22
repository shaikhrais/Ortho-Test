import { Play, Pencil } from 'lucide-react';
import VideoPlayer from '../VideoPlayer';
import MedicalPlaceholder from '../MedicalPlaceholder';
import { getYouTubeId } from '../../utils/youtube';

const TestDetailMedia = ({ test, onEdit }) => {
    const videoId = getYouTubeId(test.youtubeUrl);

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            modestbranding: 1,
            rel: 0,
        },
    };

    return (
        <div className="modal-media-card">
            <div className="media-player-container">
                {videoId ? (
                    <VideoPlayer
                        videoId={videoId}
                        opts={opts}
                        className="player-iframe-outer"
                        iframeClassName="player-iframe-inner"
                    />
                ) : (
                    <MedicalPlaceholder />
                )}

                {/* Edit Action Overlay */}
                <div className="media-overlay-actions">
                    <button
                        onClick={() => onEdit(test)}
                        className="btn-media-edit"
                    >
                        <Pencil size={12} /> Edit Media
                    </button>
                </div>
            </div>

            {/* Media Info Strip */}
            <div className="media-info-strip">
                <div className="media-info-row">
                    <div className="media-meta-group">
                        <div className="meta-label-tiny">Resource Info</div>
                        <div className="meta-status-text">
                            {videoId ? 'HD Training Active' : 'Placeholder Mode'}
                        </div>
                    </div>
                    <a
                        href={test.youtubeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-watch-source"
                    >
                        <Play size={12} fill="currentColor" /> Watch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TestDetailMedia;
