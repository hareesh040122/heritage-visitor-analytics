# Render.com Backend Deployment Guide
## Capstone Project: Heritage Visitor Analytics System (CuratorPulse)

This guide walks you step-by-step through deploying the backend server to **Render.com** using your Kalvium community credentials.

---

## 1. Prerequisites
- A GitHub account with the repository: `https://github.com/hareesh040122/heritage-visitor-analytics`
- Branch: `feature/backend-deployment` (or merged to `main`)
- Kalvium Google Account for signing in to Render.com

---

## 2. Step-by-Step Deployment on Render.com

### Step 1: Sign in to Render
1. Visit [https://render.com](https://render.com).
2. Click **GET STARTED FOR FREE** or **Sign In**.
3. Choose **Sign in with Google** and select your **@kalvium.community** account.

### Step 2: Create a New Web Service
1. On the Render Dashboard, click the **New +** button in the top right.
2. Select **Web Service**.
3. Under **Connect a repository**, select **GitHub**.
   * If not already connected, click **Connect GitHub** and authorize Render to access `hareesh040122/heritage-visitor-analytics`.
4. Search for `heritage-visitor-analytics` and click **Connect**.
   *(Alternative: Paste public Git repository URL: `https://github.com/hareesh040122/heritage-visitor-analytics.git`)*

### Step 3: Configure Service Parameters
Fill in the deployment settings as follows:

| Setting | Value to Enter | Explanation |
| :--- | :--- | :--- |
| **Name** | `heritage-visitor-analytics-api` | Unique name for your service on Render |
| **Region** | `Oregon (US West)` or `Singapore (Southeast Asia)` | Closest region to your location |
| **Branch** | `feature/backend-deployment` (or `main`) | The branch containing the backend server code |
| **Root Directory** | `.` (leave blank / root) | The backend `package.json` is at the root |
| **Runtime** | `Node` | Node.js runtime environment |
| **Build Command** | `npm install` | Installs all production dependencies |
| **Start Command** | `npm start` | Runs `node server.js` |
| **Instance Type** | `Free` | Free tier instance |

### Step 4: Environment Variables
Scroll down to the **Environment Variables** section and add the following:

| Key | Value | Note |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Optimizes Express for production performance |
| `PORT` | `10000` | Render standard port (automatically handled) |
| `CLIENT_URL` | `*` | Enables CORS for frontend web clients |

*(Optional: Add `MONGO_URI` if connecting to MongoDB Atlas. If omitted, the server automatically boots with the built-in resilient in-memory visitor data store, guaranteeing 100% uptime with no 500 errors).*

### Step 5: Advanced Settings (Health Check)
1. Click **Advanced**.
2. Under **Health Check Path**, enter: `/health`
3. Under **Auto-Deploy**, set to **Yes** (Render will automatically re-deploy whenever new commits are pushed to the branch).

### Step 6: Deploy Service
1. Click **Create Web Service** at the bottom of the page.
2. Render will trigger the initial build. You will see the live terminal logs:
   ```text
   ==> Cloning from https://github.com/hareesh040122/heritage-visitor-analytics...
   ==> Running build command 'npm install'...
   ==> Uploading build...
   ==> Starting service with 'npm start'...
   🏛️  CuratorPulse Backend Server Running!
   🚀 Port: 10000
   🏥 Health Check: http://localhost:10000/health
   ==> Your service is live 🎉
   ```
3. Your live public Render URL will be generated:  
   👉 `https://heritage-visitor-analytics-api.onrender.com`

---

## 3. Verifying the Deployed Server

Once the status turns to **Live** (green dot):
1. **Root Status Check:** Open `https://heritage-visitor-analytics-api.onrender.com/` in your browser.  
   Expected output: JSON welcome message with all endpoint routes.
2. **Health Check:** Open `https://heritage-visitor-analytics-api.onrender.com/health`  
   Expected output: `{"status":"OK", "uptime": ...}`
3. **API Endpoints:** Open `https://heritage-visitor-analytics-api.onrender.com/api/visitors`  
   Expected output: JSON array of museum visitor telemetry sessions.
4. **Bruno Collection Verification:** In Bruno, select the **Render** environment and run all requests against the production URL.
