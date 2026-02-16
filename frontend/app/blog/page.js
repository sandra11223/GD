'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Blog() {
  const [articles] = useState([
    {
      id: 1,
      title: "Top 10 Universities for International Students in 2024",
      excerpt: "Discover the best universities worldwide offering exceptional programs for international students, including scholarship opportunities and B2B partnership benefits.",
      category: "Education Trends",
      date: "2024-01-15",
      image: "🎓",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Successful B2B Education Partnerships",
      excerpt: "Learn how educational institutions can create strategic partnerships that drive growth, enhance student outcomes, and expand global reach.",
      category: "Partnership Case Studies",
      date: "2024-01-10",
      image: "🤝",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "ROI of Corporate Training Programs: A Complete Guide",
      excerpt: "Understand how to measure and maximize the return on investment for corporate skill development programs and bulk enrollment strategies.",
      category: "Business Insights",
      date: "2024-01-05",
      image: "📊",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Visa Support Services for Group Applications",
      excerpt: "Navigate the complexities of group visa applications for educational institutions with our comprehensive guide and B2B support services.",
      category: "Visa & Immigration",
      date: "2023-12-28",
      image: "✈️",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Scholarship Partnerships: Creating Win-Win Opportunities",
      excerpt: "Explore how universities and corporate partners can collaborate on scholarship programs that benefit students and strengthen institutional relationships.",
      category: "Partnership Case Studies",
      date: "2023-12-20",
      image: "💰",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Digital Transformation in Higher Education",
      excerpt: "How technology is reshaping B2B education services, from online learning platforms to AI-powered student matching systems.",
      category: "Education Trends",
      date: "2023-12-15",
      image: "💻",
      readTime: "6 min read"
    }
  ]);

  const categories = ["All", "Education Trends", "Partnership Case Studies", "Business Insights", "Visa & Immigration"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div>
      {/* Hero Section - Green Theme */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-semibold">📚 Insights & Resources</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Blog & Resources</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            B2B articles on education trends, partnership case studies, and industry insights
          </p>
        </div>
      </section>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-medium hover:border-primary-300 transition-all group cursor-pointer flex flex-col h-full">
                  <div className="p-8 flex flex-col flex-1">
                    <div className="text-6xl mb-6 text-center">{article.image}</div>
                    <div className="mb-4">
                      <span className="text-xs px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-700 transition-colors leading-tight flex-shrink-0">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-gray-100 mt-auto">
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Link href={`/blog/${article.id}`} className="mt-4 inline-flex items-center text-primary-700 hover:text-primary-800 transition-colors text-sm font-semibold">
                      Read More 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Downloadable Resources Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                  RESOURCES
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Downloadable Resources</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Essential tools and guides for educational partnerships
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8 hover:shadow-medium hover:border-primary-300 transition-all group">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <div className="text-5xl mr-6 flex-shrink-0">📄</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">B2B Partnership Guide</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Complete whitepaper on establishing successful education partnerships
                        </p>
                      </div>
                    </div>
                    <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-auto">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8 hover:shadow-medium hover:border-primary-300 transition-all group">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <div className="text-5xl mr-6 flex-shrink-0">📊</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">ROI Calculator</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Calculate the return on investment for corporate training programs
                        </p>
                      </div>
                    </div>
                    <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-auto">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Tool
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8 hover:shadow-medium hover:border-primary-300 transition-all group">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <div className="text-5xl mr-6 flex-shrink-0">🎯</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">University Selection Matrix</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Comprehensive guide for matching students with partner universities
                        </p>
                      </div>
                    </div>
                    <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-auto">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Guide
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8 hover:shadow-medium hover:border-primary-300 transition-all group">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <div className="text-5xl mr-6 flex-shrink-0">📋</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">Visa Application Checklist</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Step-by-step checklist for group visa applications
                        </p>
                      </div>
                    </div>
                    <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-auto">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Checklist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
