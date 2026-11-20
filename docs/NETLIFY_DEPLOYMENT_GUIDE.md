# Netlify Frontend Deployment Guide
## Capstone Project: Heritage Visitor Analytics (CuratorPulse)

This guide provides step-by-step instructions for deploying the frontend application to **Netlify** using either GitHub continuous deployment or instant Netlify Drop.

---

## Method 1: Continuous Deployment via GitHub (Recommended)

### Step 1: Sign in to Netlify
1. Go to [https://www.netlify.com](https://www.netlify.com) and click **Log in**.
2. Select **Log in with GitHub** or your Kalvium Google Account.

### Step 2: Import Existing Project
1. On the Netlify Team Overview dashboard, click **Add new site** $\rightarrow$ **Import an existing project**.
2. Choose **GitHub** as your Git provider.
3. Authorize Netlify and search for `heritage-visitor-analytics` (`hareesh040122/heritage-visitor-analytics`).

### Step 3: Configure Build Settings
Netlify will automatically detect [`netlify.toml`](../netlify.toml). Verify the settings:
* **Branch to deploy:** `feature/frontend-deployment` (or `main`)
* **Base directory:** `client`
* **Build command:** `npm run build`
* **Publish directory:** `client/dist` (or `dist`)

### Step 4: Environment Variables
Under **Environment variables**, click **Add a variable**:
* **Key:** `VITE_API_URL`
* **Value:** `https://heritage-visitor-analytics-api.onrender.com`

### Step 5: Deploy
1. Click **Deploy heritage-visitor-analytics**.
2. Netlify will run the Vite build and deploy the production bundle in under 30 seconds.
3. Once deployed, Netlify assigns a live URL (e.g., `https://curatorpulse-heritage-analytics.netlify.app` or similar).
4. You can customize the subdomain by going to **Site configuration** $\rightarrow$ **Change site name** $\rightarrow$ set to `heritage-visitor-analytics` or `curatorpulse-analytics`.

---

## Method 2: Instant 10-Second Deployment via Netlify Drop

If you need an instant deployment without connecting Git:
1. Open [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the compiled **`client/dist`** folder from your computer directly into the browser upload box.
3. Netlify will instantly publish your site and give you a live production URL!

---

## 3. Verifying the Deployed Frontend

1. Open your live Netlify URL in any browser:  
   👉 `https://curatorpulse-heritage-analytics.netlify.app/`
2. **5-Second Scan:** Verify that all 4 KPI cards load above the fold (18,450 footfall, 54.2m dwell, 71.8% educational rate, 2 choke alerts).
3. **Interactive Features:**
   * Click between analytical modes (`Monitor`, `Explore`, `Compare`, `Filter`, `Investigate`).
   * Switch tabs to **Spatial Heatmap** and click on any gallery zone.
   * Verify that the slide-out **Telemetry Drawer** opens smoothly.
   * Click **Export CSV** to verify client-side data export.
   * Verify the **Backend: Render API** badge in the header shows active connectivity.
