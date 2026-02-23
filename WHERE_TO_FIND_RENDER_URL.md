# Where to Find Your Render Backend URL 🔍

## You DON'T have this URL yet!

The `https://your-render-url.onrender.com` URL will be created AFTER you deploy your backend to Render.

---

## Step-by-Step: How to Get Your Render URL

### STEP 1: Go to Render and Deploy Backend

#### 1.1 Visit Render
Go to: **https://render.com**

#### 1.2 Sign Up or Log In
- If you don't have an account, click "Get Started" (it's free)
- If you have an account, click "Sign In"

#### 1.3 Create New Web Service
1. Click the **"New +"** button (top right)
2. Select **"Web Service"**

#### 1.4 Connect GitHub
1. Click **"Connect account"** under GitHub
2. Authorize Render to access your GitHub
3. Select repository: **sandra11223/GD-back**
4. Click **"Connect"**

#### 1.5 Configure Service
Fill in these settings:

**Name:** `global-education-backend`
(You can choose any name - this will be part of your URL)

**Root Directory:** `backend`

**Environment:** `Node`

**Build Command:** `npm install`

**Start Command:** `node server.js`

**Instance Type:** `Free`

#### 1.6 Add Environment Variables
Click **"Advanced"** → **"Add Environment Variable"**

Add these 5 variables:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | `mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0` |
| `JWT_SECRET` | `global_education_council_super_secret_jwt_key_2024` |
| `NODE_ENV` | `production` |
| `PORT` | `5000` |
| `FRONTEND_URL` | `https://your-vercel-app.vercel.app` |

(For FRONTEND_URL, you can update it later with your actual Vercel URL)

#### 1.7 Click "Create Web Service"
Render will start deploying your backend (takes 5-10 minutes)

---

### STEP 2: Find Your Render URL

#### 2.1 Wait for Deployment
You'll see a screen showing deployment progress:
```
Building...
Deploying...
Live ✅
```

#### 2.2 Your URL is at the TOP of the Page
Once deployed, you'll see your URL at the top:

```
┌─────────────────────────────────────────────────────────┐
│  global-education-backend                               │
│  https://global-education-backend.onrender.com  ← HERE! │
│                                                         │
│  Status: Live ✅                                        │
└─────────────────────────────────────────────────────────┘
```

#### 2.3 Copy This URL
Your URL will look like one of these:
- `https://global-education-backend.onrender.com`
- `https://global-education-backend-abc123.onrender.com`
- `https://gd-backend.onrender.com`

**Copy the entire URL!**

---

### STEP 3: Test Your Backend URL

Before adding to Vercel, test that it works:

#### 3.1 Open in Browser
Visit: `https://your-render-url.onrender.com/api/courses`

Example: `https://global-education-backend.onrender.com/api/courses`

#### 3.2 You Should See JSON Data
```json
[
  {
    "title": "Business Management & Leadership",
    "description": "Comprehensive program...",
    "duration": "12 weeks",
    ...
  }
]
```

If you see this, your backend is working! ✅

---

### STEP 4: Add URL to Vercel

#### 4.1 Go to Vercel
Visit: **https://vercel.com/dashboard**

#### 4.2 Select Your Project
Click on your project (the one with your frontend)

#### 4.3 Go to Settings
Click **"Settings"** tab at the top

#### 4.4 Click Environment Variables
In the left sidebar, click **"Environment Variables"**

#### 4.5 Add New Variable
Click **"Add New"** button

Fill in:
- **Key:** `NEXT_PUBLIC_API_URL`
- **Value:** `https://your-render-url.onrender.com/api`
  
  ⚠️ IMPORTANT: Add `/api` at the end!
  
  Example: `https://global-education-backend.onrender.com/api`

- **Environments:** Check all three boxes:
  - ✅ Production
  - ✅ Preview  
  - ✅ Development

Click **"Save"**

#### 4.6 Redeploy
1. Go to **"Deployments"** tab
2. Click the **three dots (...)** on the latest deployment
3. Click **"Redeploy"**
4. Wait 2-3 minutes

---

## Visual Guide: Where to Find URLs

### Render Dashboard (After Deployment):
```
┌────────────────────────────────────────────────────────────┐
│  Render Dashboard                                          │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  global-education-backend                                  │
│  https://global-education-backend.onrender.com  ← COPY THIS│
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Status: Live ✅                                     │ │
│  │  Last deployed: 2 minutes ago                        │ │
│  │                                                      │ │
│  │  Logs  |  Environment  |  Settings                  │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Vercel Dashboard (Where to Add It):
```
┌────────────────────────────────────────────────────────────┐
│  Vercel Dashboard → Your Project → Settings                │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Environment Variables                                     │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Key: NEXT_PUBLIC_API_URL                           │ │
│  │                                                      │ │
│  │  Value: https://global-education-backend.onrender.com/api │
│  │         ↑ PASTE YOUR RENDER URL HERE + /api        │ │
│  │                                                      │ │
│  │  Environments:                                       │ │
│  │  ☑ Production  ☑ Preview  ☑ Development            │ │
│  │                                                      │ │
│  │  [Save]                                              │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Example URLs

### If your Render service name is "global-education-backend":
- Render URL: `https://global-education-backend.onrender.com`
- Add to Vercel: `https://global-education-backend.onrender.com/api`

### If your Render service name is "gd-backend":
- Render URL: `https://gd-backend.onrender.com`
- Add to Vercel: `https://gd-backend.onrender.com/api`

### If Render adds random characters:
- Render URL: `https://global-education-backend-xyz123.onrender.com`
- Add to Vercel: `https://global-education-backend-xyz123.onrender.com/api`

---

## Important Notes

### ⚠️ Don't Forget `/api` at the End!
```
❌ Wrong: https://your-backend.onrender.com
✅ Correct: https://your-backend.onrender.com/api
```

### ⚠️ Wait for Render Deployment
The URL won't exist until Render finishes deploying (5-10 minutes)

### ⚠️ Free Tier Sleeps After 15 Minutes
Render's free tier puts your backend to sleep after 15 minutes of inactivity. First request after sleep takes 30-60 seconds to wake up. This is normal!

---

## Quick Checklist

- [ ] Deploy backend to Render
- [ ] Wait for "Live ✅" status
- [ ] Copy URL from top of Render dashboard
- [ ] Test URL in browser: `https://your-url.onrender.com/api/courses`
- [ ] Add to Vercel with `/api` at the end
- [ ] Redeploy Vercel
- [ ] Test your site - error should be gone!

---

## Still Can't Find It?

### If you haven't deployed to Render yet:
You need to complete STEP 1 first. The URL doesn't exist until you deploy!

### If you deployed but can't find the URL:
1. Go to https://render.com/dashboard
2. Click on your service name
3. The URL is at the very top of the page
4. It starts with `https://` and ends with `.onrender.com`

### If deployment failed:
1. Check the logs in Render dashboard
2. Common issue: Root Directory not set to `backend`
3. Fix the issue and redeploy

---

## Need Help?

If you're stuck:
1. Take a screenshot of your Render dashboard
2. Take a screenshot of any error messages
3. Share what step you're on

The URL will appear automatically once Render finishes deploying your backend! 🚀
