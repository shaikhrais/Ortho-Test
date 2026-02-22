import React, { useState } from 'react';
import { useJointStructures } from '../hooks/useJointStructures';
import DashboardHeader from './JointDashboard/DashboardHeader';
import DashboardSummary from './JointDashboard/DashboardSummary';
import MappingTable from './JointDashboard/MappingTable';
import WorkflowSection from './JointDashboard/WorkflowSection';
import KPICard from './JointDashboard/Shared/KPICard';

const JointDashboard = ({ joints = [] }) => {
    const [selectedJoint, setSelectedJoint] = useState('__ALL__');
    const {
        loading,
        searchQuery,
        setSearchQuery,
        kpi,
        groupedData,
        uniqueTests
    } = useJointStructures(selectedJoint);

    const handleReset = () => {
        setSelectedJoint('__ALL__');
        setSearchQuery('');
    };

    return (
        <div className="dashboard-root selection-primary">
            <DashboardHeader
                selectedJoint={selectedJoint}
                setSelectedJoint={setSelectedJoint}
                joints={joints}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleReset={handleReset}
            />

            <main className="dashboard-main-container">
                <div className="dashboard-grid-layout">
                    {/* LEFT COLUMN: Summary & Details */}
                    <div className="dashboard-col-left">
                        <DashboardSummary
                            selectedJoint={selectedJoint}
                            groupedData={groupedData}
                            uniqueTests={uniqueTests}
                        />

                        <MappingTable
                            loading={loading}
                            groupedData={groupedData}
                        />
                    </div>

                    {/* RIGHT COLUMN: KPI & Workflow */}
                    <aside className="dashboard-col-right">
                        <div className="kpi-grid">
                            <KPICard number={kpi.PRIMARY_MOVER} label="Movers" colorClass="text-primary-accent" />
                            <KPICard number={kpi.PASSIVE_SUPPORT} label="Passive" colorClass="text-secondary-accent" />
                            <KPICard number={kpi.NEURO} label="Neuro" colorClass="text-danger-accent" />
                        </div>

                        <WorkflowSection uniqueTests={uniqueTests} />
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default JointDashboard;
