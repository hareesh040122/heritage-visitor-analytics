# CuratorPulse Backend Deployment — Video Walkthrough Script
## Module 2.16: Backend Deployment (Capstone Project)

> **Submission Requirements Checklist:**
> - [x] **Duration:** At least 3 minutes (aim for 3:30 to 4:30 minutes).
> - [x] **Camera:** Face clearly visible on camera throughout the video.
> - [x] **Screen Sharing:** Entire screen shared (NOT just a single browser tab).
> - [x] **Platform:** Record using **Google Meet** with your `@kalvium.community` email (cloud recording is enabled).
> - [x] **File Name Syntax:** `Your name_Squad name_File name`  
>   *(Example: `Hareesh_Squad 42_Backend Deployment Video`)*
> - [x] **Sharing Access:** Set link access to **"Anyone with the link can edit"** so the AI evaluation tool can process smoothly.
> - [x] **Audio:** Clear speech without background noise.

---

## Preparation Before Recording:
1. Open **Google Meet** using your Kalvium community email, start an instant meeting, turn on your camera, and choose **Share Entire Screen**.
2. Have the following windows ready on your desktop:
   - **VS Code:** Showing the backend codebase (`server.js`, `src/app.js`, `render.yaml`).
   - **Terminal:** Running `node server.js` or `npm test`.
   - **Bruno:** Showing the `bruno-collection` with all requests.
   - **Render Dashboard:** Open to your Web Service `heritage-visitor-analytics-api` on [https://dashboard.render.com](https://dashboard.render.com).
   - **Browser Tab:** Pointing to the live Render URL `https://heritage-visitor-analytics-api.onrender.com/`.
3. Hit **Record** in Google Meet.

---

## Timed Video Script (Total Duration: ~4:00 Minutes)

### [0:00 – 0:45] 1. Introduction & Capstone Overview
* **Action:** Look at the camera. Have the project README or VS Code visible on your shared screen.
* **Script:**
  > "Hello everyone, my name is Hareesh, and this is my video walkthrough for Module 2.16 Backend Deployment for my Capstone Project, the **Heritage Visitor Analytics System** (also known as CuratorPulse).  
  > 
  > Cultural heritage sites and museums frequently struggle to measure visitor dwell patterns, identify underutilized gallery dead zones, and optimize educational tour outcomes. To solve this, our backend provides high-performance REST APIs to track visitor sessions, calculate dwell times, detect crowd bottlenecks, and aggregate analytics for museum leadership.  
  > 
  > In this video, I will walk you through our backend server architecture, our Bruno API documentation, our Render deployment process, and verify our live deployed server."

---

### [0:45 – 1:30] 2. Backend Server Architecture & Code Walkthrough
* **Action:** Show VS Code. Walk through `server.js`, `src/app.js`, and the folder structure (`controllers`, `routes`, `data`).
* **Script:**
  > "Let's first look at the backend codebase. Our server is built using Node.js and Express.  
  > 
  > In `server.js`, we configure environment variables using dotenv and establish our database connection with a resilient fallback mechanism.  
  > In `src/app.js`, we configure CORS to allow incoming requests from our frontend clients, enable JSON body parsing, and configure Morgan request logging.  
  > We have structured our code cleanly following the MVC pattern:  
  > - Under `src/routes/`, we have dedicated route files for visitors, exhibitions, analytics, and reports.  
  > - Under `src/controllers/`, we have comprehensive business logic for CRUD operations and analytics aggregations.  
  > - We also provide `/health` and `/ping` endpoints for container orchestration and uptime monitoring on Render.  
  > - Finally, we have defined `render.yaml` for infrastructure-as-code deployment."

---

### [1:30 – 2:30] 3. API Documentation using Bruno
* **Action:** Switch to the **Bruno** desktop application. Show the `bruno-collection` loaded on the left sidebar.
* **Script:**
  > "Now, let's explore our API documentation created using **Bruno**, as required by our curriculum.  
  > 
  > In our repository, all endpoints are documented inside the `bruno-collection` folder with complete `.bru` files and environment configurations for both Local (`localhost:5000`) and Render Production.  
  > 
  > Let's test a few endpoints:  
  > 1. First, the **Health Check endpoint**: When I send a GET request to `/health`, we get a 200 OK with server uptime and timestamp.  
  > 2. Next, under **Visitors**: Sending a GET request to `/api/visitors` returns all museum visitor records with group type, wing visited, dwell time, and quiz scores.  
  > 3. We can also test **Create Visitor**: Sending a POST request with JSON payload adds a new school group session, returning 201 Created.  
  > 4. Under **Analytics**: Our GET `/api/analytics/overview` returns the four primary health KPIs—total footfall, average dwell time, educational rate, and zone choke alerts.  
  > 5. And our GET `/api/analytics/spatial` returns live density classifications, highlighting optimal zones, dead zones, and bottleneck chokepoints."

---

### [2:30 – 3:30] 4. Render.com Deployment Walkthrough
* **Action:** Switch to the browser showing **Render.com Dashboard**.
* **Script:**
  > "Now, let's look at the deployment process on **Render.com**.  
  > 
  > To deploy the backend:  
  > 1. First, I logged into Render using my **@kalvium.community Google account**.  
  > 2. I created a new **Web Service** and connected our GitHub repository, `hareesh040122/heritage-visitor-analytics`.  
  > 3. For the deployment settings:  
  >    - We set the branch to `feature/backend-deployment`.  
  >    - Runtime is set to `Node`.  
  >    - The **Build Command** used is `npm install`, which installs our production dependencies cleanly.  
  >    - The **Start Command** is `npm start`, which executes `node server.js`.  
  > 4. For Environment Variables, we configured `NODE_ENV=production`, `PORT=10000`, and `CLIENT_URL=*` for CORS.  
  > 5. We configured the Health Check Path as `/health`.  
  > 6. As you can see in the deployment event log, Render successfully pulled the code, ran `npm install`, started the server, and the service is now **Live** with a green operational status."

---

### [3:30 – 4:00] 5. Live Production Verification & Conclusion
* **Action:** Open a browser tab with the live Render URL `https://heritage-visitor-analytics-api.onrender.com/` and refresh it. Then show `/api/visitors` and `/api/analytics/overview` in the browser.
* **Script:**
  > "Finally, let's verify our live deployed server running on the internet:  
  > 
  > Here is our public URL: `https://heritage-visitor-analytics-api.onrender.com/`.  
  > When I load the root, it returns our CuratorPulse API welcome payload with all active endpoints.  
  > Opening `/health` confirms 200 OK status from the cloud.  
  > Opening `/api/visitors` live returns all active visitor telemetry records from Render.  
  > And `/api/analytics/overview` provides real-time dashboard analytics.  
  > 
  > In conclusion, our backend server is fully developed, documented with Bruno, and successfully deployed on Render with 100% uptime.  
  > 
  > Thank you for watching!"

---

## Post-Recording Submission Steps:
1. **Stop Recording** in Google Meet.
2. Wait a few moments for Google Meet to save the recording to your **Google Drive** (in the *Meet Recordings* folder).
3. Rename the video file to:  
   👉 `Hareesh_Squad 42_Backend Deployment Video` *(replace squad name if different)*.
4. Right-click the video file $\rightarrow$ select **Share** $\rightarrow$ **Share**.
5. Under **General access**, change from *Restricted* to:  
   👉 **"Anyone with the link"** and set the role to **"Editor"** (*"Anyone with the link can edit"* as required by the instruction).
6. Click **Copy link**.
7. Paste this link into the **Video Explaination URL\*** field on your Kalvium submission portal.
