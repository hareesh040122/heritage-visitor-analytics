import React from 'react';

const Sidebar = ({ activeTab, setActiveTab, currentMode }) => {
  const navItems = [
    { id: 'dashboard', label: 'Executive Dashboard', icon: 'fa-chart-pie', badge: 'Core' },
    { id: 'heatmap', label: 'Spatial & Heatmap Flow', icon: 'fa-map-location-dot' },
    { id: 'education', label: 'Educational Tour Impact', icon: 'fa-graduation-cap' },
    { id: 'ingestion', label: 'Data Ingestion & IoT', icon: 'fa-cloud-arrow-up', badge: 'Live' },
    { id: 'empty', label: 'Empty State (Filters)', icon: 'fa-inbox' },
    { id: 'error', label: 'Error Handling UI', icon: 'fa-triangle-exclamation' }
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between border-r border-slate-800 flex-shrink-0 z-30">
      <div>
        {/* Brand Header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/60">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white font-bold mr-3 shadow-md shadow-indigo-500/20">
            <i className="fa-solid fa-landmark text-sm"></i>
          </div>
          <div>
            <h1 className="font-bold text-white text-sm tracking-wide">CuratorPulse</h1>
            <p className="text-[10px] text-amber-400 font-medium tracking-wider uppercase">Netlify Production</p>
          </div>
        </div>

        {/* Active Mode Indicator */}
        <div className="mx-3 mt-3 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300 mb-1">
            <span><i className="fa-solid fa-compass mr-1 text-indigo-400"></i> Mode:</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 font-mono">{currentMode}</span>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            {currentMode === 'Monitor' && '5-second scan: 4 KPIs above fold, capacity alert.'}
            {currentMode === 'Explore' && 'Spatial layout exploration & dead zone detection.'}
            {currentMode === 'Compare' && 'Docent tours vs QR audio app benchmarking.'}
            {currentMode === 'Filter' && 'Narrowing context by date, wing, and visitor type.'}
            {currentMode === 'Investigate' && 'Drilling into exhibit anomalies via telemetry drawer.'}
          </p>
        </div>

        {/* Navigation */}
        <div className="px-3 py-4">
          <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Modules</p>
          <nav className="space-y-1">
            {navItems.map(item => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-3 py-2.5 text-xs font-semibold rounded-lg transition ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                  }`}
                >
                  <i className={`fa-solid ${item.icon} w-5 text-center mr-2.5 ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}></i>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`ml-auto text-[10px] px-1.5 py-0.5 rounded-full ${
                      item.badge === 'Live' ? 'bg-emerald-500/20 text-emerald-400 font-mono' : 'bg-indigo-700/60 text-indigo-200'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* User Context */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/40">
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/60 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs text-amber-300">
            HN
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-200 truncate">National Museum Site #4</p>
            <p className="text-[10px] text-slate-400 truncate">Curator: Dr. H. N. Sharma</p>
          </div>
          <i className="fa-solid fa-ellipsis-vertical text-slate-500 text-xs"></i>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
