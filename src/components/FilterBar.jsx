const FilterBar = ({
    categories = [],
    activeTab, setActiveTab,
    difficulty, setDifficulty,
    isTrending, setIsTrending
}) => {
    return (
        <section className="filter-bar no-scrollbar">
            <div className="filter-bar-content">
                <div className="category-list">
                    <button
                        onClick={() => setActiveTab('All')}
                        className={`category-btn ${activeTab === 'All' ? 'category-btn-active' : ''}`}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`category-btn ${activeTab === category ? 'category-btn-active' : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="filter-controls">
                    <div className="difficulty-select-wrapper">
                        <span className="select-label">Difficulty</span>
                        <select
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                            className="difficulty-select"
                        >
                            <option value="All">All</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                            <option value="Expert">Expert</option>
                        </select>
                    </div>

                    <div className="trending-toggle-group">
                        <span className="trending-label">Trending</span>
                        <button
                            onClick={() => setIsTrending(!isTrending)}
                            className={`toggle-switch ${isTrending ? 'toggle-on' : 'toggle-off'}`}
                        >
                            <div className={`toggle-knob ${isTrending ? 'knob-on' : 'knob-off'}`}></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterBar;
