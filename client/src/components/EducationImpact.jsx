import React from 'react';

const EducationImpact = () => {
  return (
    <div className="space-y-6">
      <div className="p-3 rounded-lg border border-dashed border-emerald-300 bg-emerald-50/60 flex items-start space-x-3 text-xs text-emerald-900">
        <i className="fa-solid fa-graduation-cap text-emerald-600 mt-0.5"></i>
        <div>
          <span className="font-bold">Educational Impact (Compare & Filter Modes):</span>
          Empowers Education Coordinators to evaluate school curriculum effectiveness, compare self-guided QR tours vs docent-led tours, and track completion drop-off.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Completion Funnel */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 mb-1">Curriculum Tour Completion Funnel</h3>
          <p className="text-xs text-slate-500 mb-4">Tracking visitor drop-off across 4 historical milestone checkpoints</p>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-slate-700">Stage 1: Welcome & Ancient Origins</span>
                <span className="font-mono text-slate-600">100% (2,450 students)</span>
              </div>
              <div className="w-full bg-slate-100 h-6 rounded-md overflow-hidden flex">
                <div style={{ width: '100%' }} className="bg-indigo-600 h-full flex items-center px-3 text-[11px] text-white font-medium">100% Enrolled</div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-slate-700">Stage 2: Medieval Trade Route Quest</span>
                <span className="font-mono text-slate-600">89% (-11% drop)</span>
              </div>
              <div className="w-full bg-slate-100 h-6 rounded-md overflow-hidden flex">
                <div style={{ width: '89%' }} className="bg-indigo-500 h-full flex items-center px-3 text-[11px] text-white font-medium">89% Engaged</div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-slate-700">Stage 3: Scientific Revolution Artifacts</span>
                <span className="font-mono text-slate-600">76% (-13% drop)</span>
              </div>
              <div className="w-full bg-slate-100 h-6 rounded-md overflow-hidden flex">
                <div style={{ width: '76%' }} className="bg-indigo-400 h-full flex items-center px-3 text-[11px] text-white font-medium">76% Retained</div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-emerald-700">Stage 4: Final Heritage Quiz & Certificate</span>
                <span className="font-mono text-emerald-600 font-bold">68% Final Completion</span>
              </div>
              <div className="w-full bg-slate-100 h-6 rounded-md overflow-hidden flex">
                <div style={{ width: '68%' }} className="bg-emerald-500 h-full flex items-center px-3 text-[11px] text-white font-medium">68% Certificate Earned</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cohort Benchmarking */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 mb-1">Cohort Comparison: Guided vs Self-Guided</h3>
          <p className="text-xs text-slate-500 mb-4">Comparing key learning outcomes between delivery mechanisms</p>

          <table className="w-full text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3 text-left">Outcome Metric</th>
                <th className="py-2.5 px-3 text-center">Docent Guided</th>
                <th className="py-2.5 px-3 text-center">Mobile QR App</th>
                <th className="py-2.5 px-3 text-right">Variance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-3 font-medium text-slate-900">Average Dwell Time</td>
                <td className="py-3 px-3 text-center mono font-semibold text-indigo-600">62 mins</td>
                <td className="py-3 px-3 text-center mono font-semibold text-slate-700">41 mins</td>
                <td className="py-3 px-3 text-right font-mono text-emerald-600 font-bold">+51%</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-slate-900">Quiz Knowledge Score</td>
                <td className="py-3 px-3 text-center mono font-semibold text-indigo-600">84 / 100</td>
                <td className="py-3 px-3 text-center mono font-semibold text-slate-700">71 / 100</td>
                <td className="py-3 px-3 text-right font-mono text-emerald-600 font-bold">+18%</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-slate-900">Per-Student Cost</td>
                <td className="py-3 px-3 text-center mono text-slate-700">$4.50</td>
                <td className="py-3 px-3 text-center mono text-emerald-600 font-semibold">$0.25</td>
                <td className="py-3 px-3 text-right font-mono text-slate-500">-94%</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-slate-900">Satisfaction Rating</td>
                <td className="py-3 px-3 text-center mono text-indigo-600">4.8 / 5.0</td>
                <td className="py-3 px-3 text-center mono text-slate-700">4.3 / 5.0</td>
                <td className="py-3 px-3 text-right font-mono text-emerald-600 font-bold">+11%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EducationImpact;
