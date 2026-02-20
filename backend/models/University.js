const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'University name is required'],
    trim: true
  },
  country: {
    type: String,
    required: [true, 'Country is required']
  },
  city: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  ranking: {
    type: String
  },
  website: {
    type: String
  },
  logo: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  programs: {
    type: String
  },
  students: {
    type: String
  },
  tuitionFee: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('University', universitySchema);
