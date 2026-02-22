import React from 'react';
import '../../styles/v2.css';

const DashboardV2 = () => {
    return (
        <div className="v2-app-shell">
            {/* Global Header */}
            <header className="v2-header">
                <div className="v2-logo-group">
                    <div className="flex items-center gap-3">
                        <div className="v2-logo-box">
                            <span className="material-symbols-outlined">orthopedics</span>
                        </div>
                        <h1 className="v2-logo-text">OrthoTests</h1>
                    </div>
                    <nav className="v2-nav-links">
                        <a className="v2-nav-link active" href="#">Tests</a>
                        <a className="v2-nav-link" href="#">Categories</a>
                        <a className="v2-nav-link" href="#">Library</a>
                        <a className="v2-nav-link" href="#">About</a>
                    </nav>
                </div>
                <div className="v2-search-container">
                    <div className="v2-search-box">
                        <span className="material-symbols-outlined v2-search-icon">search</span>
                        <input className="v2-search-input" placeholder="Search tests, symptoms, or regions (Cmd + K)" type="text" />
                    </div>
                </div>
                <div className="v2-header-actions">
                    <button className="v2-notif-btn">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="v2-notif-dot"></span>
                    </button>
                    <div className="v2-divider-v mx-1"></div>
                    <div className="v2-profile-group">
                        <div className="v2-profile-text text-right">
                            <p className="v2-profile-name">Dr. Smith</p>
                            <p className="v2-profile-role">Senior Resident</p>
                        </div>
                        <div className="v2-avatar">
                            <img alt="Doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASALPAElCptB9b0yh0VZSqPS4q9y-F_jiab-r32q3ClvVfw9_HqSKd6gZ153nAMzUxdSswg4MtjCozqdeOjOICMikv9AX5lScOP2SXn_HNw6wLGj9M2HJDbet_N5DvO0HM0xAmmjkoGF5CanIubsVumpElgvG3LlhiSZO1RUats41KQ-7Wu0Px-CuLNv6NnWKp3sPvfeJERiFwTotsOjFLHNbeORn7auGQ42kmM7juHzs6UjbrwDzxrwFAOykQNMkI0dRthP9g-g" />
                        </div>
                    </div>
                </div>
            </header>

            <div className="v2-main-layout">
                {/* Left Navigation Rail */}
                <aside className="v2-nav-rail no-scrollbar">
                    <div className="v2-rail-items">
                        <div className="v2-rail-item active">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span className="v2-rail-label">Dashboard</span>
                        </div>
                        <div className="v2-rail-item">
                            <span className="material-symbols-outlined">medical_services</span>
                            <span className="v2-rail-label">All Tests</span>
                        </div>
                        <div className="v2-rail-item">
                            <span className="material-symbols-outlined">bookmark</span>
                            <span className="v2-rail-label">My Library</span>
                        </div>
                        <div className="v2-rail-item">
                            <span className="material-symbols-outlined">workspace_premium</span>
                            <span className="v2-rail-label">Certificates</span>
                        </div>
                    </div>
                    <div className="v2-rail-section">
                        <h3 className="v2-section-title">Your Progress</h3>
                        <div className="v2-progress-card">
                            <div className="v2-progress-header">
                                <span className="v2-progress-label">Lower Limb</span>
                                <span className="v2-progress-val">75%</span>
                            </div>
                            <div className="v2-progress-bar-bg">
                                <div className="v2-progress-bar-fill" style={{ width: '75%' }}></div>
                            </div>
                            <p className="v2-progress-tip">12 of 16 tests completed</p>
                        </div>
                    </div>
                    <div className="v2-rail-footer">
                        <div className="v2-rail-item">
                            <span className="material-symbols-outlined">help</span>
                            <span className="v2-rail-label">Help Center</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="v2-content-area no-scrollbar">
                    <div className="v2-welcome-row">
                        <div>
                            <h2 className="v2-welcome-title">Welcome back, Dr. Smith</h2>
                            <p className="v2-welcome-desc">Ready to refine your clinical assessment skills today?</p>
                        </div>
                        <div className="v2-btn-group">
                            <button className="v2-btn v2-btn-ghost">
                                <span className="material-symbols-outlined">history</span>
                                Review History
                            </button>
                            <button className="v2-btn v2-btn-primary">
                                Resume Last Module
                            </button>
                        </div>
                    </div>

                    <section className="v2-filter-strip no-scrollbar">
                        <div className="v2-filter-row">
                            <div className="v2-filter-tabs">
                                <button className="v2-filter-tab active">All</button>
                                <button className="v2-filter-tab">Shoulder</button>
                                <button className="v2-filter-tab">Knee</button>
                                <button className="v2-filter-tab">Hip</button>
                                <button className="v2-filter-tab">Spine</button>
                                <button className="v2-filter-tab">Wrist/Hand</button>
                            </div>
                            <div className="v2-filter-controls">
                                <div className="v2-select-box">
                                    <span className="v2-select-label">Difficulty</span>
                                    <select className="v2-select">
                                        <option>Expert</option>
                                        <option>Intermediate</option>
                                        <option>Beginner</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="v2-stats-label !lowercase !font-bold">Trending</span>
                                    <button className="v2-trending-btn">
                                        <div className="v2-trending-thumb"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="v2-tests-grid">
                        <V2TestCard
                            test={{
                                name: "Finkelstein's Test",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCjucI9X4KNaOSmz3Xug-f4ft6n8GZ3-OjNsFn4D13AgvRQnTwMcFy-YHRsNIr3ZX85GUeBcz53twAdlv2R5Fu7g0ELHLQ7ROtDxJ10HJhEegH_LY9u-sPwd-UnkfbuCEMNQjpX421_Ua-HowSleYFepkFgSpfUTPzg92RSG_Kdi-kTvOIlxFP0KC-QpbKuOptjN8R939_dTqKOIZVKC8OVeLu5fdAbVE5o6hUn83xxctGaWPUKQG0ie6DAK5JK3Mwz6Sk66BTyw",
                                rating: 4.9,
                                desc: "Assessment for De Quervain's tenosynovitis in patients with radial wrist pain.",
                                region: "Wrist",
                                sub: "De Quervain",
                                diff: "Advanced",
                                sent: "89%",
                                duration: "3:45",
                                isNew: true
                            }}
                        />
                        <V2TestCard
                            test={{
                                name: "Lachman Test",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoV_Mp1J4DTv_T3sBG02p6wxXJaFKCyhkIgkUXnTOaayqRf19cx75stv5Wc20lG5rW2Y6Pkt38qdRCZDQyUeuXrtVz02JGwHbXVCFo8Tm1QHyiK76KgCvdawjCV5lw8Tzv17_7MYoaKEdM1uZSLyWiueH04iyjL5zpcfi7Xg0S-WO6FRqBaLUQKH7IKHjwabZg5e1CByevLODYX-vXbRjdYznmaw_Ppx1af762st4FpXZ7vUP_v8ja7uhf_Fb2nkOJt40YUQx91Q",
                                rating: 5.0,
                                desc: "The gold standard clinical test for detecting ACL deficiency in the knee.",
                                region: "Knee",
                                sub: "Ligament",
                                diff: "Intermediate",
                                sent: "95%",
                                duration: "5:12",
                                isBookmarked: true
                            }}
                        />
                        <V2TestCard
                            test={{
                                name: "Neer's Impingement",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Oi26JvB_l078gmfJyfpPBumGNmLaL0Kh8w8RQayHjMG3eJ8ZVkul_TTVSKgBvhTCou8Bw2H9S_z0CnS-hz6lZ6gtevH9O1mjpWwMBTo3mvva-pORBG3jhfrFTe8nFKussyl-BjzROFvrwkL_rdu3V6gM4UEeaPvM9R2pXK-ryaNgL7oEc3lwqHC4lFDdsJ-DstJj35oriRsiQ08l7qB6_IrjJF_uZw9qvd5VD9nXDRVJkW3xa90seKhGqeTlgekWwnbzZ2tMnw",
                                rating: 4.7,
                                desc: "Clinical evaluation for subacromial impingement syndrome of the shoulder.",
                                region: "Shoulder",
                                sub: "Stability",
                                diff: "Beginner",
                                sent: "53%",
                                duration: "4:20"
                            }}
                        />
                    </div>

                    <div className="v2-section-header">
                        <h3 className="v2-section-main-title">Clinical Protocols</h3>
                        <button className="v2-view-all-btn">
                            View all <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                    <div className="v2-protocol-grid">
                        <V2ProtocolItem
                            title="Shoulder Instability Series"
                            desc="Comprehensive 5-test protocol for SLAP lesions."
                            time="12 mins"
                            views="2.4k"
                            img="https://lh3.googleusercontent.com/aida-public/AB6AXuCM1sSlZDVQM3J5jimJR-rJm9aN6KuMEgpQOkfypsxEc_4s729knD0r4ZybG9kLEL_DM-q8IFsHvUz6FA_apxVxGmDNzOP0p0PADP0E7V8VBfJYA9LMy1ckCBG3-qZ5IPPcSL8kmKOL-dVQgiHj8AWLTZlV2tZzqbs9D7mhpoDAlj9xlpGXrIXjbf1QoQgsEdXzpQ5bOZHUyGhjWkgSqS852pNWLFLbZU1p22-MDDHpPfDltJ7KaMRDhF1DPIq0wY4qWK9EyfkJHA"
                        />
                        <V2ProtocolItem
                            title="Lumbar Spine Screening"
                            desc="Advanced neurologic evaluation for radiculopathy."
                            time="18 mins"
                            views="1.8k"
                            img="https://lh3.googleusercontent.com/aida-public/AB6AXuAH0T24BAl0zue2OfvXhp28IcdDhaDRLovSz9vfoZ1EaUx1RylJyN7hKYT8CnRmoy4dP4r6ZiQaozr4UlQCkqgQGdvlcPMs_VQmHeNj5xv0oDab4lNkmr6dY_oIupMyNVMljDPOTmKr2vpHmKHhfL-bdnsYjaTqGJOoH6v51BqRiWkyj7CvtWlxCD3UAr4kMQGfl0O6np0RIGWm37iUnRxsCkL08uJbeK5NLs7l6bSqxO1pDbWQCO1ENg3jVSc7ICzHVFKWOYwdjQ"
                        />
                    </div>
                </main>

                {/* Right Sidebar */}
                <aside className="v2-sidebar no-scrollbar">
                    <div className="v2-sidebar-inner">
                        <h3 className="v2-sidebar-title">
                            Activity Hub
                            <span className="material-symbols-outlined">history</span>
                        </h3>
                        <div className="v2-hub-section">
                            <div>
                                <h4 className="v2-section-title">Recently Viewed</h4>
                                <div className="v2-hub-list">
                                    <V2ActivityItem title="Hawkins-Kennedy" time="45 mins ago" img="https://lh3.googleusercontent.com/aida-public/AB6AXuBTtiLkIkNxvn0pfQgGkZbqU-av5rPYzBSOe9NHHTVmn0AwiA0YZP__pboNOBh_arWxFVwFyaFsdGCM_EmN628qpoNd2lIE7NULbAAS4e5PxrlTcW3OWh5DOFp8MQWtP6zV9no-vzQmqDuTkHKFzxdFgZazKGgcaJgiuoUScGVGhq18nwozZxeKTaWmtko5rZAY-E7OeMu8SZUmDTLYpzd7M9H3a7T8SG3PcCOpVA4miXjHj3DPUZ1X1DdibQl98pphKJAYYORT8w" />
                                    <V2ActivityItem title="McMurray Test" time="2 hours ago" img="https://lh3.googleusercontent.com/aida-public/AB6AXuCdFLBwXOwLrv7haQ0UY-XHbcbEtMG4sEBJ9m-1BXxfF0CKOy1OKzAuI2PiSOH1T0IKbXurZak4BPsEBHCjoIE-6NcnMipaKi7AvK_e50jMAjJWSGaZot310kIy9hiV0oTCKOmxUDN-lU1BwpNk9vFq_2l4feqr2Vpm2_OVq0kMB-dniyV9_Lq_p-KZ0Ghz5PeJuz-e_82QMa_YIjRKCzgREZJqeP0oyY0FmOQ5A-VgvItFsgHY-EM8_VUyxmGlBbJAFJBIdLQNRA" />
                                </div>
                            </div>
                            <div className="v2-divider"></div>
                            <div>
                                <h4 className="v2-section-title">Pinned Protocols</h4>
                                <div className="v2-pinned-list">
                                    <V2PinnedCard label="ACL Post-Op" title="Week 12 Return to Play" active />
                                    <V2PinnedCard label="Diagnostic" title="Hip Labral Tear Cluster" warning />
                                </div>
                            </div>
                            <div className="v2-insight-card">
                                <h4 className="v2-section-title !text-primary !p-0 !mb-3">Community Insight</h4>
                                <div className="v2-insight-row">
                                    <p className="v2-insight-text">Trending in Ortho</p>
                                    <p className="v2-insight-val">Knee</p>
                                </div>
                                <div className="v2-insight-row">
                                    <p className="v2-insight-text">Total active students</p>
                                    <p className="v2-insight-val">14.2k</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Mobile Nav */}
            <nav className="v2-mobile-nav">
                <button className="v2-m-nav-item active">
                    <span className="material-symbols-outlined">dashboard</span>
                    <span className="v2-m-nav-label">Dash</span>
                </button>
                <button className="v2-m-nav-item">
                    <span className="material-symbols-outlined">search</span>
                    <span className="v2-m-nav-label">Explore</span>
                </button>
                <button className="v2-m-nav-item">
                    <span className="material-symbols-outlined">bookmark</span>
                    <span className="v2-m-nav-label">Library</span>
                </button>
                <button className="v2-m-nav-item">
                    <span className="material-symbols-outlined">person</span>
                    <span className="v2-m-nav-label">Profile</span>
                </button>
            </nav>
        </div>
    );
};

