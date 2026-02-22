import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const SplashScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0c0e12] flex flex-col items-center justify-center p-6"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
                <div className="relative">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-primary blur-2xl rounded-full"
                    />
                    <Activity size={64} className="text-primary relative z-10" />
                </div>

                <h2 className="mt-8 text-2xl font-black tracking-[0.3em] text-white uppercase italic">
                    Ortho<span className="text-primary not-italic">-</span>Tests
                </h2>

                <div className="mt-6 flex flex-col items-center gap-2">
                    <div className="h-1 w-48 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent"
                        />
                    </div>
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.5em] mt-2">
                        Loading Clinical Dashboard
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SplashScreen;
