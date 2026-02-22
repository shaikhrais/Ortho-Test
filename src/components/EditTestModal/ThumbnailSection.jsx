import React from 'react';
import { Image as ImageIcon, Film, RotateCcw } from 'lucide-react';

const ThumbnailSection = ({
    thumbnailUrl, setThumbnailUrl,
    pasteFromClipboard,
    useYoutubeThumb,
    clearInputs
}) => {
    return (
        <div className="space-y-8">
            <div className="space-y-3">
                <label className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-white/60 uppercase">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                        <ImageIcon size={12} />
                    </span>
                    Static Thumbnail
                </label>
                <div className="flex gap-3">
                    <input
                        type="text"
                        value={thumbnailUrl}
                        onChange={(e) => setThumbnailUrl(e.target.value)}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/20 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all"
                        placeholder="/thumbnails/test.jpg or URL"
                    />
                    <button
                        type="button"
                        onClick={() => pasteFromClipboard(setThumbnailUrl)}
                        className="shrink-0 rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-xs font-black text-white hover:bg-white/20 transition-all uppercase tracking-widest active:scale-95 shadow-lg"
                    >
                        Paste
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button
                    type="button"
                    onClick={useYoutubeThumb}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 flex flex-col items-center group hover:bg-white/10 transition-all active:scale-95 shadow-lg"
                >
                    <Film size={20} className="text-white/40 group-hover:text-primary transition-colors mb-3" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Fetch High-Res</span>
                </button>

                <button
                    type="button"
                    onClick={clearInputs}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 flex flex-col items-center group hover:bg-white/10 transition-all active:scale-95 shadow-lg"
                >
                    <RotateCcw size={20} className="text-white/40 group-hover:text-rose-400 transition-colors mb-3" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Clear Inputs</span>
                </button>
            </div>
        </div>
    );
};

export default ThumbnailSection;
