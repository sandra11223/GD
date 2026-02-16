require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const universityRoutes = require('./routes/universityRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const partnershipRoutes = require('./routes/partnershipRoutes');
const newsletterRoutes = require('./routes/newsletter');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Global Education Council API' });
});

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/universities', universityRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/partnerships', partnershipRoutes);
app.use('/api/newsletter', newsletterRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
