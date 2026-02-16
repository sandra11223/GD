const express = require('express');
const {
  getUniversities,
  getUniversityById,
  createUniversity,
  updateUniversity,
  deleteUniversity
} = require('../controllers/universityController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.get('/', getUniversities);
router.get('/:id', getUniversityById);
router.post('/', protect, admin, createUniversity);
router.put('/:id', protect, admin, updateUniversity);
router.delete('/:id', protect, admin, deleteUniversity);

module.exports = router;
