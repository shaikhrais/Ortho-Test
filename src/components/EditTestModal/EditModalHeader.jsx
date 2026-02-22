import { X, Film } from 'lucide-react';

const EditModalHeader = ({ onClose }) => {
    return (
        <div className="flex items-start justify-between gap-4 px-8 py-6 border-b border-white/5">
            <div className="min-w-0">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center shadow-inner">
                        <Film size={24} className="text-white/70" />
                    </div>
                    <div className="min-w-0">
                        <h2 className="text-2xl font-black tracking-tight uppercase italic">Edit Test Media</h2>
                        <p className="text-sm text-white/50 font-medium">Synchronize clinical video and primary thumbnail assets.</p>
                    </div>
                </div>
            </div>

            <button
                onClick={onClose}
                className="rounded-2xl border border-white/20 bg-white/10 p-3.5 text-white hover:bg-white/20 transition-all active:scale-90 shadow-lg"
            >
                <X size={24} />
            </button>
        </div>
    );
};

export default EditModalHeader;
