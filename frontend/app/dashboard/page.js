'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import DashboardLayout from '../../components/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import Link from 'next/link';

function DashboardContent() {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [partnerships, setPartnerships] = useState([]);
  const [courses, setCourses] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const [enrollmentsRes, inquiriesRes, partnershipsRes, coursesRes, universitiesRes, servicesRes] = await Promise.all([
        api.get('/enrollments'),
        api.get('/inquiries'),
        api.get('/partnerships'),
        api.get('/courses'),
        api.get('/universities'),
        api.get('/services')
      ]);
      setEnrollments(enrollmentsRes.data);
      setInquiries(inquiriesRes.data);
      setPartnerships(partnershipsRes.data);
      setCourses(coursesRes.data);
      setUniversities(universitiesRes.data);
      setServices(servicesRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
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

  const stats = [
    {
      title: 'Active Partnerships',
      value: partnerships.filter(p => p.status === 'approved').length,
      total: partnerships.length,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-primary-700 to-primary-600',
      bgColor: 'bg-primary-100',
      textColor: 'text-primary-700'
    },
    {
      title: 'Course Enrollments',
      value: enrollments.filter(e => e.status === 'approved').length,
      total: enrollments.length,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-accent-600 to-accent-500',
      bgColor: 'bg-accent-100',
      textColor: 'text-accent-700'
    },
    {
      title: 'Pending Inquiries',
      value: inquiries.filter(i => i.status === 'pending').length,
      total: inquiries.length,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      color: 'from-primary-600 to-primary-500',
      bgColor: 'bg-primary-50',
      textColor: 'text-primary-600'
    },
  ];

  // Get recent notifications
  const notifications = [
    ...partnerships.filter(p => p.status !== 'pending').slice(0, 2).map(p => ({
      type: 'partnership',
      message: `Partnership with ${p.companyName} has been ${p.status}`,
      time: new Date(p.updatedAt || p.createdAt).toLocaleDateString(),
      status: p.status
    })),
    ...inquiries.filter(i => i.status !== 'pending').slice(0, 2).map(i => ({
      type: 'inquiry',
      message: `Your inquiry "${i.subject}" is ${i.status}`,
      time: new Date(i.updatedAt || i.createdAt).toLocaleDateString(),
      status: i.status
    }))
  ].slice(0, 4);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header with User Profile */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2 gradient-text">
            Welcome back, {user?.name}
          </h1>
          <p className="text-gray-600 text-lg">Here&apos;s your personalized B2B dashboard overview</p>
        </div>
        <div className="rounded-xl bg-white border border-gray-200 shadow-soft p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-700 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-gray-900 font-semibold">{user?.name}</p>
              <p className="text-xs text-gray-600 capitalize">{user?.role} Account</p>
              {user?.companyName && (
                <p className="text-xs text-primary-700">{user.companyName}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      {notifications.length > 0 && (
        <div className="mb-8 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 p-4">
          <div className="flex items-center space-x-2 mb-3">
            <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <h3 className="text-gray-900 font-semibold">Recent Updates</h3>
          </div>
          <div className="space-y-2">
            {notifications.map((notif, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <p className="text-gray-700">{notif.message}</p>
                <span className="text-xs text-gray-500">{notif.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-soft p-6 hover:shadow-medium transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <div className={stat.textColor}>{stat.icon}</div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">of {stat.total} total</p>
              </div>
            </div>
            <h3 className="text-gray-700 font-semibold">{stat.title}</h3>
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
          </div>
        ))}
      </div>

      {/* Partnership Status & Inquiry Tracking */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Partnership Status */}
        <div className="rounded-xl bg-white border border-gray-200 shadow-soft p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Partnership Status
            </h2>
            <Link href="/dashboard/partnership" className="text-primary-700 hover:text-primary-800 text-sm font-semibold transition-colors">
              Apply →
            </Link>
          </div>
          {partnerships.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">No partnerships yet</p>
              <Link href="/dashboard/partnership" className="btn-primary inline-block text-sm">
                Apply for Partnership
              </Link>
            </div>
          ) : (
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {partnerships.map((partnership) => (
                <div key={partnership._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{partnership.companyName}</h3>
                    <p className="text-xs text-gray-600">{partnership.partnershipType}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    partnership.status === 'approved' ? 'bg-green-100 text-green-700' :
                    partnership.status === 'rejected' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {partnership.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Inquiry Tracking */}
        <div className="rounded-xl bg-white border border-gray-200 shadow-soft p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <svg className="w-5 h-5 mr-2 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Inquiry Tracking
            </h2>
            <Link href="/dashboard/inquiry" className="text-primary-700 hover:text-primary-800 text-sm font-semibold transition-colors">
              Submit →
            </Link>
          </div>
          {inquiries.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">No inquiries yet</p>
              <Link href="/dashboard/inquiry" className="btn-primary inline-block text-sm">
                Submit Inquiry
              </Link>
            </div>
          ) : (
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {inquiries.map((inquiry) => (
                <div key={inquiry._id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-accent-300 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-900 text-sm font-medium">{inquiry.subject}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      inquiry.status === 'resolved' ? 'bg-green-100 text-green-700' :
                      inquiry.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {inquiry.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{new Date(inquiry.createdAt).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recommended Partnerships & Tailored Recommendations */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended for Your Institution</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/courses" className="group rounded-xl bg-white border border-gray-200 shadow-soft p-6 hover:shadow-medium hover:border-primary-300 transition-all flex flex-col h-full">
            <div className="flex items-center space-x-4 flex-grow">
              <div className="p-3 rounded-lg bg-blue-100 flex-shrink-0">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">Browse Courses</h3>
                <p className="text-sm text-gray-600">{courses.length} courses available</p>
              </div>
            </div>
          </Link>

          <Link href="/universities" className="group rounded-xl bg-white border border-gray-200 shadow-soft p-6 hover:shadow-medium hover:border-accent-300 transition-all flex flex-col h-full">
            <div className="flex items-center space-x-4 flex-grow">
              <div className="p-3 rounded-lg bg-purple-100 flex-shrink-0">
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-accent-700 transition-colors">Partner Universities</h3>
                <p className="text-sm text-gray-600">{universities.length} partners worldwide</p>
              </div>
            </div>
          </Link>

          <Link href="/services" className="group rounded-xl bg-white border border-gray-200 shadow-soft p-6 hover:shadow-medium hover:border-primary-300 transition-all flex flex-col h-full">
            <div className="flex items-center space-x-4 flex-grow">
              <div className="p-3 rounded-lg bg-primary-100 flex-shrink-0">
                <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">B2B Services</h3>
                <p className="text-sm text-gray-600">{services.length} services offered</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Courses</h2>
          <Link href="/courses" className="text-primary-700 hover:text-primary-800 transition-colors text-sm font-semibold">
            View All Courses →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((course) => (
            <Link key={course._id} href="/courses" className="rounded-xl bg-white border border-gray-200 shadow-soft overflow-hidden hover:shadow-medium hover:border-primary-300 transition-all group flex flex-col h-full">
              {course.image && (
                <div className="h-48 overflow-hidden flex-shrink-0">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{course.level}</span>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">{course.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">{course.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                  <span className="text-xs text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                  {course.price > 0 && (
                    <span className="text-lg font-bold text-primary-700">${course.price}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Partner Universities */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Top Partner Universities</h2>
          <Link href="/universities" className="text-primary-700 hover:text-primary-800 transition-colors text-sm font-semibold">
            View All Universities →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {universities.slice(0, 3).map((university) => (
            <Link key={university._id} href="/universities" className="rounded-xl bg-white border border-gray-200 shadow-soft overflow-hidden hover:shadow-medium hover:border-accent-300 transition-all group flex flex-col h-full">
              {university.logo && (
                <div className="h-40 overflow-hidden bg-gray-50 flex items-center justify-center p-4 flex-shrink-0">
                  <img 
                    src={university.logo} 
                    alt={university.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-accent-700 transition-colors">{university.name}</h3>
                <p className="text-sm text-gray-600 mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {university.city}, {university.country}
                </p>
                {university.ranking && (
                  <span className="inline-block text-xs px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full mb-3 font-medium">
                    🏆 World Ranking: #{university.ranking}
                  </span>
                )}
                <p className="text-sm text-gray-600 line-clamp-2 flex-grow">{university.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* B2B Services */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Our B2B Services</h2>
          <Link href="/services" className="text-primary-700 hover:text-primary-800 transition-colors text-sm font-semibold">
            View All Services →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.slice(0, 2).map((service) => (
            <Link key={service._id} href="/services" className="rounded-xl bg-white border border-gray-200 shadow-soft overflow-hidden hover:shadow-medium hover:border-primary-300 transition-all group flex flex-col h-full">
              {service.icon && (
                <div className="h-48 overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 flex-shrink-0">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">{service.description}</p>
                {service.features && service.features.length > 0 && (
                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <h4 className="text-xs font-semibold text-gray-700 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start">
                          <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}
