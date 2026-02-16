# Global Education Council Web App

A full-stack MERN B2B platform for showcasing overseas education services including education consulting, skill development courses, university applications, and admission support.

## Tech Stack

- **Frontend**: Next.js (React) with Server-Side Rendering (SSR)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT-based
- **Password Hashing**: bcrypt
- **State Management**: Context API
- **Styling**: Tailwind CSS
- **API Communication**: Axios

## Project Structure

```
global-education-council/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── app/
│   ├── components/
│   ├── context/
│   ├── services/
│   └── .env.local
└── README.md
```

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
npm install
```

2. Create `.env` file with:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

3. Start backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
npm install
```

2. Create `.env.local` file with:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

3. Start frontend:
```bash
npm run dev
```

## Features

### Public Features (No Login Required)
- Home page
- About Global Education Council
- Services listing
- Courses listing
- Universities listing
- Contact page
- SEO optimized with Next.js SSR

### Protected Features (Login Required)
- Submit Inquiry Form
- Course Enrollment Form
- Partnership Application Form
- User Dashboard
- View submitted forms
- Update profile

### Admin Features
- Admin Dashboard
- Manage Courses (CRUD)
- Manage Universities (CRUD)
- Manage Services (CRUD)
- View all users
- View all inquiries
- Approve partnership applications
- Basic analytics

## Deployment

### Backend (Render/Railway)
1. Push code to GitHub
2. Connect repository to hosting service
3. Set environment variables
4. Deploy

### Frontend (Vercel)
1. Push code to GitHub
2. Import project to Vercel
3. Set environment variables
4. Deploy

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user

### Services
- GET `/api/services` - Get all services
- POST `/api/services` - Create service (Admin)
- PUT `/api/services/:id` - Update service (Admin)
- DELETE `/api/services/:id` - Delete service (Admin)

### Courses
- GET `/api/courses` - Get all courses
- POST `/api/courses` - Create course (Admin)
- PUT `/api/courses/:id` - Update course (Admin)
- DELETE `/api/courses/:id` - Delete course (Admin)

### Universities
- GET `/api/universities` - Get all universities
- POST `/api/universities` - Create university (Admin)
- PUT `/api/universities/:id` - Update university (Admin)
- DELETE `/api/universities/:id` - Delete university (Admin)

### Inquiries
- POST `/api/inquiries` - Submit inquiry (Protected)
- GET `/api/inquiries` - Get user inquiries (Protected)
- GET `/api/inquiries/all` - Get all inquiries (Admin)

### Enrollments
- POST `/api/enrollments` - Submit enrollment (Protected)
- GET `/api/enrollments` - Get user enrollments (Protected)
- GET `/api/enrollments/all` - Get all enrollments (Admin)

### Partnerships
- POST `/api/partnerships` - Submit partnership application (Protected)
- GET `/api/partnerships` - Get user partnerships (Protected)
- GET `/api/partnerships/all` - Get all partnerships (Admin)
- PUT `/api/partnerships/:id/approve` - Approve partnership (Admin)

## License

MIT
