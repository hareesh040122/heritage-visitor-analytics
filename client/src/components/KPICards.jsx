import React from 'react';

const KPICards = ({ analytics, onViewHeatmap }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Footfall */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-indigo-300 transition">
        <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-2">
          <span>Total Weekly Visitors</span>
          <span className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <i className="fa-solid fa-person-walking"></i>
          </span>
        </div>
        <div className="text-2xl font-bold text-slate-900 tracking-tight mono">
          {(analytics?.totalFootfall || 18450).toLocaleString()}
        </div>
        <div className="flex items-center mt-2 text-xs">
          <span className="text-emerald-600 font-semibold flex items-center mr-1.5">
            <i className="fa-solid fa-arrow-trend-up mr-1"></i> {analytics?.footfallDelta || '+14.8%'}
          </span>
          <span className="text-slate-400">vs previous 7 days</span>
        </div>
        <div className="mt-2 text-[10px] text-slate-400 font-mono border-t border-slate-100 pt-1.5 flex justify-between">
          <span>Peak: Sat 14:00 (3,410)</span>
          <span>Target: 16k</span>
        </div>
      </div>

      {/* Average Dwell Time */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-indigo-300 transition">
        <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-2">
          <span>Average Exhibit Dwell Time</span>
          <span className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
            <i className="fa-solid fa-stopwatch"></i>
          </span>
        </div>
        <div className="text-2xl font-bold text-slate-900 tracking-tight mono">
          {analytics?.averageDwellMinutes || 54.2} <span className="text-sm font-normal text-slate-500">mins</span>
        </div>
        <div className="flex items-center mt-2 text-xs">
          <span className="text-emerald-600 font-semibold flex items-center mr-1.5">
            <i className="fa-solid fa-arrow-trend-up mr-1"></i> {analytics?.dwellDelta || '+6.1 mins'}
          </span>
          <span className="text-slate-400">vs historical baseline</span>
        </div>
        <div className="mt-2 text-[10px] text-slate-400 font-mono border-t border-slate-100 pt-1.5 flex justify-between">
          <span>High: Antiquities (22m)</span>
          <span>Low: Pottery (4m)</span>
        </div>
      </div>

      {/* Educational Engagement */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-indigo-300 transition">
        <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-2">
          <span>Educational Engagement Rate</span>
          <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <i className="fa-solid fa-brain"></i>
          </span>
        </div>
        <div className="text-2xl font-bold text-slate-900 tracking-tight mono">
          {analytics?.educationalEngagementRate || '71.8%'}
        </div>
        <div className="flex items-center mt-2 text-xs">
          <span className="text-emerald-600 font-semibold flex items-center mr-1.5">
            <i className="fa-solid fa-arrow-trend-up mr-1"></i> {analytics?.engagementDelta || '+8.4%'}
          </span>
          <span className="text-slate-400">interactive QR / audio uses</span>
        </div>
        <div className="mt-2 text-[10px] text-slate-400 font-mono border-t border-slate-100 pt-1.5 flex justify-between">
          <span>School completion: 89%</span>
          <span>General: 58%</span>
        </div>
      </div>

      {/* Zone Choke Alerts */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-indigo-300 transition">
        <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-2">
          <span>Zone Flow Bottleneck Score</span>
          <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
            <i className="fa-solid fa-arrows-split-up-and-left"></i>
          </span>
        </div>
        <div className="text-2xl font-bold text-rose-600 tracking-tight mono">
          {analytics?.bottleneckAlertsCount || 2} Zones
        </div>
        <div className="flex items-center mt-2 text-xs">
          <span className="text-rose-600 font-semibold flex items-center mr-1.5">
            <i className="fa-solid fa-circle-exclamation mr-1"></i> Congestion Alert
          </span>
          <span className="text-slate-400">&gt;92% capacity threshold</span>
        </div>
        <div className="mt-2 text-[10px] text-slate-400 font-mono border-t border-slate-100 pt-1.5 flex justify-between">
          <span>Central Rotunda & STEM</span>
          <button onClick={onViewHeatmap} className="text-indigo-600 underline font-medium">View Map →</button>
        </div>
      </div>
    </div>
  );
};

export default KPICards;
