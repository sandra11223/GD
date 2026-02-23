const Partnership = require('../models/Partnership');

const createPartnership = async (req, res) => {
  try {
    const partnership = await Partnership.create({
      ...req.body,
      user: req.user._id
    });
    res.status(201).json(partnership);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserPartnerships = async (req, res) => {
  try {
    const partnerships = await Partnership.find({ user: req.user._id }).sort('-createdAt');
    res.json(partnerships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPartnerships = async (req, res) => {
  try {
    const partnerships = await Partnership.find()
      .populate('user', 'name email')
      .sort('-createdAt');
    res.json(partnerships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const approvePartnership = async (req, res) => {
  try {
    const partnership = await Partnership.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (partnership) {
      res.json(partnership);
    } else {
      res.status(404).json({ message: 'Partnership not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createPartnership,
  getUserPartnerships,
  getAllPartnerships,
  approvePartnership
};
