import React from 'react';
import { Film } from 'lucide-react';

const YoutubeSection = ({
    youtubeUrl, setYoutubeUrl,
    youtubeUser, setYoutubeUser,
    pasteFromClipboard
}) => {
    return (
        <div className="form-sub-section">
            <div className="field-group">
                <label className="field-label">
                    <span className="field-label-icon">
                        <Film size={12} />
                    </span>
                    YouTube Resource
                </label>
                <div className="input-with-action">
                    <input
                        type="url"
                        value={youtubeUrl}
                        onChange={(e) => setYoutubeUrl(e.target.value)}
                        className="form-input"
                        placeholder="https://www.youtube.com/watch?v=..."
                    />
                    <button
                        type="button"
                        onClick={() => pasteFromClipboard(setYoutubeUrl)}
                        className="btn-input-action"
                    >
                        Paste
                    </button>
                </div>
                <p className="field-help-text">
                    Paste ID or full URL for clinical preview.
                </p>
            </div>

            <div className="field-group">
                <label className="field-label">
                    <span className="field-label-icon icon-secondary">
                        <Film size={12} />
                    </span>
                    Source / Channel
                </label>
                <input
                    type="text"
                    value={youtubeUser}
                    onChange={(e) => setYoutubeUser(e.target.value)}
                    className="form-input"
                    placeholder="Channel Name"
                />
            </div>
        </div>
    );
};

export default YoutubeSection;
