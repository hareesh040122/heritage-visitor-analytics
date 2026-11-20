const { exhibitions, visitors } = require("../data/sampleData");

// @desc    Get dashboard high-level KPIs
// @route   GET /api/analytics/overview
// @access  Public
const getOverviewAnalytics = (req, res) => {
  const totalVisitorsCount = visitors.reduce((acc, v) => acc + (v.groupSize || 1), 0) * 350; // scaled representative estimate
  const avgDwell = (visitors.reduce((acc, v) => acc + v.dwellTimeMinutes, 0) / (visitors.length || 1)).toFixed(1);
  const avgQuizScore = (visitors.reduce((acc, v) => acc + v.educationalQuizScore, 0) / (visitors.length || 1)).toFixed(1);

  const chokePoints = exhibitions.filter(e => e.currentOccupancy / e.capacity >= 0.85);

  res.status(200).json({
    success: true,
    data: {
      totalFootfall: 18450,
      footfallDelta: "+14.8%",
      averageDwellMinutes: Number(avgDwell),
      dwellDelta: "+6.1 mins",
      educationalEngagementRate: `${avgQuizScore}%`,
      engagementDelta: "+8.4%",
      bottleneckAlertsCount: chokePoints.length,
      bottleneckZones: chokePoints.map(c => c.name),
      summaryNote: "Summary-before-detail: 4 critical health metrics above the fold."
    }
  });
};

// @desc    Get spatial heatmap data by gallery zone
// @route   GET /api/analytics/spatial
// @access  Public
const getSpatialHeatmap = (req, res) => {
  const spatialData = exhibitions.map(exh => {
    const densityPercent = Math.round((exh.currentOccupancy / exh.capacity) * 100);
    let zoneClassification = "Optimal";
    if (densityPercent >= 90) zoneClassification = "Bottleneck Choke Point";
    else if (densityPercent <= 20) zoneClassification = "Dead Zone / Underutilized";

    return {
      exhibitionId: exh.id,
      name: exh.name,
      wing: exh.wing,
      currentOccupancy: exh.currentOccupancy,
      capacity: exh.capacity,
      densityPercent: `${densityPercent}%`,
      avgDwellMinutes: exh.avgDwellMinutes,
      zoneClassification
    };
  });

  res.status(200).json({
    success: true,
    count: spatialData.length,
    data: spatialData
  });
};

// @desc    Get hourly footfall vs capacity threshold
// @route   GET /api/analytics/hourly
// @access  Public
const getHourlyTrend = (req, res) => {
  const hourlyData = [
    { hour: "09:00", footfall: 240, safetyLimit: 1200, status: "Normal" },
    { hour: "10:00", footfall: 520, safetyLimit: 1200, status: "Normal" },
    { hour: "11:00", footfall: 840, safetyLimit: 1200, status: "Normal" },
    { hour: "12:00", footfall: 1080, safetyLimit: 1200, status: "Normal" },
    { hour: "13:00", footfall: 1010, safetyLimit: 1200, status: "Normal" },
    { hour: "14:00", footfall: 1290, safetyLimit: 1200, status: "Capacity Alert ⚠️" },
    { hour: "15:00", footfall: 1240, safetyLimit: 1200, status: "Capacity Alert ⚠️" },
    { hour: "16:00", footfall: 890, safetyLimit: 1200, status: "Normal" },
    { hour: "17:00", footfall: 560, safetyLimit: 1200, status: "Normal" },
    { hour: "18:00", footfall: 210, safetyLimit: 1200, status: "Normal" }
  ];

  res.status(200).json({
    success: true,
    data: hourlyData
  });
};

module.exports = {
  getOverviewAnalytics,
  getSpatialHeatmap,
  getHourlyTrend
};
