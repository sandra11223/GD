# 📍 How to Find Your Render Backend URL

## Step-by-Step with Screenshots Description

### Step 1: Go to Render Dashboard
1. Open your browser
2. Go to: **https://dashboard.render.com**
3. Log in with your account

### Step 2: Find Your Backend Service

After logging in, you'll see the Render Dashboard:

```
┌─────────────────────────────────────────────────────────┐
│  Render Dashboard                                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Services                                                │
│  ┌────────────────────────────────────────────────┐    │
│  │  🟢 global-education-backend                   │    │
│  │     Web Service                                 │    │
│  │     https://global-education-backend-xxx.on... │    │
│  └────────────────────────────────────────────────┘    │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │  🟢 another-service (if you have more)         │    │
│  └────────────────────────────────────────────────┘    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Look for:**
- A service with "backend" in the name
- Or the service you created from `sandra11223/GD-back` repository
- It will show a green dot 🟢 if it's running

### Step 3: Click on Your Backend Service

Click on the service card (the box with your backend name)

### Step 4: Copy the URL

After clicking, you'll see the service details page:

```
┌─────────────────────────────────────────────────────────┐
│  global-education-backend                    [Settings] │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🟢 Live                                                 │
│                                                          │
│  https://global-education-backend-abc123.onrender.com   │
│  ↑↑↑ THIS IS YOUR URL - COPY THIS! ↑↑↑                 │
│                                                          │
│  Latest Deploy: 2 hours ago                             │
│  Region: Oregon (US West)                               │
│                                                          │
│  [Logs] [Events] [Shell] [Metrics]                     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**The URL is at the top of the page!**

It looks like:
```
https://global-education-backend-abc123.onrender.com
```

---

## What If I Don't See Any Backend Service?

If you don't see any backend service, it means you haven't deployed it yet!

### You Need to Deploy Backend First:

1. In Render Dashboard, click **"New +"** button (top right)
2. Select **"Web Service"**
3. Click **"Connect a repository"**
4. Find and select: **`sandra11223/GD-back`**
5. Click **"Connect"**
6. Fill in the form:
   - **Name:** `global-education-backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
7. Scroll down to **Environment Variables** section
8. Click **"Add Environment Variable"** and add these:

   ```
   Key: MONGODB_URI
   Value: mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@sandraap745_db_here.mongodb.net/global-education-council?retryWrites=true&w=majority

   Key: JWT_SECRET
   Value: global-education-secret-key-2024

   Key: NODE_ENV
   Value: production

   Key: PORT
   Value: 5000
   ```

9. Click **"Create Web Service"**
10. Wait 5-10 minutes for deployment
11. Your URL will appear at the top!

---

## Quick Visual Guide

### Where to Look:

```
Render Dashboard
    ↓
Services List (left sidebar or main page)
    ↓
Click on your backend service
    ↓
URL is at the TOP of the page
    ↓
Copy the URL
    ↓
Add "/api" at the end
    ↓
Use in Vercel: https://your-url.onrender.com/api
```

---

## What If I'm Still Stuck?

### Option 1: Check if Backend is Deployed
- Go to: https://dashboard.render.com
- Look at the left sidebar under "Services"
- Do you see any service listed?
- If NO → You need to deploy backend first (see above)
- If YES → Click on it and copy the URL

### Option 2: Check Your GitHub
- Go to: https://github.com/sandra11223/GD-back
- Is this repository connected to Render?
- If not, you need to deploy it first

### Option 3: Tell Me What You See
Please tell me:
1. Do you see any services in Render dashboard?
2. What is the name of your service?
3. Can you see a URL anywhere?

Then I can help you find it!

---

## After You Find the URL

Once you have the URL (e.g., `https://xxx.onrender.com`):

1. Add `/api` at the end: `https://xxx.onrender.com/api`
2. Go to Vercel → Settings → Environment Variables
3. Set `NEXT_PUBLIC_API_URL` = `https://xxx.onrender.com/api`
4. Redeploy Vercel
5. Done! ✅
