import React from 'react';

const StructureSection = ({ title, count, items, icon }) => (
    <div className="structure-section-box">
        <div className="section-header-compact">
            <div className="section-title-mini">
                {icon}
                {title}
            </div>
            <span className="summary-test-count">{count}</span>
        </div>
        <div className="chip-cloud-mini">
            {items.slice(0, 8).map((item, idx) => (
                <span key={idx} className="mini-chip">
                    {item.structure_name}
                </span>
            ))}
            {items.length > 8 && <span className="field-help-text">+{items.length - 8} more</span>}
        </div>
    </div>
);

export default StructureSection;
