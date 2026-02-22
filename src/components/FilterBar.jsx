import { useDataManagement } from '../hooks/useDataManagement';
import SearchSection from './FilterBar/SearchSection';
import StatusSection from './FilterBar/StatusSection';
import DataConsole from './FilterBar/DataConsole';
import SizeSelector from './FilterBar/SizeSelector';
import RegionSection from './FilterBar/RegionSection';

const FilterBar = ({
    categories = [],
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    activeStatus,
    setActiveStatus,
    doneCount,
    pendingCount,
    tests,
    onImport,
    cardSize,
    setCardSize,
    onViewLogs
}) => {
    const {
        fileInputRef,
        handleExport,
        handleImportClick,
        handleFileChange
    } = useDataManagement(tests, activeTab, activeStatus, onImport);

    return (
        <div className="w-full flex flex-col gap-10">
            {/* TOP ROW: Search, Status, and Data Management */}
            <div className="flex flex-col xl:flex-row xl:items-end gap-10">
                <SearchSection
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <div className="flex flex-col sm:flex-row gap-6 xl:ml-auto">
                    <StatusSection
                        activeStatus={activeStatus}
                        setActiveStatus={setActiveStatus}
                        doneCount={doneCount}
                        pendingCount={pendingCount}
                    />

                    <DataConsole
                        handleExport={handleExport}
                        handleImportClick={handleImportClick}
                        handleFileChange={handleFileChange}
                        fileInputRef={fileInputRef}
                        onViewLogs={onViewLogs}
                    />

                    <SizeSelector
                        cardSize={cardSize}
                        setCardSize={setCardSize}
                    />
                </div>
            </div>

            {/* BOTTOM ROW: Region Filters */}
            <RegionSection
                categories={categories}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </div>
    );
};

export default FilterBar;
