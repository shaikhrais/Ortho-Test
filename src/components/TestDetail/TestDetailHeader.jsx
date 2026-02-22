import { ExternalLink, X } from 'lucide-react';

const TestDetailHeader = ({ test, onClose }) => {
    return (
        <div className="modal-header-compact">
            <div className="modal-header-info">
                <div className="modal-header-tags">
                    <span className="header-tag-pill">
                        {test.joint.toUpperCase()}
                    </span>
                    <span className="header-tag-pill-accent">
                        SPECIAL TEST
                    </span>
                </div>

                <h2 className="modal-title-main">{test.name}</h2>
                <p className="modal-subtitle-text">
                    Authoritative clinical guide for orthopaedic examination.
                </p>
            </div>

            <div className="modal-header-actions">
                <a
                    href={test.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="source-link-btn"
                >
                    Source <ExternalLink size={14} />
                </a>

                <button
                    onClick={onClose}
                    className="modal-close-btn"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

export default TestDetailHeader;
