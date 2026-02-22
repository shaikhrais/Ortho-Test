import React from 'react';
import { Activity, Search, RefreshCw } from 'lucide-react';

const DashboardHeader = ({
    selectedJoint,
    setSelectedJoint,
    joints,
    searchQuery,
    setSearchQuery,
    handleReset
}) => {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0b1020]/70 border-b border-white/10">
            <div className="max-w-[1400px] mx-auto px-6 py-5">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#79a6ff] to-[#5eead4] shadow-2xl shadow-primary/20 flex items-center justify-center">
                            <Activity className="text-white" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-black tracking-tight uppercase">Joint Assessment</h1>
                            <p className="text-xs text-[#97a3e6]">Structural mappings & identification workflow</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 focus-within:border-primary/50 transition-colors">
                            <span className="text-[10px] font-black uppercase text-[#97a3e6] tracking-widest">Joint</span>
                            <select
                                value={selectedJoint}
                                onChange={(e) => setSelectedJoint(e.target.value)}
                                className="bg-transparent border-none outline-none text-sm font-bold min-w-[120px] cursor-pointer"
                            >
                                <option value="__ALL__" className="bg-[#101a33]">All Joints</option>
                                {joints.map(j => (
                                    <option key={j.id} value={j.name} className="bg-[#101a33]">{j.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 flex-grow lg:flex-grow-0 focus-within:border-primary/50 transition-colors">
                            <Search size={16} className="text-[#97a3e6]" />
                            <input
                                type="text"
                                placeholder="Search structure or test..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none outline-none text-sm font-medium w-full lg:w-[300px]"
                            />
                        </div>

                        <button
                            onClick={handleReset}
                            className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
                        >
                            <RefreshCw size={18} className="text-[#97a3e6]" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
