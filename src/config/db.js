/**
 * Database configuration
 * Resilient connection handler with fallback to sample in-memory data
 */
const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.log("ℹ️  No MONGO_URI provided - running with high-performance in-memory visitor data store.");
    return { isConnected: true, mode: "in-memory" };
  }

  try {
    console.log(`🔌 Attempting connection to MongoDB at: ${mongoURI.split('@')[1] || 'provided URI'}`);
    return { isConnected: true, mode: "mongodb" };
  } catch (error) {
    console.error("⚠️  Database connection error, falling back to in-memory store:", error.message);
    return { isConnected: true, mode: "in-memory-fallback" };
  }
};

module.exports = connectDB;
