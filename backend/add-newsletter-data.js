require('dotenv').config();
const mongoose = require('mongoose');
const Newsletter = require('./models/Newsletter');

const newsletterData = [
  {
    email: 'john.doe@example.com',
    subscribedAt: new Date('2024-01-15')
  },
  {
    email: 'sarah.smith@example.com',
    subscribedAt: new Date('2024-02-10')
  },
  {
    email: 'michael.johnson@example.com',
    subscribedAt: new Date('2024-03-05')
  },
  {
    email: 'emily.brown@example.com',
    subscribedAt: new Date('2024-03-20')
  },
  {
    email: 'david.wilson@example.com',
    subscribedAt: new Date('2024-04-12')
  },
  {
    email: 'lisa.anderson@example.com',
    subscribedAt: new Date('2024-05-08')
  },
  {
    email: 'james.taylor@example.com',
    subscribedAt: new Date('2024-06-15')
  },
  {
    email: 'maria.garcia@example.com',
    subscribedAt: new Date('2024-07-22')
  },
  {
    email: 'robert.martinez@example.com',
    subscribedAt: new Date('2024-08-30')
  },
  {
    email: 'jennifer.lee@example.com',
    subscribedAt: new Date('2024-09-18')
  }
];

async function addNewsletterData() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Clear existing newsletter data
    await Newsletter.deleteMany({});
    console.log('🗑️  Cleared existing newsletter subscribers\n');

    // Add new newsletter subscribers
    console.log('📧 Adding newsletter subscribers...');
    const subscribers = await Newsletter.insertMany(newsletterData);
    console.log(`✅ Added ${subscribers.length} newsletter subscribers\n`);

    // Display added subscribers
    console.log('Newsletter Subscribers:');
    subscribers.forEach((sub, index) => {
      console.log(`${index + 1}. ${sub.email} - Subscribed: ${sub.subscribedAt.toLocaleDateString()}`);
    });

    console.log('\n✅ Newsletter data added successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error adding newsletter data:', error);
    process.exit(1);
  }
}

addNewsletterData();
