import React from 'react';
import FlowStep from './Shared/FlowStep';

const WorkflowSection = ({ uniqueTests }) => {
    return (
        <section className="workflow-block">
            <div className="workflow-title-box">
                <h3 className="workflow-label-text">Identification Flow</h3>
                <span className="summary-test-count">Standardized</span>
            </div>

            <div className="workflow-steps-vertical">
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
