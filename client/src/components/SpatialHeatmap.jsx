import React from 'react';

const SpatialHeatmap = ({ onInspectZone }) => {
  return (
    <div className="space-y-6">
      <div className="p-3 rounded-lg border border-dashed border-amber-300 bg-amber-50/60 flex items-start space-x-3 text-xs text-amber-900">
        <i className="fa-solid fa-lightbulb text-amber-600 mt-0.5"></i>
        <div>
          <span className="font-bold">Spatial Wireframe (Explore & Investigate Modes):</span>
          Curators can visually identify dead zones, bottleneck choke points, and visitor flow paths across the physical floor plan. Click any gallery to trigger the telemetry drawer.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Floorplan */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Museum Gallery Level 1 Floor Plan</h3>
              <p className="text-xs text-slate-500">Live IoT sensor heat map: Color represents dwell time & density</p>
            </div>
            <div className="flex items-center space-x-3 text-[11px]">
              <span className="flex items-center"><span className="w-3 h-3 rounded bg-emerald-400 mr-1"></span> Optimal (10-20m)</span>
              <span className="flex items-center"><span className="w-3 h-3 rounded bg-amber-400 mr-1"></span> High Traffic (&gt;20m)</span>
              <span className="flex items-center"><span className="w-3 h-3 rounded bg-rose-400 mr-1"></span> Bottleneck / Dead</span>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 text-white min-h-[360px] relative border border-slate-800 flex flex-col justify-between">
            {/* Top Row */}
            <div className="grid grid-cols-3 gap-4">
              <div
                onClick={() => onInspectZone('East Wing: Ancient Antiquities')}
                className="p-4 rounded-lg bg-amber-500/20 border-2 border-amber-500/80 hover:bg-amber-500/30 cursor-pointer transition"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-amber-300">East Wing: Antiquities</span>
                  <span className="text-[10px] font-mono bg-amber-500/30 px-1.5 py-0.5 rounded text-amber-200">Sensor 01-04</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-2">Dwell: 22.4 mins</p>
                <p className="text-[10px] text-amber-400 font-mono mt-1">Density: 88% (High)</p>
                <div className="mt-2 text-[10px] text-indigo-300 underline font-medium">Click to inspect ↗</div>
              </div>

              <div
                onClick={() => onInspectZone('Central Rotunda & Heritage Atrium')}
                className="p-4 rounded-lg bg-rose-500/20 border-2 border-rose-500/80 hover:bg-rose-500/30 cursor-pointer transition"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-rose-300">Central Rotunda Choke Point</span>
                  <span className="text-[10px] font-mono bg-rose-500/30 px-1.5 py-0.5 rounded text-rose-200">Bottleneck ⚠️</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-2">Dwell: 8.2 mins (Cross-traffic)</p>
                <p className="text-[10px] text-rose-400 font-mono mt-1">Density: 94% (Near Limit)</p>
                <div className="mt-2 text-[10px] text-indigo-300 underline font-medium">Click to inspect ↗</div>
              </div>

              <div
                onClick={() => onInspectZone('West Wing: Renaissance Masterpieces')}
                className="p-4 rounded-lg bg-emerald-500/20 border-2 border-emerald-500/80 hover:bg-emerald-500/30 cursor-pointer transition"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-emerald-300">West Wing: Renaissance</span>
                  <span className="text-[10px] font-mono bg-emerald-500/30 px-1.5 py-0.5 rounded text-emerald-200">Balanced</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-2">Dwell: 18.1 mins</p>
                <p className="text-[10px] text-emerald-400 font-mono mt-1">Density: 64% (Optimal)</p>
                <div className="mt-2 text-[10px] text-indigo-300 underline font-medium">Click to inspect ↗</div>
              </div>
            </div>

            {/* Tour Vector */}
            <div className="my-4 py-2 border-y border-dashed border-slate-700 flex items-center justify-around text-[11px] text-slate-400 font-mono">
              <span>← Main Entrance</span>
              <span className="text-amber-400">➔ Primary Guided Tour Vector (72% traffic) ➔</span>
              <span>Restroom / Café Exit →</span>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-2 gap-4">
              <div
                onClick={() => onInspectZone('Decorative Pottery & Folk Craft')}
                className="p-4 rounded-lg bg-slate-800/80 border-2 border-slate-700 hover:border-rose-400 cursor-pointer transition"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-slate-300">North Corridor: Pottery Gallery</span>
                  <span className="text-[10px] font-mono bg-slate-700 px-1.5 py-0.5 rounded text-rose-400">Dead Zone 📭</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">Dwell: 3.8 mins (Fast walkthrough)</p>
                <p className="text-[10px] text-slate-400 font-mono mt-1">Density: 14% (Underutilized)</p>
                <div className="mt-2 text-[10px] text-indigo-300 underline font-medium">Click to inspect ↗</div>
              </div>

              <div
                onClick={() => onInspectZone('Interactive Heritage & STEM Sandbox')}
                className="p-4 rounded-lg bg-indigo-500/20 border-2 border-indigo-500/80 hover:bg-indigo-500/30 cursor-pointer transition"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-indigo-300">South Wing: Heritage STEM Lab</span>
                  <span className="text-[10px] font-mono bg-indigo-500/30 px-1.5 py-0.5 rounded text-indigo-200">High Dwell</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-2">Dwell: 28.6 mins (Interactive kiosks)</p>
                <p className="text-[10px] text-indigo-300 font-mono mt-1">Density: 82% (Peak Engagement)</p>
                <div className="mt-2 text-[10px] text-indigo-300 underline font-medium">Click to inspect ↗</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Recommendations */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-indigo-700 mb-2">
              <i className="fa-solid fa-wand-magic-sparkles text-sm"></i>
              <h4 className="text-sm font-bold">Curator Action Recommendations</h4>
            </div>
            <p className="text-xs text-slate-500 mb-4">Algorithmic insights derived from sensor path tracking:</p>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs">
                <p className="font-bold text-rose-900 mb-1">1. Alleviate Central Rotunda Bottleneck</p>
                <p className="text-rose-700 leading-relaxed">
                  Rotate school group entry slots by 20 minutes to prevent overcrowding at 14:00 peak.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs">
                <p className="font-bold text-amber-900 mb-1">2. Revitalize Decorative Pottery Dead Zone</p>
                <p className="text-amber-800 leading-relaxed">
                  Install interactive QR storytelling stations and relocate the exit signage to divert 25% of footfall through this corridor.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs">
                <p className="font-bold text-emerald-900 mb-1">3. Replicate STEM Lab Success</p>
                <p className="text-emerald-800 leading-relaxed">
                  The hands-on tactile exhibits produced 3x higher dwell time than passive glass display cases.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => alert('Generating Layout Reconfiguration PDF based on active IoT sensor logs...')}
            className="w-full mt-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm"
          >
            Generate Layout Reconfiguration PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpatialHeatmap;
