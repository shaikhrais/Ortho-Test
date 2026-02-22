const StatusSection = ({ activeStatus, setActiveStatus, doneCount, pendingCount }) => {
    const statuses = [
        { id: 'ALL', label: 'All', count: doneCount + pendingCount },
        { id: 'DONE', label: 'Done', count: doneCount, color: 'text-secondary' },
        { id: 'PENDING', label: 'Pending', count: pendingCount, color: 'text-rose-400' }
    ];

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
                <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">
                    Database Status
                </span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm">
                {statuses.map((status) => (
                    <button
                        key={status.id}
                        onClick={() => setActiveStatus(status.id)}
                        className={`
                            px-6 py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all flex items-center gap-3
                            ${activeStatus === status.id
                                ? 'bg-white/10 text-white shadow-[0_0_30px_rgba(255,255,255,0.05)] ring-1 ring-white/20'
                                : 'text-white/30 hover:text-white/60 hover:bg-white/[0.02]'}
                        `}
                    >
                        <span>{status.label}</span>
                        <span className={`px-2.5 py-1 rounded-lg bg-black/60 ${status.color || 'text-white/20'} font-mono text-[11px]`}>
                            {status.count}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StatusSection;
