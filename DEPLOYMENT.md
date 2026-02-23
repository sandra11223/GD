# Deployment Guide

## Serverless Next.js Full-Stack Application

This application is now a complete serverless Next.js app with API routes built-in. No separate backend server needed!

## Architecture

- **Frontend**: Next.js pages and components
- **Backend**: Next.js API routes (`/app/api/*`)
- **Database**: MongoDB Atlas
- **Hosting**: Vercel (recommended) or any Next.js-compatible platform

## Environment Variables

You only need these variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=production
```

## Deployment Steps

### 1. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string
4. Whitelist all IPs (0.0.0.0/0) for serverless

### 2. Vercel Deployment

1. Push code to GitHub:
```bash
git add .
git commit -m "Converted to serverless Next.js app"
git push
```

2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Set root directory to `frontend`
5. Add environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
6. Deploy!

### 3. Alternative: Manual Deployment

```bash
cd frontend
npm run build
npm start
```

## API Endpoints

All endpoints are at `/api/*`:

- `/api/auth/register` - POST
- `/api/auth/login` - POST
- `/api/courses` - GET, POST
- `/api/courses/[id]` - GET, PUT, DELETE
- `/api/universities` - GET, POST
- `/api/enrollments` - GET, POST
- `/api/inquiries` - GET, POST
- `/api/newsletter` - GET, POST
- `/api/partnerships` - GET, POST
- `/api/services` - GET, POST

## Local Development

```bash
cd frontend
npm install
npm run dev
```

Visit http://localhost:3000

## Benefits of This Architecture

✅ Single deployment (no separate backend)
✅ Automatic scaling
✅ Lower costs (serverless)
✅ Simpler maintenance
✅ Built-in API routes
✅ Edge network distribution
✅ Zero configuration needed

## Troubleshooting

### Database Connection Issues
- Verify MONGODB_URI is correct
- Check MongoDB Atlas network access (allow 0.0.0.0/0)
- Ensure database user has proper permissions

### API Route Errors
- Check environment variables are set
- Verify models are properly exported
- Check MongoDB connection in logs

### Build Errors
- Run `npm install` in frontend directory
- Clear `.next` folder and rebuild
- Check Node.js version (18+)
