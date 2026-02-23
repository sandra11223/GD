const Inquiry = require('../models/Inquiry');

const createInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.create({
      ...req.body,
      user: req.user._id
    });
    res.status(201).json(inquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({ user: req.user._id }).sort('-createdAt');
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().populate('user', 'name email').sort('-createdAt');
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateInquiryStatus = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (inquiry) {
      res.json(inquiry);
    } else {
      res.status(404).json({ message: 'Inquiry not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPublicInquiries = async (req, res) => {
  try {
    // Return all inquiries without authentication requirement
    // Only return basic info, not sensitive user data
    const inquiries = await Inquiry.find()
      .select('name email phone subject message status createdAt')
      .sort('-createdAt');
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createInquiry,
  getUserInquiries,
  getAllInquiries,
  updateInquiryStatus,
  getPublicInquiries
};
