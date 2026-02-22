import React from 'react';
import { Zap, Shield, Activity, Wind } from 'lucide-react';
import StructureSection from './Shared/StructureSection';

const DashboardSummary = ({ selectedJoint, groupedData, uniqueTests }) => {
    return (
        <section className="bg-gradient-to-b from-[#101a33] to-[#0f1730] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
            <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-4">
                    <h2 className="text-lg font-bold uppercase tracking-wider">{selectedJoint === '__ALL__' ? 'Unified Overview' : selectedJoint}</h2>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-widest text-[#b8c2ff]">
                        {groupedData.primary.length + groupedData.stabilizers.length + groupedData.passive.length + groupedData.neuro.length} STRUCTURES
                    </span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary">2-IN + 1-OUT</span>
                </div>
            </div>

            <div className="p-8 space-y-10">
                {/* Grouped Structures */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StructureSection title="Primary Movers" count={groupedData.primary.length} items={groupedData.primary} icon={<Zap size={14} />} />
                    <StructureSection title="Stabilizers" count={groupedData.stabilizers.length} items={groupedData.stabilizers} icon={<Shield size={14} />} />
                    <StructureSection title="Passive Support" count={groupedData.passive.length} items={groupedData.passive} icon={<Activity size={14} />} />
                    <StructureSection title="Neuro / Associated" count={groupedData.neuro.length + groupedData.associated.length} items={[...groupedData.neuro, ...groupedData.associated]} icon={<Wind size={14} />} />
                </div>

                {/* Special Tests Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase text-primary tracking-[0.2em]">
                            <Shield size={12} />
                            Special Tests (IN/OUT)
                        </div>
                        <div className="space-y-2">
                            <p className="text-xs text-[#b8c2ff] leading-relaxed">
                                <strong className="text-white">Rule IN:</strong> {uniqueTests.in.join(', ') || '—'}
                            </p>
                            <p className="text-xs text-[#b8c2ff] leading-relaxed">
                                <strong className="text-white">Rule OUT:</strong> {uniqueTests.out.join(', ') || '—'}
                            </p>
                        </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase text-secondary tracking-[0.2em]">
                            <Activity size={12} />
                            Nerve Screen
                        </div>
                        <p className="text-xs text-[#97a3e6] leading-relaxed">
                            {uniqueTests.nerve.join(', ') || '—'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardSummary;
