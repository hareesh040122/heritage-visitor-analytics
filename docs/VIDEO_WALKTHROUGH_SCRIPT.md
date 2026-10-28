# CuratorPulse — 3-to-5 Minute Video Walkthrough Script
## Module 1.4: Mock UX & User Flow Design

> **Deliverable Requirement:** A 3–5 minute screen-share video explaining your Mock UX.  
> **Camera Requirement:** Ensure you are clearly visible on camera (picture-in-picture) while presenting and screen sharing the Mock UX prototype!  
> **Sharing Requirement:** Upload to Google Drive and set sharing to **"Anyone with the link can view"** (public access without login).

---

## Recording Checklist Before You Hit Record:
1. Open the interactive prototype in your browser: `file:///C:/Users/haree/heritage-visitor-analytics/mock-ux/index.html` (or your live hosted URL).
2. Ensure your webcam is turned on in your screen recorder (e.g. Loom, OBS Studio, or Clipchamp / Windows Camera overlay).
3. Test your microphone volume.
4. Keep this script handy on your second monitor or on your phone.
5. Aim for a total runtime of **3:30 to 4:30 minutes** (fits the 3–5 min requirement).

---

## Timed Walkthrough Script

### [0:00 – 0:45] 1. Introduction & Project Purpose
* **What to show on screen:** Open the **Executive Overview Dashboard** (`#screen-dashboard`). Have your webcam visible in the corner.
* **What to say:**
  > "Hello everyone! My name is Hareesh, and today I am presenting the Mock UX and User Flow Design for **CuratorPulse**, our visitor analytics system for cultural heritage sites and museums.  
  > 
  > Cultural tourism sites frequently face a critical challenge: while they know ticket counts at the entrance, they struggle to understand visitor engagement patterns inside the museum—such as which exhibits are engaging visitors, where dead zones are occurring, and whether educational programs are truly effective.  
  > 
  > As taught in our product design module, before writing a single line of MERN stack code, professional engineering teams draw the experience to validate user workflows and information hierarchy. This mock UX defines how our users navigate and solve these problems."

---

### [0:45 – 1:30] 2. Target Personas & Major User Journeys
* **What to show on screen:** Hover over the **Active User Mode** badge in the sidebar, then click between `Monitor`, `Explore`, `Compare`, `Filter`, and `Investigate` pills on the top bar.
* **What to say:**
  > "Our system is designed around four primary user personas with distinct analytical modes:  
  > 
  > 1. **First, the Museum Director**, who operates in **Monitor Mode**—performing a quick 5-second morning scan of total footfall, dwell averages, and gallery safety capacity.  
  > 2. **Second, the Chief Curator**, who operates in **Explore and Investigate Modes**—navigating spatial layouts to detect underperforming exhibits and flow bottlenecks.  
  > 3. **Third, the Educational Coordinator**, who works in **Compare Mode**—benchmarking guided school field trips against mobile QR self-guided visits.  
  > 4. **And fourth, the Facilities Lead**, who monitors IoT beacon health and handles batch ticketing data uploads."

---

### [1:30 – 2:30] 3. Key Application Screens & 5-Second Scan Rule
* **What to show on screen:** 
  - Point to the **4 KPI Cards** at the top.
  - Scroll slightly to show the **Hourly Footfall Chart** (point out the 14:00 peak alert and safety threshold).
  - Point to the **Wing Dwell Bar Chart** showing the Decorative Pottery dead zone.
  - Click on the **Rosetta Stone** row in the table to open the **Slide-out Telemetry Drawer**!
