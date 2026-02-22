import { useState } from 'react';

export const useActivityLogs = () => {
    const [logs, setLogs] = useState([]);

    const fetchLogs = async () => {
        try {
            const response = await fetch('/api/logs');
            if (response.ok) {
                const data = await response.json();
                setLogs(data);
            }
        } catch (err) {
            console.error('Failed to fetch logs:', err);
        }
    };

    return { logs, fetchLogs };
};
