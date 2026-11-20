const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middleware/errorHandler");

// Import route handlers
const visitorRoutes = require("./routes/visitorRoutes");
const exhibitionRoutes = require("./routes/exhibitionRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}

// Root route - Welcome & Status
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🏛️ CuratorPulse — Heritage Visitor Analytics API",
    version: "1.0.0",
    deployedOn: "Render.com",
    status: "Active & Operational",
    documentation: "/api/documentation",
    endpoints: {
      health: "/health",
      ping: "/ping",
      visitors: "/api/visitors",
      exhibitions: "/api/exhibitions",
      analytics: "/api/analytics/overview",
      spatial: "/api/analytics/spatial",
      hourlyTrend: "/api/analytics/hourly",
      reports: "/api/reports"
    }
  });
});

// Health check endpoint (for Render / uptime monitors)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    memoryUsage: process.memoryUsage()
  });
});

// Quick ping endpoint
app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

// API Routes
app.use("/api/visitors", visitorRoutes);
app.use("/api/exhibitions", exhibitionRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/reports", reportRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
