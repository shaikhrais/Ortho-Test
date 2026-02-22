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
            <div className="modal-backdrop-fixed" style={{ zIndex: 110 }}>
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
                    className="modal-container-large form-modal-wide"
                >
                    <div className="modal-glow-strip" />

                    <EditModalHeader onClose={onClose} />

                    {/* Scrollable Content Area */}
                    <div className="modal-scrollable-body no-scrollbar">
                        <div className="form-grid-layout">
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
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default EditTestModal;
