import React from 'react';

const FrequencyBadge = ({ freq }) => {
    const styles = {
        VERY_COMMON: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5',
        COMMON: 'border-blue-500/30 text-blue-400 bg-blue-500/5',
        UNCOMMON: 'border-amber-500/30 text-amber-400 bg-amber-500/5',
        RARE: 'border-rose-500/30 text-rose-400 bg-rose-500/5',
        VERY_RARE: 'border-rose-500/30 text-rose-400 bg-rose-500/5',
    };
    return (
        <span className={`px-2 py-1 rounded-md border text-[9px] font-black uppercase tracking-tighter ${styles[freq] || 'border-white/10 text-white/40'}`}>
            {freq?.replace('_', ' ') || 'UNKNOWN'}
        </span>
    );
};

export default FrequencyBadge;
