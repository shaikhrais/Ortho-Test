import { Image as ImageIcon, Play, Save } from 'lucide-react';

const EditPreview = ({
    test,
    youtubeUrl,
    thumbnailUrl,
    handleSave,
    onClose
}) => {
    return (
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-white/5">
                <div className="text-xs font-black tracking-[0.2em] uppercase text-white/80 italic">Live Console</div>
                <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest uppercase">HD Render Output</div>
            </div>

            <div className="p-8 flex-grow flex flex-col justify-center bg-black/20">
                <div className="rounded-3xl border border-white/10 bg-black/40 overflow-hidden relative shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                    <div className="aspect-video relative bg-black flex items-center justify-center">
                        {thumbnailUrl ? (
                            <img
                                src={thumbnailUrl}
                                alt="Preview"
                                className="w-full h-full object-cover opacity-90"
                                onError={(e) => {
                                    e.target.src = 'https://placehold.co/900x450/141a26/94a3b8?text=INVALID+RESOURCE';
                                }}
                            />
                        ) : (
                            <div className="text-center p-12 space-y-4">
                                <div className="w-20 h-20 rounded-full border border-white/5 bg-white/5 flex items-center justify-center mx-auto opacity-20">
                                    <ImageIcon size={40} className="text-white" />
                                </div>
                                <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">Resource Required</p>
                            </div>
                        )}

                        {/* Link Badge Overlay */}
                        {youtubeUrl && (
                            <div className="absolute bottom-4 left-4 right-4 z-10">
                                <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 px-4 py-3 shadow-2xl">
                                    <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <Play size={16} fill="white" className="text-white ml-0.5" />
                                    </div>
                                    <div className="min-w-0 flex-grow">
                                        <div className="text-[10px] font-black text-white uppercase tracking-widest truncate">
                                            {youtubeUrl}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-6 border-t border-white/5 bg-white/5">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-black italic tracking-tight uppercase text-white/90 truncate pr-4">
                                {test?.name || 'Unit Preview'}
                            </h3>
                            <span className="badge-small !py-1 !px-3">{test?.joint || 'REGION'}</span>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={handleSave}
                                className="flex-1 rounded-2xl bg-white text-black px-6 py-4 text-xs font-black uppercase tracking-[0.3em] shadow-2xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group"
                            >
                                <Save size={16} className="group-hover:rotate-12 transition-transform" /> Commit Changes
                            </button>
                            <button
                                onClick={onClose}
                                className="px-6 py-4 rounded-2xl border border-white/20 bg-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all active:scale-95 shadow-lg"
                            >
                                Abort Selection
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPreview;
