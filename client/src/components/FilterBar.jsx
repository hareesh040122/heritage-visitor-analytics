import React from 'react';

const FilterBar = ({ filters, setFilters, onApply, onReset }) => {
  return (
    <section className="bg-white border-b border-slate-200 px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs z-10">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center space-x-1.5 text-slate-500 font-semibold uppercase text-[10px] tracking-wider">
          <i className="fa-solid fa-filter text-indigo-600"></i>
          <span>Filters:</span>
        </div>

        {/* Date Filter */}
        <div className="flex items-center bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 space-x-2">
          <i className="fa-regular fa-calendar text-slate-400"></i>
          <select
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            className="bg-transparent text-slate-700 font-medium outline-none cursor-pointer"
          >
            <option value="today">Today (Real-time telemetry)</option>
            <option value="yesterday">Yesterday</option>
            <option value="7d">Past 7 Days (Nov 13 - Nov 20)</option>
            <option value="30d">Past 30 Days (Monthly Trend)</option>
            <option value="quarter">Q4 Cultural Tourism Season</option>
          </select>
        </div>

        {/* Wing Filter */}
        <div className="flex items-center bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 space-x-2">
          <i className="fa-solid fa-building-columns text-slate-400"></i>
          <select
            value={filters.wing}
            onChange={(e) => setFilters({ ...filters, wing: e.target.value })}
            className="bg-transparent text-slate-700 font-medium outline-none cursor-pointer"
          >
            <option value="all">All Wings & Galleries (Global)</option>
            <option value="east">East Wing: Ancient Antiquities</option>
            <option value="west">West Wing: Renaissance Masterpieces</option>
            <option value="north">North Corridor: Decorative Pottery</option>
            <option value="south">South Wing: Interactive STEM Lab</option>
          </select>
        </div>

        {/* Visitor Segment */}
        <div className="flex items-center bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 space-x-2">
          <i className="fa-solid fa-users text-slate-400"></i>
          <select
            value={filters.demographic}
            onChange={(e) => setFilters({ ...filters, demographic: e.target.value })}
            className="bg-transparent text-slate-700 font-medium outline-none cursor-pointer"
          >
            <option value="all">All Visitor Segments</option>
            <option value="schools">School Groups & Field Trips</option>
            <option value="tourists">International Cultural Tourists</option>
            <option value="family">Family Discovery Passes</option>
            <option value="members">Museum Members / Passholders</option>
          </select>
        </div>

        {/* Actions */}
        <button
          onClick={onApply}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition shadow-xs"
        >
          Apply Filters
        </button>
        <button
          onClick={onReset}
          className="px-2.5 py-1.5 text-slate-500 hover:text-slate-800 font-medium transition"
        >
          <i className="fa-solid fa-rotate-left mr-1"></i> Reset
        </button>
      </div>

      <div className="text-[11px] text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
        Active context: <strong className="text-slate-700 font-mono">Past 7 Days · All Wings</strong>
      </div>
    </section>
  );
};

export default FilterBar;
