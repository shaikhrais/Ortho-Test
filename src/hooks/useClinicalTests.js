import { useState } from 'react';
import { useSyncState } from './useSyncState';
import { useTestFilters } from './useTestFilters';
import { useActivityLogs } from './useActivityLogs';

export const useClinicalTests = () => {
    const [tests, setTests] = useState([]);
    const [selectedTest, setSelectedTest] = useState(null);
    const [editingTest, setEditingTest] = useState(null);

    const CURRENT_DB_VERSION = '2.1';

    const {
        loading,
        syncStatus,
        setSyncStatus,
        saveTest,
        importDatabase
    } = useSyncState(tests, setTests, CURRENT_DB_VERSION);

    const {
        searchQuery, setSearchQuery,
        activeTab, setActiveTab,
        activeStatus, setActiveStatus,
        filteredTests,
        doneCount, pendingCount
    } = useTestFilters(tests);

    const { logs, fetchLogs } = useActivityLogs();

    const handleSaveTest = async (updatedTest) => {
        try {
            // Wait for DB confirmation first
            await saveTest(updatedTest);

            // Only update local state after success
            const newTests = tests.map(t => t.id === updatedTest.id ? updatedTest : t);
            setTests(newTests);
            localStorage.setItem('ortho_tests_db', JSON.stringify(newTests));

            // Refresh logs immediately to show the new entry
            await fetchLogs();
            setEditingTest(null);
        } catch (err) {
            console.error('Failed to save test:', err);
            // Sync status will be handled by useSyncState
        }
    };

    const handleImportDatabase = async (importPayload) => {
        let testsToLoad = importPayload.tests || (Array.isArray(importPayload) ? importPayload : []);
        if (testsToLoad.length > 0) {
            setTests(testsToLoad);
            if (importPayload.activeTab) setActiveTab(importPayload.activeTab);
            if (importPayload.activeStatus) setActiveStatus(importPayload.activeStatus);
            localStorage.setItem('ortho_tests_db', JSON.stringify(testsToLoad));
            await importDatabase(testsToLoad);
        }
    };

    return {
        loading,
        tests,
        filteredTests,
        searchQuery,
        setSearchQuery,
        activeTab,
        setActiveTab,
        activeStatus,
        setActiveStatus,
        selectedTest,
        setSelectedTest,
        editingTest,
        setEditingTest,
        syncStatus,
        doneCount,
        pendingCount,
        logs,
        fetchLogs,
        handleSaveTest,
        handleImportDatabase,
        CURRENT_DB_VERSION
    };
};
