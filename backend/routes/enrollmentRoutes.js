const express = require('express');
const {
  createEnrollment,
  getUserEnrollments,
  getAllEnrollments,
  updateEnrollmentStatus
} = require('../controllers/enrollmentController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createEnrollment);
router.get('/', protect, getUserEnrollments);
router.get('/all', protect, admin, getAllEnrollments);
router.put('/:id', protect, admin, updateEnrollmentStatus);

module.exports = router;
