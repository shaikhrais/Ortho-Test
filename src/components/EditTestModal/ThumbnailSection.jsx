import React from 'react';
import { Image as ImageIcon, Film, RotateCcw } from 'lucide-react';

const ThumbnailSection = ({
    thumbnailUrl, setThumbnailUrl,
    pasteFromClipboard,
    useYoutubeThumb,
    clearInputs
}) => {
    return (
        <div className="form-sub-section">
            <div className="field-group">
                <label className="field-label">
                    <span className="field-label-icon">
                        <ImageIcon size={12} />
                    </span>
                    Static Thumbnail
                </label>
                <div className="input-with-action">
                    <input
                        type="text"
                        value={thumbnailUrl}
                        onChange={(e) => setThumbnailUrl(e.target.value)}
                        className="form-input"
                        placeholder="/thumbnails/test.jpg or URL"
                    />
                    <button
                        type="button"
                        onClick={() => pasteFromClipboard(setThumbnailUrl)}
                        className="btn-input-action"
                    >
                        Paste
                    </button>
                </div>
            </div>

            <div className="form-action-grid">
                <button
                    type="button"
                    onClick={useYoutubeThumb}
                    className="btn-form-action-card"
                >
                    <Film size={20} className="action-card-icon-primary" />
                    <span className="action-card-label">Fetch High-Res</span>
                </button>

                <button
                    type="button"
                    onClick={clearInputs}
                    className="btn-form-action-card"
                >
                    <RotateCcw size={20} className="action-card-icon-danger" />
                    <span className="action-card-label">Clear Inputs</span>
                </button>
            </div>
        </div>
    );
};

export default ThumbnailSection;
