import dbConnect from './config/db.js';
import User from './models/User.js';
import Course from './models/Course.js';
import University from './models/University.js';
import Service from './models/Service.js';
import bcrypt from 'bcryptjs';

const seedData = async () => {
  try {
    await dbConnect();

    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    await University.deleteMany({});
    await Service.deleteMany({});

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await User.create({
      name: 'Admin User',
      email: 'admin@globaledu.com',
      password: hashedPassword,
      role: 'admin'
    });

    // Create sample universities
    const universities = await University.create([
      {
        name: 'Harvard University',
        country: 'USA',
        city: 'Cambridge',
        description: 'Prestigious Ivy League institution',
        ranking: '#1',
        website: 'https://harvard.edu'
      },
      {
        name: 'Oxford University',
        country: 'UK',
        city: 'Oxford',
        description: 'Historic British university',
        ranking: '#2',
        website: 'https://ox.ac.uk'
      }
    ]);

    // Create sample courses
    await Course.create([
      {
        title: 'Computer Science Fundamentals',
        description: 'Learn the basics of computer science',
        duration: '12 weeks',
        level: 'Beginner',
        category: 'Technology',
        price: 999,
        university: universities[0]._id
      },
      {
        title: 'Business Administration',
        description: 'Master business management skills',
        duration: '16 weeks',
        level: 'Intermediate',
        category: 'Business',
        price: 1299,
        university: universities[1]._id
      }
    ]);

    // Create sample services
    await Service.create([
      {
        title: 'University Admission Consulting',
        description: 'Expert guidance for university applications',
        features: ['Application review', 'Essay editing', 'Interview prep']
      },
      {
        title: 'Visa Assistance',
        description: 'Complete visa application support',
        features: ['Document preparation', 'Application filing', 'Interview coaching']
      }
    ]);

    console.log('✅ Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
