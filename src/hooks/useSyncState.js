import { useState, useEffect } from 'react';

export const useSyncState = (tests, setTests, CURRENT_DB_VERSION) => {
    const [loading, setLoading] = useState(true);
    const [syncStatus, setSyncStatus] = useState('synced'); // idle, syncing, synced, error

    useEffect(() => {
        const loadInitData = async () => {
            setSyncStatus('syncing');
            try {
                const response = await fetch('/api/tests');
                if (response.ok) {
                    const cloudData = await response.json();
                    if (cloudData && cloudData.length >= 0) {
                        setTests(cloudData);
                        localStorage.setItem('ortho_tests_db', JSON.stringify(cloudData));
                        localStorage.setItem('ortho_db_version', CURRENT_DB_VERSION);
                        setSyncStatus('synced');
                        setLoading(false);
                        return;
                    }
                }
                throw new Error('Cloud sync failed');
            } catch (err) {
                console.error('Data sync failed:', err);
                const savedData = localStorage.getItem('ortho_tests_db');
                if (savedData) {
                    setTests(JSON.parse(savedData));
                }
                setSyncStatus('error');
            }
            setLoading(false);
        };

        loadInitData();
    }, [CURRENT_DB_VERSION, setTests]);

    const saveTest = async (updatedTest) => {
        try {
            setSyncStatus('syncing');
            await fetch('/api/tests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([updatedTest])
            });
            setSyncStatus('synced');
        } catch (err) {
            console.error('Sync failed:', err);
            setSyncStatus('error');
        }
    };

    const importDatabase = async (testsToLoad) => {
        try {
            setSyncStatus('syncing');
            await fetch('/api/tests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(testsToLoad)
            });
            setSyncStatus('synced');
        } catch (err) {
            console.error('Bulk sync failed:', err);
            setSyncStatus('error');
        }
    };

    return { loading, syncStatus, setSyncStatus, saveTest, importDatabase };
};
