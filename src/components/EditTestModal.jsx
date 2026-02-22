import { motion, AnimatePresence } from 'framer-motion';
import { useEditTest } from '../hooks/useEditTest';
import EditModalHeader from './EditTestModal/EditModalHeader';
import EditFormFields from './EditTestModal/EditFormFields';
import EditPreview from './EditTestModal/EditPreview';

const EditTestModal = ({ test, isOpen, onClose, onSave }) => {
    const {
        youtubeUrl,
        setYoutubeUrl,
        thumbnailUrl,
        setThumbnailUrl,
        youtubeUser,
        setYoutubeUser,
        handleSave,
        pasteFromClipboard,
        useYoutubeThumb,
        clearInputs
    } = useEditTest(test, isOpen, onSave);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-[980px] rounded-[2.5rem] border border-white/10 bg-modal-gradient shadow-2xl overflow-hidden"
                >
                    {/* Top Glow Line */}
                    <div className="glow-line" />

                    <EditModalHeader onClose={onClose} />

                    {/* Scrollable Content Area */}
                    <div className="max-h-[calc(90vh-140px)] overflow-y-auto styled-scrollbar">
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                <EditFormFields
                                    youtubeUrl={youtubeUrl}
                                    setYoutubeUrl={setYoutubeUrl}
                                    thumbnailUrl={thumbnailUrl}
                                    setThumbnailUrl={setThumbnailUrl}
                                    youtubeUser={youtubeUser}
                                    setYoutubeUser={setYoutubeUser}
                                    pasteFromClipboard={pasteFromClipboard}
                                    useYoutubeThumb={useYoutubeThumb}
                                    clearInputs={clearInputs}
                                />

                                <EditPreview
                                    test={test}
                                    youtubeUrl={youtubeUrl}
                                    thumbnailUrl={thumbnailUrl}
                                    handleSave={handleSave}
                                    onClose={onClose}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default EditTestModal;
