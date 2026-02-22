import { Download, Upload, Settings2, History } from 'lucide-react';
// Force Hash Change: V3

const DataConsole = ({
    handleExport,
    handleImportClick,
    handleFileChange,
    fileInputRef,
    onViewLogs
}) => {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
                <Settings2 size={12} className="text-secondary" />
                <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">
                    Data Console
                </span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm">
                <button
                    onClick={handleExport}
                    className="px-6 py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all flex items-center gap-3 text-secondary border border-secondary/20 hover:bg-secondary/10"
                    title="Export current database to JSON"
                >
                    <Download size={14} />
                    <span>Export</span>
                </button>
                <button
                    onClick={handleImportClick}
                    className="px-6 py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all flex items-center gap-3 text-primary border border-primary/20 hover:bg-primary/10"
                    title="Import JSON to D1 Database"
                >
                    <Upload size={14} />
                    <span>Import</span>
                </button>
                <button
                    onClick={onViewLogs}
                    className="px-6 py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all flex items-center gap-3 text-white/60 border border-white/10 hover:bg-white/5 hover:text-white"
                    title="View manual change history"
                >
                    <History size={14} />
                    <span>Logs</span>
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".json"
                    className="hidden"
                />
            </div>
        </div>
    );
};

export default DataConsole;
