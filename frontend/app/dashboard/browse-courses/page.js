'use client';

import { useState } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function BrowseCoursesContent() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    institutionName: user?.companyName || '',
    contactPerson: user?.name || '',
    email: user?.email || '',
    phone: '',
    courseCategory: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/inquiries', {
        name: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        subject: `Course Inquiry - ${formData.courseCategory}`,
        message: `
Institution: ${formData.institutionName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Course Category: ${formData.courseCategory}
        `
      });
      toast.success('Course inquiry submitted successfully!');
      setFormData({
        institutionName: user?.companyName || '',
        contactPerson: user?.name || '',
        email: user?.email || '',
        phone: '',
        courseCategory: ''
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast.error(error.response?.data?.message || 'Failed to submit inquiry');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 gradient-text-emerald">Browse Courses</h1>
        <p className="text-gray-300 text-lg">Submit your course requirements and we'll help you find the perfect match</p>
      </div>

      <div className="glass-dark rounded-xl border border-emerald-500/20 shadow-emerald-glow p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Institution Name
              </label>
              <input
                type="text"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Your institution name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Contact Person
              </label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Your name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Course Category
            </label>
            <select
              name="courseCategory"
              value={formData.courseCategory}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select a category</option>
              <option value="Business">Business & Management</option>
              <option value="Technology">Technology & IT</option>
              <option value="Marketing">Marketing & Sales</option>
              <option value="Finance">Finance & Accounting</option>
              <option value="Healthcare">Healthcare & Medicine</option>
              <option value="Engineering">Engineering</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? 'Submitting...' : 'Submit Course Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function BrowseCourses() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <BrowseCoursesContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}
