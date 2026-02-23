# 🔧 Fix Vercel 404 Deployment Not Found Error

## The Problem:
Your Vercel project is connected to the old repository (sandra11223/GD-) but you pushed to a new one (sandra11223/GD-council). Vercel can't find the deployment.

---

## Solution: Create Fresh Vercel Projects

### Step 1: Delete Old Projects (Optional but Recommended)

1. Go to https://vercel.com/dashboard
2. Click each old project
3. Go to **Settings** → Scroll to bottom → **Delete Project**
4. Type the project name to confirm
5. Click Delete

---

## Step 2: Create New Frontend Project

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Find and select: **sandra11223/GD-council**
5. Click **"Import"**

### Configure Frontend:
- **Project Name:** gd-council (or whatever you want)
- **Framework Preset:** Next.js
- **Root Directory:** Leave empty (uses root)
- **Build Command:** Leave default
- **Output Directory:** Leave default

### Add Environment Variable:
Click **"Environment Variables"** and add:

**Key:** `NEXT_PUBLIC_API_URL`
**Value:** `http://localhost:5000/api` (for now, we'll update after backend deploys)

Check all 3 boxes: Production, Preview, Development

6. Click **"Deploy"**
7. Wait 2-3 minutes

---

## Step 3: Create New Backend Project

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Select: **sandra11223/GD-council** (same repository!)
4. Click **"Import"**

### Configure Backend:
- **Project Name:** gd-council-backend (or similar)
- **Framework Preset:** Other
- **Root Directory:** Click **"Edit"** → Enter: `backend` ⚠️ IMPORTANT!
- **Build Command:** Leave empty
- **Output Directory:** Leave empty

### Add Environment Variables:
Click **"Environment Variables"** and add these 5:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | `mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0` |
| `JWT_SECRET` | `global_education_council_super_secret_jwt_key_2024` |
| `NODE_ENV` | `production` |
| `PORT` | `5000` |
| `FRONTEND_URL` | (your frontend URL from Step 2, like `https://gd-council.vercel.app`) |

Check all 3 boxes for each variable.

5. Click **"Deploy"**
6. Wait 2-3 minutes

---

## Step 4: Update Frontend Environment Variable

After backend deploys, you'll get a URL like: `https://gd-council-backend.vercel.app`

1. Go to your **frontend** project in Vercel
2. Click **Settings** → **Environment Variables**
3. Find `NEXT_PUBLIC_API_URL`
4. Click **"Edit"**
5. Change value to: `https://gd-council-backend.vercel.app/api` (use your actual backend URL)
6. Click **"Save"**
7. Go to **Deployments** tab
8. Click **"..."** → **"Redeploy"**

---

## Step 5: Test Everything

### Test Backend:
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

### Test Frontend:
Visit: `https://gd-council.vercel.app/test-connection`

Should show: "✅ Connected"

### Test Registration:
Visit: `https://gd-council.vercel.app/register`

Try to register - should work! ✅

---

## Alternative: Reconnect Existing Projects

If you don't want to delete and recreate:

### For Each Project:

1. Go to project in Vercel
2. Click **Settings** → **Git**
3. Click **"Disconnect"** (disconnect old repo)
4. Click **"Connect Git Repository"**
5. Select: **sandra11223/GD-council**
6. For backend project: Make sure Root Directory = `backend`
7. For frontend project: Make sure Root Directory is empty
8. Go to **Deployments** → **Redeploy**

---

## Summary:

You need 2 Vercel projects from the same repository:

1. **Frontend Project**
   - Repository: sandra11223/GD-council
   - Root Directory: (empty)
   - Environment Variables: 1 (NEXT_PUBLIC_API_URL)

2. **Backend Project**
   - Repository: sandra11223/GD-council
   - Root Directory: backend
   - Environment Variables: 5 (MongoDB, JWT, etc.)

Both projects use the same GitHub repository but different folders!
