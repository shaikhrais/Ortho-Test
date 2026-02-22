const RegionSection = ({ categories, activeTab, setActiveTab }) => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">
                    Regional Taxonomy
                </span>
            </div>
            <div className="flex flex-wrap gap-2 glass-premium p-3 rounded-[2.5rem] border border-white/5">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`
                            px-6 py-3 rounded-2xl text-[12px] font-black tracking-widest uppercase transition-all duration-300
                            ${activeTab === category
                                ? 'bg-primary text-white shadow-[0_0_40px_rgba(59,130,246,0.3)] ring-1 ring-white/20 scale-105'
                                : 'text-white/40 hover:text-white/70 hover:bg-white/5 hover:scale-[1.02]'}
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RegionSection;