* **What to say:**
  > "Let's explore our primary screen: the **Executive Overview Dashboard**.  
  > 
  > Following the core principle of analytical UX—*Summary Before Detail*—we place **four critical KPI cards above the fold**: Total Visitors (18,450), Average Dwell Time (54.2 mins), Educational Engagement (71.8%), and Zone Choke Alerts. A director gets the full pulse of the museum in 5 seconds without scrolling.  
  > 
  > Below the KPIs, we follow the rule of maximum two focused charts:  
  > - On the left, our **Hourly Footfall Chart** highlights a safety threshold at 1,200 visitors per hour, alerting curators that 2:00 PM is hitting peak congestion.  
  > - On the right, our **Dwell vs. Engagement Chart** immediately exposes an anomaly: while the Antiquities Wing has 22 minutes average dwell, the North Pottery Gallery is a dead zone with only 3.8 minutes.  
  > 
  > Rather than trapping users in modal popups, clicking any exhibit—like the Rosetta Stone—smoothly slides out this **Granular Telemetry Drawer**, showing the exact dwell distribution histogram and bounce rate while keeping the dashboard context intact."

---

### [2:30 – 3:30] 4. Spatial Heatmap & Educational Impact Workflows
* **What to show on screen:**
  - Click **Spatial & Heatmap Flow** in the sidebar.
  - Hover over the interactive zones on the museum floor plan (Antiquities, Central Rotunda Bottleneck, Pottery Dead Zone).
  - Then click **Educational Tour Impact** in the sidebar to show the Curriculum Funnel and Cohort Comparison table.
* **What to say:**
  > "Next, let's switch to the **Spatial & Heatmap Flow** screen.  
  > 
  > Here, curators can visualize the physical Level 1 museum floor plan. The color-coding immediately flags the Central Rotunda as a high-density bottleneck chokepoint, while the North Corridor is flagged as an underutilized dead zone. Curators get automated, actionable layout recommendations, such as staggering school group tour times by 20 minutes and relocating signage.  
  > 
  > Moving to the **Educational Tour Impact** screen, educational coordinators can track students across the curriculum funnel—from initial enrollment to earning their final heritage certificate. The cohort comparison table proves that docent-guided tours achieve a 51% higher dwell time and an 18% higher quiz score than passive visits."

---

### [3:30 – 4:15] 5. Data Ingestion, Filters & Edge Case Recovery (Empty/Error States)
* **What to show on screen:**
  - Click **Data Ingestion & IoT** to show the drag-and-drop CSV upload and active BLE beacon gateways.
  - Click **Empty States** in the sidebar.
  - Click **Error Handling UI** in the sidebar.
  - Demonstrate clicking the **Reset Filters** and **Export CSV** buttons.
* **What to say:**
  > "A professional Mock UX must never show only the happy path. We have wireframed every state:  
  > 
  > - On our **Data Ingestion** screen, administrators can drag-and-drop ticketing CSVs with immediate schema validation, while monitoring 14 active IoT BLE beacon arrays.  
  > - In our **Empty State**, when a filter returns zero matching records, the user is never greeted with a blank white screen; they see a friendly explanation and an instant 'Clear Filters' button.  
  > - In our **Error State**, if an MQTT sensor gateway disconnects, the system displays cached fallback data with a clear retry action—preventing technical confusion.  
  > - And at any time, users can trigger an **Export CSV** action from the header for executive reporting."

---

### [4:15 – 4:45] 6. Conclusion & PRD Alignment
* **What to show on screen:** Return to the **Executive Overview Dashboard**. Look directly at the webcam.
* **What to say:**
  > "In conclusion, this Mock UX satisfies all ten core analytical wireframe components, respects the five analytical user modes, and directly fulfills our PRD requirements for heritage site optimization. By designing the workflow first, we ensure that our upcoming MERN stack implementation is usable, intuitive, and high-impact.  
  > 
  > Thank you for watching!"

---

## How to Submit Your Video:
1. **Save your recorded video** (MP4 or WebM format).
2. Go to **[Google Drive](https://drive.google.com)** and upload your video file.
3. Right-click the uploaded video $\rightarrow$ select **Share** $\rightarrow$ **Share**.
4. Under **General access**, change from *Restricted* to:  
   👉 **"Anyone with the link"** (Role: **Viewer**).
5. Click **Copy link**.
6. Paste the link into the **Video Explaination URL\*** field on your assignment portal!
