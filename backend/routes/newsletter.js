const express = require('express');
const router = express.Router();
const { subscribe, getAllSubscribers, unsubscribe, deleteSubscriber } = require('../controllers/newsletterController');
const { protect, admin } = require('../middleware/auth');

// Public routes
router.post('/subscribe', subscribe);
router.post('/unsubscribe', unsubscribe);

// Admin routes
router.get('/', protect, admin, getAllSubscribers);
router.delete('/:id', protect, admin, deleteSubscriber);

module.exports = router;
