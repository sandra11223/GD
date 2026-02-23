# Quick Start Guide

## Setup in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create `.env.local` file:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### 3. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

## Optional: Seed Database
```bash
npm run seed
```

This creates:
- Admin user (admin@globaledu.com / admin123)
- Sample universities
- Sample courses
- Sample services

## Project Structure

```
app/
├── api/              ← Backend API routes (serverless)
├── admin/            ← Admin dashboard
├── dashboard/        ← User dashboard
├── courses/          ← Course pages
├── universities/     ← University pages
└── ...               ← Other pages

lib/
├── models/           ← Database models
├── config/           ← DB connection
└── seed.js           ← Database seeding

components/           ← React components
services/             ← API client
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run seed` - Seed database
- `npm run lint` - Run linter

## Default Admin Credentials

After seeding:
- Email: admin@globaledu.com
- Password: admin123

## API Routes

All at `/api/*`:
- `/api/auth/login` - Login
- `/api/auth/register` - Register
- `/api/courses` - Courses CRUD
- `/api/universities` - Universities CRUD
- `/api/enrollments` - Enrollments
- `/api/inquiries` - Contact inquiries
- `/api/newsletter` - Newsletter subscriptions
- `/api/partnerships` - Partnership requests
- `/api/services` - Services

## Need Help?

Check:
1. MongoDB connection string is correct
2. Environment variables are set
3. Node.js version is 18+
4. Port 3000 is available
