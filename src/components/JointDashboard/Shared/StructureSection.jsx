import React from 'react';

const StructureSection = ({ title, count, items, icon }) => (
    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-[11px] font-bold text-white/50 uppercase tracking-widest">
                {icon}
                {title}
            </div>
            <span className="text-[10px] font-black bg-white/5 px-2 py-0.5 rounded-lg border border-white/5">{count}</span>
        </div>
        <div className="flex flex-wrap gap-2">
            {items.slice(0, 8).map((item, idx) => (
                <span key={idx} className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-white/70 whitespace-nowrap">
                    {item.structure_name}
                </span>
            ))}
            {items.length > 8 && <span className="text-[10px] text-white/30 pt-1">+{items.length - 8} more</span>}
        </div>
    </div>
);

export default StructureSection;
