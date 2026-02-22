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
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-[1400px] h-[90vh] bg-[#0b1020] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header with Close Button */}
                        <div className="absolute top-6 right-8 z-[110]">
                            <button
                                onClick={onClose}
                                className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all active:scale-95 group"
                            >
                                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Scrollable Container for Dashboard */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            <JointDashboard joints={joints} />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default JointDashboardModal;
