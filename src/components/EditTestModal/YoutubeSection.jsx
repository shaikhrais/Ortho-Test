import React from 'react';
import { Film } from 'lucide-react';

const YoutubeSection = ({
    youtubeUrl, setYoutubeUrl,
    youtubeUser, setYoutubeUser,
    pasteFromClipboard
}) => {
    return (
        <div className="space-y-8">
            <div className="space-y-3">
                <label className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-white/60 uppercase">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                        <Film size={12} />
                    </span>
                    YouTube Resource
                </label>
                <div className="flex gap-3">
                    <input
                        type="url"
                        value={youtubeUrl}
                        onChange={(e) => setYoutubeUrl(e.target.value)}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/20 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all"
                        placeholder="https://www.youtube.com/watch?v=..."
                    />
                    <button
                        type="button"
                        onClick={() => pasteFromClipboard(setYoutubeUrl)}
                        className="shrink-0 rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-xs font-black text-white hover:bg-white/20 transition-all uppercase tracking-widest active:scale-95 shadow-lg"
                    >
                        Paste
                    </button>
                </div>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold pl-1">
                    Paste ID or full URL for clinical preview.
                </p>
            </div>

            <div className="space-y-3">
                <label className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-white/60 uppercase">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                        <Film size={12} className="text-secondary" />
                    </span>
                    Source / Channel
                </label>
                <input
                    type="text"
                    value={youtubeUser}
                    onChange={(e) => setYoutubeUser(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/20 outline-none focus:border-secondary/50 focus:bg-white/[0.08] transition-all"
                    placeholder="Channel Name"
                />
            </div>
        </div>
    );
};

export default YoutubeSection;
