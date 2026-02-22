import React from 'react';
import FrequencyBadge from './Shared/FrequencyBadge';

const MappingTable = ({ loading, groupedData }) => {
    const allData = [...groupedData.primary, ...groupedData.stabilizers, ...groupedData.passive, ...groupedData.neuro, ...groupedData.associated];

    return (
        <div className="mapping-table-container">
            <h3 className="section-title-label">Detailed Mapping</h3>
            <div className="mapping-table-block">
                <div className="table-scroll-container">
                    <table className="data-table-root">
                        <thead className="data-table-head">
                            <tr>
                                <th>Structure</th>
                                <th>Frequency</th>
                                <th>Clinical Notes</th>
                            </tr>
                        </thead>
                        <tbody className="data-table-body">
                            {loading ? (
                                <tr><td colSpan="3" className="table-empty-cell">Loading data...</td></tr>
                            ) : allData.length === 0 ? (
                                <tr><td colSpan="3" className="table-empty-cell">No matching structures found</td></tr>
                            ) : (
                                allData.map((row, idx) => (
                                    <tr key={idx} className="data-table-row">
                                        <td className="data-table-cell">
                                            <div className="cell-structure-name">{row.structure_name}</div>
                                            <div className="cell-structure-meta">{row.category_name} • {row.relationship}</div>
                                        </td>
                                        <td className="data-table-cell">
                                            <FrequencyBadge freq={row.injury_frequency} />
                                        </td>
                                        <td className="data-table-cell cell-clinical-notes">
                                            {row.notes || '—'}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MappingTable;
