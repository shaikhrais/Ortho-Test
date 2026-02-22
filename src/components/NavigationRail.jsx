const NavigationRail = () => {
    return (
        <aside className="navigation-rail no-scrollbar">
            <div className="nav-group">
                <div className="nav-item nav-item-active">
                    <span className="material-symbols-outlined">dashboard</span>
                    <span className="nav-item-label">Dashboard</span>
                </div>
                <div className="nav-item">
                    <span className="material-symbols-outlined">medical_services</span>
                    <span className="nav-item-label">All Tests</span>
                </div>
                <div className="nav-item">
                    <span className="material-symbols-outlined">bookmark</span>
                    <span className="nav-item-label">My Library</span>
                </div>
                <div className="nav-item">
                    <span className="material-symbols-outlined">workspace_premium</span>
                    <span className="nav-item-label">Certificates</span>
                </div>
            </div>

            <div className="progress-section">
                <h3 className="section-title-mini">Your Progress</h3>
                <div className="progress-widget">
                    <div className="progress-header">
                        <span className="progress-subject">Lower Limb</span>
                        <span className="progress-percentage">75%</span>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: '75%' }}></div>
                    </div>
                    <p className="progress-meta">12 of 16 tests completed</p>
                </div>
            </div>

            <div className="nav-footer">
                <div className="nav-item">
                    <span className="material-symbols-outlined">help</span>
                    <span className="nav-item-label">Help Center</span>
                </div>
            </div>
        </aside>
    );
};

export default NavigationRail;
