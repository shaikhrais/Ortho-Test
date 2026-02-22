import { Search } from 'lucide-react';

const SearchSection = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="flex-grow lg:max-w-md space-y-4">
            <div className="flex items-center gap-2 px-1">
                <Search size={14} className="text-primary" />
                <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">
                    Clinical Registry Scan
                </span>
            </div>
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
                <div className="relative">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/50" size={20} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search clinical markers or region..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-base font-semibold focus:outline-none focus:border-primary/40 focus:bg-white/[0.08] transition-all placeholder:text-white/20 shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchSection;
