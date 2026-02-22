import React from 'react';

const V2ActivityHub = () => {
    return (
        <aside className="v2-sidebar no-scrollbar">
            <div className="v2-sidebar-inner">
                <h3 className="v2-sidebar-title">
                    Activity Hub
                    <span className="material-symbols-outlined text-slate-300">history</span>
                </h3>

                <div className="v2-hub-section">
                    <div>
                        <h4 className="v2-section-title">Recently Viewed</h4>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="v2-hub-item">
                                <div className="v2-hub-thumb">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTtiLkIkNxvn0pfQgGkZbqU-av5rPYzBSOe9NHHTVmn0AwiA0YZP__pboNOBh_arWxFVwFyaFsdGCM_EmN628qpoNd2lIE7NULbAAS4e5PxrlTcW3OWh5DOFp8MQWtP6zV9no-vzQmqDuTkHKFzxdFgZazKGgcaJgiuoUScGVGhq18nwozZxeKTaWmtko5rZAY-E7OeMu8SZUmDTLYpzd7M9H3a7T8SG3PcCOpVA4miXjHj3DPUZ1X1DdibQl98pphKJAYYORT8w" alt="Shoulder" />
                                </div>
                                <div className="v2-hub-info">
                                    <p className="v2-hub-name">Hawkins-Kennedy</p>
                                    <p className="v2-hub-time">45 mins ago</p>
                                </div>
                            </div>
                            <div className="v2-hub-item">
                                <div className="v2-hub-thumb">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdFLBwXOwLrv7haQ0UY-XHbcbEtMG4sEBJ9m-1BXxfF0CKOy1OKzAuI2PiSOH1T0IKbXurZak4BPsEBHCjoIE-6NcnMipaKi7AvK_e50jMAjJWSGaZot310kIy9hiV0oTCKOmxUDN-lU1BwpNk9vFq_2l4feqr2Vpm2_OVq0kMB-dniyV9_Lq_p-KZ0Ghz5PeJuz-e_82QMa_YIjRKCzgREZJqeP0oyY0FmOQ5A-VgvItFsgHY-EM8_VUyxmGlBbJAFJBIdLQNRA" alt="Knee" />
                                </div>
                                <div className="v2-hub-info">
                                    <p className="v2-hub-name">McMurray Test</p>
                                    <p className="v2-hub-time">2 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[1px] bg-slate-100 dark:bg-slate-800"></div>

                    <div>
                        <h4 className="v2-section-title">Pinned Protocols</h4>
                        <div className="flex flex-col gap-3 mt-4">
                            <div className="v2-pinned-card">
                                <div className="v2-pinned-header">
                                    <span className="v2-pinned-badge bg-primary/10 text-primary">ACL Post-Op</span>
                                    <span className="material-symbols-outlined text-slate-400 text-sm">push_pin</span>
                                </div>
                                <p className="v2-pinned-label">Week 12 Return to Play</p>
                            </div>
                            <div className="v2-pinned-card">
                                <div className="v2-pinned-header">
                                    <span className="v2-pinned-badge bg-amber-100 text-amber-600">Diagnostic</span>
                                    <span className="material-symbols-outlined text-slate-400 text-sm">push_pin</span>
                                </div>
                                <p className="v2-pinned-label">Hip Labral Tear Cluster</p>
                            </div>
                        </div>
                    </div>

                    <div className="v2-stats-card">
                        <h4 className="v2-section-title !text-primary !p-0 !mb-3">Community Insight</h4>
                        <div className="flex flex-col gap-3">
                            <div className="v2-stats-row">
                                <p className="v2-stats-text">Trending in Ortho</p>
                                <p className="v2-stats-big">Knee</p>
                            </div>
                            <div className="v2-stats-row">
                                <p className="v2-stats-text">Total active students</p>
                                <p className="v2-stats-big">14.2k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default V2ActivityHub;
