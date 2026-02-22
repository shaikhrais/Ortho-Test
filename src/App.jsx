import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import FilterBar from './components/FilterBar';
import TestCard from './components/TestCard';
import SkeletonLoader from './components/SkeletonLoader';
import { jointCategories } from './constants/jointCategories';
import { useClinicalTests } from './hooks/useClinicalTests';
import Header from './components/Header';
import Footer from './components/Footer';
import ModalsLayer from './components/ModalsLayer';
import { useState } from 'react';

const App = () => {
    const {
        loading, tests, filteredTests, searchQuery, setSearchQuery,
        activeTab, setActiveTab, activeStatus, setActiveStatus,
        selectedTest, setSelectedTest, editingTest, setEditingTest,
        doneCount, pendingCount, handleSaveTest, handleImportDatabase,
        logs, fetchLogs
    } = useClinicalTests();

    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [isLogsOpen, setIsLogsOpen] = useState(false);
    const [cardSize, setCardSize] = useState('MEDIUM');

    const handleOpenLogs = () => {
        fetchLogs();
        setIsLogsOpen(true);
    };

    const gridCols = {
        SMALL: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        MEDIUM: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        LARGE: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2',
        XL: 'grid-cols-1'
    }[cardSize];

    return (
        <div className="min-h-screen bg-[#0b0f18] text-white">
            <AnimatePresence>{loading && <SplashScreen />}</AnimatePresence>

            <main className="relative max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <Header
                    testsCount={tests.length}
                    dbVersion={localStorage.getItem('ortho_db_version')}
                    onOpenDashboard={() => setIsDashboardOpen(true)}
                />

                <FilterBar
                    categories={jointCategories} activeTab={activeTab} setActiveTab={setActiveTab}
                    searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                    activeStatus={activeStatus} setActiveStatus={setActiveStatus}
                    doneCount={doneCount} pendingCount={pendingCount} tests={tests}
                    onImport={handleImportDatabase} cardSize={cardSize} setCardSize={setCardSize}
                    onViewLogs={handleOpenLogs}
                />

                <div className={`grid ${gridCols} gap-8`}>
                    {loading ? [1, 2, 3, 4, 5, 6].map(i => <SkeletonLoader key={i} />) :
                        filteredTests.map(test => (
                            <TestCard key={test.id} test={test} size={cardSize} onClick={() => setSelectedTest(test)} onEdit={setEditingTest} />
                        ))
                    }
                </div>

                {!loading && filteredTests.length === 0 && (
                    <div className="text-center py-24 glass rounded-3xl">
                        <p className="text-text-dim text-lg">No tests found matching your criteria.</p>
                        <button onClick={() => { setSearchQuery(''); setActiveTab('ALL'); }} className="mt-4 text-primary font-bold uppercase tracking-widest text-sm hover:underline">Clear all filters</button>
                    </div>
                )}
            </main>

            <ModalsLayer
                selectedTest={selectedTest} setSelectedTest={setSelectedTest}
                editingTest={editingTest} setEditingTest={setEditingTest}
                handleSaveTest={handleSaveTest}
                isDashboardOpen={isDashboardOpen} setIsDashboardOpen={setIsDashboardOpen}
                isLogsOpen={isLogsOpen} setIsLogsOpen={setIsLogsOpen}
                logs={logs}
            />
            <Footer />
        </div>
    );
};

export default App;
