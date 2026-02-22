import { Pencil } from 'lucide-react';

const TestDetailFooter = ({ test, onEdit }) => {
    return (
        <div className="modal-footer-glass">
            <div className="footer-reliability-tag">
                Diagnostic Reliability: <span className="reliability-value">High (Standard Protocol)</span>
            </div>

            <div className="footer-actions-group">
                <a
                    href={test.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-btn-outline"
                >
                    Original Source ↗
                </a>

                <button
                    onClick={() => onEdit(test)}
                    className="footer-btn-accent"
                >
                    <Pencil size={14} className="edit-icon-hover" /> Edit Media
                </button>
            </div>
        </div>
    );
};

export default TestDetailFooter;
