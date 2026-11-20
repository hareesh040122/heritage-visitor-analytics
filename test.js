// Quick smoke test script for API endpoints
const http = require("http");
const app = require("./src/app");

const server = app.listen(5099, async () => {
  console.log("Testing server endpoints on temporary port 5099...");

  const testEndpoint = (path) => {
    return new Promise((resolve, reject) => {
      http.get(`http://localhost:5099${path}`, (res) => {
        let data = "";
        res.on("data", chunk => data += chunk);
        res.on("end", () => {
          console.log(`✅ [${res.statusCode}] ${path}`);
          resolve({ status: res.statusCode, body: data });
        });
      }).on("error", reject);
    });
  };

  try {
    await testEndpoint("/");
    await testEndpoint("/health");
    await testEndpoint("/ping");
    await testEndpoint("/api/visitors");
    await testEndpoint("/api/exhibitions");
    await testEndpoint("/api/analytics/overview");
    await testEndpoint("/api/analytics/spatial");
    await testEndpoint("/api/analytics/hourly");
    await testEndpoint("/api/reports");
    console.log("🎉 All 9 test endpoints responded successfully!");
    server.close(() => process.exit(0));
  } catch (err) {
    console.error("❌ Test failed:", err);
    server.close(() => process.exit(1));
  }
});