const V2TestCard = ({ test }) => (
    <div className="v2-card group">
        <div className="v2-card-media">
            <img className="v2-card-img" src={test.image} alt={test.name} />
            <div className="v2-play-overlay">
                <div className="v2-play-btn">
                    <span className="material-symbols-outlined">play_arrow</span>
                </div>
            </div>
            <button className={`v2-bookmark-btn ${test.isBookmarked ? 'active' : ''}`}>
                <span className="material-symbols-outlined" style={test.isBookmarked ? { fontVariationSettings: "'FILL' 1" } : {}}>bookmark</span>
            </button>
            <div className="v2-card-badges">
                {test.isNew && <span className="v2-badge">NEW</span>}
                <span className="v2-badge v2-badge-time">{test.duration}</span>
            </div>
        </div>
        <div className="v2-card-content">
            <div className="v2-card-header">
                <h3 className="v2-card-title">{test.name}</h3>
                <div className="v2-rating">
                    <span className="material-symbols-outlined">grade</span>
                    <span className="v2-rating-val">{test.rating}</span>
                </div>
            </div>
            <p className="v2-card-desc">{test.desc}</p>
            <div className="v2-tag-group">
                <span className="v2-tag">{test.region}</span>
                <span className="v2-tag">{test.sub}</span>
                <span className={`v2-tag ${test.diff === 'Advanced' ? 'v2-tag-accent' : test.diff === 'Intermediate' ? 'v2-tag-warning' : 'v2-tag-success'}`}>{test.diff}</span>
            </div>
            <div className="v2-card-footer">
                <div className="v2-stats-unit">
                    <span className="v2-stats-label">Sensitivity</span>
                    <span className="v2-stats-val">{test.sent}</span>
                </div>
                <button className="v2-card-action-btn">Start Assessment</button>
            </div>
        </div>
    </div>
);

