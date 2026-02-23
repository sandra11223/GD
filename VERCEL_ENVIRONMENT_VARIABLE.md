# Vercel Environment Variable Setup

## Required Environment Variable

You need to add **ONE** environment variable in Vercel:

### Variable Name:
```
NEXT_PUBLIC_API_URL
```

### Variable Value:
```
https://your-backend-url.onrender.com/api
```

**IMPORTANT:** Replace `your-backend-url.onrender.com` with your actual Render backend URL.

---

## Step-by-Step Instructions

### Step 1: Deploy Your Backend to Render First

Before setting up Vercel, you MUST deploy your backend:

1. Go to [Render.com](https://render.com)
2. Sign up or log in
3. Click "New +" → "Web Service"
4. Connect your GitHub repository: `sandra11223/GD-back`
5. Configure:
   - **Name:** `global-education-backend` (or any name)
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Add environment variables in Render:
   ```
   MONGODB_URI=mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@sandraap745_db_here.mongodb.net/global-education-council?retryWrites=true&w=majority
   JWT_SECRET=your-secret-key-here
   NODE_ENV=production
   PORT=5000
   ```
7. Click "Create Web Service"
8. Wait for deployment (5-10 minutes)
9. **Copy your Render URL** - it will look like: `https://global-education-backend-xxxx.onrender.com`

### Step 2: Add Environment Variable in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (Global Education Council frontend)
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name:** `NEXT_PUBLIC_API_URL`
   - **Value:** `https://your-render-url.onrender.com/api` (paste your Render URL + `/api`)
   - **Environment:** Select all (Production, Preview, Development)
5. Click **Save**

### Step 3: Redeploy Your Frontend

After adding the environment variable:

1. Go to **Deployments** tab in Vercel
2. Click the three dots (...) on the latest deployment
3. Click **Redeploy**
4. Wait for redeployment to complete

---

## Example Configuration

If your Render backend URL is:
```
https://global-education-backend-abc123.onrender.com
```

Then your Vercel environment variable should be:
```
Name:  NEXT_PUBLIC_API_URL
Value: https://global-education-backend-abc123.onrender.com/api
```

**Note:** Don't forget the `/api` at the end!

---

## How to Find Your Render URL

After deploying to Render:

1. Go to your Render dashboard
2. Click on your web service
3. Look at the top - you'll see your URL like:
   ```
   https://your-service-name.onrender.com
   ```
4. Copy this URL and add `/api` at the end

---

## Testing After Setup

1. Visit your Vercel site: `https://your-site.vercel.app`
2. Try to register a new account
3. If it works, you're all set! ✅
4. If you see errors, check:
   - Backend is running on Render (visit the URL directly)
   - Environment variable is correct (includes `/api`)
   - You redeployed after adding the variable

---

## Current Local Setup (For Reference)

Your local environment uses:
```
NEXT_PUBLIC_API_URL=http://192.168.1.8:5000/api
```

This works locally but NOT in production. That's why you need to set the Render URL in Vercel.

---

## Quick Checklist

- [ ] Backend deployed to Render
- [ ] Render URL copied (e.g., `https://xxx.onrender.com`)
- [ ] Environment variable added in Vercel: `NEXT_PUBLIC_API_URL`
- [ ] Value includes `/api` at the end
- [ ] Frontend redeployed in Vercel
- [ ] Registration tested and working

---

## Need Help?

If you're stuck:
1. Check if backend is running: Visit your Render URL directly
2. Check Vercel logs: Go to Deployments → Click deployment → View Function Logs
3. Check browser console: Open DevTools → Console tab → Look for errors
