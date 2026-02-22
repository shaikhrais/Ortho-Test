import { X, Film } from 'lucide-react';

const EditModalHeader = ({ onClose }) => {
    return (
        <div className="form-modal-header">
            <div className="header-info-group">
                <div className="header-icon-box">
                    <div className="header-icon-inner">
                        <Film size={24} />
                    </div>
                </div>
                <div className="header-title-group">
                    <h2 className="header-title-text">Edit Test Media</h2>
                    <p className="header-subtitle-text">Synchronize clinical video and primary thumbnail assets.</p>
                </div>
            </div>

            <button
                onClick={onClose}
                className="header-close-btn-large"
            >
                <X size={24} />
            </button>
        </div>
    );
};

export default EditModalHeader;
