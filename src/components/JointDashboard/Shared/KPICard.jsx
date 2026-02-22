import React from 'react';

const KPICard = ({ number, label, color }) => (
    <div className="bg-[#101a33] border border-white/10 rounded-2xl p-4 text-center">
        <div className={`text-2xl font-black ${color}`}>{number}</div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">{label}</div>
    </div>
);

export default KPICard;
