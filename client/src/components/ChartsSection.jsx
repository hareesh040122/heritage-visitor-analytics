import React from 'react';

const ChartsSection = ({ onOpenDrawer }) => {
  const hourlyData = [
    { time: '09:00', height: '18%', label: '240' },
    { time: '10:00', height: '38%', label: '520' },
    { time: '11:00', height: '62%', label: '840' },
    { time: '12:00', height: '82%', label: '1080' },
    { time: '13:00', height: '76%', label: '1010' },
    { time: '14:00', height: '98%', label: '1290', alert: true },
    { time: '15:00', height: '94%', label: '1240', alert: true },
    { time: '16:00', height: '64%', label: '890' },
    { time: '17:00', height: '42%', label: '560' },
    { time: '18:00', height: '20%', label: '210' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Chart 1: Hourly Footfall & Safety Threshold */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Hourly Footfall & Capacity Thresholds</h3>
            <p className="text-xs text-slate-500">Answers: At what hours do museum galleries exceed safe crowd density?</p>
          </div>
          <div className="flex items-center space-x-2 text-[11px]">
            <span className="inline-flex items-center text-slate-600">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 mr-1"></span> Actual Footfall
            </span>
            <span className="inline-flex items-center text-rose-600">
              <span className="w-2.5 h-0.5 bg-rose-500 mr-1"></span> Limit (1.2k/hr)
            </span>
          </div>
        </div>

        {/* Chart Canvas */}
        <div className="h-56 bg-slate-50 rounded-lg border border-slate-200 p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Safety Alert Line */}
          <div className="absolute w-full left-0 top-[26%] border-b-2 border-dashed border-rose-400/80 flex justify-end pr-4">
            <span className="text-[10px] font-mono text-rose-600 bg-rose-50 px-1 rounded">Alert Cap: 1,200/hr</span>
          </div>

          {/* Bars */}
          <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 z-10">
            {hourlyData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  style={{ height: d.height }}
                  className={`w-full rounded-t transition ${d.alert ? 'bg-rose-500 shadow-sm' : 'bg-indigo-500'}`}
                ></div>
                <span className={`text-[10px] mt-2 ${d.alert ? 'font-bold text-rose-600' : 'text-slate-400'}`}>
                  {d.time}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 text-[11px] text-slate-500 flex justify-between">
          <span>💡 <strong className="text-slate-700">Action:</strong> Re-route 14:00 tour groups to West Wing.</span>
          <button
            onClick={() => onOpenDrawer('14:00 Peak Congestion Spike')}
            className="text-indigo-600 font-semibold hover:underline"
          >
            Investigate Anomaly →
          </button>
        </div>
      </div>

      {/* Chart 2: Exhibit Wing Dwell vs Educational Interaction */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Exhibit Dwell Time vs Educational Interaction Rate</h3>
            <p className="text-xs text-slate-500">Answers: Do visitors actively engage with educational materials or pass through?</p>
          </div>
          <span className="text-[11px] text-indigo-600 font-mono bg-indigo-50 px-2 py-0.5 rounded">Benchmark: &gt;15m & &gt;60%</span>
        </div>

        <div className="h-56 bg-slate-50 rounded-lg border border-slate-200 p-4 flex flex-col justify-between">
          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-slate-700">🏛️ Ancient Antiquities (East Wing)</span>
                <span className="text-slate-500 font-mono text-[11px]">22.4 mins dwell · 84% QR engagement</span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                <div style={{ width: '84%' }} className="bg-emerald-500 h-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-slate-700">🎨 Renaissance Masterpieces (West)</span>
                <span className="text-slate-500 font-mono text-[11px]">18.1 mins dwell · 68% QR engagement</span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                <div style={{ width: '68%' }} className="bg-indigo-500 h-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-slate-700">🧪 Interactive Science & Heritage STEM</span>
                <span className="text-slate-500 font-mono text-[11px]">28.6 mins dwell · 91% QR engagement</span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                <div style={{ width: '91%' }} className="bg-emerald-600 h-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-rose-700">🏺 Decorative Pottery Gallery (Dead Zone)</span>
                <span className="text-rose-600 font-mono text-[11px]">3.8 mins dwell · 19% QR engagement ⚠️</span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                <div style={{ width: '19%' }} className="bg-rose-400 h-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-[11px] text-slate-500 flex justify-between">
          <span>⚠️ <strong className="text-slate-700">Dead Zone Alert:</strong> Decorative Pottery has 81% bounce rate.</span>
          <button
            onClick={() => onOpenDrawer('Decorative Pottery & Folk Craft')}
            className="text-indigo-600 font-semibold hover:underline"
          >
            Inspect Exhibit →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
