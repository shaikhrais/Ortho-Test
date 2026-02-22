import { useRef } from 'react';

export const useDataManagement = (tests, activeTab, activeStatus, onImport) => {
    const fileInputRef = useRef(null);

    const handleExport = () => {
        const fullSuiteData = {
            exportTimestamp: new Date().toISOString(),
            suiteVersion: "2.1",
            data: {
                tests,
                activeTab,
                activeStatus,
                version: "2.1"
            }
        };
        const dataStr = JSON.stringify(fullSuiteData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `ortho_tests_backup_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedPayload = JSON.parse(event.target.result);

                let dataToImport = importedPayload;
                if (importedPayload.data && importedPayload.data.tests) {
                    dataToImport = importedPayload.data;
                } else if (Array.isArray(importedPayload)) {
                    dataToImport = { tests: importedPayload };
                }

                if (window.confirm(`Found ${dataToImport.tests?.length || 0} tests. This will overwrite and sync your D1 database. Continue?`)) {
                    onImport(dataToImport);
                }
            } catch (err) {
                alert('Failed to parse import file: ' + err.message);
                console.error('Import failed:', err);
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    };

    return {
        fileInputRef,
        handleExport,
        handleImportClick,
        handleFileChange
    };
};
