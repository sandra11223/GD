'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import DashboardLayout from '../../components/DashboardLayout';
import api from '../../services/api';
import Link from 'next/link';

function AdminContent() {
  const [stats, setStats] = useState({
    courses: 0,
    universities: 0,
    services: 0,
    enrollments: 0,
    inquiries: 0,
    partnerships: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [courses, universities, services, enrollments, inquiries, partnerships] = await Promise.all([
        api.get('/courses'),
        api.get('/universities'),
        api.get('/services'),
        api.get('/enrollments/all'),
        api.get('/inquiries/all'),
        api.get('/partnerships/all')
      ]);

      setStats({
        courses: courses.data.length,
        universities: universities.data.length,
        services: services.data.length,
        enrollments: enrollments.data.length,
        inquiries: inquiries.data.length,
        partnerships: partnerships.data.length
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
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
        <h1 className="text-3xl font-bold mb-8 text-white">Admin Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Total Courses</h3>
            <p className="text-4xl font-bold text-primary">{stats.courses}</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Total Universities</h3>
            <p className="text-4xl font-bold text-primary">{stats.universities}</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Total Services</h3>
            <p className="text-4xl font-bold text-primary">{stats.services}</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Total Enrollments</h3>
            <p className="text-4xl font-bold text-green-400">{stats.enrollments}</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Total Inquiries</h3>
            <p className="text-4xl font-bold text-blue-400">{stats.inquiries}</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Partnership Applications</h3>
            <p className="text-4xl font-bold text-purple-400">{stats.partnerships}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/courses" className="card hover:bg-dark-700 transition-colors">
            <div className="text-4xl mb-2">📚</div>
            <h3 className="text-xl font-semibold text-white">Manage Courses</h3>
            <p className="text-gray-400 text-sm">Add, edit, or delete courses</p>
          </Link>

          <Link href="/admin/universities" className="card hover:bg-dark-700 transition-colors">
            <div className="text-4xl mb-2">🎓</div>
            <h3 className="text-xl font-semibold text-white">Manage Universities</h3>
            <p className="text-gray-400 text-sm">Add, edit, or delete universities</p>
          </Link>

          <Link href="/admin/services" className="card hover:bg-dark-700 transition-colors">
            <div className="text-4xl mb-2">⚙️</div>
            <h3 className="text-xl font-semibold text-white">Manage Services</h3>
            <p className="text-gray-400 text-sm">Add, edit, or delete services</p>
          </Link>

          <Link href="/admin/enrollments" className="card hover:bg-dark-700 transition-colors">
            <div className="text-4xl mb-2">📝</div>
            <h3 className="text-xl font-semibold text-white">View Enrollments</h3>
            <p className="text-gray-400 text-sm">Manage student enrollments</p>
          </Link>

          <Link href="/admin/inquiries" className="card hover:bg-dark-700 transition-colors">
            <div className="text-4xl mb-2">💬</div>
            <h3 className="text-xl font-semibold text-white">View Inquiries</h3>
            <p className="text-gray-400 text-sm">Manage user inquiries</p>
          </Link>

          <Link href="/admin/partnerships" className="card hover:bg-dark-700 transition-colors">
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="text-xl font-semibold text-white">Partnership Applications</h3>
            <p className="text-gray-400 text-sm">Review and approve partnerships</p>
          </Link>

          <Link href="/admin/subscribers" className="card hover:bg-dark-700 transition-colors">
            <div className="text-4xl mb-2">📧</div>
            <h3 className="text-xl font-semibold text-white">Newsletter Subscribers</h3>
            <p className="text-gray-400 text-sm">View and manage subscribers</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <ProtectedRoute adminOnly={true}>
      <DashboardLayout>
        <AdminContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}
