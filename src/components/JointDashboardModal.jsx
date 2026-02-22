import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import JointDashboard from './JointDashboard';

const JointDashboardModal = ({ isOpen, onClose, joints }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-backdrop-fixed" style={{ zIndex: 110 }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="modal-backdrop-overlay variant-heavy"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="modal-container-large dashboard-modal-wide"
                    >
                        {/* Header with Close Button */}
                        <div className="dashboard-modal-controls">
                            <button
                                onClick={onClose}
                                className="btn-dashboard-close"
                            >
                                <X size={24} className="close-icon-spin" />
                            </button>
                        </div>

                        {/* Scrollable Container for Dashboard */}
                        <div className="modal-scrollable-body no-scrollbar bg-dark-alt">
                            <JointDashboard joints={joints} />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default JointDashboardModal;
