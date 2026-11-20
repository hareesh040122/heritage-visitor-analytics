require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 5000;

// Connect to database / initialize store
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🏛️  CuratorPulse Backend Server Running!`);
    console.log(`🚀 Port: ${PORT}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`📡 Local URL: http://localhost:${PORT}`);
    console.log(`🏥 Health Check: http://localhost:${PORT}/health`);
    console.log(`====================================================`);
  });
}).catch(err => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
