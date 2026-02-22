import React from 'react';
import TestDetail from './TestDetail';
import EditTestModal from './EditTestModal';
import JointDashboardModal from './JointDashboardModal';
import ActivityLogModal from './ActivityLogModal';
import { jointCategories } from '../constants/jointCategories';

const ModalsLayer = ({
    selectedTest,
    setSelectedTest,
    editingTest,
    setEditingTest,
    handleSaveTest,
    isDashboardOpen,
    setIsDashboardOpen,
    isLogsOpen,
    setIsLogsOpen,
    logs
}) => {
    return (
        <>
            <TestDetail
                test={selectedTest}
                onClose={() => setSelectedTest(null)}
                onEdit={(test) => {
                    setEditingTest(test);
                    setSelectedTest(null);
                }}
            />

            <EditTestModal
                test={editingTest}
                isOpen={!!editingTest}
                onClose={() => setEditingTest(null)}
                onSave={handleSaveTest}
            />

            <JointDashboardModal
                isOpen={isDashboardOpen}
                onClose={() => setIsDashboardOpen(false)}
                joints={jointCategories.filter(c => c !== 'ALL').map(name => ({ id: name, name }))}
            />

            <ActivityLogModal
                isOpen={isLogsOpen}
                onClose={() => setIsLogsOpen(false)}
                logs={logs}
            />
        </>
    );
};

export default ModalsLayer;
