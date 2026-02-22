import { Pencil } from 'lucide-react';

const TestDetailFooter = ({ test, onEdit }) => {
    return (
        <div className="px-6 py-5 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-black/20 backdrop-blur-md">
            <div className="text-[9px] text-white/40 uppercase font-black tracking-[0.3em]">
                Diagnostic Reliability: <span className="text-white/70">High (Standard Protocol)</span>
            </div>

            <div className="flex items-center gap-3">
                <a
                    href={test.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-black text-white hover:bg-white/20 transition uppercase tracking-widest no-underline shadow-xl"
                >
                    Original Source ↗
                </a>

                <button
                    onClick={() => onEdit(test)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-3.5 text-xs font-black text-emerald-100 hover:bg-emerald-400/20 transition uppercase tracking-[0.2em] shadow-xl group"
                >
                    <Pencil size={14} className="text-emerald-300 group-hover:rotate-12 transition-transform" /> Edit Media
                </button>
            </div>
        </div>
    );
};

export default TestDetailFooter;
