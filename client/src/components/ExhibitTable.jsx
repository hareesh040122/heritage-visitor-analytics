import React, { useState } from 'react';

const ExhibitTable = ({ exhibitions, onDrillDown }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('dwell');

  const filtered = (exhibitions || []).filter(e =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.wing.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-slate-50/60">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Exhibit & Gallery Performance Telemetry</h3>
          <p className="text-xs text-slate-500">Summary before detail: Granular engagement metrics by artifact zone</p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search exhibit or artifact..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-1.5 border border-slate-300 rounded-lg text-xs w-56 outline-none focus:border-indigo-500"
          />
          <button
            onClick={() => setSortBy(sortBy === 'dwell' ? 'occupancy' : 'dwell')}
            className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg flex items-center space-x-1"
          >
            <i className="fa-solid fa-arrow-down-wide-short mr-1"></i>
            <span>Sort: {sortBy === 'dwell' ? 'Dwell Time' : 'Occupancy'}</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-600">
          <thead className="bg-slate-100 text-slate-700 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-200">
            <tr>
              <th className="py-3 px-6">Exhibit / Artifact Zone</th>
              <th className="py-3 px-4">Museum Wing</th>
              <th className="py-3 px-4 text-right">Occupancy / Capacity</th>
              <th className="py-3 px-4 text-right">Avg Dwell Time</th>
              <th className="py-3 px-4 text-center">Crowd Density</th>
              <th className="py-3 px-4 text-center">Classification</th>
              <th className="py-3 px-6 text-center">Row Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((item) => {
              const density = Math.round((item.currentOccupancy / item.capacity) * 100);
              const isBottleneck = density >= 90;
              const isDead = density <= 20;

              return (
                <tr
                  key={item.id}
                  onClick={() => onDrillDown(item.name)}
                  className={`hover:bg-slate-50 transition cursor-pointer ${
                    isDead ? 'bg-rose-50/30' : ''
                  }`}
                >
                  <td className="py-3.5 px-6 font-semibold text-slate-900 flex items-center space-x-2">
                    <span className={`w-2 h-2 rounded-full ${
                      isBottleneck ? 'bg-rose-500' : isDead ? 'bg-amber-400' : 'bg-emerald-500'
                    }`}></span>
                    <span>{item.name}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">{item.wing}</td>
                  <td className="py-3.5 px-4 text-right mono font-medium">
                    {item.currentOccupancy} / {item.capacity}
                  </td>
                  <td className={`py-3.5 px-4 text-right mono font-semibold ${
                    isDead ? 'text-rose-600' : 'text-emerald-600'
                  }`}>
                    {item.avgDwellMinutes} mins
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className={`px-2 py-0.5 rounded-full font-semibold text-[10px] ${
                      isBottleneck ? 'bg-rose-100 text-rose-700' : isDead ? 'bg-slate-100 text-slate-600' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {density}%
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="text-[11px] text-slate-600 font-medium">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-6 text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDrillDown(item.name);
                      }}
                      className="px-2.5 py-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-medium rounded text-[11px]"
                    >
                      Drill Down
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 bg-slate-50/40">
        <span>Showing {filtered.length} of {exhibitions?.length || 5} Exhibit Zones</span>
        <div className="flex items-center space-x-1">
          <button className="px-2.5 py-1 border border-slate-300 rounded bg-white text-slate-400 cursor-not-allowed">Previous</button>
          <button className="px-2.5 py-1 border border-indigo-500 rounded bg-indigo-50 font-bold text-indigo-600">1</button>
          <button className="px-2.5 py-1 border border-slate-300 rounded bg-white hover:bg-slate-100">2</button>
          <button className="px-2.5 py-1 border border-slate-300 rounded bg-white hover:bg-slate-100">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ExhibitTable;
