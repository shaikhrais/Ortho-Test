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
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-[min(1200px,94vw)] max-h-[90vh] overflow-hidden rounded-3xl border border-white/10 bg-modal-gradient shadow-2xl"
                >
                    {/* Top Glow Line */}
                    <div className="glow-line" />

                    <TestDetailHeader
                        test={test}
                        onClose={onClose}
                    />

                    {/* Body: Scrollable Area */}
                    <div className="max-h-[calc(90vh-160px)] overflow-auto styled-scrollbar">
                        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* LEFT: Video + Quick Summary */}
                            <aside className="lg:col-span-5 space-y-6">
                                <TestDetailMedia
                                    test={test}
                                    onEdit={onEdit}
                                />
                                <TestDetailSummary
                                    test={test}
                                />
                            </aside>

                            {/* RIGHT: Detailed Content Sections */}
                            <TestDetailContent
                                test={test}
                            />
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
