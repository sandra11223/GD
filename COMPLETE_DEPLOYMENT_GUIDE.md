# 🚀 Complete Deployment Guide - sandrap151048-design/gd-council

## Part 1: Push to GitHub (Using GitHub Desktop)

### Step 1: Open GitHub Desktop

### Step 2: Switch to sandrap151048-design Account
1. Click **File** → **Options** (Windows) or **GitHub Desktop** → **Preferences** (Mac)
2. Go to **Accounts** tab
3. If logged in as different account, click **Sign Out**
4. Click **Sign In to GitHub.com**
5. Log in with **sandrap151048-design** credentials
6. Click **Save**

### Step 3: Add Your Local Repository
1. Click **File** → **Add Local Repository**
2. Click **Choose...** button
3. Navigate to: `C:\Users\LENOVO\Desktop\Global  Education Council`
4. Click **Select Folder**
5. Click **Add Repository**

### Step 4: Set Remote Repository
1. Click **Repository** → **Repository Settings**
2. Under **Primary remote repository**
3. Change URL to: `https://github.com/sandrap151048-design/gd-council.git`
4. Click **Save**

### Step 5: Publish/Push
1. You should see your commits in the left panel
2. Click **Publish repository** (if new) or **Push origin** (if exists)
3. Wait for upload to complete (may take 1-2 minutes)
4. You'll see "Last fetched just now" when done ✅

### Step 6: Verify on GitHub
1. Go to: https://github.com/sandrap151048-design/gd-council
2. You should see:
   - `backend/` folder
   - `frontend/` folder
   - All markdown files
   - All configuration files

---

## Part 2: Deploy Backend to Vercel

### Step 1: Go to Vercel
1. Open: https://vercel.com/dashboard
2. Make sure you're logged in as **sandrap151048-design** (check top right)
3. If not, sign out and sign in with correct account

### Step 2: Create Backend Project
1. Click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Find and click: **sandrap151048-design/gd-council**
4. Click **"Import"**

### Step 3: Configure Backend
**Project Name:** `gd-council-backend` (or any name you like)

**Framework Preset:** Other

**Root Directory:** 
- Click **"Edit"** button
- Type: `backend`
- Click **"Continue"**

**Build Command:** Leave empty

**Output Directory:** Leave empty

**Install Command:** `npm install` (should be default)

### Step 4: Add Backend Environment Variables
Click **"Environment Variables"** section and add these 5 variables:

**Variable 1:**
- Key: `MONGODB_URI`
- Value: `mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0`
- Check: Production, Preview, Development

**Variable 2:**
- Key: `JWT_SECRET`
- Value: `global_education_council_super_secret_jwt_key_2024`
- Check: Production, Preview, Development

**Variable 3:**
- Key: `NODE_ENV`
- Value: `production`
- Check: Production, Preview, Development

**Variable 4:**
- Key: `PORT`
- Value: `5000`
- Check: Production, Preview, Development

