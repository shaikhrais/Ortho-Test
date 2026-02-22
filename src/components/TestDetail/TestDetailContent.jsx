import { ShieldAlert, ListChecks, CheckCircle2, X as XIcon, FileText } from 'lucide-react';

const TestDetailContent = ({ test }) => {
    return (
        <section className="lg:col-span-7 space-y-6">
            {/* Purpose Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition-colors">
                <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 shadow-lg shadow-indigo-400/5">
                        <ShieldAlert size={20} className="text-indigo-200" />
                    </span>
                    <div>
                        <div className="text-[10px] font-black tracking-[0.2em] text-indigo-200 uppercase mb-2">CLINICAL PURPOSE</div>
                        <p className="text-sm text-white/80 leading-relaxed font-medium">
                            {test.purpose}
                        </p>
                    </div>
                </div>
            </div>

            {/* Protocol Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition-colors">
                <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 shadow-lg shadow-amber-400/5">
                        <ListChecks size={20} className="text-amber-200" />
                    </span>
                    <div>
                        <div className="text-[10px] font-black tracking-[0.2em] text-amber-200 uppercase mb-2">PROTOCOL</div>
                        <p className="text-sm text-white/80 leading-relaxed font-medium">
                            {test.protocol}
                        </p>
                    </div>
                </div>
            </div>

            {/* Findings Accordion */}
            <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <div className="text-xs font-black tracking-[0.2em] uppercase text-white/80">Diagnostic Results</div>
                    <div className="text-[10px] text-white/40 font-black uppercase tracking-widest italic">Live Reference</div>
                </div>

                {/* Positive */}
                <details className="group border-b border-white/5" open>
                    <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-all">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                                <CheckCircle2 size={18} className="text-emerald-400" />
                            </span>
                            <div>
                                <div className="text-sm font-black text-white/90 uppercase tracking-widest">Positive finding</div>
                                <div className="text-[9px] text-white/30 uppercase font-bold tracking-widest mt-0.5">Met Criteria</div>
                            </div>
                        </div>
                        <span className="text-white/20 group-open:rotate-180 transition-transform duration-300">⌄</span>
                    </summary>
                    <div className="px-6 pb-6 text-sm text-white/60 leading-relaxed font-medium bg-black/10">
                        {test.positive}
                    </div>
                </details>

                {/* Negative */}
                <details className="group">
                    <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-all">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-rose-400/20 bg-rose-400/10">
                                <XIcon size={18} className="text-rose-400" />
                            </span>
                            <div>
                                <div className="text-sm font-black text-white/90 uppercase tracking-widest">Negative finding</div>
                                <div className="text-[9px] text-white/30 uppercase font-bold tracking-widest mt-0.5">Standard Base</div>
                            </div>
                        </div>
                        <span className="text-white/20 group-open:rotate-180 transition-transform duration-300">⌄</span>
                    </summary>
                    <div className="px-6 pb-6 text-sm text-white/60 leading-relaxed font-medium bg-black/10">
                        {test.negative}
                    </div>
                </details>
            </div>

            {/* Clinical Notes */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                        <FileText size={20} className="text-white/60" />
                    </span>
                    <div>
                        <div className="text-[10px] font-black tracking-[0.2em] text-white/60 uppercase">Clinical Observations</div>
                        <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest mt-0.5">Patient safety cues</div>
                    </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-xs text-white/50 leading-relaxed font-mono italic shadow-inner">
                    {test.description || "Compare bilateral sides during the provocation. Ensure firm end-feel and check for concordant symptom reproduction."}
                </div>
            </div>
        </section>
    );
};

export default TestDetailContent;
