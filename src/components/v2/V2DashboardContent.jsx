import React from 'react';
import V2TestCard from './V2TestCard';
import V2ProtocolsGrid from './V2ProtocolsGrid';

const V2DashboardContent = ({ user }) => {
    return (
        <main className="v2-content-area no-scrollbar">
            <div className="v2-welcome-row">
                <div>
                    <h2 className="v2-welcome-title">Welcome back, {user.name}</h2>
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
                        <div className="v2-trending-toggle flex items-center gap-3">
                            <span className="text-xs font-bold text-slate-500">Trending</span>
                            <div className="relative w-10 h-5 bg-primary/20 rounded-full cursor-pointer">
                                <div className="absolute left-1 top-1 w-3 h-3 bg-primary rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="v2-tests-grid">
                <V2TestCard
                    test={{
                        name: "Finkelstein's Test",
                        description: "Assessment for De Quervain's tenosynovitis in patients with radial wrist pain.",
                        region: "Wrist",
                        subRegion: "De Quervain",
                        difficulty: "Advanced",
                        rating: 4.9,
                        sensitivity: "89%",
                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCjucI9X4KNaOSmz3Xug-f4ft6n8GZ3-OjNsFn4D13AgvRQnTwMcFy-YHRsNIr3ZX85GUeBcz53twAdlv2R5Fu7g0ELHLQ7ROtDxJ10HJhEegH_LY9u-sPwd-UnkfbuCEMNQjpX421_Ua-HowSleYFepkFgSpfUTPzg92RSG_Kdi-kTvOIlxFP0KC-QpbKuOptjN8R939_dTqKOIZVKC8OVeLu5fdAbVE5o6hUn83xxctGaWPUKQG0ie6DAK5JK3Mwz6Sk66BTyw",
                        isNew: true,
                        duration: "3:45"
                    }}
                />
                <V2TestCard
                    test={{
                        name: "Lachman Test",
                        description: "The gold standard clinical test for detecting ACL deficiency in the knee.",
                        region: "Knee",
                        subRegion: "Ligament",
                        difficulty: "Intermediate",
                        rating: 5.0,
                        sensitivity: "95%",
                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoV_Mp1J4DTv_T3sBG02p6wxXJaFKCyhkIgkUXnTOaayqRf19cx75stv5Wc20lG5rW2Y6Pkt38qdRCZDQyUeuXrtVz02JGwHbXVCFo8Tm1QHyiK76KgCvdawjCV5lw8Tzv17_7MYoaKEdM1uZSLyWiueH04iyjL5zpcfi7Xg0S-WO6FRqBaLUQKH7IKHjwabZg5e1CByevLODYX-vXbRjdYznmaw_Ppx1af762st4FpXZ7vUP_v8ja7uhf_Fb2nkOJt40YUQx91Q",
                        isBookmarked: true,
                        duration: "5:12"
                    }}
                />
                <V2TestCard
                    test={{
                        name: "Neer's Impingement",
                        description: "Clinical evaluation for subacromial impingement syndrome of the shoulder.",
                        region: "Shoulder",
                        subRegion: "Stability",
                        difficulty: "Beginner",
                        rating: 4.7,
                        specificity: "53%",
                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Oi26JvB_l078gmfJyfpPBumGNmLaL0Kh8w8RQayHjMG3eJ8ZVkul_TTVSKgBvhTCou8Bw2H9S_z0CnS-hz6lZ6gtevH9O1mjpWwMBTo3mvva-pORBG3jhfrFTe8nFKussyl-BjzROFvrwkL_rdu3V6gM4UEeaPvM9R2pXK-ryaNgL7oEc3lwqHC4lFDdsJ-DstJj35oriRsiQ08l7qB6_IrjJF_uZw9qvd5VD9nXDRVJkW3xa90seKhGqeTlgekWwnbzZ2tMnw",
                        duration: "4:20"
                    }}
                />
            </div>

            <V2ProtocolsGrid />
        </main>
    );
};

export default V2DashboardContent;
