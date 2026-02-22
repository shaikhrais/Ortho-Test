import React from 'react';

const FlowStep = ({ number, title, desc }) => (
    <div className="group relative pl-8 pb-4">
        {/* Timeline Line */}
        <div className="absolute left-3 top-2 bottom-0 w-px bg-white/10 group-last:bg-transparent"></div>
        {/* Timeline Dot */}
        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#101a33] border-2 border-primary flex items-center justify-center z-10">
            <span className="text-[10px] font-black text-primary">{number}</span>
        </div>
        <div className="space-y-1">
            <h4 className="text-xs font-bold text-white group-hover:text-primary transition-colors">{title}</h4>
            <p className="text-[11px] text-[#97a3e6] leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default FlowStep;
