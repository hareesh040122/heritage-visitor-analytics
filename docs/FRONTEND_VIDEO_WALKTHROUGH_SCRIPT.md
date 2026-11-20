# CuratorPulse Frontend Deployment — Video Walkthrough Script
## Module 2.17: Frontend Deployment (Capstone Project)

> **Mandatory Grading Checklist (Follow strictly to avoid a score of 0):**
> - [x] **Duration:** At least 3 minutes (aim for 3:30 to 4:30 minutes).
> - [x] **Camera:** Turned ON (your face must be clearly visible throughout the entire video).
> - [x] **Screen Sharing:** Entire screen shared (NOT just a single browser tab).
> - [x] **Platform:** Record using **Google Meet** with your `@kalvium.community` email (cloud recording is enabled).
> - [x] **File Name Syntax:** `Your name_Squad name_File name`  
>   *(Example: `Hareesh_Squad 42_Frontend Deployment Video`)*
> - [x] **Sharing Access:** Set link access to **"Anyone with the link can edit"** (essential for internal AI evaluation tool).
> - [x] **Audio:** Clear voice without background noise.

---

## Preparation Before Recording:
1. Open **Google Meet** with your `@kalvium.community` account, start an instant meeting, enable your webcam, and share your **Entire Screen**.
2. Have the following windows ready:
   - **Netlify Dashboard:** Open to your site on [https://app.netlify.com](https://app.netlify.com).
   - **Browser Tab 1:** Showing the live deployed Netlify frontend: `https://curatorpulse-heritage-analytics.netlify.app/`
   - **Browser Tab 2:** Showing the live Render backend: `https://heritage-visitor-analytics-api.onrender.com/`
   - **VS Code:** Showing the frontend code (`client/src/App.jsx`, `client/package.json`, `netlify.toml`).
3. Click **Record** in Google Meet.

---

## Timed Video Script (Total Duration: ~4:00 Minutes)

### [0:00 – 0:45] 1. Introduction & Capstone Overview
* **Action:** Look directly at the webcam. Have the deployed Netlify frontend or VS Code visible on your shared screen.
* **Script:**
  > "Hello everyone, my name is Hareesh, and this is my video walkthrough for Module 2.17 Frontend Deployment for my Capstone Project: the **Heritage Visitor Analytics System** (CuratorPulse).  
  > 
  > Heritage sites, national monuments, and museums face a major challenge in understanding visitor engagement patterns, detecting physical gallery dead zones, and measuring educational tour outcomes.  
  > 
  > Following our previous milestone where we deployed the backend API on Render, in this milestone I have built, optimized, and deployed our production frontend application on **Netlify**. In this video, I will explain our frontend architecture, demonstrate the core features, walk through the Netlify build and deployment process, and verify our live production site."

---

### [0:45 – 1:30] 2. Frontend Code Architecture & Build Setup
* **Action:** Show VS Code. Walk through `client/src/App.jsx`, `client/src/components/`, `client/vite.config.js`, and `netlify.toml`.
* **Script:**
  > "Let's first inspect our frontend codebase. The application is built using **React** with **Vite** as our build tool and **Tailwind CSS** for modern, responsive museum-grade UI styling.  
  > 
  > Looking at `client/src/App.jsx`, we have architected the application cleanly:  
  > - In `client/src/services/api.js`, we configure Axios to connect directly to our live Render backend API at `https://heritage-visitor-analytics-api.onrender.com`, with an intelligent in-memory fallback to ensure the UI remains fully interactive even if the backend is waking up.  
  > - Under `client/src/components/`, we have modular components for our KPI cards, charts, sortable exhibit table, spatial heatmap, educational impact funnel, batch CSV ingestion dropzone, and our slide-out telemetry drawer.  
  > - In the repository root, we have configured `netlify.toml` and `_redirects` to handle Single Page Application client-side routing, pointing all routes back to `/index.html` with a 200 status code."

---

### [1:30 – 2:30] 3. Core Feature Demonstration (Live on Netlify)
* **Action:** Switch to the live deployed Netlify site (`https://curatorpulse-heritage-analytics.netlify.app/`).
* **Script:**
  > "Now, let's explore our live application running in production on Netlify:  
  > 
  > 1. **5-Second Scan Rule:** As soon as the page loads, all four critical health KPI cards are visible **above the fold**: Total Footfall (18,450), Average Dwell Time (54.2 mins), Educational Engagement (71.8%), and Zone Choke Alerts. A museum director understands the health of the entire facility in under five seconds without scrolling.  
  > 2. **Focused Visualizations:**  
  >    - On the left, our **Hourly Footfall Chart** flags a safety capacity threshold of 1,200 visitors per hour, alerting curators that 2:00 PM is experiencing congestion.  
  >    - On the right, our **Dwell vs. Engagement Chart** immediately detects that the Decorative Pottery gallery is a dead zone with only 3.8 minutes dwell time.  
  > 3. **Slide-Out Telemetry Drawer:** Clicking on any exhibit—like the Rosetta Stone—smoothly slides out this granular inspector, showing micro-dwell histograms and bounce rates without losing page context.  
  > 4. **Spatial Heatmap View:** Clicking over to the **Spatial & Heatmap Flow** tab displays our interactive Level 1 gallery floorplan with live crowd density classifications and automated curator layout recommendations."

---

### [2:30 – 3:30] 4. Netlify Deployment Walkthrough
* **Action:** Switch to the **Netlify Dashboard** showing the build logs, deploy status, and site configuration.
* **Script:**
  > "Now, let's review how this frontend was deployed to **Netlify**:  
  > 
  > 1. First, I logged into Netlify using our **Kalvium community credentials** and connected our GitHub repository: `hareesh040122/heritage-visitor-analytics`.  
  > 2. For the build settings:  
  >    - **Branch:** We selected `feature/frontend-deployment`.  
  >    - **Base directory:** Set to `client`.  
  >    - **Build command:** Configured as `npm run build`, which compiles our React code using Vite.  
  >    - **Publish directory:** Set to `client/dist`.  
  > 3. Under **Environment variables**, we set `VITE_API_URL` to point to our live Render backend.  
  > 4. Looking at the deployment log, Netlify pulled the code, installed dependencies, executed the Vite build in 1.16 seconds, processed our redirect rules, and successfully published the site with global CDN distribution and SSL certification."

---

### [3:30 – 4:00] 5. Live Production Verification & Conclusion
* **Action:** Refresh the live Netlify application. Demonstrate clicking a filter, clicking the **Export CSV** button, and showing the **Backend: Render API** badge in the header.
* **Script:**
  > "Finally, let's verify our live deployment:  
  > 
  > The frontend is live with HTTPS enabled.  
  > The header displays a green indicator confirming active connection to our Render backend API.  
  > We can filter by date range or gallery wing, navigate between the educational and data ingestion modules, and trigger real-time CSV exports.  
  > 
  > In conclusion, our frontend is completely implemented, connected to our backend, and successfully deployed on Netlify.  
  > 
  > Thank you for watching!"

---

## Post-Recording Submission Steps:
1. **Stop Recording** in Google Meet.
2. Wait a few moments for Google Meet to save the recording to your **Google Drive** (*Meet Recordings* folder).
3. Rename the video file to:  
   👉 `Hareesh_Squad 42_Frontend Deployment Video` *(replace squad name if different)*.
4. Right-click the file $\rightarrow$ select **Share** $\rightarrow$ Under **General access**, change from *Restricted* to:  
   👉 **"Anyone with the link"** and set the role to **"Editor"** (*"Anyone with the link can edit"*).
5. Click **Copy link**.
6. Paste the link into the **Video Explaination URL\*** field on your Kalvium assignment portal.
