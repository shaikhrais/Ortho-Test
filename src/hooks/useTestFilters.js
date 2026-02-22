import { useState, useMemo } from 'react';

export const useTestFilters = (tests) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('ALL');
    const [activeStatus, setActiveStatus] = useState('ALL');

    const filteredTests = useMemo(() => {
        return tests.filter(test => {
            const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                test.joint.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTab = activeTab === 'ALL' || test.joint === activeTab;

            const isDone = !!test.youtubeUrl;
            const matchesStatus = activeStatus === 'ALL' ||
                (activeStatus === 'DONE' && isDone) ||
                (activeStatus === 'PENDING' && !isDone);

            return matchesSearch && matchesTab && matchesStatus;
        });
    }, [tests, searchQuery, activeTab, activeStatus]);

    const doneCount = useMemo(() => tests.filter(t => !!t.youtubeUrl).length, [tests]);
    const pendingCount = useMemo(() => tests.length - doneCount, [tests, doneCount]);

    return {
        searchQuery, setSearchQuery,
        activeTab, setActiveTab,
        activeStatus, setActiveStatus,
        filteredTests,
        doneCount, pendingCount
    };
};
