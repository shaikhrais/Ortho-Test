import React from 'react';
import { Shield, Activity, Wind } from 'lucide-react';
import StructureSection from './Shared/StructureSection';

const DashboardSummary = ({ selectedJoint, groupedData, uniqueTests }) => {
    return (
        <section className="dashboard-summary-block">
            <div className="summary-main-header">
                <div className="summary-primary-info">
                    <div className="summary-badge-row">
                        <span className="summary-status-dot" />
                        <h2 className="summary-joint-name">{selectedJoint === '__ALL__' ? 'Unified Overview' : selectedJoint}</h2>
                    </div>
                    <span className="summary-test-count">
                        {groupedData.primary.length + groupedData.stabilizers.length + groupedData.passive.length + groupedData.neuro.length} STRUCTURES
                    </span>
                </div>
                <div className="summary-in-out-badge">
                    <span className="badge-pill-primary">2-IN + 1-OUT</span>
                </div>
            </div>

            <div className="summary-viz-row">
                {/* Grouped Structures */}
                <div className="structure-sections-grid">
                    <StructureSection title="Primary Movers" count={groupedData.primary.length} items={groupedData.primary} icon={<Activity size={14} />} />
                    <StructureSection title="Stabilizers" count={groupedData.stabilizers.length} items={groupedData.stabilizers} icon={<Shield size={14} />} />
                    <StructureSection title="Passive Support" count={groupedData.passive.length} items={groupedData.passive} icon={<Wind size={14} />} />
                    <StructureSection title="Neuro / Associated" count={groupedData.neuro.length + groupedData.associated.length} items={[...groupedData.neuro, ...groupedData.associated]} icon={<Activity size={14} />} />
                </div>

                {/* Special Tests Highlights */}
                <div className="test-highlights-grid">
                    <div className="highlight-card card-primary">
                        <div className="highlight-label group-primary">
                            <Shield size={12} />
                            Special Tests (IN/OUT)
                        </div>
                        <div className="highlight-content">
                            <p className="highlight-text emphasis">
                                <strong>Rule IN:</strong> {uniqueTests.in.join(', ') || '—'}
                            </p>
                            <p className="highlight-text emphasis">
                                <strong>Rule OUT:</strong> {uniqueTests.out.join(', ') || '—'}
                            </p>
                        </div>
                    </div>
                    <div className="highlight-card card-secondary">
                        <div className="highlight-label group-secondary">
                            <Activity size={12} />
                            Nerve Screen
                        </div>
                        <p className="highlight-text">
                            {uniqueTests.nerve.join(', ') || '—'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardSummary;
