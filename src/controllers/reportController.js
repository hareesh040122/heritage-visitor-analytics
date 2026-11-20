const { exhibitions, visitors } = require("../data/sampleData");

// @desc    Get summary executive report
// @route   GET /api/reports
// @access  Public
const getSummaryReport = (req, res) => {
  res.status(200).json({
    success: true,
    reportName: "Heritage Visitor Engagement Executive Brief",
    generatedAt: new Date().toISOString(),
    reportingPeriod: "Past 7 Days",
    highlights: {
      totalVisitorsAnalyzed: 18450,
      averageDwellTimeMinutes: 54.2,
      topPerformingExhibit: "Rosetta Stone & Ancient Antiquities (East Wing)",
      deadZoneFlagged: "Decorative Pottery & Folk Craft (North Corridor)",
      recommendedAction: "Stagger 14:00 school group arrivals to alleviate Central Rotunda congestion by ~20%."
    },
    exhibitionsSummary: exhibitions.map(e => ({
      name: e.name,
      wing: e.wing,
      occupancyRatio: `${((e.currentOccupancy / e.capacity) * 100).toFixed(0)}%`,
      status: e.status
    }))
  });
};

module.exports = {
  getSummaryReport
};
