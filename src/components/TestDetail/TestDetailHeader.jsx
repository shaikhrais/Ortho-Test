import { ExternalLink, X } from 'lucide-react';

const TestDetailHeader = ({ test, onClose }) => {
    return (
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-white/5">
            <div className="min-w-0">
                <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold tracking-widest text-white/70">
                        {test.joint.toUpperCase()}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold tracking-widest text-emerald-200">
                        SPECIAL TEST
                    </span>
                </div>

                <h2 className="mt-3 text-2xl font-black tracking-tight text-white uppercase italic">{test.name}</h2>
                <p className="mt-1 text-sm text-white/60 font-medium">
                    Authoritative clinical guide for orthopaedic examination.
                </p>
            </div>

            <div className="flex items-center gap-2">
                <a
                    href={test.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition uppercase tracking-widest no-underline"
                >
                    Source <ExternalLink size={14} className="text-white" />
                </a>

                <button
                    onClick={onClose}
                    className="rounded-2xl border border-white/20 bg-white/10 p-3 text-white hover:bg-white/20 transition active:scale-95"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

export default TestDetailHeader;
