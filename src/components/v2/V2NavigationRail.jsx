import React from 'react';

const V2NavigationRail = () => {
    return (
        <aside className="v2-nav-rail no-scrollbar">
            <div className="v2-rail-items">
                <div className="v2-rail-item active">
                    <span className="material-symbols-outlined">dashboard</span>
                    <span className="v2-rail-label">Dashboard</span>
                </div>
                <div className="v2-rail-item">
                    <span className="material-symbols-outlined">medical_services</span>
                    <span className="v2-rail-label">All Tests</span>
                </div>
                <div className="v2-rail-item">
                    <span className="material-symbols-outlined">bookmark</span>
                    <span className="v2-rail-label">My Library</span>
                </div>
                <div className="v2-rail-item">
                    <span className="material-symbols-outlined">workspace_premium</span>
                    <span className="v2-rail-label">Certificates</span>
                </div>
            </div>

            <div className="v2-rail-section">
                <h3 className="v2-section-title">Your Progress</h3>
                <div className="v2-progress-card">
                    <div className="v2-progress-header">
                        <span className="v2-progress-label">Lower Limb</span>
                        <span className="v2-progress-val">75%</span>
                    </div>
                    <div className="v2-progress-bar-bg">
                        <div className="v2-progress-bar-fill" style={{ width: '75%' }}></div>
                    </div>
                    <p className="v2-progress-tip">12 of 16 tests completed</p>
                </div>
            </div>

            <div className="v2-rail-footer">
                <div className="v2-rail-item">
                    <span className="material-symbols-outlined">help</span>
                    <span className="v2-rail-label">Help Center</span>
                </div>
            </div>
        </aside>
    );
};

export default V2NavigationRail;
