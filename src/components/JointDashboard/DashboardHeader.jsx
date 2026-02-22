import React from 'react';
import { Activity, Search, RefreshCw } from 'lucide-react';

const DashboardHeader = ({
    selectedJoint,
    setSelectedJoint,
    joints,
    searchQuery,
    setSearchQuery,
    handleReset
}) => {
    return (
        <header className="dashboard-sticky-header">
            <div className="dashboard-header-inner">
                <div className="dashboard-header-main-row">
                    <div className="dashboard-brand-group">
                        <div className="dashboard-logo-box">
                            <Activity size={24} />
                        </div>
                        <div className="dashboard-brand-text">
                            <h1 className="dashboard-title-text">Joint Assessment</h1>
                            <p className="dashboard-subtitle-text">Structural mappings & identification workflow</p>
                        </div>
                    </div>

                    <div className="dashboard-header-controls">
                        <div className="dashboard-select-wrapper">
                            <span className="select-label-tiny">Joint</span>
                            <select
                                value={selectedJoint}
                                onChange={(e) => setSelectedJoint(e.target.value)}
                                className="dashboard-native-select"
                            >
                                <option value="__ALL__">All Joints</option>
                                {joints.map(j => (
                                    <option key={j.id} value={j.name}>{j.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="dashboard-search-wrapper">
                            <Search size={16} className="search-icon-dim" />
                            <input
                                type="text"
                                placeholder="Search structure or test..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="dashboard-header-search"
                            />
                        </div>

                        <button
                            onClick={handleReset}
                            className="btn-dashboard-reset"
                        >
                            <RefreshCw size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
