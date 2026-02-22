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
        <div className="min-h-screen bg-[#0b1020] text-[#e9eeff] font-sans selection:bg-primary/30">
            <DashboardHeader
                selectedJoint={selectedJoint}
                setSelectedJoint={setSelectedJoint}
                joints={joints}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleReset={handleReset}
            />

            <main className="max-w-[1400px] mx-auto px-6 py-10">
                <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.9fr] gap-8">
                    {/* LEFT COLUMN: Summary & Details */}
                    <div className="space-y-8">
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
                    <aside className="space-y-8">
                        <div className="grid grid-cols-3 gap-4">
                            <KPICard number={kpi.PRIMARY_MOVER} label="Movers" color="text-primary" />
                            <KPICard number={kpi.PASSIVE_SUPPORT} label="Passive" color="text-secondary" />
                            <KPICard number={kpi.NEURO} label="Neuro" color="text-[#fb7185]" />
                        </div>

                        <WorkflowSection uniqueTests={uniqueTests} />
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default JointDashboard;
