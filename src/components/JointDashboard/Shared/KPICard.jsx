import React from 'react';

const KPICard = ({ number, label, colorClass }) => (
    <div className="card-kpi">
        <div className={`kpi-num ${colorClass}`}>{number}</div>
        <div className="kpi-lab">{label}</div>
    </div>
);

export default KPICard;
