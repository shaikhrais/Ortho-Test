const TestDetailSummary = ({ test }) => {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 border-l-4 border-l-primary/40">
            <div className="flex items-center justify-between mb-6">
                <div className="text-xs font-black tracking-[0.2em] uppercase text-white/80">Clinical Summary</div>
                <span className="text-[10px] px-3 py-1 rounded-full border border-white/10 bg-black/20 text-white/60 font-black uppercase tracking-[0.1em]">
                    {test.joint}
                </span>
            </div>

            <ul className="space-y-4 text-sm text-white/70">
                <li className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-sm shadow-inner">🎯</span>
                    <div>
                        <div className="font-black text-white/80 text-[10px] uppercase tracking-widest mb-1">Focus</div>
                        <div className="text-white/50 text-xs leading-relaxed">{test.purpose?.slice(0, 100)}...</div>
                    </div>
                </li>
                <li className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-sm shadow-inner">🧭</span>
                    <div>
                        <div className="font-black text-white/80 text-[10px] uppercase tracking-widest mb-1">Maneuver</div>
                        <div className="text-white/50 text-xs leading-relaxed">Standardized provocations with clinical stress application.</div>
                    </div>
                </li>
                <li className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-sm shadow-inner">🎬</span>
                    <div>
                        <div className="font-black text-white/80 text-[10px] uppercase tracking-widest mb-1">Video Source</div>
                        <div className="text-white/50 text-xs leading-relaxed">{test.youtubeUser || 'Clinical Media'}</div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default TestDetailSummary;
