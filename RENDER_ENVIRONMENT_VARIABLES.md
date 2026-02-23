# Render Environment Variables Setup

## Required Environment Variables in Render

Go to: https://dashboard.render.com/web/srv-d6divm4tgctc73f6a69g

Click **Environment** tab and add these variables:

### 1. MONGODB_URI
```
mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@sandraap745_db_here.mongodb.net/global-education-council?retryWrites=true&w=majority
```

### 2. JWT_SECRET
```
global-education-secret-key-2024
```

### 3. NODE_ENV
```
production
```

### 4. PORT
```
5000
```

### 5. FRONTEND_URL (ADD THIS - IMPORTANT!)
```
https://your-vercel-site.vercel.app
```
**Replace `your-vercel-site` with your actual Vercel URL!**

---

## Why FRONTEND_URL is Important

The backend uses this to allow CORS requests from your Vercel frontend. Without it, requests will be blocked.

---

## After Adding Variables

1. Click **"Save Changes"**
2. Render will automatically redeploy
3. Wait 5-10 minutes
4. Test again

---

## Quick Test After Deployment

Visit: `https://gd-back.onrender.com/api/courses`

Should return: `[]` or list of courses (not CORS error)
