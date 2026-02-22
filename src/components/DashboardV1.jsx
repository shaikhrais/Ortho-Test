import { AnimatePresence } from 'framer-motion';
import SplashScreen from './SplashScreen';
import FilterBar from './FilterBar';
import TestCard from './TestCard';
import SkeletonLoader from './SkeletonLoader';
import { jointCategories } from '../constants/jointCategories';
import { useClinicalTests } from '../hooks/useClinicalTests';
import Header from './Header';
import Footer from './Footer';
import ModalsLayer from './ModalsLayer';
import NavigationRail from './NavigationRail';
import ActivityHub from './ActivityHub';
import MobileNav from './MobileNav';
import ProtocolsSection from './ProtocolsSection';
import { useState } from 'react';

const DashboardV1 = () => {
    const {
        loading, tests, filteredTests, searchQuery, setSearchQuery,
        activeTab, setActiveTab, activeStatus, setActiveStatus,
        difficulty, setDifficulty, isTrending, setIsTrending,
        selectedTest, setSelectedTest, recentlyViewed,
        editingTest, setEditingTest,
        doneCount, pendingCount, handleSaveTest, handleImportDatabase,
        logs, fetchLogs
    } = useClinicalTests();

    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [isLogsOpen, setIsLogsOpen] = useState(false);

    const [user] = useState({
        name: 'Dr. Smith',
        role: 'Senior Resident'
    });

    const handleOpenLogs = () => {
        fetchLogs();
        setIsLogsOpen(true);
    };

    return (
        <div className="app-shell">
            <AnimatePresence>{loading && <SplashScreen />}</AnimatePresence>

            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                user={user}
            />

            <div className="main-container">
                <NavigationRail />

                <main className="content-area no-scrollbar">
                    <div className="welcome-banner">
                        <div className="welcome-text">
                            <h2 className="title-large">Welcome back, {user.name}</h2>
                            <p className="subtitle-medium">Ready to refine your clinical assessment skills today?</p>
                        </div>
                        <div className="action-buttons">
                            <button className="btn-secondary">
                                <span className="material-symbols-outlined">history</span>
                                Review History
                            </button>
                            <button className="btn-primary">
                                Resume Last Module
                            </button>
                        </div>
                    </div>

                    <FilterBar
                        categories={jointCategories}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        activeStatus={activeStatus}
                        setActiveStatus={setActiveStatus}
                        difficulty={difficulty}
                        setDifficulty={setDifficulty}
                        isTrending={isTrending}
                        setIsTrending={setIsTrending}
                        doneCount={doneCount}
                        pendingCount={pendingCount}
                        onImport={handleImportDatabase}
                        onViewLogs={handleOpenLogs}
                    />

                    <div className="tests-grid">
                        {loading ? [1, 2, 3, 4, 5, 6].map(i => <SkeletonLoader key={i} />) :
                            filteredTests.map(test => (
                                <TestCard key={test.id} test={test} onClick={() => setSelectedTest(test)} onEdit={setEditingTest} />
                            ))
                        }
                    </div>

                    {!loading && filteredTests.length === 0 && (
                        <div className="empty-state">
                            <p className="empty-state-text">No tests found matching your criteria.</p>
                            <button onClick={() => { setSearchQuery(''); setActiveTab('ALL'); }} className="clear-filters-toggle">Clear all filters</button>
                        </div>
                    )}

                    <ProtocolsSection />
                </main>

                <ActivityHub recentlyViewed={recentlyViewed} logs={logs} />
            </div>

            <MobileNav />

            <ModalsLayer
                selectedTest={selectedTest} setSelectedTest={setSelectedTest}
                editingTest={editingTest} setEditingTest={setEditingTest}
                handleSaveTest={handleSaveTest}
                isDashboardOpen={isDashboardOpen} setIsDashboardOpen={setIsDashboardOpen}
                isLogsOpen={isLogsOpen} setIsLogsOpen={setIsLogsOpen}
                logs={logs}
            />
        </div>
    );
};

export default DashboardV1;
