const express = require("express");
const router = express.Router();
const {
  getOverviewAnalytics,
  getSpatialHeatmap,
  getHourlyTrend
} = require("../controllers/analyticsController");

router.get("/overview", getOverviewAnalytics);
router.get("/spatial", getSpatialHeatmap);
router.get("/hourly", getHourlyTrend);

module.exports = router;
