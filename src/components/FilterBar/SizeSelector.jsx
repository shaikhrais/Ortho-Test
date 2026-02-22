import { LayoutGrid, Grid, Square, List } from 'lucide-react';

const SizeSelector = ({ cardSize, setCardSize }) => {
    const sizes = [
        { id: 'SMALL', icon: LayoutGrid, label: 'Small' },
        { id: 'MEDIUM', icon: Grid, label: 'Medium' },
        { id: 'LARGE', icon: Square, label: 'Large' },
        { id: 'XL', icon: List, label: 'Full' }
    ];

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
                <LayoutGrid size={12} className="text-secondary" />
                <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">
                    View Mode
                </span>
            </div>
            <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                {sizes.map(({ id, icon: Icon, label }) => (
                    <button
                        key={id}
                        onClick={() => setCardSize(id)}
                        className={`
                            px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all flex items-center gap-2
                            ${cardSize === id
                                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                : 'text-white/40 hover:bg-white/5 hover:text-white/60'}
                        `}
                        title={`Switch to ${label} view`}
                    >
                        <Icon size={14} />
                        <span className="hidden sm:inline">{label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SizeSelector;
