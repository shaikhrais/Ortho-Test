import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const SplashScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="splash-screen"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="splash-container"
            >
                <div className="splash-icon-wrapper">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="splash-glow"
                    />
                    <Activity size={64} className="splash-icon" />
                </div>

                <h2 className="splash-title">
                    Ortho<span className="splash-title-accent">-</span>Tests
                </h2>

                <div className="splash-loading-group">
                    <div className="loader-track">
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            className="loader-bar"
                        />
                    </div>
                    <p className="loader-text">
                        Loading Clinical Dashboard
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SplashScreen;
