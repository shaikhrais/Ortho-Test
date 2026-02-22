import React from 'react';

const FlowStep = ({ number, title, desc }) => (
    <div className="flow-step-item">
        <div className="step-num-dot">
            {number}
        </div>
        <div className="step-text-group">
            <h4 className="step-main-text">{title}</h4>
            <p className="step-sub-text">{desc}</p>
        </div>
        {/* Connection line for the stack */}
        <div className="step-connector-line" />
    </div>
);

export default FlowStep;
