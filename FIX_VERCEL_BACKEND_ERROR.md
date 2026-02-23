# Fix Vercel Backend Error - Step by Step Guide 🔧

## Current Problem
❌ Error: "⚠️ Backend not configured. Please contact administrator."

## Why This Happens
Your frontend on Vercel is trying to connect to `http://localhost:5000` which doesn't exist in production. You need to:
1. Deploy your backend to a hosting service (Render)
2. Tell Vercel where your backend is located

## Solution: 2 Steps

---

## STEP 1: Deploy Backend to Render

### 1.1 Go to Render
Visit: https://render.com and sign in (or create account)

### 1.2 Create New Web Service
1. Click "New +" button
2. Select "Web Service"
3. Connect your GitHub account if not already connected
4. Select repository: **sandra11223/GD-back**

### 1.3 Configure the Service
Fill in these settings:

**Name:** `global-education-backend` (or any name you prefer)

**Root Directory:** `backend`
⚠️ IMPORTANT: Must be exactly `backend`

**Environment:** `Node`

**Build Command:** `npm install`

**Start Command:** `node server.js`
⚠️ IMPORTANT: Must be exactly `node server.js`

**Instance Type:** `Free`

### 1.4 Add Environment Variables
Click "Advanced" and add these environment variables:

| Key | Value |
|-----|-------|
| MONGODB_URI | `mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0` |
| JWT_SECRET | `global_education_council_super_secret_jwt_key_2024` |
| NODE_ENV | `production` |
| PORT | `5000` |
| FRONTEND_URL | `https://your-vercel-app.vercel.app` |

⚠️ For FRONTEND_URL: Replace with your actual Vercel URL (you'll update this after Step 2)

### 1.5 Deploy
1. Click "Create Web Service"
2. Wait for deployment (5-10 minutes)
3. Once deployed, copy your backend URL
   - It will look like: `https://global-education-backend.onrender.com`
   - Or: `https://global-education-backend-xxxx.onrender.com`

---

## STEP 2: Configure Vercel Frontend

### 2.1 Go to Vercel Dashboard
Visit: https://vercel.com/dashboard

### 2.2 Select Your Project
Find and click on your project (sandra11223/GD-)

### 2.3 Go to Settings
1. Click "Settings" tab
2. Click "Environment Variables" in the left sidebar

### 2.4 Add Backend URL
Click "Add New" and enter:

**Key:** `NEXT_PUBLIC_API_URL`

**Value:** `https://your-render-backend-url.onrender.com/api`

⚠️ IMPORTANT: 
- Replace `your-render-backend-url` with your actual Render URL from Step 1.5
- Must end with `/api`
- Example: `https://global-education-backend.onrender.com/api`

**Environment:** Select all three:
- ✅ Production
- ✅ Preview
- ✅ Development

Click "Save"

### 2.5 Redeploy Frontend
1. Go to "Deployments" tab
2. Click the three dots (...) on the latest deployment
3. Click "Redeploy"
4. Wait for redeployment (2-3 minutes)

---

## STEP 3: Update Backend FRONTEND_URL (Optional but Recommended)

### 3.1 Go Back to Render
Visit your backend service on Render

### 3.2 Update Environment Variable
1. Click "Environment" in the left sidebar
2. Find `FRONTEND_URL`
3. Update the value to your actual Vercel URL
   - Example: `https://gd-sandra.vercel.app`
4. Click "Save Changes"
5. Service will automatically redeploy

---

## Verification Steps

### Test 1: Check Backend is Running
Open your browser and visit:
```
https://your-render-backend-url.onrender.com/api/courses
```

You should see JSON data with courses.

### Test 2: Check Frontend Connection
1. Open your Vercel site
2. Open browser console (F12)
3. Look for: `API URL configured: https://...`
4. Try to register or subscribe to newsletter
5. Should work without "Backend not configured" error

---

## Quick Reference

### Your URLs:
- **Frontend (Vercel):** https://your-vercel-app.vercel.app
- **Backend (Render):** https://your-render-backend.onrender.com
- **Database:** MongoDB Atlas (already configured)

### Environment Variables Needed:

**Vercel (Frontend):**
```
NEXT_PUBLIC_API_URL=https://your-render-backend.onrender.com/api
```

**Render (Backend):**
```
MONGODB_URI=mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=global_education_council_super_secret_jwt_key_2024
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-vercel-app.vercel.app
```

---

## Common Issues & Solutions

### Issue 1: "Cannot find module '/opt/render/project/src/server.js'"
**Solution:** Make sure Root Directory is set to `backend` in Render settings

### Issue 2: Backend deploys but shows "Service Unavailable"
**Solution:** Check Render logs. Usually MongoDB connection issue. Verify MONGODB_URI is correct.

### Issue 3: CORS errors in browser console
**Solution:** Make sure FRONTEND_URL in Render matches your Vercel URL exactly

### Issue 4: Still shows "Backend not configured"
**Solution:** 
1. Verify NEXT_PUBLIC_API_URL is set in Vercel
2. Redeploy frontend after adding environment variable
3. Check browser console for actual API URL being used

---

## Need Help?

If you're still seeing errors:
1. Check Render logs: Dashboard → Your Service → Logs
2. Check Vercel logs: Dashboard → Your Project → Deployments → View Function Logs
3. Check browser console (F12) for error messages

---

## ✅ After Following These Steps

Your application will be fully deployed:
- ✅ Frontend on Vercel
- ✅ Backend on Render
- ✅ Database on MongoDB Atlas
- ✅ All connections working
- ✅ No more "Backend not configured" error

The error happens because Vercel doesn't know where your backend is. Once you deploy to Render and add the URL to Vercel, everything will work! 🚀
