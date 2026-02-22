import { motion, AnimatePresence } from 'framer-motion';
import TestDetailHeader from './TestDetail/TestDetailHeader';
import TestDetailMedia from './TestDetail/TestDetailMedia';
import TestDetailSummary from './TestDetail/TestDetailSummary';
import TestDetailContent from './TestDetail/TestDetailContent';
import TestDetailFooter from './TestDetail/TestDetailFooter';

const TestDetail = ({ test, onClose, onEdit }) => {
    if (!test) return null;

    return (
        <AnimatePresence>
            <div className="modal-backdrop-fixed">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="modal-backdrop-overlay"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="modal-container-large"
                >
                    <div className="modal-glow-strip" />

                    <TestDetailHeader
                        test={test}
                        onClose={onClose}
                    />

                    {/* Scrollable Body */}
                    <div className="modal-scrollable-body no-scrollbar">
                        <div className="modal-grid-layout">
                            {/* LEFT COLUMN */}
                            <aside className="modal-sidebar-left">
                                <TestDetailMedia
                                    test={test}
                                    onEdit={onEdit}
                                />
                                <TestDetailSummary
                                    test={test}
                                />
                            </aside>

                            {/* RIGHT COLUMN */}
                            <main className="modal-main-content">
                                <TestDetailContent
                                    test={test}
                                />
                            </main>
                        </div>
                    </div>

                    <TestDetailFooter
                        test={test}
                        onEdit={onEdit}
                    />
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default TestDetail;