const V2ProtocolItem = ({ title, desc, time, views, img }) => (
    <div className="v2-protocol-card group">
        <div className="v2-protocol-thumb">
            <img src={img} alt={title} />
        </div>
        <div className="v2-protocol-info">
            <h4 className="v2-protocol-title">{title}</h4>
            <p className="v2-protocol-desc">{desc}</p>
            <div className="v2-protocol-meta">
                <div className="v2-meta-item">
                    <span className="material-symbols-outlined">timer</span> {time}
                </div>
                <div className="v2-meta-item">
                    <span className="material-symbols-outlined">groups</span> {views} views
                </div>
            </div>
        </div>
    </div>
);

const V2ActivityItem = ({ title, time, img }) => (
    <div className="v2-hub-item">
        <div className="v2-hub-thumb">
            <img src={img} alt={title} />
        </div>
        <div className="v2-hub-info">
            <p className="v2-hub-name">{title}</p>
            <p className="v2-hub-time">{time}</p>
        </div>
    </div>
);

const V2PinnedCard = ({ title, label, active, warning }) => (
    <div className="v2-pinned-card">
        <div className="v2-pinned-header">
            <span className={`v2-pinned-badge ${active ? 'v2-tag-accent' : warning ? 'v2-tag-warning' : 'bg-slate-100'}`}>{label}</span>
            <span className="material-symbols-outlined text-sm text-slate-400">push_pin</span>
        </div>
        <p className="v2-pinned-label">{title}</p>
    </div>
);

export default DashboardV2;
