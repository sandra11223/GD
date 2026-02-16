'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import DashboardLayout from '../../../components/DashboardLayout';
import api from '../../../services/api';
import { toast } from 'react-toastify';

function InquiriesContent() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const { data } = await api.get('/inquiries/all');
      setInquiries(data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/inquiries/${id}`, { status });
      toast.success('Status updated successfully');
      fetchInquiries();
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
        <h1 className="text-3xl font-bold mb-8 text-white">Manage Inquiries</h1>

        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <div key={inquiry._id} className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{inquiry.subject}</h3>
                  <p className="text-sm text-gray-400">
                    From: {inquiry.name} ({inquiry.email})
                  </p>
                  <p className="text-sm text-gray-400">Phone: {inquiry.phone}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  inquiry.status === 'resolved' ? 'bg-green-500/20 text-green-400' :
                  inquiry.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {inquiry.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">{inquiry.message}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(inquiry.createdAt).toLocaleDateString()}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateStatus(inquiry._id, 'in-progress')}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    In Progress
                  </button>
                  <button
                    onClick={() => updateStatus(inquiry._id, 'resolved')}
                    className="text-green-400 hover:text-green-300 text-sm"
                  >
                    Resolve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdminInquiries() {
  return (
    <ProtectedRoute adminOnly={true}>
      <DashboardLayout>
        <InquiriesContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}
