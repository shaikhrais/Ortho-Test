import { useState, useEffect, useMemo } from 'react';

export const useJointStructures = (activeJoint) => {
    const [structures, setStructures] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchStructures = async () => {
            setLoading(true);
            try {
                const url = activeJoint && activeJoint !== '__ALL__'
                    ? `/api/joint_structures?joint=${encodeURIComponent(activeJoint)}`
                    : '/api/joint_structures';

                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch joint structures');
                const data = await response.all ? await response.json() : await response.json();
                setStructures(data);
            } catch (err) {
                console.error('Error fetching joint structures:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStructures();
    }, [activeJoint]);

    const filteredStructures = useMemo(() => {
        if (!searchQuery.trim()) return structures;
        const q = searchQuery.toLowerCase();
        return structures.filter(s => {
            const hay = [
                s.joint_name, s.structure_name, s.category_name, s.relationship,
                s.test_in_1, s.test_in_2, s.test_out_1, s.nerve_test_1, s.nerve_test_2, s.nerve_test_3,
                s.notes
            ].map(v => (v || '').toLowerCase()).join(' ');
            return hay.includes(q);
        });
    }, [structures, searchQuery]);

    const kpi = useMemo(() => {
        return {
            PRIMARY_MOVER: filteredStructures.filter(r => r.relationship === 'PRIMARY_MOVER').length,
            STABILIZER: filteredStructures.filter(r => r.relationship === 'STABILIZER').length,
            PASSIVE_SUPPORT: filteredStructures.filter(r => r.relationship === 'PASSIVE_SUPPORT').length,
            NEURO: filteredStructures.filter(r => r.relationship === 'NEURO').length,
        };
    }, [filteredStructures]);

    const groupedData = useMemo(() => {
        const groups = {
            primary: filteredStructures.filter(r => r.relationship === 'PRIMARY_MOVER'),
            stabilizers: filteredStructures.filter(r => r.relationship === 'STABILIZER'),
            passive: filteredStructures.filter(r => r.relationship === 'PASSIVE_SUPPORT'),
            neuro: filteredStructures.filter(r => r.relationship === 'NEURO'),
            associated: filteredStructures.filter(r => r.relationship === 'ASSOCIATED')
        };
        return groups;
    }, [filteredStructures]);

    const uniqueTests = useMemo(() => {
        const uniq = (arr) => Array.from(new Set(arr.filter(Boolean))).sort();
        return {
            in: uniq([...filteredStructures.map(s => s.test_in_1), ...filteredStructures.map(s => s.test_in_2)]),
            out: uniq(filteredStructures.map(s => s.test_out_1)),
            nerve: uniq([
                ...filteredStructures.map(s => s.nerve_test_1),
                ...filteredStructures.map(s => s.nerve_test_2),
                ...filteredStructures.map(s => s.nerve_test_3)
            ])
        };
    }, [filteredStructures]);

    return {
        structures: filteredStructures,
        loading,
        error,
        searchQuery,
        setSearchQuery,
        kpi,
        groupedData,
        uniqueTests
    };
};
