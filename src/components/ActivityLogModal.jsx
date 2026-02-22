import { motion, AnimatePresence } from 'framer-motion';
import { X, History, Database, Clock } from 'lucide-react';

const ActivityLogModal = ({ isOpen, onClose, logs }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="modal-backdrop-fixed" style={{ zIndex: 110 }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="modal-backdrop-overlay"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="modal-container-large log-modal-width"
                >
                    <div className="modal-glow-strip" />

                    <div className="log-modal-header">
                        <div className="log-header-info">
                            <div className="log-icon-box">
                                <History size={24} />
                            </div>
                            <div className="log-title-group">
                                <h2 className="log-title-main">Database Activity</h2>
                                <p className="log-subtitle-mini">Manual Change History</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="header-close-btn"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="modal-scrollable-body no-scrollbar bg-dark-deep">
                        {logs.length === 0 ? (
                            <div className="log-empty-state">
                                <p className="log-empty-text">No manual changes recorded yet.</p>
                            </div>
                        ) : (
                            <div className="log-list-stack">
                                {logs.map((log) => (
                                    <div key={log.id} className="log-item-card">
                                        <div className="log-item-header">
                                            <div className="log-item-meta">
                                                <div className="log-item-icon-small">
                                                    <Database size={14} />
                                                </div>
                                                <div className="log-item-titles">
                                                    <div className="log-item-id">Test ID: {log.test_id}</div>
                                                    <div className="log-item-field">{log.field_name}</div>
                                                </div>
                                            </div>
                                            <div className="log-item-time">
                                                <Clock size={10} />
                                                {new Date(log.timestamp).toLocaleString()}
                                            </div>
                                        </div>
                                        <div className="log-diff-grid">
                                            <div className="log-diff-col col-old">
                                                <div className="diff-label">Old Value</div>
                                                <div className="diff-box box-old">
                                                    {log.old_value || '(empty)'}
                                                </div>
                                            </div>
                                            <div className="log-diff-col col-new">
                                                <div className="diff-label">New Value</div>
                                                <div className="diff-box box-new">
                                                    {log.new_value || '(empty)'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="log-modal-footer">
                        <p className="log-footer-text">End of Log Session</p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ActivityLogModal;
