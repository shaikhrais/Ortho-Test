import React from 'react';

const V2TestCard = ({ test }) => {
    return (
        <div className="v2-card group">
            <div className="v2-card-media">
                <img src={test.image} alt={test.name} className="v2-card-img" />
                <div className="v2-play-overlay">
                    <div className="v2-play-btn">
                        <span className="material-symbols-outlined text-3xl">play_arrow</span>
                    </div>
                </div>
                <div className="absolute top-3 right-3">
                    <button className={`bg-white/80 backdrop-blur-md p-1.5 rounded-lg transition-colors ${test.isBookmarked ? 'text-red-500 shadow-sm' : 'text-slate-400 hover:text-red-500'}`}>
                        <span className="material-symbols-outlined text-xl" style={test.isBookmarked ? { fontVariationSettings: "'FILL' 1" } : {}}>bookmark</span>
                    </button>
                </div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                    {test.isNew && <span className="bg-primary/90 text-white text-[10px] font-bold px-2 py-1 rounded">NEW</span>}
                    <span className="bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded">{test.duration}</span>
                </div>
            </div>

            <div className="v2-card-content">
                <div className="v2-card-header">
                    <h3 className="v2-card-title">{test.name}</h3>
                    <div className="v2-rating">
                        <span className="material-symbols-outlined text-base">grade</span>
                        <span className="v2-rating-val">{test.rating}</span>
                    </div>
                </div>
                <p className="v2-card-desc">{test.description}</p>

                <div className="v2-tag-group">
                    <span className="v2-tag">{test.region}</span>
                    <span className="v2-tag">{test.subRegion}</span>
                    <span className={`v2-tag ${test.difficulty === 'Advanced' ? 'v2-tag-accent' : test.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                        {test.difficulty}
                    </span>
                </div>

                <div className="v2-card-footer">
                    <div className="v2-stats-unit">
                        <span className="v2-stats-label">{test.sensitivity ? 'Sensitivity' : 'Specificity'}</span>
                        <span className="v2-stats-val">{test.sensitivity || test.specificity}</span>
                    </div>
                    <button className="bg-slate-900 dark:bg-primary text-white text-xs font-bold px-5 py-2 rounded-lg hover:shadow-lg transition-shadow">
                        Start Assessment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default V2TestCard;
