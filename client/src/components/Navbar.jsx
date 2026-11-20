import React from 'react';

const Navbar = ({ activeTab, currentMode, setMode, onOpenDrawer, onExportCSV, backendStatus }) => {
  const titles = {
    dashboard: 'Executive Overview Dashboard',
    heatmap: 'Spatial Floorplan & Dwell-Time Heatmap',
    education: 'Educational Tour & Curriculum Impact',
    ingestion: 'Data Ingestion & IoT Sensor Pipeline',
    empty: 'Empty State (Filter & Onboarding)',
    error: 'Error State & Fallback Recovery'
  };

  const modes = ['Monitor', 'Explore', 'Compare', 'Filter', 'Investigate'];

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between z-20 flex-shrink-0">
      <div className="flex items-center space-x-4">
        <span className="text-sm font-bold text-slate-800 flex items-center">
          <span>{titles[activeTab] || 'CuratorPulse Analytics'}</span>
          <span className="ml-2.5 px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-600 border border-slate-200">
            Netlify App
          </span>
        </span>
        <span className="text-xs text-slate-400">|</span>
        
        {/* Mode Selector */}
        <div className="hidden lg:flex items-center space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-[11px]">
          <span className="text-slate-400 px-2 font-medium">Modes:</span>
          {modes.map(mode => (
            <button
              key={mode}
              onClick={() => setMode(mode)}
              className={`px-2.5 py-1 rounded font-medium transition ${
                currentMode === mode
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {mode === 'Monitor' && '📡 '}
              {mode === 'Explore' && '🔭 '}
              {mode === 'Compare' && '⚖️ '}
              {mode === 'Filter' && '🔍 '}
              {mode === 'Investigate' && '🧩 '}
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        {/* Backend Connectivity Status */}
        <div className="flex items-center text-xs text-slate-500 mr-2 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
          <span className={`w-2 h-2 rounded-full mr-1.5 ${
            backendStatus === 'connected' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
          }`}></span>
          <span>Backend: <strong className="text-slate-700 font-mono">Render API</strong></span>
        </div>

        <button
          onClick={onExportCSV}
          className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center space-x-1.5 shadow-sm transition"
        >
          <i className="fa-solid fa-file-arrow-down text-slate-400"></i>
          <span>Export CSV</span>
        </button>

        <button
          onClick={() => onOpenDrawer('Rosetta Stone & Ancient Antiquities')}
          className="px-3 py-1.5 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg flex items-center space-x-1.5 transition"
        >
          <i className="fa-solid fa-sliders"></i>
          <span>Telemetry Drawer</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
