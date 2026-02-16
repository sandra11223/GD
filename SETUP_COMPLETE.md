# Global Education Council - Setup Complete ✅

## Application Status

### Backend Server
- **URL**: http://localhost:5000
- **Status**: ✅ Running
- **Database**: MongoDB Connected (localhost)
- **API Endpoints**: http://localhost:5000/api

### Frontend Server
- **URL**: http://localhost:3000
- **Status**: ✅ Running
- **Framework**: Next.js 14 with SSR
- **API Connection**: ✅ Connected to backend

## Color Theme
🎨 **Orange Gradient Theme**
- Primary: Orange (#f97316)
- Secondary: Light Orange (#fb923c)
- Accent: Peach (#fdba74)
- Background: Dark slate (#0f172a)
- Gradient: Orange-900 → Orange-700 → Orange-600

## Hero Section Heights
- **Home Page**: 500px (reduced for better proportion)
- **Other Pages**: 400px (About, Courses, Universities, Services, Contact)

## API Connection Details

### Frontend Configuration
- API Base URL: `http://localhost:5000/api`
- Authentication: JWT tokens stored in localStorage
- Axios interceptor automatically adds auth headers

### Available API Endpoints

#### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/profile` - Get user profile (Protected)
- PUT `/api/auth/profile` - Update profile (Protected)

#### Courses
- GET `/api/courses` - Get all courses
- GET `/api/courses/:id` - Get course by ID
- POST `/api/courses` - Create course (Admin only)
- PUT `/api/courses/:id` - Update course (Admin only)
- DELETE `/api/courses/:id` - Delete course (Admin only)

#### Universities
- GET `/api/universities` - Get all universities
- GET `/api/universities/:id` - Get university by ID
- POST `/api/universities` - Create university (Admin only)
- PUT `/api/universities/:id` - Update university (Admin only)
- DELETE `/api/universities/:id` - Delete university (Admin only)

#### Services
- GET `/api/services` - Get all services
- GET `/api/services/:id` - Get service by ID
- POST `/api/services` - Create service (Admin only)
- PUT `/api/services/:id` - Update service (Admin only)
- DELETE `/api/services/:id` - Delete service (Admin only)

#### Inquiries
- POST `/api/inquiries` - Submit inquiry (Protected)
- GET `/api/inquiries` - Get user inquiries (Protected)
- GET `/api/inquiries/all` - Get all inquiries (Admin only)
- PUT `/api/inquiries/:id` - Update inquiry status (Admin only)

#### Enrollments
- POST `/api/enrollments` - Submit enrollment (Protected)
- GET `/api/enrollments` - Get user enrollments (Protected)
- GET `/api/enrollments/all` - Get all enrollments (Admin only)
- PUT `/api/enrollments/:id` - Update enrollment status (Admin only)

#### Partnerships
- POST `/api/partnerships` - Submit partnership (Protected)
- GET `/api/partnerships` - Get user partnerships (Protected)
- GET `/api/partnerships/all` - Get all partnerships (Admin only)
- PUT `/api/partnerships/:id/approve` - Approve partnership (Admin only)

## Features

### Public Features (No Login Required)
✅ Home page with hero section
✅ About page
✅ Services listing
✅ Courses listing
✅ Universities listing
✅ Contact page
✅ SEO optimized with Next.js SSR

### Protected Features (Login Required)
✅ User Dashboard
✅ Submit Inquiry Form
✅ Course Enrollment Form
✅ Partnership Application Form
✅ View submitted forms
✅ Update profile

### Admin Features (Admin Role Required)
✅ Admin Dashboard with analytics
✅ Manage Courses (CRUD)
✅ Manage Universities (CRUD)
✅ Manage Services (CRUD)
✅ View all users
✅ View all inquiries
✅ Approve partnership applications
✅ Manage enrollments

## Database Schema

### MongoDB Collections
1. **users** - User accounts with authentication
2. **courses** - Course catalog
3. **universities** - Partner universities
4. **services** - Service offerings
5. **inquiries** - User inquiries
6. **enrollments** - Course enrollments
7. **partnerships** - Partnership applications

## Testing the Application

### 1. Register a New User
- Go to http://localhost:3000/register
- Fill in the registration form
- Submit to create account

### 2. Login
- Go to http://localhost:3000/login
- Use your credentials
- Access protected features

### 3. Browse Public Pages
- Home: http://localhost:3000
- Courses: http://localhost:3000/courses
- Universities: http://localhost:3000/universities
- Services: http://localhost:3000/services
- About: http://localhost:3000/about
- Contact: http://localhost:3000/contact

### 4. Access Dashboard (After Login)
- User Dashboard: http://localhost:3000/dashboard
- Submit Inquiry: http://localhost:3000/dashboard/inquiry
- Enroll in Course: http://localhost:3000/dashboard/enroll
- Partnership Application: http://localhost:3000/dashboard/partnership

### 5. Admin Access (Requires Admin Role)
- Admin Dashboard: http://localhost:3000/admin
- Manage Courses: http://localhost:3000/admin/courses
- Manage Universities: http://localhost:3000/admin/universities
- Manage Services: http://localhost:3000/admin/services
- View Enrollments: http://localhost:3000/admin/enrollments
- View Inquiries: http://localhost:3000/admin/inquiries
- View Partnerships: http://localhost:3000/admin/partnerships

## Creating an Admin User

To create an admin user, you need to manually update the user role in MongoDB:

1. Register a user through the application
2. Connect to MongoDB:
   ```bash
   mongosh
   use global-education-council
   db.users.updateOne(
     { email: "your@email.com" },
     { $set: { role: "admin" } }
   )
   ```

## Technology Stack

### Frontend
- Next.js 14 (React framework with SSR)
- Tailwind CSS (Styling)
- Axios (HTTP client)
- React Context API (State management)
- React Toastify (Notifications)

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- JWT (Authentication)
- bcryptjs (Password hashing)

## Security Features
✅ JWT-based authentication
✅ Password hashing with bcrypt
✅ Role-based authorization
✅ Protected API routes
✅ CORS enabled
✅ Input validation

## Next Steps

1. **Add Sample Data**: Create some courses, universities, and services through the admin panel
2. **Test Enrollments**: Register as a user and test the enrollment process
3. **Customize Content**: Update the content on public pages to match your needs
4. **Deploy**: Deploy backend to Render/Railway and frontend to Vercel

## Support

For any issues or questions:
- Check the console logs in browser (F12)
- Check backend logs in the terminal
- Verify MongoDB connection
- Ensure both servers are running

---

**Application is ready to use! 🚀**
