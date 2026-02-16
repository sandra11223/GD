export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-semibold">🌟 Established 2015 • Trusted Globally</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">About Global Education Council</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Empowering institutions worldwide with quality education partnerships and opportunities since 2015
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">8+</div>
              <div className="text-sm text-green-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">200+</div>
              <div className="text-sm text-green-100">Partner Universities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-green-100">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">10K+</div>
              <div className="text-sm text-green-100">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          {/* Our Mission with Image */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  OUR MISSION
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Bridging Global Education Gaps</h2>
                <p className="text-gray-400 mb-4 leading-relaxed text-lg">
                  Global Education Council is dedicated to bridging the gap between educational institutions and world-class partnership opportunities. We provide comprehensive B2B support for organizations seeking to expand their global reach through strategic collaborations.
                </p>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  Our platform connects universities, colleges, and training organizations with international partners, offering skill development programs, overseas education consulting, and admission support services tailored for institutional growth.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
                    <div className="text-3xl font-bold text-primary mb-1">98%</div>
                    <div className="text-sm text-gray-400">Partner Satisfaction</div>
                  </div>
                  <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
                    <div className="text-3xl font-bold text-secondary mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Support Available</div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800" 
                    alt="Our Mission"
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do with Image */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" 
                    alt="What We Do"
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                </div>
              </div>
              <div>
                <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
                  WHAT WE DO
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">Comprehensive B2B Education Solutions</h2>
                <ul className="space-y-5">
                  <li className="flex items-start group">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-lg">Expert B2B Guidance</h4>
                      <p className="text-gray-400">Provide expert B2B guidance for overseas education partnerships and institutional collaborations</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-lg">Scalable Skill Development</h4>
                      <p className="text-gray-400">Offer scalable skill development courses aligned with corporate and institutional needs</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-lg">Bulk Application Processing</h4>
                      <p className="text-gray-400">Facilitate bulk university applications and group admission processes</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-lg">Global Partnerships</h4>
                      <p className="text-gray-400">Partner with leading educational institutions worldwide for mutual growth</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-lg">Certification Programs</h4>
                      <p className="text-gray-400">Issue globally recognized certifications and manage B2B training programs</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                WHY CHOOSE US
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Sets Us Apart</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                We combine expertise, technology, and dedication to deliver exceptional results for our partners
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card text-center group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Expert Team</h3>
                <p className="text-gray-400 leading-relaxed">Experienced B2B consultants with deep industry knowledge providing personalized institutional guidance and support</p>
              </div>
              <div className="card text-center group hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Global Network</h3>
                <p className="text-gray-400 leading-relaxed">Strategic partnerships with 200+ top-ranked universities across 50+ countries worldwide</p>
              </div>
              <div className="card text-center group hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Proven Track Record</h3>
                <p className="text-gray-400 leading-relaxed">Thousands of successful B2B partnerships and institutional placements with 98% satisfaction rate</p>
              </div>
              <div className="card text-center group hover:border-success/50 hover:shadow-lg hover:shadow-success/10 transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">End-to-End Support</h3>
                <p className="text-gray-400 leading-relaxed">Complete assistance from partnership setup to ongoing collaboration with 24/7 dedicated support</p>
              </div>
            </div>
          </div>

          {/* Our Values with Image */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="inline-block px-4 py-2 bg-success/10 text-success rounded-full text-sm font-semibold mb-4">
                  OUR VALUES
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">Guided by Core Principles</h2>
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 text-xl">Excellence</h3>
                      <p className="text-gray-400 leading-relaxed">We strive for excellence in every partnership and service we deliver, maintaining the highest standards of quality</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 text-xl">Integrity</h3>
                      <p className="text-gray-400 leading-relaxed">Building trust through transparent and ethical business practices in all our partnerships and operations</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 text-xl">Innovation</h3>
                      <p className="text-gray-400 leading-relaxed">Continuously evolving our services and technology to meet changing market needs and exceed expectations</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 text-xl">Global Impact</h3>
                      <p className="text-gray-400 leading-relaxed">Creating meaningful connections that transform education worldwide and empower institutions globally</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800" 
                    alt="Our Values"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
