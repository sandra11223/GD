require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Simple inline models
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'partner', 'user'], default: 'user' }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    // Check if admin exists
    const existingAdmin = await User.findOne({ email: 'admin@globaledu.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
    } else {
      await User.create({
        name: 'Admin User',
        email: 'admin@globaledu.com',
        password: hashedPassword,
        role: 'admin'
      });
      console.log('✅ Admin user created');
    }

    // Create test user
    const testPassword = await bcrypt.hash('test123', 10);
    const existingTest = await User.findOne({ email: 'test@example.com' });
    if (existingTest) {
      console.log('Test user already exists');
    } else {
      await User.create({
        name: 'Test User',
        email: 'test@example.com',
        password: testPassword,
        role: 'user'
      });
      console.log('✅ Test user created');
    }

    console.log('\n✅ Database seeded successfully!');
    console.log('\nYou can now login with:');
    console.log('Admin: admin@globaledu.com / admin123');
    console.log('Test User: test@example.com / test123');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

seedDatabase();
