import { motion, AnimatePresence } from 'framer-motion';
import { X, History, Database, Clock } from 'lucide-react';

const ActivityLogModal = ({ isOpen, onClose, logs }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-2xl rounded-[2.5rem] border border-white/10 bg-[#161b26] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
                >
                    <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                <History className="text-primary" size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-black text-white uppercase tracking-wider">Database Activity</h2>
                                <p className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">Manual Change History</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <X size={20} className="text-white/40" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 space-y-4 styled-scrollbar">
                        {logs.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-white/30 text-sm font-medium uppercase tracking-widest italic">No manual changes recorded yet.</p>
                            </div>
                        ) : (
                            logs.map((log) => (
                                <div key={log.id} className="p-5 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
                                                <Database size={14} className="text-secondary" />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Test ID: {log.test_id}</div>
                                                <div className="text-xs font-black text-white uppercase tracking-wider mt-0.5">{log.field_name}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] text-white/30 font-bold uppercase tracking-tighter">
                                            <Clock size={10} />
                                            {new Date(log.timestamp).toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div className="space-y-1.5">
                                            <div className="text-[9px] font-black text-rose-400/50 uppercase tracking-widest ml-1">Old Value</div>
                                            <div className="p-3 rounded-2xl bg-rose-500/5 border border-rose-500/10 text-[11px] text-white/50 break-all line-clamp-2">
                                                {log.old_value || '(empty)'}
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="text-[9px] font-black text-emerald-400/50 uppercase tracking-widest ml-1">New Value</div>
                                            <div className="p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-[11px] text-white break-all line-clamp-2 font-medium">
                                                {log.new_value || '(empty)'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="p-6 border-t border-white/5 bg-white/[0.01] text-center">
                        <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">End of Log Session</p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ActivityLogModal;
