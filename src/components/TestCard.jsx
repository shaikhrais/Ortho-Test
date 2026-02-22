import { Pencil, Play, Info } from 'lucide-react';

const TestCard = ({ test, onClick, onEdit, size = 'MEDIUM' }) => {
    const isSmall = size === 'SMALL';
    const isLarge = size === 'LARGE';
    const isXL = size === 'XL';

    return (
        <div
            className={`
                group relative flex bg-[#12141a] rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 
                hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 cursor-pointer
                ${isXL ? 'flex-row h-64' : 'flex-col'}
            `}
            onClick={onClick}
        >
            {/* Media Header */}
            <div className={`
                relative bg-black overflow-hidden bg-gradient-to-br from-[#1c1f26] to-[#0c0e12] shrink-0
                ${isXL ? 'w-1/3 h-full' : 'aspect-video w-full'}
            `}>
                {test.thumbnailUrl ? (
                    <img
                        src={test.thumbnailUrl}
                        alt={test.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-20">
                        <Play size={isSmall ? 32 : 48} />
                    </div>
                )}

                {/* Joint Badge */}
                <div className={`absolute ${isSmall ? 'top-2 left-2' : 'top-4 left-4'} z-10 transition-transform group-hover:scale-110`}>
                    <span className={`badge-small !bg-black/40 !backdrop-blur-md ${isSmall ? '!px-2 !py-0.5 !text-[8px]' : ''}`}>
                        {test.joint}
                    </span>
                </div>

                {/* Source User Badge */}
                {test.youtubeUser && (
                    <div className={`absolute ${isSmall ? 'bottom-2 right-2' : 'bottom-4 right-4'} z-10`}>
                        <span className={`
                            px-2 py-1 rounded-md bg-secondary/20 backdrop-blur-md border border-secondary/20 font-black uppercase text-secondary tracking-tighter
                            ${isSmall ? 'text-[7px]' : 'text-[9px]'}
                        `}>
                            {test.youtubeUser}
                        </span>
                    </div>
                )}

                {/* Edit Action - Float on Hover */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit(test);
                    }}
                    className={`
                        absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl text-white/50 opacity-0 transform transition-all duration-300 
                        group-hover:opacity-100 group-hover:translate-x-0 hover:bg-primary hover:text-white hover:border-primary/50
                        ${isSmall ? 'p-1.5 translate-x-2' : 'p-2.5 translate-x-4'}
                    `}
                    title="Edit Test Media"
                >
                    <Pencil size={isSmall ? 12 : 16} />
                </button>

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center ${isSmall ? 'w-10 h-10' : 'w-16 h-16'}`}>
                        <Play size={isSmall ? 16 : 24} fill="white" className="text-white ml-1" />
                    </div>
                </div>

                {/* Glow Line Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content */}
            <div className={`flex flex-col flex-grow ${isSmall ? 'p-4' : isLarge ? 'p-8' : 'p-6'}`}>
                <h3 className={`
                    font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-1
                    ${isSmall ? 'text-sm' : isLarge ? 'text-xl' : isXL ? 'text-2xl' : 'text-lg'}
                `}>
                    {test.name}
                </h3>

                {!isSmall && (
                    <p className={`
                        text-text-dim leading-relaxed line-clamp-2 mb-6 font-medium
                        ${isLarge ? 'text-sm' : isXL ? 'text-base line-clamp-3' : 'text-xs'}
                    `}>
                        {test.purpose}
                    </p>
                )}

                <div className={`mt-auto flex items-center justify-between pt-4 border-t border-white/5 ${isSmall ? 'hidden' : ''}`}>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                        Clinical Guide
                    </span>
                    <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors">
                        <span className="text-[10px] font-bold uppercase tracking-widest">Details</span>
                        <div className={`${isXL ? 'flex gap-2' : ''}`}>
                            <Info size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestCard;
