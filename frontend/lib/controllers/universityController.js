const University = require('../models/University');

const getUniversities = async (req, res) => {
  try {
    const universities = await University.find({ isActive: true });
    res.json(universities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUniversityById = async (req, res) => {
  try {
    const university = await University.findById(req.params.id);
    if (university) {
      res.json(university);
    } else {
      res.status(404).json({ message: 'University not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUniversity = async (req, res) => {
  try {
    console.log('Received university data:', req.body);
    const university = await University.create(req.body);
    console.log('University created successfully:', university);
    res.status(201).json(university);
  } catch (error) {
    console.error('Error creating university:', error);
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      console.error('Validation errors:', errors);
      res.status(400).json({ message: 'Validation failed', errors });
    } else {
      console.error('Other error:', error.message);
      res.status(400).json({ message: error.message });
    }
  }
};

const updateUniversity = async (req, res) => {
  try {
    const university = await University.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (university) {
      res.json(university);
    } else {
      res.status(404).json({ message: 'University not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUniversity = async (req, res) => {
  try {
    const university = await University.findByIdAndDelete(req.params.id);
    if (university) {
      res.json({ message: 'University deleted successfully' });
    } else {
      res.status(404).json({ message: 'University not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUniversities,
  getUniversityById,
  createUniversity,
  updateUniversity,
  deleteUniversity
};
