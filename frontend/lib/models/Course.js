import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  duration: {
    type: String,
    required: [true, 'Duration is required']
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: [true, 'Level is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    default: 0
  },
  image: {
    type: String,
    default: ''
  },
  instructor: {
    type: String,
    default: ''
  },
  syllabus: [{
    type: String
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
export default Course;

