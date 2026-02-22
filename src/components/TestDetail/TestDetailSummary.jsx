const TestDetailSummary = ({ test }) => {
    return (
        <div className="modal-summary-card">
            <div className="summary-header-row">
                <div className="summary-title-mini">Clinical Summary</div>
                <span className="summary-joint-badge">
                    {test.joint}
                </span>
            </div>

            <ul className="summary-list-items">
                <li className="summary-item">
                    <span className="summary-item-icon">🎯</span>
                    <div className="summary-item-content">
                        <div className="summary-item-label">Focus</div>
                        <div className="summary-item-text">{test.purpose?.slice(0, 100)}...</div>
                    </div>
                </li>
                <li className="summary-item">
                    <span className="summary-item-icon">🧭</span>
                    <div className="summary-item-content">
                        <div className="summary-item-label">Maneuver</div>
                        <div className="summary-item-text">Standardized provocations with clinical stress application.</div>
                    </div>
                </li>
                <li className="summary-item">
                    <span className="summary-item-icon">🎬</span>
                    <div className="summary-item-content">
                        <div className="summary-item-label">Video Source</div>
                        <div className="summary-item-text">{test.youtubeUser || 'Clinical Media'}</div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default TestDetailSummary;
