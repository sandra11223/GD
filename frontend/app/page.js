import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern Minimalist Design */}
      <section className="relative pt-40 pb-28 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                <span className="text-sm font-medium text-primary-900">Trusted by 500+ Educational Institutions</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Education
                <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Through Global Partnerships
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Connect your institution with 200+ universities worldwide. Build strategic B2B partnerships for overseas education and skill development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link href="/register" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                Get Started Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-primary-300 hover:bg-gray-50 transition-all">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">200+</div>
                <div className="text-sm text-gray-600 font-medium">Partner Universities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-sm text-gray-600 font-medium">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">10K+</div>
                <div className="text-sm text-gray-600 font-medium">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-sm text-gray-600 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Card Design */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                OUR SERVICES
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive B2B Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored services for educational institutions seeking global partnerships and growth opportunities
              </p>
            </div>

            {/* Services Grid - Horizontal Cards */}
            <div className="space-y-6">
              {/* Service 1 - Overseas Education Consulting */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-0 items-stretch">
                  {/* Image Section */}
                  <div className="md:w-80 h-64 md:h-auto flex-shrink-0 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" 
                      alt="Overseas Education Consulting"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Overseas Education Consulting</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Expert B2B consulting services for international education partnerships, visa support for groups, and scholarship collaborations.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Group Visa Processing</span>
                      <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Scholarship Programs</span>
                      <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Country Guidance</span>
                    </div>
                    <div>
                      <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg">
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2 - Skill Development Programs */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col md:flex-row-reverse gap-0 items-stretch">
                  {/* Image Section */}
                  <div className="md:w-80 h-64 md:h-auto flex-shrink-0 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                      alt="Skill Development Programs"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Skill Development Programs</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Scalable corporate training programs with customizable duration, difficulty levels, and ROI-focused curriculum design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-accent-50 text-accent-700 rounded-lg text-sm font-medium">Custom Training</span>
                      <span className="px-3 py-1 bg-accent-50 text-accent-700 rounded-lg text-sm font-medium">Flexible Scheduling</span>
                      <span className="px-3 py-1 bg-accent-50 text-accent-700 rounded-lg text-sm font-medium">Certifications</span>
                    </div>
                    <div>
                      <Link href="/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white rounded-xl font-semibold hover:bg-accent-700 transition-all shadow-md hover:shadow-lg">
                        View Courses
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 3 - University Partnership Programs */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-0 items-stretch">
                  {/* Image Section */}
                  <div className="md:w-80 h-64 md:h-auto flex-shrink-0 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80" 
                      alt="University Partnership Programs"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">University Partnership Programs</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Access our comprehensive database of 200+ partner universities with advanced filters for country, program type, and rankings.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">B2B Affiliations</span>
                      <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Bulk Enrollment</span>
                      <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">Partnership Managers</span>
                    </div>
                    <div>
                      <Link href="/universities" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg">
                        View Partners
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-info mb-4">SUCCESS STORIES</span>
            <h2 className="section-title">Trusted by Leading Institutions</h2>
            <p className="section-subtitle">
              Hear from our partners about their success stories and transformative experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <div className="card hover-lift p-8 flex flex-col h-full">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4 border-2 border-primary-200">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200" 
                    alt="Dr. Michael Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-base mb-1">Dr. Michael Chen</h4>
                  <p className="text-sm text-primary-700 font-medium mb-0.5">Partnership Coordinator</p>
                  <p className="text-xs text-gray-500">Tech University, Singapore</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
                  "Global Education Council helped us establish partnerships with 15+ international universities, expanding our student exchange programs significantly. Their B2B approach and dedicated support made the entire process seamless."
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                <span>Partnership Since 2021</span>
                <span className="text-primary-700 font-semibold">15+ Partnerships</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card hover-lift p-8 flex flex-col h-full">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4 border-2 border-accent-200">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200" 
                    alt="Sarah Williams"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-base mb-1">Sarah Williams</h4>
                  <p className="text-sm text-accent-700 font-medium mb-0.5">Director of Programs</p>
                  <p className="text-xs text-gray-500">Business Institute, London</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
                  "Their B2B skill development courses have been instrumental in upskilling our corporate clients. The ROI-focused approach and scalability options perfectly align with our business model. Excellent partnership!"
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                <span>Partnership Since 2020</span>
                <span className="text-accent-700 font-semibold">500+ Students Trained</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="card hover-lift p-8 flex flex-col h-full">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4 border-2 border-primary-200">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" 
                    alt="Rajesh Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-base mb-1">Rajesh Kumar</h4>
                  <p className="text-sm text-primary-700 font-medium mb-0.5">CEO & Founder</p>
                  <p className="text-xs text-gray-500">Training Academy, Mumbai</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
                  "The visa support and group consultation services streamlined our international student placement process. Their expertise in B2B partnerships has been invaluable for our growth. Highly recommended!"
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                <span>Partnership Since 2019</span>
                <span className="text-primary-700 font-semibold">1000+ Placements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-success mb-4">WHY CHOOSE US</span>
            <h2 className="section-title">Why Partner With Us?</h2>
            <p className="section-subtitle">
              We provide comprehensive support and proven strategies to help your institution thrive globally
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="card hover-lift p-8 flex flex-col h-full">
              <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center mb-6 mx-auto flex-shrink-0">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-center flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-3 text-gray-900 font-display">Strategic Partnerships</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  Build long-term B2B relationships with global education leaders
                </p>
                <ul className="space-y-2 text-xs text-gray-500 text-left bg-gray-50 rounded-lg p-4">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Dedicated account managers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Regular partnership reviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Growth strategy planning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card hover-lift p-8 flex flex-col h-full">
              <div className="w-16 h-16 rounded-xl bg-accent-100 flex items-center justify-center mb-6 mx-auto flex-shrink-0">
                <svg className="w-8 h-8 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-center flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-3 text-gray-900 font-display">Scalable Solutions</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  Programs designed for institutional growth with flexible options
                </p>
                <ul className="space-y-2 text-xs text-gray-500 text-left bg-gray-50 rounded-lg p-4">
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Flexible pricing models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Volume-based discounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Custom program design</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card hover-lift p-8 flex flex-col h-full">
              <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center mb-6 mx-auto flex-shrink-0">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-center flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-3 text-gray-900 font-display">Clear ROI Metrics</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  Business-focused solutions with transparent reporting
                </p>
                <ul className="space-y-2 text-xs text-gray-500 text-left bg-gray-50 rounded-lg p-4">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Performance dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Monthly analytics reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Success tracking tools</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="card hover-lift p-8 flex flex-col h-full">
              <div className="w-16 h-16 rounded-xl bg-accent-100 flex items-center justify-center mb-6 mx-auto flex-shrink-0">
                <svg className="w-8 h-8 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-center flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-3 text-gray-900 font-display">End-to-End Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  Complete assistance from setup to ongoing collaboration
                </p>
                <ul className="space-y-2 text-xs text-gray-500 text-left bg-gray-50 rounded-lg p-4">
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Training & onboarding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Marketing assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 shadow-soft mb-6">
              <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">Join 500+ Partner Institutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-900 leading-tight">
              Ready to Expand Your <span className="gradient-text">Global Reach?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join our network of educational institutions and corporate partners. Start building meaningful international collaborations today.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/register" className="btn-primary text-lg px-8 py-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Become a Partner
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Consultation
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free consultation
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                24/7 support
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
