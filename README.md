# Global Education Council - Full Stack Next.js App

A modern serverless full-stack web application built with Next.js 14, featuring API routes, MongoDB integration, and authentication.

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes (Serverless)
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcryptjs
- **Deployment**: Vercel

## 📁 Project Structure

```
frontend/
├── app/
│   ├── api/              # API routes (serverless backend)
│   │   ├── auth/         # Authentication endpoints
│   │   ├── courses/      # Course management
│   │   ├── universities/ # University listings
│   │   ├── enrollments/  # Student enrollments
│   │   ├── inquiries/    # Contact inquiries
│   │   ├── newsletter/   # Newsletter subscriptions
│   │   ├── partnerships/ # Partnership requests
│   │   └── services/     # Service offerings
│   ├── admin/            # Admin dashboard
│   ├── dashboard/        # User dashboard
│   └── ...               # Public pages
├── components/           # React components
├── lib/
│   ├── config/          # Database configuration
│   ├── models/          # Mongoose models
│   ├── middleware/      # Auth middleware
│   └── seed.js          # Database seeding
└── services/            # API client services
```

## 🎯 Features

- 🎓 Course management system
- 🏫 University listings
- 👥 User authentication & authorization
- 📧 Newsletter subscription
- 🤝 Partnership applications
- 📊 Admin dashboard
- 📱 Responsive design
- 🔒 Secure API routes
- ⚡ Serverless architecture

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sandra11223/GD-council.git
cd GD-council
```

2. Navigate to frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
```

4. Create `.env.local` file:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

### Seed Database (Optional)

```bash
npm run seed
```

This creates:
- Admin user (admin@globaledu.com / admin123)
- Sample universities
- Sample courses
- Sample services

## 📡 API Routes

All API endpoints are available at `/api/*`:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create course
- `GET /api/courses/[id]` - Get course by ID
- `PUT /api/courses/[id]` - Update course
- `DELETE /api/courses/[id]` - Delete course
- `GET /api/universities` - Get all universities
- `POST /api/universities` - Create university
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/enrollments` - Get enrollments
- `POST /api/enrollments` - Create enrollment
- `POST /api/inquiries` - Submit inquiry
- `POST /api/partnerships` - Submit partnership request
- `GET /api/services` - Get all services
- `POST /api/services` - Create service

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Set root directory to `frontend`
4. Add environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
5. Deploy

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📚 Documentation

- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [MIGRATION_SUMMARY.md](MIGRATION_SUMMARY.md) - Migration details
- [frontend/QUICKSTART.md](frontend/QUICKSTART.md) - Quick start guide
- [MONGODB_SETUP_GUIDE.md](MONGODB_SETUP_GUIDE.md) - MongoDB setup

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run seed` - Seed database
- `npm run lint` - Run linter

## 🌟 Architecture Highlights

### Serverless Benefits
- ✅ Single deployment (no separate backend)
- ✅ Automatic scaling
- ✅ Lower costs (pay per use)
- ✅ Simpler maintenance
- ✅ Built-in API routes
- ✅ Edge network distribution

### Before vs After
**Before**: Separate Express backend + Next.js frontend
**After**: Unified Next.js serverless application

## 📝 License

MIT

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue on GitHub.
