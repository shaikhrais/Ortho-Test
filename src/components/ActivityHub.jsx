const ActivityHub = ({ recentlyViewed = [], logs = [] }) => {
    return (
        <aside className="activity-hub no-scrollbar">
            <div className="hub-content">
                <h3 className="hub-title">
                    Activity Hub
                    <span className="material-symbols-outlined" style={{ color: 'var(--slate-300)' }}>history</span>
                </h3>

                <div className="hub-section">
                    <h4 className="hub-section-title">Recently Viewed</h4>
                    <div className="recent-views-list">
                        {recentlyViewed.length > 0 ? (
                            recentlyViewed.map((test, index) => (
                                <div key={test.id || index} className="recent-view-item">
                                    <div className="view-item-thumb">
                                        {test.thumbnailUrl ? (
                                            <img className="thumb-img" alt={test.name} src={test.thumbnailUrl} />
                                        ) : (
                                            <div className="thumb-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--slate-200)' }}>
                                                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem', color: 'var(--slate-400)' }}>image</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="view-item-info">
                                        <p className="view-item-name">{test.name}</p>
                                        <p className="view-item-time">Recently</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p style={{ fontSize: '0.75rem', color: 'var(--slate-400)', fontStyle: 'italic' }}>No recently viewed tests.</p>
                        )}
                    </div>
                </div>

                <div className="hub-divider"></div>

                <div className="hub-section">
                    <h4 className="hub-section-title">Pinned Protocols</h4>
                    <div className="pinned-list">
                        <div className="pinned-card">
                            <div className="pinned-card-header">
                                <span className="pinned-badge badge-primary">ACL Post-Op</span>
                                <span className="material-symbols-outlined" style={{ color: 'var(--slate-400)', fontSize: '0.875rem' }}>push_pin</span>
                            </div>
                            <p className="pinned-card-title">Week 12 Return to Play</p>
                        </div>
                        <div className="pinned-card">
                            <div className="pinned-card-header">
                                <span className="pinned-badge badge-amber">Diagnostic</span>
                                <span className="material-symbols-outlined" style={{ color: 'var(--slate-400)', fontSize: '0.875rem' }}>push_pin</span>
                            </div>
                            <p className="pinned-card-title">Hip Labral Tear Cluster</p>
                        </div>
                    </div>
                </div>

                <div className="hub-section">
                    <div className="insight-card">
                        <h4 className="insight-title">Community Insight</h4>
                        <div className="insight-row">
                            <p className="insight-label">Trending in Ortho</p>
                            <p className="insight-value">Knee</p>
                        </div>
                        <div className="insight-row">
                            <p className="insight-label">Total active students</p>
                            <p className="insight-value">14.2k</p>
                        </div>
                    </div>
                </div>

                <div className="hub-divider"></div>

                <div className="hub-section">
                    <h4 className="hub-section-title">Recent Activity</h4>
                    <div className="logs-list">
                        {logs.slice(0, 3).map((log, index) => (
                            <div key={log.id || index} className="log-item">
                                <p className="log-time">{new Date(log.timestamp).toLocaleTimeString()}</p>
                                <p className="log-action">{log.action}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default ActivityHub;
