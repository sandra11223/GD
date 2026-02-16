# Dashboard System - Complete Guide

## Overview
The Global Education Council platform has a comprehensive dashboard system that connects to MongoDB and allows administrators to manage all content that appears on the frontend.

## Dashboard Access
- **URL**: `/dashboard`
- **Admin URL**: `/admin`
- **Authentication**: JWT-based authentication required
- **Roles**: User and Admin

## Sidebar Navigation Structure

### Main Menu (All Users)
1. **Dashboard** - User dashboard home
2. **Browse Courses** - View all courses
3. **Universities** - View partner universities
4. **Services** - View available services

### Actions (All Users)
1. **Enroll in Course** - Submit course enrollment
2. **Submit Inquiry** - Send inquiries
3. **Partnership** - Apply for partnerships

### Administration (Admin Only)
1. **Admin Dashboard** - Overview with statistics
2. **Manage Courses** - Add/Edit/Delete courses
3. **Manage Universities** - Add/Edit/Delete universities
4. **Manage Services** - Add/Edit/Delete services
5. **Newsletter Subscribers** - View and manage email subscribers
6. **View Enrollments** - See all course enrollments
7. **View Inquiries** - Manage user inquiries
8. **View Partnerships** - Review partnership applications

## MongoDB Integration

### Database Models
All data is stored in MongoDB with the following models:

1. **Course** (`backend/models/Course.js`)
   - title, description, duration, level, category, price, syllabus, image

2. **University** (`backend/models/University.js`)
   - name, country, city, description, ranking, programs, tuitionFee, logo, website

3. **Service** (`backend/models/Service.js`)
   - title, description, features, icon

4. **Newsletter** (`backend/models/Newsletter.js`)
   - email, subscribedAt, isActive

5. **Enrollment** (`backend/models/Enrollment.js`)
   - user, course, status, enrolledAt

6. **Inquiry** (`backend/models/Inquiry.js`)
   - user, subject, message, status

7. **Partnership** (`backend/models/Partnership.js`)
   - user, organizationName, organizationType, message, status

### API Endpoints
All endpoints are in `backend/routes/`:
- `/api/courses` - Course CRUD operations
- `/api/universities` - University CRUD operations
- `/api/services` - Service CRUD operations
- `/api/newsletter` - Newsletter subscription management
- `/api/enrollments` - Enrollment management
- `/api/inquiries` - Inquiry management
- `/api/partnerships` - Partnership management

## Frontend Pages

### Public Pages (Display MongoDB Data)
1. **Courses Page** (`/courses`) - Displays all courses from MongoDB
2. **Universities Page** (`/universities`) - Shows partner universities
3. **Services Page** (`/services`) - Lists available services
4. **Home Page** (`/`) - Features courses, universities, and services

### Admin Management Pages
1. **Manage Courses** (`/admin/courses`)
   - View all courses in a table
   - Add new courses with form
   - Edit existing courses
   - Delete courses
   - All changes reflect immediately on `/courses` page

2. **Manage Universities** (`/admin/universities`)
   - View all universities in a table
   - Add new universities with form
   - Edit existing universities
   - Delete universities
   - All changes reflect immediately on `/universities` page

3. **Manage Services** (`/admin/services`)
   - View all services in a table
   - Add new services with form
   - Edit existing services
   - Delete services
   - All changes reflect immediately on `/services` page

4. **Newsletter Subscribers** (`/admin/subscribers`)
   - View all email subscribers
   - See subscription statistics
   - Delete subscribers
   - Export to CSV

## How It Works

### Adding Content Flow
1. Admin logs in to dashboard
2. Navigates to "Manage Courses/Universities/Services" from sidebar
3. Clicks "Add New" button
4. Fills out the form with details
5. Submits form → Data saved to MongoDB
6. Content immediately appears on public pages

### Viewing Content Flow
1. Public users visit `/courses`, `/universities`, or `/services`
2. Frontend fetches data from MongoDB via API
3. Data is displayed in cards/grids
4. Real-time updates when admin makes changes

### Newsletter Subscription Flow
1. User enters email in footer
2. Email saved to MongoDB Newsletter collection
3. Admin can view all subscribers in dashboard
4. Admin can export subscriber list to CSV

## Key Features

### Dashboard Features
- ✅ Responsive sidebar navigation
- ✅ Role-based access control (User/Admin)
- ✅ Real-time data from MongoDB
- ✅ Clean, modern UI with Royal Blue theme
- ✅ Collapsible sidebar
- ✅ Active route highlighting

### Admin Features
- ✅ Full CRUD operations for all content
- ✅ Form validation
- ✅ Image URL support
- ✅ Statistics dashboard
- ✅ Subscriber management
- ✅ CSV export functionality

### Security
- ✅ JWT authentication
- ✅ Protected routes
- ✅ Admin-only access control
- ✅ Password hashing with bcrypt

## Database Seeding
Sample data can be added using:
```bash
cd backend
node seed.js
```

This adds:
- 6 sample courses
- 6 sample universities
- 4 sample services

## Environment Setup
Required environment variables in `backend/.env`:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Running the Application
1. Start backend: `cd backend && npm start`
2. Start frontend: `cd frontend && npm run dev`
3. Access dashboard: `http://localhost:3000/dashboard`
4. Admin login required for management features

## Summary
The dashboard is fully functional and connected to MongoDB. All content managed through the admin dashboard (courses, universities, services) is immediately displayed on the public-facing pages. The system is production-ready with proper authentication, authorization, and data persistence.
