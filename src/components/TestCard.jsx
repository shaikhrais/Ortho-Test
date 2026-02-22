const TestCard = ({ test, onClick }) => {
    const isDone = !!test.youtubeUrl;

    const difficultyClass = {
        'Beginner': 'difficulty-beginner',
        'Intermediate': 'difficulty-intermediate',
        'Advanced': 'difficulty-advanced',
        'Expert': 'difficulty-expert'
    }[test.difficulty] || 'difficulty-default';

    return (
        <div className="test-card" onClick={onClick}>
            <div className="card-media">
                {test.thumbnailUrl ? (
                    <img className="card-thumb" alt={test.name} src={test.thumbnailUrl} />
                ) : (
                    <div className="card-thumb-placeholder">
                        <span className="material-symbols-outlined">orthopedics</span>
                    </div>
                )}

                <div className="card-overlay">
                    <div className="play-btn-float">
                        <span className="material-symbols-outlined">play_arrow</span>
                    </div>
                </div>

                <div className="card-bookmark">
                    <button className="bookmark-btn">
                        <span className="material-symbols-outlined">bookmark</span>
                    </button>
                </div>

                <div className="card-badges">
                    {test.isNew && <span className="badge-new">NEW</span>}
                    <span className="badge-duration">
                        {test.duration || '3:45'}
                    </span>
                </div>
            </div>

            <div className="card-body">
                <div className="card-header">
                    <h3 className="card-title">{test.name}</h3>
                    <div className="card-rating">
                        <span className="material-symbols-outlined">grade</span>
                        <span className="rating-value">{test.rating || '4.9'}</span>
                    </div>
                </div>

                <p className="card-description">
                    {test.purpose || 'Clinical assessment protocol for specialized orthopedic evaluation.'}
                </p>

                <div className="card-tags">
                    <span className="tag">{test.joint}</span>
                    <span className="tag">{test.category || 'Clinical'}</span>
                    <span className={`tag ${difficultyClass}`}>
                        {test.difficulty}
                    </span>
                </div>

                <div className="card-footer">
                    <div className="stat-group">
                        <span className="stat-label">
                            {test.sensitivity ? 'Sensitivity' : 'Specificity'}
                        </span>
                        <span className="stat-value">
                            {test.sensitivity || test.specificity || '85%'}
                        </span>
                    </div>
                    <button className="btn-assess">
                        Start Assessment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestCard;
