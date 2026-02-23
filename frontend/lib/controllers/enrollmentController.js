const Enrollment = require('../models/Enrollment');

const createEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.create({
      ...req.body,
      user: req.user._id
    });
    const populatedEnrollment = await enrollment.populate('course', 'title');
    res.status(201).json(populatedEnrollment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user._id })
      .populate('course', 'title duration level')
      .sort('-createdAt');
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate('user', 'name email')
      .populate('course', 'title')
      .sort('-createdAt');
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEnrollmentStatus = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    ).populate('course', 'title');
    if (enrollment) {
      res.json(enrollment);
    } else {
      res.status(404).json({ message: 'Enrollment not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createEnrollment,
  getUserEnrollments,
  getAllEnrollments,
  updateEnrollmentStatus
};
