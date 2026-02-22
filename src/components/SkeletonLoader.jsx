import { motion } from 'framer-motion';

const SkeletonPulse = ({ className }) => (
    <div className={`bg-white/5 rounded-lg relative overflow-hidden ${className}`}>
        <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        />
    </div>
);

const SkeletonLoader = () => {
    return (
        <div className="bg-[#12141a] rounded-3xl border border-white/5 overflow-hidden flex flex-col h-[400px]">
            <div className="aspect-video">
                <SkeletonPulse className="w-full h-full rounded-none" />
            </div>
            <div className="p-6 space-y-4 flex-grow flex flex-col">
                <SkeletonPulse className="h-6 w-3/4" />
                <div className="space-y-2">
                    <SkeletonPulse className="h-3 w-full" />
                    <SkeletonPulse className="h-3 w-5/6" />
                </div>
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                    <SkeletonPulse className="h-4 w-20" />
                    <SkeletonPulse className="h-4 w-12" />
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
