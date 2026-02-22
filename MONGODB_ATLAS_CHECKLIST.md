# MongoDB Atlas Configuration Checklist

## ✅ Current Configuration

- **Cluster Name**: sandraap745_db_here
- **Database Name**: global-education-council
- **Username**: sandraa745_db_user (note: double 'a')
- **Password**: fHih3vl4D4VM7EJp
- **Connection String**: 
  ```
  mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0
  ```

---

## 🔒 IMPORTANT: Network Access Configuration

Before deploying to Render, you MUST allow connections from anywhere:

### Step 1: Check Network Access

1. Go to: https://cloud.mongodb.com
2. Click on your project
3. Click **"Network Access"** in the left sidebar
4. Check if you see: **0.0.0.0/0** (Allow access from anywhere)

### Step 2: If NOT configured, add it:

1. Click **"Add IP Address"**
2. Click **"Allow Access from Anywhere"**
3. It will add: **0.0.0.0/0**
4. Click **"Confirm"**

**Why?** Render servers have dynamic IP addresses, so you need to allow all IPs.

---

## 📊 Database Collections (Already Created)

Your database has these collections with data:

1. **courses** (3 items)
   - Business Management & Leadership
   - Data Science & Analytics
   - Digital Marketing Mastery

2. **universities** (4 items)
   - Harvard University
   - Stanford University
   - MIT
   - University of Oxford

3. **users** (1 item)
   - Demo user: demo@example.com

4. **services** (3 items)
   - Overseas Education Consulting
   - Corporate Skill Development
   - University Partnership Programs

5. **inquiries** (4 sample inquiries)
6. **enrollments** (3 sample enrollments)
7. **partnerships** (3 sample partnerships)
8. **newsletters** (0 items - will be populated when users subscribe)

---

## 🧪 Test Connection Locally

To verify your MongoDB connection is working:

```bash
cd backend
node check-status.js
```

Should show:
```
✅ MongoDB Connected Successfully!
   Host: ac-bzlsplr-shard-00-02.8rw8g2z.mongodb.net
   Database: global-education-council
   Status: Connected
```

---

## 🚀 For Render Deployment

When deploying to Render, use this EXACT connection string in the MONGODB_URI environment variable:

```
mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0
```

**DO NOT**:
- Change the username (it's `sandraa745_db_user` with double 'a')
- Change the password
- Remove any part of the connection string
- Add spaces or line breaks

---

## ⚠️ Common Issues

### Issue: "Authentication failed"
**Solution**: 
- Username must be exactly: `sandraa745_db_user` (double 'a')
- Password must be exactly: `fHih3vl4D4VM7EJp`
- Check for extra spaces when copying

### Issue: "Connection timeout"
**Solution**:
- Check Network Access allows 0.0.0.0/0
- Wait 1-2 minutes after adding IP address

### Issue: "Database not found"
**Solution**:
- Database name must be: `global-education-council`
- It's in the connection string after `.mongodb.net/`

---

## 📝 Summary

✅ Database is configured and working
✅ Data has been added successfully
✅ Connection string is correct
⚠️ Make sure Network Access allows 0.0.0.0/0 before deploying to Render

You're ready to deploy! 🚀
