import { useState, useMemo } from 'react';

export const useTestFilters = (tests) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('ALL');
    const [activeStatus, setActiveStatus] = useState('ALL');
    const [difficulty, setDifficulty] = useState('ALL');
    const [isTrending, setIsTrending] = useState(false);

    const filteredTests = useMemo(() => {
        return tests.filter(test => {
            const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                test.joint.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTab = activeTab === 'ALL' || test.joint === activeTab;

            const isDone = !!test.youtubeUrl;
            const matchesStatus = activeStatus === 'ALL' ||
                (activeStatus === 'DONE' && isDone) ||
                (activeStatus === 'PENDING' && !isDone);

            const matchesDifficulty = difficulty === 'ALL' || test.difficulty === difficulty;
            const matchesTrending = !isTrending || test.isTrending;

            return matchesSearch && matchesTab && matchesStatus && matchesDifficulty && matchesTrending;
        });
    }, [tests, searchQuery, activeTab, activeStatus, difficulty, isTrending]);

    const doneCount = useMemo(() => tests.filter(t => !!t.youtubeUrl).length, [tests]);
    const pendingCount = useMemo(() => tests.length - doneCount, [tests, doneCount]);

    return {
        searchQuery, setSearchQuery,
        activeTab, setActiveTab,
        activeStatus, setActiveStatus,
        difficulty, setDifficulty,
        isTrending, setIsTrending,
        filteredTests,
        doneCount, pendingCount
    };
};
