import { ShieldAlert, ListChecks, CheckCircle2, X as XIcon, FileText } from 'lucide-react';

const TestDetailContent = ({ test }) => {
    return (
        <section className="modal-content-sections no-scrollbar">
            {/* Purpose Card */}
            <div className="content-card card-indigo">
                <div className="content-card-body">
                    <span className="content-card-icon icon-indigo">
                        <ShieldAlert size={20} />
                    </span>
                    <div className="content-card-text">
                        <div className="content-card-label label-indigo">CLINICAL PURPOSE</div>
                        <p className="content-card-description">
                            {test.purpose}
                        </p>
                    </div>
                </div>
            </div>

            {/* Protocol Card */}
            <div className="content-card card-amber">
                <div className="content-card-body">
                    <span className="content-card-icon icon-amber">
                        <ListChecks size={20} />
                    </span>
                    <div className="content-card-text">
                        <div className="content-card-label label-amber">PROTOCOL</div>
                        <p className="content-card-description">
                            {test.protocol}
                        </p>
                    </div>
                </div>
            </div>

            {/* Findings Accordion */}
            <div className="findings-accordion">
                <div className="accordion-header">
                    <div className="accordion-title">Diagnostic Results</div>
                    <div className="accordion-badge">Live Reference</div>
                </div>

                {/* Positive */}
                <details className="accordion-details" open>
                    <summary className="accordion-summary">
                        <div className="summary-info-group">
                            <span className="summary-icon-box icon-emerald">
                                <CheckCircle2 size={18} />
                            </span>
                            <div className="summary-label-group">
                                <div className="summary-main-label">Positive finding</div>
                                <div className="summary-sub-label">Met Criteria</div>
                            </div>
                        </div>
                        <span className="accordion-arrow">⌄</span>
                    </summary>
                    <div className="accordion-content">
                        {test.positive}
                    </div>
                </details>

                {/* Negative */}
                <details className="accordion-details">
                    <summary className="accordion-summary">
                        <div className="summary-info-group">
                            <span className="summary-icon-box icon-rose">
                                <XIcon size={18} />
                            </span>
                            <div className="summary-label-group">
                                <div className="summary-main-label">Negative finding</div>
                                <div className="summary-sub-label">Standard Base</div>
                            </div>
                        </div>
                        <span className="accordion-arrow">⌄</span>
                    </summary>
                    <div className="accordion-content">
                        {test.negative}
                    </div>
                </details>
            </div>

            {/* Clinical Notes */}
            <div className="content-card-simple">
                <div className="card-simple-header">
                    <span className="card-simple-icon">
                        <FileText size={20} />
                    </span>
                    <div className="card-simple-titles">
                        <div className="card-simple-label">Clinical Observations</div>
                        <div className="card-simple-sub">Patient safety cues</div>
                    </div>
                </div>
                <div className="card-simple-note">
                    {test.description || "Compare bilateral sides during the provocation. Ensure firm end-feel and check for concordant symptom reproduction."}
                </div>
            </div>
        </section>
    );
};

export default TestDetailContent;
