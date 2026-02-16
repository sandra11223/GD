'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function PartnershipsContent() {
  const [partnerships, setPartnerships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartnerships();
  }, []);

  const fetchPartnerships = async () => {
    try {
      const { data } = await api.get('/partnerships/all');
      setPartnerships(data);
    } catch (error) {
      console.error('Error fetching partnerships:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/partnerships/${id}/approve`, { status });
      toast.success('Status updated successfully');
      fetchPartnerships();
    } catch (error) {
      toast.error('Update failed');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-dark-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-white">Partnership Applications</h1>

        <div className="space-y-4">
          {partnerships.map((partnership) => (
            <div key={partnership._id} className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{partnership.companyName}</h3>
                  <p className="text-sm text-gray-400">
                    Contact: {partnership.contactPerson}
                  </p>
                  <p className="text-sm text-gray-400">
                    Email: {partnership.email} | Phone: {partnership.phone}
                  </p>
                  <p className="text-sm text-gray-400">
                    Country: {partnership.country}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  partnership.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                  partnership.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {partnership.status}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-300">Partnership Type:</p>
                <p className="text-gray-400">{partnership.partnershipType}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-300">Description:</p>
                <p className="text-gray-400">{partnership.description}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Applied: {new Date(partnership.createdAt).toLocaleDateString()}
                </span>
                {partnership.status === 'pending' && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateStatus(partnership._id, 'approved')}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(partnership._id, 'rejected')}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdminPartnerships() {
  return (
    <ProtectedRoute adminOnly={true}>
      <DashboardLayout>
        <PartnershipsContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}
