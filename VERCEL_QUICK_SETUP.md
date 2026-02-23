# ⚡ Vercel Quick Setup - 3 Steps

## What You Need to Add in Vercel Settings

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add this ONE variable:

```
Name:  NEXT_PUBLIC_API_URL
Value: https://your-render-backend-url.onrender.com/api
```

**Important:** 
- Replace `your-render-backend-url` with your actual Render URL
- Don't forget `/api` at the end!

---

## Complete Setup Process

### 1️⃣ Deploy Backend to Render

1. Go to [render.com](https://render.com)
2. New Web Service → Connect `sandra11223/GD-back`
3. Settings:
   - Build: `npm install`
   - Start: `npm start`
4. Add these environment variables in Render:
   ```
   MONGODB_URI=mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@sandraap745_db_here.mongodb.net/global-education-council
   JWT_SECRET=your-secret-key-123
   NODE_ENV=production
   ```
5. Deploy and copy your URL (e.g., `https://gd-backend-xyz.onrender.com`)

### 2️⃣ Add Environment Variable in Vercel

1. Vercel → Settings → Environment Variables
2. Add:
   ```
   NEXT_PUBLIC_API_URL = https://gd-backend-xyz.onrender.com/api
   ```
3. Select: Production, Preview, Development
4. Save

### 3️⃣ Redeploy Frontend

1. Vercel → Deployments
2. Click (...) → Redeploy
3. Done! ✅

---

## That's It!

Your website will now work on Vercel and connect to your Render backend.

Test by visiting your Vercel URL and trying to register.
