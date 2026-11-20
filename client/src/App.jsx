import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import KPICards from './components/KPICards';
import ChartsSection from './components/ChartsSection';
import ExhibitTable from './components/ExhibitTable';
import SpatialHeatmap from './components/SpatialHeatmap';
import EducationImpact from './components/EducationImpact';
import DataIngestion from './components/DataIngestion';
import { EmptyState, ErrorState } from './components/EmptyState';
import TelemetryDrawer from './components/TelemetryDrawer';
import { fetchOverviewAnalytics, fetchExhibitions, checkHealth } from './services/api';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentMode, setMode] = useState('Monitor');
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedExhibit, setSelectedExhibit] = useState('Rosetta Stone & Ancient Antiquities');
  const [backendStatus, setBackendStatus] = useState('connected');

  const [analytics, setAnalytics] = useState(null);
  const [exhibitions, setExhibitions] = useState([]);

  const [filters, setFilters] = useState({
    date: '7d',
    wing: 'all',
    demographic: 'all'
  });

  useEffect(() => {
    // Load initial data
    const loadData = async () => {
      const health = await checkHealth();
      setBackendStatus(health.status);

      const overview = await fetchOverviewAnalytics();
      setAnalytics(overview.data);

      const exh = await fetchExhibitions();
      setExhibitions(exh.data);
    };

    loadData();
  }, []);

  const handleOpenDrawer = (exhibitName) => {
    setSelectedExhibit(exhibitName);
    setDrawerOpen(true);
    setMode('Investigate');
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleApplyFilters = () => {
    alert(`Filters applied: ${filters.date} for ${filters.wing} wing. Telemetry recalculated!`);
  };

  const handleResetFilters = () => {
    setFilters({ date: '7d', wing: 'all', demographic: 'all' });
    alert('All filters reset to default parameters.');
  };

  const handleExportCSV = () => {
    const csvContent = "Exhibit,Wing,Capacity,Occupancy,AvgDwellMinutes,Status\n" +
      (exhibitions || []).map(e => `"${e.name}","${e.wing}",${e.capacity},${e.currentOccupancy},${e.avgDwellMinutes},"${e.status}"`).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'heritage_visitor_analytics_report.csv');
    a.click();
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100 antialiased">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentMode={currentMode}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Navbar */}
        <Navbar
          activeTab={activeTab}
          currentMode={currentMode}
          setMode={setMode}
          onOpenDrawer={handleOpenDrawer}
          onExportCSV={handleExportCSV}
          backendStatus={backendStatus}
        />

        {/* Persistent Filter Bar */}
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          onApply={handleApplyFilters}
          onReset={handleResetFilters}
        />

        {/* Screen Switcher */}
        <main className="flex-1 overflow-y-auto p-6 custom-scroll">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Above the fold annotation banner */}
              <div className="p-3 rounded-lg border border-dashed border-indigo-200 bg-indigo-50/50 flex items-start space-x-3 text-xs text-indigo-900">
                <i className="fa-solid fa-circle-info text-indigo-600 mt-0.5"></i>
                <div>
                  <span className="font-bold">5-Second Scan Rule:</span>
                  All 4 critical health metrics are positioned <em>above the fold</em> for immediate scanning by Museum Directors before scrolling.
                </div>
              </div>

              {/* 4 KPI Cards */}
              <KPICards
                analytics={analytics}
                onViewHeatmap={() => setActiveTab('heatmap')}
              />

              {/* Charts */}
              <ChartsSection onOpenDrawer={handleOpenDrawer} />

              {/* Exhibit Telemetry Table */}
              <ExhibitTable
                exhibitions={exhibitions}
                onDrillDown={handleOpenDrawer}
              />
            </div>
          )}

          {activeTab === 'heatmap' && (
            <SpatialHeatmap onInspectZone={handleOpenDrawer} />
          )}

          {activeTab === 'education' && (
            <EducationImpact />
          )}

          {activeTab === 'ingestion' && (
            <DataIngestion />
          )}

          {activeTab === 'empty' && (
            <EmptyState onReset={handleResetFilters} />
          )}

          {activeTab === 'error' && (
            <ErrorState onRetry={() => alert('Re-establishing MQTT sensor stream... Connection healthy!')} />
          )}
        </main>
      </div>

      {/* Slideout Telemetry Drawer */}
      <TelemetryDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        exhibitName={selectedExhibit}
      />
    </div>
  );
}

export default App;
