const express = require('express');
const {
  createPartnership,
  getUserPartnerships,
  getAllPartnerships,
  approvePartnership
} = require('../controllers/partnershipController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createPartnership);
router.get('/', protect, getUserPartnerships);
router.get('/all', protect, admin, getAllPartnerships);
router.put('/:id/approve', protect, admin, approvePartnership);

module.exports = router;
