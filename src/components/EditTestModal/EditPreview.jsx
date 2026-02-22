import { Image as ImageIcon, Play, Save } from 'lucide-react';

const EditPreview = ({
    test,
    youtubeUrl,
    thumbnailUrl,
    handleSave,
    onClose
}) => {
    return (
        <div className="edit-preview-card">
            <div className="preview-header-mini">
                <div className="preview-title-tiny">Live Console</div>
                <div className="preview-output-label">HD Render Output</div>
            </div>

            <div className="preview-content-area">
                <div className="preview-visual-card">
                    <div className="preview-media-container">
                        {thumbnailUrl ? (
                            <img
                                src={thumbnailUrl}
                                alt="Preview"
                                className="preview-img-fill"
                                onError={(e) => {
                                    e.target.src = 'https://placehold.co/900x450/141a26/94a3b8?text=INVALID+RESOURCE';
                                }}
                            />
                        ) : (
                            <div className="preview-empty-state">
                                <div className="preview-placeholder-circle">
                                    <ImageIcon size={40} />
                                </div>
                                <p className="preview-required-text">Resource Required</p>
                            </div>
                        )}

                        {/* Link Badge Overlay */}
                        {youtubeUrl && (
                            <div className="preview-link-overlay">
                                <div className="link-badge-glass">
                                    <div className="link-play-box">
                                        <Play size={16} fill="currentColor" />
                                    </div>
                                    <div className="link-url-text">
                                        {youtubeUrl}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="preview-card-body">
                        <div className="preview-title-row">
                            <h3 className="preview-item-title">
                                {test?.name || 'Unit Preview'}
                            </h3>
                            <span className="preview-tag-pill">{test?.joint || 'REGION'}</span>
                        </div>

                        <div className="preview-actions-row">
                            <button
                                onClick={handleSave}
                                className="btn-save-full"
                            >
                                <Save size={16} /> Commit Changes
                            </button>
                            <button
                                onClick={onClose}
                                className="btn-abort-selection"
                            >
                                Abort Selection
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPreview;
