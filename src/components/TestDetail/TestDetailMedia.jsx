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
        <div className="rounded-3xl border border-white/10 bg-black/25 overflow-hidden shadow-2xl">
            <div className="relative w-full aspect-video bg-black">
                {videoId ? (
                    <VideoPlayer
                        videoId={videoId}
                        opts={opts}
                        className="w-full h-full"
                        iframeClassName="w-full h-full"
                    />
                ) : (
                    <MedicalPlaceholder />
                )}

                {/* Edit Action Overlay */}
                <div className="absolute top-3 right-3 flex gap-2 z-10">
                    <button
                        onClick={() => onEdit(test)}
                        className="rounded-xl border border-white/40 bg-black/60 backdrop-blur-md px-4 py-2.5 text-[11px] font-black text-white hover:bg-primary hover:border-primary transition-all uppercase tracking-[0.1em] flex items-center gap-2 shadow-2xl"
                    >
                        <Pencil size={12} className="text-white" /> Edit Media
                    </button>
                </div>
            </div>

            {/* Media Info Strip */}
            <div className="p-4 border-t border-white/10 bg-white/5">
                <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                        <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Resource Info</div>
                        <div className="text-xs font-bold truncate text-white uppercase italic">
                            {videoId ? 'HD Training Active' : 'Placeholder Mode'}
                        </div>
                    </div>
                    <a
                        href={test.youtubeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-black text-white hover:bg-white/20 transition uppercase tracking-widest no-underline shadow-lg"
                    >
                        <Play size={12} fill="white" className="text-white" /> Watch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TestDetailMedia;
