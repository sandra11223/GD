# 📋 Deployment Checklist - Print This!

## Pre-Deployment Verification ✅

- [x] MongoDB Atlas cluster created
- [x] Database populated with data
- [x] Backend working locally (http://localhost:5000)
- [x] Frontend working locally (http://localhost:3000)
- [x] All features tested locally
- [ ] MongoDB Network Access allows 0.0.0.0/0
- [ ] Have MongoDB connection string ready
- [ ] Have Vercel app URL ready

---

## Step 1: Deploy Backend to Render

### 1.1 Create Render Account
- [ ] Go to https://render.com
- [ ] Sign up with GitHub account
- [ ] Authorize Render to access GitHub

### 1.2 Create Web Service
- [ ] Click "New +" button
- [ ] Select "Web Service"
- [ ] Connect repository: `sandra11223/GD-`
- [ ] Click "Connect"

### 1.3 Configure Service
- [ ] Name: `global-education-backend`
- [ ] Root Directory: `backend`
- [ ] Environment: `Node`
- [ ] Build Command: `npm install`
- [ ] Start Command: `node server.js`
- [ ] Instance Type: `Free`

### 1.4 Add Environment Variables

Click "Add Environment Variable" for each:

**Variable 1:**
- [ ] Key: `MONGODB_URI`
- [ ] Value: `mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0`

**Variable 2:**
- [ ] Key: `JWT_SECRET`
- [ ] Value: `global_education_council_super_secret_jwt_key_2024`

**Variable 3:**
- [ ] Key: `NODE_ENV`
- [ ] Value: `production`

**Variable 4:**
- [ ] Key: `PORT`
- [ ] Value: `5000`

**Variable 5:**
- [ ] Key: `FRONTEND_URL`
- [ ] Value: `https://your-vercel-app.vercel.app` (replace with your actual URL)

### 1.5 Deploy
- [ ] Click "Create Web Service"
- [ ] Wait 5-10 minutes for deployment
- [ ] Check logs for "Server running on port 5000"
- [ ] Check logs for "MongoDB Connected"
- [ ] Copy your backend URL (e.g., `https://global-education-backend.onrender.com`)

### 1.6 Test Backend
- [ ] Open: `https://your-backend.onrender.com/api/newsletter`
- [ ] Should see JSON response (empty array or data)
- [ ] If error, check Render logs

---

## Step 2: Configure Vercel

### 2.1 Add Environment Variable
- [ ] Go to https://vercel.com
- [ ] Click your project
- [ ] Go to Settings tab
- [ ] Click "Environment Variables"
- [ ] Click "Add New"

### 2.2 Add Variable
- [ ] Name: `NEXT_PUBLIC_API_URL`
- [ ] Value: `https://your-backend.onrender.com/api` (use your actual Render URL)
- [ ] Check: Production ✓
- [ ] Check: Preview ✓
- [ ] Check: Development ✓
- [ ] Click "Save"

---

## Step 3: Redeploy Vercel

### 3.1 Trigger Redeployment
- [ ] Go to "Deployments" tab
- [ ] Click on latest deployment
- [ ] Click "..." menu (three dots)
- [ ] Click "Redeploy"
- [ ] Wait 2-3 minutes

### 3.2 Verify Deployment
- [ ] Check deployment status is "Ready"
- [ ] Click "Visit" to open app

---

## Step 4: Test Everything

### 4.1 Basic Tests
- [ ] Visit Vercel app URL
- [ ] No error messages on homepage
- [ ] All pages load correctly
- [ ] Images load correctly

### 4.2 Registration Test
- [ ] Click "Register" or "Get Started"
- [ ] Fill in registration form
- [ ] Submit form
- [ ] Should see success message (not "Cannot connect to server")

### 4.3 Newsletter Test
- [ ] Scroll to footer
- [ ] Enter email in newsletter field
- [ ] Click "Subscribe"
- [ ] Should see success message (not "Failed to subscribe")

### 4.4 Login Test
- [ ] Click "Login"
- [ ] Email: `demo@example.com`
- [ ] Password: `demo123`
- [ ] Should login successfully

### 4.5 Data Tests
- [ ] Go to Courses page
- [ ] Should see 3 courses
- [ ] Go to Universities page
- [ ] Should see 4 universities

---

## Troubleshooting Checklist

### If Render deployment fails:

- [ ] Check "Root Directory" is set to `backend`
- [ ] Check all 5 environment variables are added
- [ ] Check Render logs for specific error
- [ ] Read: `RENDER_TROUBLESHOOTING.md`

### If Vercel still shows error:

- [ ] Verify variable name is `NEXT_PUBLIC_API_URL` (with prefix)
- [ ] Verify you redeployed after adding variable
- [ ] Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] Check browser console for errors (F12)

### If backend URL doesn't work:

- [ ] Visit backend URL directly in browser
- [ ] Should show JSON (not HTML error page)
- [ ] Check Render logs for errors
- [ ] Verify MongoDB Network Access allows 0.0.0.0/0

### If MongoDB connection fails:

- [ ] Go to MongoDB Atlas → Network Access
- [ ] Verify 0.0.0.0/0 is in the list
- [ ] If not, add it: "Add IP Address" → "Allow Access from Anywhere"
- [ ] Wait 1-2 minutes
- [ ] Redeploy on Render

---

## Success Criteria ✅

All of these should work:

- [ ] Vercel app loads without errors
- [ ] Can register new user
- [ ] Can login with demo user
- [ ] Can subscribe to newsletter
- [ ] Courses page shows 3 courses
- [ ] Universities page shows 4 universities
- [ ] Contact form works
- [ ] No "Cannot connect to server" errors
- [ ] No "Network error" messages

---

## Important Reminders

⚠️ **First request may take 30-60 seconds** (Render free tier spins down)

⚠️ **Username has double 'a'**: `sandraa745_db_user` (not `sandra745_db_user`)

⚠️ **Must redeploy Vercel** after adding environment variable

⚠️ **MongoDB Network Access** must allow 0.0.0.0/0

---

## Quick Reference

**MongoDB Connection String:**
```
mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0
```

**JWT Secret:**
```
global_education_council_super_secret_jwt_key_2024
```

**Demo User:**
```
Email: demo@example.com
Password: demo123
```

---

## Time Estimate

- Step 1 (Render): 10 minutes
- Step 2 (Vercel): 2 minutes
- Step 3 (Redeploy): 2 minutes
- Step 4 (Testing): 5 minutes

**Total: ~20 minutes**

---

## You've Got This! 🚀

Follow each checkbox in order. Don't skip any steps!

If you get stuck, check the troubleshooting section or read the detailed guides:
- `QUICK_DEPLOY_GUIDE.md`
- `RENDER_TROUBLESHOOTING.md`
- `DEPLOYMENT_STATUS.md`

Good luck! 🎉
