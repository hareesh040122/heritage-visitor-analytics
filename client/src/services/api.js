import axios from 'axios';

// Default to production Render API URL with fallback
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://heritage-visitor-analytics-api.onrender.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Fallback initial data in case Render server is waking up from free-tier sleep
export const fallbackAnalytics = {
  totalFootfall: 18450,
  footfallDelta: "+14.8%",
  averageDwellMinutes: 54.2,
  dwellDelta: "+6.1 mins",
  educationalEngagementRate: "71.8%",
  engagementDelta: "+8.4%",
  bottleneckAlertsCount: 2,
  bottleneckZones: ["Central Rotunda & Heritage Atrium", "Interactive Heritage & STEM Sandbox"]
};

export const fallbackExhibitions = [
  { id: "exh-101", name: "Rosetta Stone & Ancient Antiquities", wing: "East Wing", capacity: 250, currentOccupancy: 185, avgDwellMinutes: 22.4, status: "Optimal" },
  { id: "exh-102", name: "Renaissance Masterpieces & Manuscripts", wing: "West Wing", capacity: 200, currentOccupancy: 140, avgDwellMinutes: 18.1, status: "Optimal" },
  { id: "exh-103", name: "Interactive Heritage & STEM Sandbox", wing: "South Wing", capacity: 150, currentOccupancy: 135, avgDwellMinutes: 28.6, status: "Near Capacity" },
  { id: "exh-104", name: "Decorative Pottery & Folk Craft", wing: "North Corridor", capacity: 180, currentOccupancy: 28, avgDwellMinutes: 3.8, status: "Underutilized (Dead Zone)" },
  { id: "exh-105", name: "Central Rotunda & Heritage Atrium", wing: "Central Core", capacity: 300, currentOccupancy: 282, avgDwellMinutes: 8.2, status: "Choke Point / Bottleneck" }
];

export const fallbackVisitors = [
  { id: "vis-1", visitorName: "School Group St. Jude", groupType: "School", groupSize: 28, wingVisited: "East Wing", dwellTimeMinutes: 65, tourType: "Docent-Guided", educationalQuizScore: 84 },
  { id: "vis-2", visitorName: "International Tourist Cohort A", groupType: "Tourists", groupSize: 4, wingVisited: "West Wing", dwellTimeMinutes: 42, tourType: "Mobile QR Audio", educationalQuizScore: 72 },
  { id: "vis-3", visitorName: "Heritage Explorers Family", groupType: "Family", groupSize: 3, wingVisited: "South Wing", dwellTimeMinutes: 55, tourType: "Self-Guided", educationalQuizScore: 90 },
  { id: "vis-4", visitorName: "City College History Club", groupType: "School", groupSize: 18, wingVisited: "East Wing", dwellTimeMinutes: 70, tourType: "Docent-Guided", educationalQuizScore: 88 }
];

// API Methods with resilient fallback
export const fetchOverviewAnalytics = async () => {
  try {
    const res = await apiClient.get('/api/analytics/overview');
    return { data: res.data.data, isLive: true };
  } catch (err) {
    console.warn("Backend unavailable, using cached analytics:", err.message);
    return { data: fallbackAnalytics, isLive: false };
  }
};

export const fetchExhibitions = async () => {
  try {
    const res = await apiClient.get('/api/exhibitions');
    return { data: res.data.data, isLive: true };
  } catch (err) {
    console.warn("Backend unavailable, using cached exhibitions:", err.message);
    return { data: fallbackExhibitions, isLive: false };
  }
};

export const fetchVisitors = async () => {
  try {
    const res = await apiClient.get('/api/visitors');
    return { data: res.data.data, isLive: true };
  } catch (err) {
    console.warn("Backend unavailable, using cached visitors:", err.message);
    return { data: fallbackVisitors, isLive: false };
  }
};

export const checkHealth = async () => {
  try {
    const res = await apiClient.get('/health');
    return { status: 'connected', url: API_BASE_URL, uptime: res.data.uptime };
  } catch (err) {
    return { status: 'offline-cached', url: API_BASE_URL };
  }
};

export default apiClient;
