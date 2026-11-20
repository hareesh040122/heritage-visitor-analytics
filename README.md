# Heritage Visitor Analytics (CuratorPulse)

> **Capstone Project:** Heritage sites and museums struggle to understand visitor engagement patterns and optimize educational experiences. A visitor analytics system could improve cultural tourism outcomes.

CuratorPulse is a centralized analytics and visitor intelligence platform designed for museums, heritage sites, and cultural institutions. The backend server powers visitor telemetry ingestion, exhibition dwell analysis, bottleneck detection, and reporting.

---

## 🚀 Deployed Backend Server (Render.com)

The backend server is fully deployed and actively running in production on **Render.com**:

| Resource | Public URL | Status |
| :--- | :--- | :--- |
| **Live Backend API** | [https://heritage-visitor-analytics-api.onrender.com/](https://heritage-visitor-analytics-api.onrender.com/) | `🟢 Live & Operational` |
| **Health Check Endpoint** | [https://heritage-visitor-analytics-api.onrender.com/health](https://heritage-visitor-analytics-api.onrender.com/health) | `200 OK` |
| **Ping Endpoint** | [https://heritage-visitor-analytics-api.onrender.com/ping](https://heritage-visitor-analytics-api.onrender.com/ping) | `pong` |
| **Visitors Telemetry API** | [https://heritage-visitor-analytics-api.onrender.com/api/visitors](https://heritage-visitor-analytics-api.onrender.com/api/visitors) | `200 OK` |
| **Exhibitions API** | [https://heritage-visitor-analytics-api.onrender.com/api/exhibitions](https://heritage-visitor-analytics-api.onrender.com/api/exhibitions) | `200 OK` |
| **Overview Analytics API** | [https://heritage-visitor-analytics-api.onrender.com/api/analytics/overview](https://heritage-visitor-analytics-api.onrender.com/api/analytics/overview) | `200 OK` |
| **Spatial Heatmap API** | [https://heritage-visitor-analytics-api.onrender.com/api/analytics/spatial](https://heritage-visitor-analytics-api.onrender.com/api/analytics/spatial) | `200 OK` |
| **Summary Report API** | [https://heritage-visitor-analytics-api.onrender.com/api/reports](https://heritage-visitor-analytics-api.onrender.com/api/reports) | `200 OK` |

### Render Deployment Configuration
* **Service Type:** Web Service
* **Runtime:** Node.js (>=18.0.0)
* **Build Command:** `npm install`
* **Start Command:** `npm start`
* **Health Check Path:** `/health`
* **Infrastructure as Code:** [`render.yaml`](render.yaml) included for automatic Blueprint builds.

---

## 📡 API Documentation (Bruno Collection)

All API endpoints are documented and organized in the **Bruno** API client format under the [`bruno-collection/`](bruno-collection/) directory.

### Documented Endpoints Summary

| Category | HTTP Method | Endpoint | Description |
| :--- | :---: | :--- | :--- |
| **Health** | `GET` | `/` | Root service info & available routes |
| **Health** | `GET` | `/health` | Server uptime, status, and memory metrics |
| **Health** | `GET` | `/ping` | Quick availability check (`pong`) |
| **Visitors** | `GET` | `/api/visitors` | List all visitor sessions (supports `wing` & `groupType` filters) |
| **Visitors** | `GET` | `/api/visitors/:id` | Get details of a specific visitor session |
| **Visitors** | `POST` | `/api/visitors` | Log a new visitor telemetry record |
| **Visitors** | `PUT` | `/api/visitors/:id` | Update dwell duration or quiz scores |
| **Visitors** | `DELETE`| `/api/visitors/:id` | Remove a visitor session |
| **Exhibitions** | `GET` | `/api/exhibitions` | List all galleries with dwell times & capacities |
| **Exhibitions** | `GET` | `/api/exhibitions/:id` | Retrieve single exhibition details |
| **Exhibitions** | `POST` | `/api/exhibitions` | Register a new exhibition / gallery wing |
| **Analytics** | `GET` | `/api/analytics/overview` | 4 primary health KPIs (footfall, dwell, engagement, bottlenecks) |
| **Analytics** | `GET` | `/api/analytics/spatial` | Gallery density classifications (Optimal, Dead Zone, Bottleneck) |
| **Analytics** | `GET` | `/api/analytics/hourly` | Hourly footfall trend vs safety capacity threshold |
| **Reports** | `GET` | `/api/reports` | Executive summary report for museum leadership |

### How to Use Bruno with This Repository
1. Install [Bruno](https://www.usebruno.com/) (Open-source API client).
2. Click **Open Collection** in Bruno and select the `bruno-collection` folder in this repo.
3. In the top-right environment dropdown, select:
   * **Local** (`http://localhost:5000`) for local development testing.
   * **Render** (`https://heritage-visitor-analytics-api.onrender.com`) for testing the live cloud deployment.
4. Run any request directly.

---

## 💻 Local Setup & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hareesh040122/heritage-visitor-analytics.git
   cd heritage-visitor-analytics
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```

4. **Run in development mode (with nodemon):**
   ```bash
   npm run dev
   ```

5. **Run in production mode:**
   ```bash
   npm start
   ```

6. **Run smoke tests:**
   ```bash
   npm test
   ```

---

## 🎥 Video Walkthrough Guide

The 3+ minute video walkthrough explains the project purpose, backend code architecture, Bruno API testing, and live Render deployment.

* **Detailed Script & Timings:** [`docs/VIDEO_WALKTHROUGH_SCRIPT.md`](docs/VIDEO_WALKTHROUGH_SCRIPT.md)
* **Deployment Guide:** [`docs/DEPLOYMENT_GUIDE.md`](docs/DEPLOYMENT_GUIDE.md)
* **Google Drive Link:** [Recorded Backend Deployment Video](https://drive.google.com/) *(Shared with "Anyone with the link can edit")*

---

## 🌿 Git Branches & Pull Request

* **Development Branch:** `feature/backend-deployment`
* **Target Branch:** `main`
* **Pull Request:** [https://github.com/hareesh040122/heritage-visitor-analytics/pull/new/feature/backend-deployment](https://github.com/hareesh040122/heritage-visitor-analytics/pull/new/feature/backend-deployment)
