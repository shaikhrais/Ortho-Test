import { motion } from 'framer-motion';

const SkeletonPulse = ({ className }) => (
    <div className={`skeleton-pulse ${className}`}>
        <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="skeleton-shine"
        />
    </div>
);

const SkeletonLoader = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-media">
                <SkeletonPulse className="skeleton-media-pulse" />
            </div>
            <div className="skeleton-body">
                <SkeletonPulse className="skeleton-title-pulse" />
                <div className="skeleton-desc-group">
                    <SkeletonPulse className="skeleton-line-pulse" />
                    <SkeletonPulse className="skeleton-line-pulse-short" />
                </div>
                <div className="skeleton-footer">
                    <SkeletonPulse className="skeleton-stat-pulse" />
                    <SkeletonPulse className="skeleton-btn-pulse" />
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
