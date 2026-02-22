import { Activity } from 'lucide-react';

const MedicalPlaceholder = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1d24] to-[#0c0e12] p-8 text-center">
            <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <Activity size={48} className="text-white/20 relative z-10" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
                Clinical Interface Active
            </p>
            <p className="text-[9px] text-white/10 mt-2 font-mono uppercase">
                No specific resource mapped to this unit.
            </p>
        </div>
    );
};

export default MedicalPlaceholder;
