# 🔍 Check Your Vercel Configuration

## You're getting this error because Vercel can't connect to the backend.

Let's diagnose the issue step by step:

---

## Step 1: Verify Environment Variable in Vercel

1. Go to: https://vercel.com/dashboard
2. Click on your project
3. Go to: **Settings** → **Environment Variables**
4. Look for: `NEXT_PUBLIC_API_URL`

### ✅ It Should Look Like This:

```
Name:  NEXT_PUBLIC_API_URL
Value: https://gd-back.onrender.com/api
```

### ❌ Common Mistakes:

- Missing `https://` at the beginning
- Missing `/api` at the end
- Using `http://` instead of `https://`
- Using localhost URL
- Typo in the URL

### Correct Value (Copy This):
```
https://gd-back.onrender.com/api
```

---

## Step 2: Check Which Environments Are Selected

When you added the environment variable, you need to select:
- ✅ Production
- ✅ Preview  
- ✅ Development

If you only selected one, the others won't work!

---

## Step 3: Did You Redeploy After Adding Variable?

**CRITICAL:** Environment variables only take effect AFTER redeployment!

1. Go to: **Deployments** tab in Vercel
2. Find the latest deployment
3. Click the three dots (...) 
4. Click **"Redeploy"**
5. Wait 2-3 minutes
6. Try again

---

## Step 4: Test Backend Directly

Open this URL in your browser:
```
https://gd-back.onrender.com
```

### ✅ If Working, You Should See:
```json
{
  "message": "Global Education Council API",
  "status": "running",
  "timestamp": "2024-...",
  "environment": "production"
}
```

### ❌ If You See Error:
- "Application failed to respond" → Backend is sleeping, wait 30 seconds and refresh
- "Not Found" → Backend is not deployed correctly
- Nothing loads → Backend URL is wrong

---

## Step 5: Test API Endpoint

Try this URL:
```
https://gd-back.onrender.com/api/courses
```

Should return: `[]` or a list of courses

---

## Step 6: Check Browser Console

1. Open your Vercel site
2. Press F12 (open Developer Tools)
3. Go to **Console** tab
4. Try to register
5. Look for error messages

### What to Look For:

**If you see:**
```
API URL configured: undefined
```
→ Environment variable is NOT set in Vercel

**If you see:**
```
API URL configured: http://localhost:5000/api
```
→ Environment variable is set to localhost (wrong!)

**If you see:**
```
API URL configured: https://gd-back.onrender.com/api
```
→ Environment variable is correct! ✅

---

## Common Issues & Solutions

### Issue 1: "Environment variable not found"
**Solution:** 
- Add the variable in Vercel Settings
- Make sure to select all three environments
- Redeploy

### Issue 2: "Variable is set but still using localhost"
**Solution:**
- You didn't redeploy after setting the variable
- Go to Deployments → Redeploy

### Issue 3: "Backend URL returns 404"
**Solution:**
- Make sure URL ends with `/api`
- Correct: `https://gd-back.onrender.com/api`
- Wrong: `https://gd-back.onrender.com`

### Issue 4: "Application failed to respond"
**Solution:**
- Render free tier sleeps after 15 minutes
- Wait 30-60 seconds for it to wake up
- Try again

---

## Screenshot Checklist

Please take screenshots of:

1. **Vercel Environment Variables page** (Settings → Environment Variables)
2. **Browser Console** when trying to register (F12 → Console tab)
3. **What you see** when visiting `https://gd-back.onrender.com`

Share these with me and I can tell you exactly what's wrong!

---

## Quick Fix Commands

If you want to test locally first:

1. Update `frontend/.env.local`:
   ```
   NEXT_PUBLIC_API_URL=https://gd-back.onrender.com/api
   ```

2. Restart frontend:
   ```
   npm run dev
   ```

3. Test at `http://localhost:3000/register`

If it works locally, then the issue is definitely with Vercel configuration!
