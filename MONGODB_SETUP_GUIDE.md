# MongoDB Atlas Setup Guide

## Current Issue: Bad Auth Error

This means your MongoDB username or password is incorrect.

## Quick Fix Steps

### 1. Login to MongoDB Atlas
Go to: https://cloud.mongodb.com

### 2. Create New Database User
- Click "Database Access" (left sidebar)
- Click "ADD NEW DATABASE USER"
- Username: `globaleduser`
- Password: Use "Autogenerate Secure Password" button (copy it!)
- Privileges: "Atlas admin"
- Click "Add User"

### 3. Allow Network Access
- Click "Network Access" (left sidebar)
- Click "ADD IP ADDRESS"
- Click "ALLOW ACCESS FROM ANYWHERE"
- Click "Confirm"

### 4. Get Connection String
- Click "Database" (left sidebar)
- Click "Connect" on your cluster
- Choose "Drivers"
- Copy the connection string
- It looks like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/`

### 5. Update .env.local
Replace the MONGODB_URI in `frontend/.env.local` with:

```
mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/global-education-council?retryWrites=true&w=majority
```

Replace:
- YOUR_USERNAME = the username you created
- YOUR_PASSWORD = the password you copied
- YOUR_CLUSTER = your cluster address (e.g., cluster0.8rw8g2z)

### 6. Save and Test
Save the file and try registering again.

## Common Issues

1. **Special characters in password**: Avoid `@`, `:`, `/`, `?`, `#`, `%` in passwords
2. **Wrong cluster ID**: Make sure the cluster address matches your Atlas cluster
3. **User doesn't exist**: Create the user in Database Access first
4. **Network not allowed**: Add 0.0.0.0/0 in Network Access

## Need Help?
Double-check each value in your connection string matches exactly what's in MongoDB Atlas.
