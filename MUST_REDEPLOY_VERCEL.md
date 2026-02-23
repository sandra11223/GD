# ⚠️ CRITICAL: You MUST Redeploy After Adding Environment Variables!

## The Problem:
Environment variables in Vercel only apply to NEW deployments, not existing ones.

---

## Solution: Redeploy Your Frontend

### Step 1: Go to Vercel Dashboard
https://vercel.com/dashboard

### Step 2: Click Your Frontend Project
(The one showing your website, like gd-sandra11223 or similar)

### Step 3: Click "Deployments" Tab
(Top menu)

### Step 4: Find the Latest Deployment
(Should be at the top of the list)

### Step 5: Click the "..." (Three Dots) Menu
(On the right side of the deployment)

### Step 6: Click "Redeploy"

### Step 7: Click "Redeploy" Again to Confirm

### Step 8: Wait 2-3 Minutes
Watch the deployment progress. Wait until it shows "Ready" with a green checkmark.

---

## Verify Environment Variable is Set:

### Before redeploying, double-check:

1. Go to your frontend project in Vercel
2. Click **Settings** → **Environment Variables**
3. Look for: `NEXT_PUBLIC_API_URL`
4. It should show the value (might be hidden with dots)
5. Make sure these checkboxes are checked:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

### If it's NOT there or wrong:

**Add it:**
- Click "Add New"
- Key: `NEXT_PUBLIC_API_URL`
- Value: Your backend URL + `/api`
  - If backend on Vercel: `https://your-backend.vercel.app/api`
  - If backend local: `http://localhost:5000/api`
- Check all 3 boxes
- Click Save
- Then REDEPLOY (steps above)

---

## What Value Should NEXT_PUBLIC_API_URL Be?

### Option 1: Backend on Vercel (Recommended)
```
NEXT_PUBLIC_API_URL=https://gd-backend-xyz.vercel.app/api
```
Replace `gd-backend-xyz` with your actual backend Vercel URL.

### Option 2: Backend Running Locally
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```
This only works when testing locally, NOT in production.

---

## How to Find Your Backend URL:

### If you deployed backend to Vercel:
1. Go to Vercel dashboard
2. Look for your backend project (the one with Root Directory = backend)
3. Click it
4. Copy the URL at the top (looks like: https://gd-backend-xyz.vercel.app)
5. Add `/api` to the end

### If you haven't deployed backend yet:
You need to create a backend project first! See VERCEL_ONLY_SETUP.md

---

## After Redeploying:

### Test it:
1. Go to your website: https://gd-sandra11223.vercel.app
2. Open browser console (F12 or Right-click → Inspect → Console)
3. Look for: `API URL configured: ...`
4. It should show your backend URL, NOT localhost

### Try registering:
1. Go to /register page
2. Fill in the form
3. Click "Create Account"
4. Should work without "Backend not configured" error ✅

---

## Still Not Working?

### Check these:

1. **Did you redeploy?** 
   - Go to Deployments tab
   - Check the timestamp of the latest deployment
   - Should be AFTER you added the environment variable

2. **Is the environment variable correct?**
   - Settings → Environment Variables
   - Key must be exactly: `NEXT_PUBLIC_API_URL` (case-sensitive!)
   - Value must end with `/api`
   - All 3 checkboxes must be checked

3. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or open in incognito/private window

4. **Check backend is running:**
   - If backend on Vercel: Visit https://your-backend.vercel.app/api/auth/test
   - Should return JSON with "status": "ok"
   - If it doesn't work, backend isn't deployed correctly

---

## Common Mistakes:

❌ Added variable but didn't redeploy
❌ Typo in variable name (must be exactly `NEXT_PUBLIC_API_URL`)
❌ Forgot `/api` at the end of the URL
❌ Backend URL is wrong or backend not deployed
❌ Didn't check all 3 environment checkboxes
❌ Looking at old deployment instead of new one

---

## Quick Checklist:

- [ ] Environment variable `NEXT_PUBLIC_API_URL` added to frontend project
- [ ] Value is correct backend URL + `/api`
- [ ] All 3 checkboxes checked (Production, Preview, Development)
- [ ] Frontend redeployed AFTER adding variable
- [ ] Waited for deployment to finish (shows "Ready")
- [ ] Cleared browser cache
- [ ] Backend is actually running (test URL works)

If all checked ✅, it should work!
