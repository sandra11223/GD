'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ml-auto" style={{maxWidth: '95%'}}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-600 rounded-lg flex items-center justify-center shadow-soft group-hover:shadow-green transition-all duration-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <span className="text-xl font-bold font-display text-gray-900 hidden sm:block">
              Global Education Council
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
              About
            </Link>
            <Link href="/services" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
              Services
            </Link>
            <Link href="/courses" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
              Courses
            </Link>
            <Link href="/universities" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
              Universities
            </Link>
            <Link href="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
              Blog
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
              Contact
            </Link>
            
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            
            {user ? (
              <>
                <Link href="/dashboard" className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-lg transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Dashboard</span>
                </Link>
                {user.role === 'admin' && (
                  <Link href="/admin" className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-accent-600 bg-accent-50 hover:bg-accent-100 rounded-lg transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span>Admin</span>
                  </Link>
                )}
                <button onClick={logout} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                  Login
                </Link>
                <Link href="/register" className="btn-primary text-sm">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fadeInUp">
            <div className="space-y-1">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
                Services
              </Link>
              <Link href="/courses" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
                Courses
              </Link>
              <Link href="/universities" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
                Universities
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
                Blog
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-all">
                Contact
              </Link>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                {user ? (
                  <>
                    <Link href="/dashboard" className="flex items-center space-x-2 px-3 py-2 text-base font-semibold text-primary-700 bg-primary-50 rounded-lg mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>Dashboard</span>
                    </Link>
                    {user.role === 'admin' && (
                      <Link href="/admin" className="flex items-center space-x-2 px-3 py-2 text-base font-semibold text-accent-600 bg-accent-50 rounded-lg mb-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>Admin</span>
                      </Link>
                    )}
                    <button onClick={logout} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg mb-2 transition-all">
                      Login
                    </Link>
                    <Link href="/register" className="block btn-primary text-center">
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
