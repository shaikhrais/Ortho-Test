import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardV1 from './components/DashboardV1';
import DashboardV2 from './components/v2/DashboardV2';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardV1 />} />
                <Route path="/v2" element={<DashboardV2 />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
