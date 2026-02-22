import React from 'react';
import FrequencyBadge from './Shared/FrequencyBadge';

const MappingTable = ({ loading, groupedData }) => {
    const allData = [...groupedData.primary, ...groupedData.stabilizers, ...groupedData.passive, ...groupedData.neuro, ...groupedData.associated];

    return (
        <div className="space-y-4">
            <h3 className="text-xs font-black uppercase text-white/40 tracking-[0.3em] px-1">Detailed Mapping</h3>
            <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/20">
                <table className="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr className="bg-white/5 text-[#b8c2ff] font-bold">
                            <th className="px-5 py-4">Structure</th>
                            <th className="px-5 py-4">Frequency</th>
                            <th className="px-5 py-4">Clinical Notes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {loading ? (
                            <tr><td colSpan="3" className="px-5 py-8 text-center text-white/40">Loading data...</td></tr>
                        ) : allData.length === 0 ? (
                            <tr><td colSpan="3" className="px-5 py-8 text-center text-white/40">No matching structures found</td></tr>
                        ) : (
                            allData.map((row, idx) => (
                                <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-5 py-4">
                                        <div className="font-bold text-white group-hover:text-primary transition-colors">{row.structure_name}</div>
                                        <div className="text-[10px] text-white/40 uppercase tracking-tighter mt-0.5">{row.category_name} • {row.relationship}</div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <FrequencyBadge freq={row.injury_frequency} />
                                    </td>
                                    <td className="px-5 py-4 text-[#97a3e6] leading-relaxed italic">
                                        {row.notes || '—'}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MappingTable;
