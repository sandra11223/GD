'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function UniversitiesContent() {
  const [universities, setUniversities] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    city: '',
    description: '',
    ranking: '',
    website: '',
    tuitionFee: ''
  });

  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    try {
      const { data } = await api.get('/universities');
      setUniversities(data);
    } catch (error) {
      console.error('Error fetching universities:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/universities/${editingId}`, formData);
        toast.success('University updated successfully');
      } else {
        await api.post('/universities', formData);
        toast.success('University created successfully');
      }
      resetForm();
      fetchUniversities();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Operation failed');
    }
  };

  const handleEdit = (university) => {
    setFormData({
      name: university.name,
      country: university.country,
      city: university.city,
      description: university.description,
      ranking: university.ranking || '',
      website: university.website || '',
      tuitionFee: university.tuitionFee || ''
    });
    setEditingId(university._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this university?')) {
      try {
        await api.delete(`/universities/${id}`);
        toast.success('University deleted successfully');
        fetchUniversities();
      } catch (error) {
        toast.error('Delete failed');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      country: '',
      city: '',
      description: '',
      ranking: '',
      website: '',
      tuitionFee: ''
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="py-12 bg-dark-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Manage Universities</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary"
          >
            {showForm ? 'Cancel' : 'Add New University'}
          </button>
        </div>

        {showForm && (
          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">
              {editingId ? 'Edit University' : 'Add New University'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="input-field bg-dark-700 text-white border-dark-600"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                    className="input-field bg-dark-700 text-white border-dark-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="input-field bg-dark-700 text-white border-dark-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows="4"
                  className="input-field bg-dark-700 text-white border-dark-600"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Ranking</label>
                  <input
                    type="number"
                    value={formData.ranking}
                    onChange={(e) => setFormData({ ...formData, ranking: e.target.value })}
                    className="input-field bg-dark-700 text-white border-dark-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Website</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="input-field bg-dark-700 text-white border-dark-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Tuition Fee</label>
                  <input
                    type="text"
                    value={formData.tuitionFee}
                    onChange={(e) => setFormData({ ...formData, tuitionFee: e.target.value })}
                    className="input-field bg-dark-700 text-white border-dark-600"
                    placeholder="e.g., $20,000/year"
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary">
                {editingId ? 'Update University' : 'Create University'}
              </button>
            </form>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {universities.map((university) => (
            <div key={university._id} className="card">
              <h3 className="text-xl font-semibold mb-2 text-white">{university.name}</h3>
              <p className="text-sm text-gray-400 mb-2">
                {university.city}, {university.country}
              </p>
              {university.ranking && (
                <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full mb-2">
                  Ranking: #{university.ranking}
                </span>
              )}
              <p className="text-gray-400 mb-4 line-clamp-2">{university.description}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(university)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(university._id)}
                  className="text-red-400 hover:text-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdminUniversities() {
  return (
    <ProtectedRoute adminOnly={true}>
      <DashboardLayout>
        <UniversitiesContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}
