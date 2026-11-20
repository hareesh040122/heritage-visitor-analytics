import React from 'react';

const TelemetryDrawer = ({ isOpen, onClose, exhibitName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-2xl border-l border-slate-200 z-50 flex flex-col justify-between">
      <div>
        <div className="h-16 px-6 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-magnifying-glass-chart text-amber-400"></i>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider">Granular Telemetry Drawer</h3>
              <p className="text-[10px] text-slate-400">Investigating Exhibit Details</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-lg">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-140px)] custom-scroll">
          <div>
            <h4 className="text-base font-bold text-slate-900">{exhibitName || 'Rosetta Stone Replica & Hieroglyphs'}</h4>
            <p className="text-xs text-slate-500">Wing: East Wing Antiquities · Beacon #03</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Weekly Visits</span>
              <p className="text-lg font-bold text-slate-900 mono mt-0.5">9,410</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Avg Dwell Time</span>
              <p className="text-lg font-bold text-emerald-600 mono mt-0.5">18.4 min</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Audio Guide Plays</span>
              <p className="text-lg font-bold text-indigo-600 mono mt-0.5">7,720</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Bounce Rate (&lt;15s)</span>
              <p className="text-lg font-bold text-slate-700 mono mt-0.5">4.2%</p>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-800 mb-2">Visitor Dwell Distribution</h5>
            <div className="space-y-2 text-[11px]">
              <div>
                <div className="flex justify-between text-slate-500 mb-0.5">
                  <span>Glance (&lt; 30 sec)</span>
                  <span className="font-mono">8%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded"><div className="bg-slate-400 h-full rounded" style={{ width: '8%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-slate-500 mb-0.5">
                  <span>Skim (30s - 3 mins)</span>
                  <span className="font-mono">24%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded"><div className="bg-indigo-400 h-full rounded" style={{ width: '24%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-slate-500 mb-0.5">
                  <span>Deep Study (&gt; 5 mins)</span>
                  <span className="font-mono font-bold text-emerald-600">68%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded"><div className="bg-emerald-500 h-full rounded" style={{ width: '68%' }}></div></div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-xs text-indigo-900">
            <p className="font-bold mb-1">Recommended Optimization:</p>
            <p className="leading-relaxed">Outstanding dwell retention. Add a digital quiz station at the exit to boost educational tour completion by ~12%.</p>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
        <button onClick={onClose} className="px-3 py-1.5 text-xs text-slate-600 font-semibold hover:text-slate-900">
          Close Drawer
        </button>
        <button
          onClick={() => alert(`Exporting telemetry CSV for ${exhibitName}...`)}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs"
        >
          Export Exhibit Telemetry
        </button>
      </div>
    </div>
  );
};

export default TelemetryDrawer;
