import { Stethoscope, Activity } from 'lucide-react';

const Header = ({ testsCount, dbVersion, onOpenDashboard }) => {
    return (
        <header className="mb-12 space-y-8" data-ui-version="2.0">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] group transition-all duration-300 hover:scale-110">
                            <Stethoscope className="text-primary w-8 h-8 drop-shadow-glow" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic leading-none text-glow-white">
                                Ortho<span className="text-primary not-italic">-</span>Tests
                            </h1>
                            <p className="mt-1 text-[10px] text-primary font-bold uppercase tracking-[0.4em]">
                                Clinical Diagnostic Intelligence
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button
                        onClick={onOpenDashboard}
                        className="group relative flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-primary to-secondary rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] text-white shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <Activity className="relative z-10 w-4 h-4" />
                        <span className="relative z-10">Joint Assessment</span>
                    </button>

                    <div className="hidden lg:block text-right">
                        <p className="text-text-dim text-[10px] font-medium max-w-[150px] ml-auto uppercase tracking-wider leading-relaxed">
                            Standardizing protocols for clinical excellence.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
