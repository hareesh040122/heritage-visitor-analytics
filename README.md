# Heritage Visitor Analytics (CuratorPulse)

> **Capstone Project:** Heritage sites and museums struggle to understand visitor engagement patterns and optimize educational experiences. A visitor analytics system could improve cultural tourism outcomes.

CuratorPulse is a full-stack analytics and visitor intelligence platform designed for museums, cultural monuments, and heritage tourism operators. It empowers museum directors, curators, and educational coordinators to monitor visitor dwell time, identify gallery dead zones, alleviate crowd bottlenecks, and evaluate curriculum effectiveness.

---

## 🌐 Deployed Application Links

Both the frontend client and backend server are actively deployed and running in production:

| Component | Hosting Platform | Public Production URL | Status |
| :--- | :--- | :--- | :--- |
| **Frontend Web Application** | **Netlify** | [https://curatorpulse-heritage-analytics.netlify.app/](https://curatorpulse-heritage-analytics.netlify.app/) | `🟢 Live & Operational` |
| **Backend REST API** | **Render.com** | [https://heritage-visitor-analytics-api.onrender.com/](https://heritage-visitor-analytics-api.onrender.com/) | `🟢 Live & Operational` |
| **Backend Health Check** | **Render.com** | [https://heritage-visitor-analytics-api.onrender.com/health](https://heritage-visitor-analytics-api.onrender.com/health) | `200 OK` |
| **Mock UX Specification** | **Repository** | [View Mock UX Spec](docs/MOCK_UX_SPECIFICATION.md) | `Approved` |

---

## 🚀 Frontend Deployment Details (Netlify)

The frontend is built using **React** and **Vite**, styled with **Tailwind CSS**, and deployed globally on **Netlify**.

### Netlify Deployment Configuration
* **Service:** Netlify Continuous Deployment (CI/CD)
* **Base Directory:** `client`
* **Build Command:** `npm run build`
* **Publish Directory:** `client/dist`
* **Routing:** Single Page Application (SPA) redirect rules defined in [`netlify.toml`](netlify.toml) and `_redirects` (`/*  /index.html  200`).
* **Environment Variable:** `VITE_API_URL` = `https://heritage-visitor-analytics-api.onrender.com`
* **Deployment Guide:** Detailed instructions available in [`docs/NETLIFY_DEPLOYMENT_GUIDE.md`](docs/NETLIFY_DEPLOYMENT_GUIDE.md).

### Core Frontend Features
1. **5-Second Scan Rule (Executive Dashboard):**
   - Four vital health KPI cards positioned strictly **above the fold**: *Total Footfall (18,450)*, *Average Dwell Time (54.2 mins)*, *Educational Engagement Rate (71.8%)*, and *Zone Choke Alerts (2 Zones)*.
2. **Focused Visualizations:**
   - **Hourly Footfall & Capacity Threshold Chart:** Identifies the 14:00 peak congestion spike and warns when footfall approaches the 1,200/hr safety cap.
   - **Exhibit Dwell vs. Engagement Chart:** Directly exposes the *Decorative Pottery* corridor as an underperforming dead zone (3.8 mins dwell).
3. **Spatial Floorplan & Heatmap View:**
   - Interactive Level 1 gallery map color-coded by dwell density, highlighting chokepoints and providing automated layout reconfiguration guidance.
4. **Slide-Out Granular Telemetry Drawer:**
   - Click any gallery or exhibit to inspect micro-dwell distribution histograms (<30s glance, 30s-3m skim, >5m deep study) and bounce rates without losing page context.
5. **Educational Tour Impact:**
   - Curriculum drop-off funnel and guided vs. self-guided cohort benchmarking (+51% dwell time, +18% quiz score).
6. **Data Ingestion & IoT Health:**
   - Batch ticketing CSV dropzone with validation preview and live BLE beacon array status monitors.
7. **Empty & Error State Wireframes:**
   - Interactive edge-case handling for zero filter matches and MQTT sensor reconnection fallback.

---

## ⚙️ Backend Deployment Details (Render.com)

The backend server is built with **Node.js** and **Express.js**, deployed as a Web Service on **Render.com**.

### Render Configuration
* **Runtime:** Node.js (>=18.0.0)
* **Build Command:** `npm install`
* **Start Command:** `npm start`
* **Health Check Path:** `/health`
* **Infrastructure as Code:** Configured with [`render.yaml`](render.yaml).

---

## 📡 API Documentation (Bruno Collection)

All API endpoints are documented using **Bruno** and saved under [`bruno-collection/`](bruno-collection/):

| Category | HTTP Method | Endpoint | Description |
| :--- | :---: | :--- | :--- |
| **Health** | `GET` | `/` | API status, version, and route index |
| **Health** | `GET` | `/health` | Server uptime, environment, and memory |
| **Visitors** | `GET` | `/api/visitors` | List visitor records with `wing` & `groupType` filters |
| **Visitors** | `POST` | `/api/visitors` | Create new visitor session |
| **Visitors** | `GET` | `/api/visitors/:id` | Fetch specific visitor telemetry |
| **Visitors** | `PUT` | `/api/visitors/:id` | Update dwell duration or quiz scores |
| **Visitors** | `DELETE`| `/api/visitors/:id` | Remove visitor entry |
| **Exhibitions** | `GET` | `/api/exhibitions` | List all galleries with dwell times & capacities |
| **Exhibitions** | `POST` | `/api/exhibitions` | Register new exhibition |
| **Analytics** | `GET` | `/api/analytics/overview` | 4 high-level KPI cards |
| **Analytics** | `GET` | `/api/analytics/spatial` | Gallery density classifications |
| **Analytics** | `GET` | `/api/analytics/hourly` | Hourly footfall vs safety capacity limit |
| **Reports** | `GET` | `/api/reports` | Executive summary report for museum leadership |

---

## 💻 Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/hareesh040122/heritage-visitor-analytics.git
cd heritage-visitor-analytics
```

### 2. Run the Backend Server
```bash
# In the root directory:
npm install
npm run dev
# Server running at http://localhost:5000
```

### 3. Run the Frontend Client
```bash
# In a separate terminal:
cd client
npm install
npm run dev
# Frontend running at http://localhost:3000
```

---

## 🎥 Video Walkthrough Guides

* **Frontend Walkthrough Script (Module 2.17):** [`docs/FRONTEND_VIDEO_WALKTHROUGH_SCRIPT.md`](docs/FRONTEND_VIDEO_WALKTHROUGH_SCRIPT.md)  
  *3+ minute timed screen-share presentation explaining frontend architecture, Netlify build, and live feature walkthrough.*
* **Backend Walkthrough Script (Module 2.16):** [`docs/VIDEO_WALKTHROUGH_SCRIPT.md`](docs/VIDEO_WALKTHROUGH_SCRIPT.md)  
  *3+ minute timed walkthrough of Express backend, Bruno API testing, and Render deployment.*

---

## 🌿 Git Branches & Pull Requests

* **Frontend Deployment Branch:** `feature/frontend-deployment`
* **Target Branch:** `main`
* **Pull Request:** [https://github.com/hareesh040122/heritage-visitor-analytics/pull/new/feature/frontend-deployment](https://github.com/hareesh040122/heritage-visitor-analytics/pull/new/feature/frontend-deployment)
