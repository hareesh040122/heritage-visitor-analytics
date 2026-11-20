import React from 'react';

export const EmptyState = ({ onReset }) => {
  return (
    <div className="space-y-6">
      <div className="p-3 rounded-lg border border-dashed border-slate-300 bg-white flex items-start space-x-3 text-xs text-slate-700">
        <i className="fa-solid fa-inbox text-slate-500 mt-0.5"></i>
        <div>
          <span className="font-bold">Empty State Wireframe:</span>
          A professional UX never shows a blank white page when no data matches. It clearly explains <em>why</em> it is empty and gives the user an immediate action.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs text-center flex flex-col items-center justify-center min-h-[340px]">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-2xl mb-4">
            <i className="fa-solid fa-filter-circle-xmark"></i>
          </div>
          <h4 className="text-base font-bold text-slate-900 mb-1">No Visitor Records Match Selected Filters</h4>
          <p className="text-xs text-slate-500 max-w-sm mb-6 leading-relaxed">
            No telemetry was recorded for the selected gallery criteria during this date range. Try widening your criteria.
          </p>
          <div className="flex items-center space-x-3">
            <button
              onClick={onReset}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs"
            >
              <i className="fa-solid fa-rotate-left mr-1.5"></i> Clear All Filters
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs text-center flex flex-col items-center justify-center min-h-[340px]">
          <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl mb-4">
            <i className="fa-solid fa-landmark-flag"></i>
          </div>
          <h4 className="text-base font-bold text-slate-900 mb-1">Welcome to CuratorPulse!</h4>
          <p className="text-xs text-slate-500 max-w-sm mb-6 leading-relaxed">
            Connect your first IoT BLE sensor gateway or upload historical ticketing CSV logs to generate real-time analytics.
          </p>
          <button
            onClick={() => alert('Opening sensor onboarding wizard...')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs"
          >
            <i className="fa-solid fa-cloud-arrow-up mr-1.5"></i> Connect First Sensor
          </button>
        </div>
      </div>
    </div>
  );
};

export const ErrorState = ({ onRetry }) => {
  return (
    <div className="space-y-6">
      <div className="p-3 rounded-lg border border-dashed border-rose-200 bg-rose-50/50 flex items-start space-x-3 text-xs text-rose-900">
        <i className="fa-solid fa-triangle-exclamation text-rose-600 mt-0.5"></i>
        <div>
          <span className="font-bold">Error State Wireframe:</span>
          Never show an unhandled raw stack trace to museum staff. Error states must specify what failed, provide fallback cached data, and offer a clear one-click recovery action.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-xl border border-rose-200 shadow-xs text-center flex flex-col items-center justify-center min-h-[340px]">
          <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-2xl mb-4">
            <i className="fa-solid fa-wifi-slash"></i>
          </div>
          <h4 className="text-base font-bold text-slate-900 mb-1">Sensor Telemetry Stream Offline</h4>
          <p className="text-xs text-slate-500 max-w-sm mb-4 leading-relaxed">
            Lost connection to MQTT Gateway <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-rose-700">gw-eastwing-04</code>. Currently displaying cached metrics from 10:45 AM.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-[11px] text-amber-800 mb-6 max-w-sm">
            <i className="fa-solid fa-triangle-exclamation mr-1 text-amber-600"></i> Fallback Mode: Historical rolling average is active.
          </div>
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg shadow-xs"
          >
            <i className="fa-solid fa-rotate mr-1.5"></i> Retry Connection
          </button>
        </div>

        <div className="bg-white p-8 rounded-xl border border-rose-200 shadow-xs text-center flex flex-col items-center justify-center min-h-[340px]">
          <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-2xl mb-4">
            <i className="fa-solid fa-file-circle-xmark"></i>
          </div>
          <h4 className="text-base font-bold text-slate-900 mb-1">CSV Ingestion Failed: Schema Mismatch</h4>
          <p className="text-xs text-slate-500 max-w-sm mb-4 leading-relaxed">
            File <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-rose-700">tour_oct24.csv</code> is missing required column: <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-rose-700">dwell_duration_seconds</code>.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-[11px] font-mono text-left text-slate-600 mb-6 max-w-sm">
            Line 42: Timestamp invalid<br />
            Line 88: Unknown exhibit_id 'GAL_99'
          </div>
          <button
            onClick={() => alert('Opening CSV repair tool...')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs"
          >
            <i className="fa-solid fa-upload mr-1.5"></i> Re-Upload Corrected File
          </button>
        </div>
      </div>
    </div>
  );
};
