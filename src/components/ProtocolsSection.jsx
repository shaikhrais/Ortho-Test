const protocols = [
    {
        id: 1,
        title: "Shoulder Instability Series",
        description: "Comprehensive 5-test protocol for SLAP lesions.",
        duration: "12 mins",
        views: "2.4k views",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM1sSlZDVQM3J5jimJR-rJm9aN6KuMEgpQOkfypsxEc_4s729knD0r4ZybG9kLEL_DM-q8IFsHvUz6FA_apxVxGmDNzOP0p0PADP0E7V8VBfJYA9LMy1ckCBG3-qZ5IPPcSL8kmKOL-dVQgiHj8AWLTZlV2tZzqbs9D7mhpoDAlj9xlpGXrIXjbf1QoQgsEdXzpQ5bOZHUyGhjWkgSqS852pNWLFLbZU1p22-MDDHpPfDltJ7KaMRDhF1DPIq0wY4qWK9EyfkJHA"
    },
    {
        id: 2,
        title: "Lumbar Spine Screening",
        description: "Advanced neurologic evaluation for radiculopathy.",
        duration: "18 mins",
        views: "1.8k views",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH0T24BAl0zue2OfvXhp28IcdDhaDRLovSz9vfoZ1EaUx1RylJyN7hKYT8CnRmoy4dP4r6ZiQaozr4UlQCkqgQGdvlcPMs_VQmHeNj5xv0oDab4lNkmr6dY_oIupMyNVMljDPOTmKr2vpHmKHhfL-bdnsYjaTqGJOoH6v51BqRiWkyj7CvtWlxCD3UAr4kMQGfl0O6np0RIGWm37iUnRxsCkL08uJbeK5NLs7l6bSqxO1pDbWQCO1ENg3jVSc7ICzHVFKWOYwdjQ"
    }
];

const ProtocolsSection = () => {
    return (
        <section className="protocols-section">
            <div className="section-header">
                <h3 className="section-title">Clinical Protocols</h3>
                <button className="view-all-btn">
                    View all <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
            <div className="protocols-grid">
                {protocols.map(protocol => (
                    <div key={protocol.id} className="protocol-card">
                        <div className="protocol-image-container">
                            <img className="protocol-img" alt={protocol.title} src={protocol.image} />
                        </div>
                        <div className="protocol-content">
                            <h4 className="protocol-title">{protocol.title}</h4>
                            <p className="protocol-desc">{protocol.description}</p>
                            <div className="protocol-footer">
                                <span className="protocol-meta">
                                    <span className="material-symbols-outlined">timer</span> {protocol.duration}
                                </span>
                                <span className="protocol-meta">
                                    <span className="material-symbols-outlined">groups</span> {protocol.views}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProtocolsSection;
