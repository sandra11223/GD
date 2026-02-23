# 🚀 QUICK FIX - 2 Minutes Setup

## Problem: You mixed backend and frontend variables together

## Solution: Separate them correctly

---

## 🔴 RENDER (Backend) - 5 Variables

**Where:** https://dashboard.render.com → Your Service → Environment

**Add these 5:**

| Variable Name | Value |
|--------------|-------|
| `MONGODB_URI` | `mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0` |
| `JWT_SECRET` | `global_education_council_super_secret_jwt_key_2024` |
| `PORT` | `5000` |
| `NODE_ENV` | `production` |
| `FRONTEND_URL` | `https://gd-sandra11223.vercel.app` |

**Also set:**
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `node server.js`

Then click: **Manual Deploy** → **Deploy latest commit**

---

## 🟢 VERCEL (Frontend) - 1 Variable

**Where:** https://vercel.com/dashboard → Your Project → Settings → Environment Variables

**Add this 1:**

| Variable Name | Value |
|--------------|-------|
| `NEXT_PUBLIC_API_URL` | `https://gd-back.onrender.com/api` |

**Select:** Production, Preview, Development (all three)

Then go to: **Deployments** → Click **...** → **Redeploy**

---

## ✅ Done!

After both deployments finish:
- Registration will work ✅
- Newsletter subscription will work ✅
- No more "Backend not configured" error ✅

---

## 🔍 Check Status:

**Render:** https://dashboard.render.com → Your Service → Logs
**Vercel:** https://vercel.com/dashboard → Your Project → Deployments → View Function Logs
