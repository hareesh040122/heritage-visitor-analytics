import React, { useState } from 'react';

const DataIngestion = () => {
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleSimulateUpload = () => {
    setFileUploaded(true);
    alert('Ticketing log received! Ingested 1,840 records into database.');
  };

  return (
    <div className="space-y-6">
      <div className="p-3 rounded-lg border border-dashed border-indigo-300 bg-indigo-50/60 flex items-start space-x-3 text-xs text-indigo-900">
        <i className="fa-solid fa-cloud-arrow-up text-indigo-600 mt-0.5"></i>
        <div>
          <span className="font-bold">Ingestion Pipeline:</span>
          Manage external ticketing batch CSV imports and monitor connected physical IoT BLE beacons across museum wings.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CSV Dropzone */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 mb-1">Batch Ticketing & Footfall CSV Upload</h3>
          <p className="text-xs text-slate-500 mb-4">Accepts schema-validated .csv, .tsv, and .json tourism log formats</p>

          <div
            onClick={handleSimulateUpload}
            className="border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-xl p-8 text-center bg-slate-50 cursor-pointer transition"
          >
            <i className="fa-solid fa-file-csv text-3xl text-indigo-500 mb-2"></i>
            <p className="text-xs font-semibold text-slate-700">Drag & drop your visitor export file here</p>
            <p className="text-[11px] text-slate-400 mt-1">or click to browse from your computer</p>
            <button className="mt-4 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs">
              Select CSV File
            </button>
          </div>

          {fileUploaded && (
            <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-circle-check text-emerald-600"></i>
                <span>Sample Data Validated: <strong>oct_ticketing_export.csv</strong> (1,840 records, 0 schema errors)</span>
              </div>
              <span className="font-mono text-[10px] text-emerald-700 font-bold">READY TO SYNC</span>
            </div>
          )}
        </div>

        {/* Connected Sensors */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900">Connected IoT Sensor Gateways</h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-1.5"></span> All Systems Operational
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-lg border border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs">
                  <i className="fa-solid fa-wifi"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">East Wing BLE Beacon Array (8 Nodes)</p>
                  <p className="text-[10px] text-slate-400 font-mono">Telemetry: 120 packets/sec · Last sync 2s ago</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-700 font-semibold">Active</span>
            </div>

            <div className="p-3 rounded-lg border border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs">
                  <i className="fa-solid fa-qrcode"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">Mobile QR Guide Scanning API</p>
                  <p className="text-[10px] text-slate-400 font-mono">Webhooks: 3,412 requests today</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-700 font-semibold">Active</span>
            </div>

            <div className="p-3 rounded-lg border border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-xs">
                  <i className="fa-solid fa-ticket"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">Turnstile Turnkey Ingress Gate</p>
                  <p className="text-[10px] text-slate-400 font-mono">Modbus TCP · Polling frequency 10s</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-700 font-semibold">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataIngestion;
