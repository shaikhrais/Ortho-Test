import React from 'react';

const V2ProtocolsGrid = () => {
    return (
        <>
            <div className="v2-section-row">
                <h3 className="text-xl font-black">Clinical Protocols</h3>
                <button className="text-primary text-sm font-bold flex items-center gap-1">
                    View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>

            <div className="v2-protocol-grid">
                <div className="v2-protocol-card group">
                    <div className="v2-protocol-thumb">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM1sSlZDVQM3J5jimJR-rJm9aN6KuMEgpQOkfypsxEc_4s729knD0r4ZybG9kLEL_DM-q8IFsHvUz6FA_apxVxGmDNzOP0p0PADP0E7V8VBfJYA9LMy1ckCBG3-qZ5IPPcSL8kmKOL-dVQgiHj8AWLTZlV2tZzqbs9D7mhpoDAlj9xlpGXrIXjbf1QoQgsEdXzpQ5bOZHUyGhjWkgSqS852pNWLFLbZU1p22-MDDHpPfDltJ7KaMRDhF1DPIq0wY4qWK9EyfkJHA" alt="Protocol thumbnail" />
                    </div>
                    <div className="v2-protocol-info">
                        <h4 className="v2-protocol-title uppercase">Shoulder Instability Series</h4>
                        <p className="v2-protocol-desc">Comprehensive 5-test protocol for SLAP lesions.</p>
                        <div className="v2-protocol-meta">
                            <div className="v2-meta-item">
                                <span className="material-symbols-outlined text-xs">timer</span>
                                12 mins
                            </div>
                            <div className="v2-meta-item">
                                <span className="material-symbols-outlined text-xs">groups</span>
                                2.4k views
                            </div>
                        </div>
                    </div>
                </div>

                <div className="v2-protocol-card group">
                    <div className="v2-protocol-thumb">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH0T24BAl0zue2OfvXhp28IcdDhaDRLovSz9vfoZ1EaUx1RylJyN7hKYT8CnRmoy4dP4r6ZiQaozr4UlQCkqgQGdvlcPMs_VQmHeNj5xv0oDab4lNkmr6dY_oIupMyNVMljDPOTmKr2vpHmKHhfL-bdnsYjaTqGJOoH6v51BqRiWkyj7CvtWlxCD3UAr4kMQGfl0O6np0RIGWm37iUnRxsCkL08uJbeK5NLs7l6bSqxO1pDbWQCO1ENg3jVSc7ICzHVFKWOYwdjQ" alt="Protocol thumbnail" />
                    </div>
                    <div className="v2-protocol-info">
                        <h4 className="v2-protocol-title uppercase">Lumbar Spine Screening</h4>
                        <p className="v2-protocol-desc">Advanced neurologic evaluation for radiculopathy.</p>
                        <div className="v2-protocol-meta">
                            <div className="v2-meta-item">
                                <span className="material-symbols-outlined text-xs">timer</span>
                                18 mins
                            </div>
                            <div className="v2-meta-item">
                                <span className="material-symbols-outlined text-xs">groups</span>
                                1.8k views
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default V2ProtocolsGrid;
