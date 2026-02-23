require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'partner', 'user'], default: 'user' }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

async function checkUsers() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Find all users
    const users = await User.find({});
    console.log(`Found ${users.length} users in database:\n`);
    
    users.forEach(user => {
      console.log(`- Email: ${user.email}`);
      console.log(`  Name: ${user.name}`);
      console.log(`  Role: ${user.role}`);
      console.log(`  Password Hash: ${user.password.substring(0, 20)}...`);
      console.log('');
    });

    // Test password verification
    console.log('\nTesting password verification:');
    const adminUser = await User.findOne({ email: 'admin@globaledu.com' });
    if (adminUser) {
      const isMatch = await bcrypt.compare('admin123', adminUser.password);
      console.log(`Admin password 'admin123' matches: ${isMatch}`);
    }

    const testUser = await User.findOne({ email: 'test@example.com' });
    if (testUser) {
      const isMatch = await bcrypt.compare('test123', testUser.password);
      console.log(`Test user password 'test123' matches: ${isMatch}`);
    }

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

checkUsers();
