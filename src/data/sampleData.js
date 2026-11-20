// In-memory data store with realistic initial data for Heritage Visitor Analytics
const initialExhibitions = [
  {
    id: "exh-101",
    name: "Rosetta Stone & Ancient Antiquities",
    wing: "East Wing",
    category: "Archaeology",
    capacity: 250,
    currentOccupancy: 185,
    avgDwellMinutes: 22.4,
    educationalRating: 88,
    status: "Optimal"
  },
  {
    id: "exh-102",
    name: "Renaissance Masterpieces & Manuscripts",
    wing: "West Wing",
    category: "Fine Arts",
    capacity: 200,
    currentOccupancy: 140,
    avgDwellMinutes: 18.1,
    educationalRating: 74,
    status: "Optimal"
  },
  {
    id: "exh-103",
    name: "Interactive Heritage & STEM Sandbox",
    wing: "South Wing",
    category: "Interactive STEM",
    capacity: 150,
    currentOccupancy: 135,
    avgDwellMinutes: 28.6,
    educationalRating: 94,
    status: "Near Capacity"
  },
  {
    id: "exh-104",
    name: "Decorative Pottery & Folk Craft",
    wing: "North Corridor",
    category: "Crafts",
    capacity: 180,
    currentOccupancy: 28,
    avgDwellMinutes: 3.8,
    educationalRating: 19,
    status: "Underutilized (Dead Zone)"
  },
  {
    id: "exh-105",
    name: "Central Rotunda & Heritage Atrium",
    wing: "Central Core",
    category: "Transit & Welcome",
    capacity: 300,
    currentOccupancy: 282,
    avgDwellMinutes: 8.2,
    educationalRating: 52,
    status: "Choke Point / Bottleneck"
  }
];

const initialVisitors = [
  {
    id: "vis-1",
    visitorName: "School Group St. Jude",
    groupType: "School",
    groupSize: 28,
    wingVisited: "East Wing",
    exhibitId: "exh-101",
    dwellTimeMinutes: 65,
    tourType: "Docent-Guided",
    educationalQuizScore: 84,
    satisfactionRating: 4.8,
    timestamp: "2026-11-20T09:30:00Z"
  },
  {
    id: "vis-2",
    visitorName: "International Tourist Cohort A",
    groupType: "Tourists",
    groupSize: 4,
    wingVisited: "West Wing",
    exhibitId: "exh-102",
    dwellTimeMinutes: 42,
    tourType: "Mobile QR Audio",
    educationalQuizScore: 72,
    satisfactionRating: 4.4,
    timestamp: "2026-11-20T10:15:00Z"
  },
  {
    id: "vis-3",
    visitorName: "Heritage Explorers Family",
    groupType: "Family",
    groupSize: 3,
    wingVisited: "South Wing",
    exhibitId: "exh-103",
    dwellTimeMinutes: 55,
    tourType: "Self-Guided",
    educationalQuizScore: 90,
    satisfactionRating: 4.9,
    timestamp: "2026-11-20T10:45:00Z"
  },
  {
    id: "vis-4",
    visitorName: "City College History Club",
    groupType: "School",
    groupSize: 18,
    wingVisited: "East Wing",
    exhibitId: "exh-101",
    dwellTimeMinutes: 70,
    tourType: "Docent-Guided",
    educationalQuizScore: 88,
    satisfactionRating: 4.7,
    timestamp: "2026-11-20T11:00:00Z"
  },
  {
    id: "vis-5",
    visitorName: "Solo Scholar",
    groupType: "Individual",
    groupSize: 1,
    wingVisited: "North Corridor",
    exhibitId: "exh-104",
    dwellTimeMinutes: 12,
    tourType: "Self-Guided",
    educationalQuizScore: 50,
    satisfactionRating: 3.8,
    timestamp: "2026-11-20T11:30:00Z"
  }
];

let exhibitions = [...initialExhibitions];
let visitors = [...initialVisitors];

module.exports = {
  exhibitions,
  visitors
};
