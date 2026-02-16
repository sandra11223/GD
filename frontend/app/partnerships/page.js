'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Partnerships() {
  const [filters, setFilters] = useState({
    country: '',
    programType: '',
    ranking: ''
  });

  const partnershipTypes = [
    {
      title: 'University Partnerships',
      description: 'Connect with top-ranked universities worldwide for student placements and academic collaborations',
      icon: '🎓',
      benefits: ['Student Exchange Programs', 'Joint Degree Programs', 'Research Collaborations', 'Faculty Exchange']
    },
    {
      title: 'Corporate Training',
      description: 'Scalable skill development programs tailored for corporate workforce training',
      icon: '💼',
      benefits: ['Custom Training Modules', 'ROI-Focused Programs', 'Flexible Scheduling', 'Certification Programs']
    },
    {
      title: 'Education Consultancy',
      description: 'B2B consulting services for visa support, scholarship partnerships, and group placements',
      icon: '🌍',
      benefits: ['Visa Support Services', 'Scholarship Partnerships', 'Group Placement Assistance', 'Country-Specific Guidance']
    },
    {
      title: 'Recruitment Agency',
      description: 'Partner with us to streamline student recruitment and placement processes',
      icon: '🤝',
      benefits: ['Lead Generation', 'Application Processing', 'Document Verification', 'Commission Structure']
    }
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-semibold">🤝 B2B Partnership Models</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Partnership Opportunities</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Explore B2B partnership models designed for educational institutions and corporate partners
          </p>
        </div>
      </section>

      <div className="py-16 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Partnership Models</h2>
              <p className="text-gray-400">Choose the partnership type that aligns with your business goals</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="card group hover:border-primary/50">
                  <div className="flex items-start mb-4">
                    <div className="text-5xl mr-4">{type.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{type.title}</h3>
                      <p className="text-gray-400">{type.description}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-primary mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href="/dashboard/partnership" 
                    className="mt-6 inline-block text-primary hover:text-secondary transition-colors font-semibold"
                  >
                    Apply for Partnership →
                  </Link>
                </div>
              ))}
            </div>

            <div className="card mb-12">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Partner With Global Education Council?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-semibold text-primary mb-2">Clear ROI</h4>
                  <p className="text-gray-400 text-sm">Measurable returns on investment with transparent reporting and analytics</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold text-primary mb-2">Scalability</h4>
                  <p className="text-gray-400 text-sm">Flexible solutions that grow with your business needs</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🌐</div>
                  <h4 className="font-semibold text-primary mb-2">Global Reach</h4>
                  <p className="text-gray-400 text-sm">Access to 50+ countries and 200+ partner universities</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💡</div>
                  <h4 className="font-semibold text-primary mb-2">Expert Support</h4>
                  <p className="text-gray-400 text-sm">Dedicated account managers and 24/7 technical support</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔒</div>
                  <h4 className="font-semibold text-primary mb-2">Secure Platform</h4>
                  <p className="text-gray-400 text-sm">Enterprise-grade security and data protection</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📈</div>
                  <h4 className="font-semibold text-primary mb-2">Growth Tools</h4>
                  <p className="text-gray-400 text-sm">Marketing support and lead generation assistance</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-primary/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Become a Partner?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join our network of successful partners and unlock new business opportunities. Login to submit a detailed partnership application.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/register" className="btn-primary">
                  Register as Partner
                </Link>
                <Link href="/login" className="btn-secondary">
                  Login to Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