**Variable 5:**
- Key: `FRONTEND_URL`
- Value: `https://gd-council.vercel.app` (we'll update this after frontend deploys)
- Check: Production, Preview, Development

### Step 5: Deploy Backend
1. Click **"Deploy"** button
2. Wait 2-3 minutes for deployment
3. Once done, you'll see: ✅ **"Congratulations!"**
4. **COPY THE URL** - looks like: `https://gd-council-backend.vercel.app`

### Step 6: Test Backend
1. Open in browser: `https://gd-council-backend.vercel.app/api/auth/test`
2. You should see:
```json
{
  "status": "ok",
  "message": "Backend is running!",
  "timestamp": "2026-02-23T...",
  "environment": "production"
}
```

If you see this ✅ - Backend is working!

---

## Part 3: Deploy Frontend to Vercel

### Step 1: Create Frontend Project
1. Go back to: https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Select: **sandrap151048-design/gd-council** (same repository!)
4. Click **"Import"**

### Step 2: Configure Frontend
**Project Name:** `gd-council` (or any name you like)

**Framework Preset:** Next.js (should auto-detect)

**Root Directory:** Leave empty (uses root folder)

**Build Command:** Leave default

**Output Directory:** Leave default

**Install Command:** Leave default

### Step 3: Add Frontend Environment Variable
Click **"Environment Variables"** and add:

**Variable:**
- Key: `NEXT_PUBLIC_API_URL`
- Value: `https://gd-council-backend.vercel.app/api` (use YOUR backend URL from Part 2)
- Check: Production, Preview, Development

### Step 4: Deploy Frontend
1. Click **"Deploy"** button
2. Wait 2-3 minutes for deployment
3. Once done, you'll see: ✅ **"Congratulations!"**
4. **COPY THE URL** - looks like: `https://gd-council.vercel.app`

---

## Part 4: Update Backend with Frontend URL

### Step 1: Update Backend Environment Variable
1. Go to your **backend** project in Vercel
2. Click **Settings** → **Environment Variables**
3. Find `FRONTEND_URL`
4. Click **"Edit"**
5. Change value to your frontend URL: `https://gd-council.vercel.app`
6. Click **"Save"**

### Step 2: Redeploy Backend
1. Go to **Deployments** tab
2. Click **"..."** on the latest deployment
3. Click **"Redeploy"**
4. Wait 1-2 minutes

---

## Part 5: Test Everything

### Test 1: Backend Health Check
Visit: `https://gd-council-backend.vercel.app/`

Should see:
```json
{
  "message": "Global Education Council API",
  "status": "running",
  "timestamp": "...",
  "environment": "production"
}
```

### Test 2: Backend Auth Test
Visit: `https://gd-council-backend.vercel.app/api/auth/test`

Should see:
```json
{
  "status": "ok",
  "message": "Backend is running!",
  "timestamp": "...",
  "environment": "production"
}
```

### Test 3: Frontend Connection Test
Visit: `https://gd-council.vercel.app/test-connection`

Should show: **"✅ Connected"**

### Test 4: Registration
1. Visit: `https://gd-council.vercel.app/register`
2. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: +1234567890
   - Password: test123
   - Confirm Password: test123
3. Click **"Create Account"**
4. Should redirect to dashboard ✅

### Test 5: Newsletter Subscription
1. Scroll to footer on any page
2. Enter email: test@example.com
3. Click **"Subscribe"**
4. Should show: **"✅ Successfully subscribed!"**

---

## Summary - Your Vercel Projects

### Backend Project:
- **Name:** gd-council-backend
- **Repository:** sandrap151048-design/gd-council
- **Root Directory:** backend
- **URL:** https://gd-council-backend.vercel.app
- **Environment Variables:** 5 (MongoDB, JWT, NODE_ENV, PORT, FRONTEND_URL)

### Frontend Project:
- **Name:** gd-council
- **Repository:** sandrap151048-design/gd-council
- **Root Directory:** (empty - uses root)
- **URL:** https://gd-council.vercel.app
- **Environment Variables:** 1 (NEXT_PUBLIC_API_URL)

---

## Troubleshooting

### If Backend Deployment Fails:
- Check Root Directory is set to `backend`
- Check all 5 environment variables are added
- Check MongoDB Atlas Network Access allows 0.0.0.0/0
- Check deployment logs in Vercel

### If Frontend Shows "Backend not configured":
- Check NEXT_PUBLIC_API_URL is set correctly
- Make sure it ends with `/api`
- Redeploy frontend after adding variable
- Clear browser cache (Ctrl+Shift+R)

### If Registration Fails:
- Check backend is running (visit /api/auth/test)
- Check frontend can connect (visit /test-connection)
- Check browser console for errors (F12)
- Check MongoDB connection is working

---

## 🎉 Done!

Your application is now fully deployed on Vercel with both frontend and backend!

- Frontend: https://gd-council.vercel.app
- Backend: https://gd-council-backend.vercel.app
- Repository: https://github.com/sandrap151048-design/gd-council

All features should work:
✅ Registration
✅ Login
✅ Newsletter subscription
✅ Course browsing
✅ University browsing
✅ Contact form
✅ Dashboard
