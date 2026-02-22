import React from 'react';

const FrequencyBadge = ({ freq }) => {
    const getClassName = (f) => {
        switch (f) {
            case 'VERY_COMMON': return 'freq-high';
            case 'COMMON': return 'freq-medium';
            default: return 'freq-standard';
        }
    };

    return (
        <span className={`freq-badge-pill ${getClassName(freq)}`}>
            {freq?.replace('_', ' ') || 'UNKNOWN'}
        </span>
    );
};

export default FrequencyBadge;
