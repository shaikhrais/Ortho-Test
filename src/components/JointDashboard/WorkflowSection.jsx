import React from 'react';
import FlowStep from './Shared/FlowStep';

const WorkflowSection = ({ uniqueTests }) => {
    return (
        <section className="bg-[#101a33] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden p-8">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-black uppercase tracking-widest">Identification Flow</h3>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-[#97a3e6]">Standardized</span>
            </div>

            <div className="space-y-4">
                <FlowStep number="1" title="Subjective History" desc="Mechanism, 24-hour pattern, irritability." />
                <FlowStep number="2" title="AROM → PROM" desc="Compare to separate contractile vs non-contractile." />
                <FlowStep number="3" title="Resisted Tests (MMT)" desc="Strong-painful vs weak-painful differentiation." />
                <FlowStep number="4" title="Special Tests" desc={`Focus: ${uniqueTests.in.slice(0, 3).join(', ') || 'Joint tests'}`} />
                <FlowStep number="5" title="Neuro Screen" desc={uniqueTests.nerve[0] || 'Dermatome/Myotome/Reflex check.'} />
                <FlowStep number="6" title="Final Synthesis" desc="Map findings back to identified structure groups." />
            </div>
        </section>
    );
};

export default WorkflowSection;
