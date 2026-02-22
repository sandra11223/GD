# Render Deployment Troubleshooting Guide

## Common Errors and Solutions

### Error 1: "Cannot find module '/opt/render/project/src/server.js'"

**What it means**: Render is looking for server.js in the wrong location

**Solution**:
1. Go to Render Dashboard → Your Service
2. Click "Settings" tab
3. Find "Root Directory"
4. Set it to: `backend`
5. Click "Save Changes"
6. Render will automatically redeploy

**Why this happens**: Your repository has both frontend and backend folders. Render needs to know to look in the `backend` folder.

---

### Error 2: "MongoServerError: Authentication failed"

**What it means**: MongoDB username or password is incorrect

**Solution**:
1. Check your MONGODB_URI environment variable in Render
2. Make sure username is: `sandraa745_db_user` (note: double 'a')
3. Make sure password is: `fHih3vl4D4VM7EJp`
4. Full connection string should be:
   ```
   mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0
   ```
5. Save and redeploy

**Common mistakes**:
- Using `sandra745_db_user` instead of `sandraa745_db_user` (missing one 'a')
- Extra spaces when copying password
- Missing parts of connection string

---

### Error 3: "MongooseServerSelectionError: connection timed out"

**What it means**: MongoDB Atlas is blocking the connection

**Solution**:
1. Go to MongoDB Atlas: https://cloud.mongodb.com
2. Click "Network Access" in left sidebar
3. Check if you see: `0.0.0.0/0` (Allow access from anywhere)
4. If NOT, click "Add IP Address"
5. Click "Allow Access from Anywhere"
6. Click "Confirm"
7. Wait 1-2 minutes
8. Redeploy on Render

**Why this happens**: MongoDB Atlas blocks connections by default. Render servers have dynamic IPs, so you need to allow all IPs.

---

### Error 4: "No open ports detected"

**What it means**: Your server isn't starting properly

**Solution**:
1. Check Render logs for the actual error
2. Common causes:
   - Missing environment variables
   - MongoDB connection failed
   - Syntax error in code

**How to check**:
1. Go to Render Dashboard → Your Service
2. Click "Logs" tab
3. Look for error messages above "No open ports detected"
4. Fix the root cause

---

### Error 5: "Build failed" or "npm install failed"

**What it means**: Dependencies couldn't be installed

**Solution**:
1. Check if `package.json` exists in backend folder
2. Check if `package-lock.json` exists
3. Try locally: `cd backend && npm install`
4. If it works locally, push changes to GitHub
5. Render will automatically redeploy

---

### Error 6: Service starts but shows 404 on all routes

**What it means**: Server is running but routes aren't working

**Solution**:
1. Check Start Command is: `node server.js` (not `npm start`)
2. Check Root Directory is: `backend`
3. Check server.js has correct route definitions
4. Test locally first: `cd backend && node server.js`

---

## How to Check Render Logs

1. Go to: https://render.com
2. Click your service
3. Click "Logs" tab
4. Look for:
   - ✅ "Server running on port 5000" = Good!
   - ✅ "MongoDB Connected" = Good!
   - ❌ Any error messages = Need to fix

---

## How to Test Backend After Deployment

### Test 1: Health Check
Visit: `https://your-backend-name.onrender.com/api/newsletter`

**Expected**: JSON response (empty array `[]` or data)
**If error**: Check Render logs

### Test 2: Courses API
Visit: `https://your-backend-name.onrender.com/api/courses`

**Expected**: JSON array with 3 courses
**If error**: Check MongoDB connection

### Test 3: Universities API
Visit: `https://your-backend-name.onrender.com/api/universities`

**Expected**: JSON array with 4 universities
**If error**: Check MongoDB connection

---

## Environment Variables Checklist

Make sure ALL of these are set in Render:

- [ ] `MONGODB_URI` - Full MongoDB connection string
- [ ] `JWT_SECRET` - Secret key for authentication
- [ ] `NODE_ENV` - Set to `production`
- [ ] `PORT` - Set to `5000`
- [ ] `FRONTEND_URL` - Your Vercel app URL

**How to check**:
1. Render Dashboard → Your Service
2. "Environment" tab
3. Should see all 5 variables

---

## MongoDB Atlas Checklist

- [ ] Cluster is running (not paused)
- [ ] Database user exists: `sandraa745_db_user`
- [ ] Password is correct: `fHih3vl4D4VM7EJp`
- [ ] Network Access allows: `0.0.0.0/0`
- [ ] Database name is: `global-education-council`

**How to check**:
1. Go to: https://cloud.mongodb.com
2. Database Access → Should see user
3. Network Access → Should see 0.0.0.0/0

---

## Still Not Working?

### Step 1: Check Render Logs
Look for the FIRST error message (not the last one)

### Step 2: Test Locally
```bash
cd backend
node server.js
```
If it works locally but not on Render, it's a configuration issue.

### Step 3: Check Environment Variables
Make sure all 5 variables are set correctly in Render.

### Step 4: Check MongoDB Atlas
Make sure Network Access allows 0.0.0.0/0

### Step 5: Redeploy
Sometimes a fresh deployment fixes issues:
1. Render Dashboard → Your Service
2. "Manual Deploy" → "Deploy latest commit"

---

## Success Indicators

When everything is working, you should see in Render logs:

```
==> Running 'node server.js'
Server running on port 5000
MongoDB Connected
```

And visiting your backend URL should show JSON data.

---

## Quick Reference

**Render Settings:**
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `node server.js`

**MongoDB Connection String:**
```
mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0
```

**Test URL:**
```
https://your-backend-name.onrender.com/api/newsletter
```

---

Good luck! 🚀
