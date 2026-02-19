'use client';

import { useState } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function UniversitiesContent() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    institutionName: user?.companyName || '',
    contactPerson: user?.name || '',
    email: user?.email || '',
    phone: '',
    preferredCountry: '',
    fieldOfStudy: ''
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
        subject: `University Partnership Inquiry - ${formData.preferredCountry}`,
        message: `
Institution: ${formData.institutionName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Country: ${formData.preferredCountry}
Field of Study: ${formData.fieldOfStudy}
        `
      });
      toast.success('University inquiry submitted successfully!');
      setFormData({
        institutionName: user?.companyName || '',
        contactPerson: user?.name || '',
        email: user?.email || '',
        phone: '',
        preferredCountry: '',
        fieldOfStudy: ''
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
        <h1 className="text-4xl font-bold mb-2 gradient-text-emerald">University Partnerships</h1>
        <p className="text-gray-300 text-lg">Connect with top universities worldwide for your students</p>
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

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Preferred Country
              </label>
              <select
                name="preferredCountry"
                value={formData.preferredCountry}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="">Select a country</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="Singapore">Singapore</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Field of Study
              </label>
              <select
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="">Select field of study</option>
                <option value="Business & Management">Business & Management</option>
                <option value="Engineering">Engineering</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Medicine & Healthcare">Medicine & Healthcare</option>
                <option value="Law">Law</option>
                <option value="Arts & Humanities">Arts & Humanities</option>
                <option value="Sciences">Sciences</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? 'Submitting...' : 'Submit University Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Universities() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <UniversitiesContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}
