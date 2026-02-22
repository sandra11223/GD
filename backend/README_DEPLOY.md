# Deploy Backend to Render - Simple Guide

## You're seeing "Backend not configured" because your backend is NOT deployed!

### Quick Deploy (10 minutes):

#### 1. Get MongoDB Connection String First

You NEED this before deploying:

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Create free account
3. Create free cluster (M0)
4. Click "Connect" → "Connect your application"
5. Copy connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/database
   ```
6. Replace `<password>` with your actual password
7. Add database name: `global-education-council`
8. Final string looks like:
   ```
   mongodb+srv://admin:mypassword@cluster0.xxxxx.mongodb.net/global-education-council?retryWrites=true&w=majority
   ```

#### 2. Deploy to Render

1. **Go to**: https://render.com
2. **Sign up** with GitHub
3. **Click**: "New +" → "Web Service"
4. **Select**: Your repository `sandra11223/GD-`
5. **Configure**:
   ```
   Name: global-education-backend
   Root Directory: backend
   Environment: Node
   Build Command: npm install
   Start Command: node server.js
   Plan: Free
   ```

6. **Add Environment Variables** (click "Add Environment Variable"):

   **Variable 1:**
   ```
   Key: MONGODB_URI
   Value: [Paste your MongoDB connection string from step 1]
   ```

   **Variable 2:**
   ```
   Key: JWT_SECRET
   Value: global_education_council_super_secret_jwt_key_2024
   ```

   **Variable 3:**
   ```
   Key: NODE_ENV
   Value: production
   ```

   **Variable 4:**
   ```
   Key: PORT
   Value: 5000
   ```

   **Variable 5:**
   ```
   Key: FRONTEND_URL
   Value: https://your-vercel-app.vercel.app
   ```
   (Replace with your actual Vercel URL)

7. **Click**: "Create Web Service"
8. **Wait**: 5-10 minutes for deployment
9. **Copy**: Your backend URL (e.g., `https://global-education-backend.onrender.com`)

#### 3. Test Backend

Open in browser:
```
https://your-backend-name.onrender.com/api/newsletter
```

Should show JSON = ✅ Working!

#### 4. Configure Vercel

1. Go to: https://vercel.com
2. Click your project
3. Settings → Environment Variables
4. Add New:
   ```
   Name: NEXT_PUBLIC_API_URL
   Value: https://your-backend-name.onrender.com/api
   ```
5. Select all environments (Production, Preview, Development)
6. Save
7. Go to Deployments → Click latest → "..." → Redeploy

#### 5. Done!

Visit your Vercel app and try to register. Should work! ✅

---

## Why You Must Do This

- Backend on your computer = Only works locally
- Backend on Render = Works everywhere (including Vercel)
- No deployment = Error will never go away

---

## Alternative: Railway

If Render doesn't work:

1. Go to: https://railway.app
2. Sign up with GitHub
3. New Project → Deploy from GitHub
4. Select your repo
5. Settings → Root Directory: `/backend`
6. Add same environment variables
7. Deploy
8. Use Railway URL in Vercel

---

## Need MongoDB Atlas?

**Free Setup:**
1. https://www.mongodb.com/cloud/atlas/register
2. Create free cluster (M0 Sandbox)
3. Choose AWS, any region
4. Wait 3-5 minutes
5. Security → Database Access → Add User
6. Security → Network Access → Add IP → Allow from Anywhere (0.0.0.0/0)
7. Connect → Connect your application → Copy string
8. Replace `<password>` with your password
9. Add `/global-education-council` before `?retryWrites`

---

## Summary

**The error is correct** - your backend IS NOT configured because it's NOT deployed!

**You must**:
1. ✅ Deploy backend to Render
2. ✅ Get MongoDB Atlas
3. ✅ Set environment variables
4. ✅ Configure Vercel
5. ✅ Redeploy

**I cannot do this for you** - only you can deploy to your accounts!
