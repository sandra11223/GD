﻿'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { organizationSchema, breadcrumbSchema } from '../lib/seo';

export default function Home() {
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: 'Home', path: '/' }])
          ),
        }}
      />
      
      <div className="min-h-screen puzzle-bg-dark pt-16">
        {/* Hero Section - Puzzle-Inspired Design */}
        <section className="relative min-h-[100vh] flex items-center overflow-hidden puzzle-bg">
          {/* Large Background Image - More Visible */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80" 
              alt="Students collaborating in modern learning environment"
              className="w-full h-full object-cover animate-elasticScale"
              style={{opacity: 0.15}}
            />
            {/* Puzzle-style Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729]/95 via-[#1a1f35]/90 to-[#0f1729]/85"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/90 via-transparent to-transparent"></div>
          </div>

          {/* Animated Tech Grid */}
          <div className="absolute inset-0 z-10 opacity-20" style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}></div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-60"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-500 rounded-full animate-float animation-delay-1000 opacity-40"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-float animation-delay-2000 opacity-50"></div>
            <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-float animation-delay-3000 opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-12 relative z-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="max-w-2xl">
                {/* Animated Badge */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6 animate-blurToFocus">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Trusted by 500+ Institutions Worldwide</span>
                </div>
                
                {/* Hero Title with Advanced Animation */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                  <div className="overflow-hidden mb-2">
                    <span className="block text-white animate-smoothSlideFade" style={{animationDelay: '0.1s'}}>
                      Building Bridges to
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="block animate-smoothSlideFade" style={{
                      animationDelay: '0.3s',
                      color: '#00a67d',
                      textShadow: '0 0 30px rgba(0, 217, 163, 0.6), 0 0 60px rgba(0, 217, 163, 0.3)'
                    }}>
                      Global Education
                    </span>
                  </div>
                </h1>
                
                {/* Description with Stagger Animation */}
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed animate-smoothSlideFade" style={{animationDelay: '0.5s'}}>
                  Empowering institutions with <span className="text-emerald-400 font-semibold">world-class partnerships</span>, innovative skill development programs, and comprehensive global education solutions.
                </p>
                
                {/* CTA Buttons with Fintech Effects */}
                <div className="flex flex-wrap gap-4 animate-smoothSlideFade" style={{animationDelay: '0.6s'}}>
                  <Link href="/register" className="btn-magnetic group relative px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-500/50">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/about" className="ripple-effect px-8 py-4 bg-white/5 text-emerald-400 font-bold rounded-xl border-2 border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all hover:scale-105">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Right Column - Feature Image with Simple Animation */}
              <div className="hidden lg:block relative">
                <div className="relative animate-slideFromRight" style={{animationDelay: '0.7s'}}>
                  <div className="overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                      alt="Students in collaborative learning"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Services - Puzzle-Inspired Design */}
        <section className="py-16 puzzle-section relative">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-12" data-animate="fade-up">
              <div className="puzzle-label mb-4">What We Offer</div>
              <h2 className="puzzle-heading">
                <span className="puzzle-gradient-text">Our Services</span>
              </h2>
              <p className="puzzle-text max-w-2xl mx-auto">
                Empowering institutions with world-class services and partnerships
              </p>
            </div>
            
            {/* Feature Grid - Puzzle Style */}
            <div className="puzzle-feature-grid">
              {[
                { 
                  icon: '🔒', 
                  title: 'Immutable', 
                  subtitle: 'Append-Only Data',
                  desc: 'Connect with 500+ universities across 50+ countries',
                },
                { 
                  icon: '🤖', 
                  title: 'Advancements', 
                  subtitle: 'in AI',
                  desc: 'Industry-recognized certification programs',
                },
                { 
                  icon: '💾', 
                  title: 'Multi-basis', 
                  subtitle: 'Accounting Model',
                  desc: 'End-to-end application assistance',
                },
                { 
                  icon: '☁️', 
                  title: 'Real-time', 
                  subtitle: 'APIs',
                  desc: 'Expert immigration guidance',
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  data-animate="fade-up" 
                  data-delay={index * 100}
                  className={`puzzle-feature-item ${index % 2 === 0 ? 'card-slide-left' : 'card-slide-right'} delay-${(index + 1) * 100}`}
                >
                  <div className="puzzle-icon-card puzzle-glow h-full flex flex-col">
                    <div className="puzzle-icon puzzle-float">
                      {feature.icon}
                    </div>
                    <h3>{feature.title}</h3>
                    <p className="puzzle-label mb-2">{feature.subtitle}</p>
                    <p className="puzzle-text text-sm flex-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12" data-animate="fade-up" data-delay="400">
              <button className="puzzle-btn-primary">
                <span>Get Started</span>
              </button>
            </div>
          </div>

          {/* Puzzle Divider */}
          <div className="puzzle-divider mt-12"></div>
        </section>

        {/* Featured Solutions - Minimal Cards with Images */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-950 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-12" data-animate="fade-up">
              <div className="text-xs font-medium text-emerald-400 tracking-wide uppercase mb-4">Featured Solutions</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Everything You Need
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  img: 'photo-1488190211105-8b0e65b80b4e',
                  title: 'Overseas Education',
                  desc: 'Expert guidance for international partnerships',
                  link: '/contact',
                  details: {
                    features: [
                      'Connect with 500+ universities worldwide',
                      'Personalized university matching',
                      'Application process support',
                      'Visa assistance and guidance'
                    ],
                    stats: [
                      { label: 'Partner Universities', value: '500+' },
                      { label: 'Countries', value: '50+' },
                      { label: 'Success Rate', value: '98%' }
                    ]
                  }
                },
                {
                  img: 'photo-1522202176988-66273c2fd55f',
                  title: 'Skill Development',
                  desc: 'Industry-recognized certifications',
                  link: '/courses',
                  details: {
                    features: [
                      'Industry-recognized certification programs',
                      'Expert-led training courses',
                      'Flexible learning schedules',
                      'Career advancement support'
                    ],
                    stats: [
                      { label: 'Courses Available', value: '200+' },
                      { label: 'Certified Students', value: '10K+' },
                      { label: 'Industry Partners', value: '100+' }
                    ]
                  }
                },
                {
                  img: 'photo-1541339907198-e08756dedf3f',
                  title: 'University Network',
                  desc: 'Access to 500+ partner institutions',
                  link: '/universities',
                  details: {
                    features: [
                      'Global network of top universities',
                      'Diverse program offerings',
                      'Scholarship opportunities',
                      'Direct admission pathways'
                    ],
                    stats: [
                      { label: 'Universities', value: '500+' },
                      { label: 'Programs', value: '5000+' },
                      { label: 'Placements', value: '15K+' }
                    ]
                  }
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  data-animate="fade-up" 
                  data-delay={index * 150}
                  className={`flex ${index === 0 ? 'card-slide-left delay-100' : index === 1 ? 'card-slide-up delay-200' : 'card-slide-right delay-300'}`}
                >
                  <div className="group w-full">
                    <div className="card-lift bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-56 overflow-hidden bg-gray-900 image-zoom flex-shrink-0">
                        <img 
                          src={`https://images.unsplash.com/${service.img}?w=600&q=80`}
                          alt={service.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                        <p className="text-sm text-gray-400 mb-4 flex-1">{service.desc}</p>
                        
                        {/* Expandable Details */}
                        {expandedCard === index && (
                          <div className="mb-4 pt-4 border-t border-emerald-500/20 animate-fadeIn">
                            {/* Features List */}
                            <div className="mb-4">
                              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Key Features
                              </h4>
                              <div className="space-y-2">
                                {service.details.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-start gap-2 text-xs">
                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0 mt-1.5"></div>
                                    <p className="text-gray-300">{feature}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-2 mb-4">
                              {service.details.stats.map((stat, idx) => (
                                <div key={idx} className="text-center p-2 bg-emerald-500/5 rounded-lg">
                                  <div className="text-lg font-bold text-emerald-400 mb-1">
                                    {stat.value}
                                  </div>
                                  <div className="text-xs text-gray-400">{stat.label}</div>
                                </div>
                              ))}
                            </div>

                            {/* CTA Button */}
                            <Link 
                              href={service.link}
                              className="block w-full px-4 py-2 bg-emerald-500 text-black text-sm font-bold rounded-lg hover:bg-emerald-400 transition-all text-center"
                            >
                              Explore {service.title}
                            </Link>
                          </div>
                        )}

                        <button
                          onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                          className="flex items-center text-emerald-400 text-sm font-medium link-animated mt-auto hover:text-emerald-300 transition-colors"
                        >
                          <span>{expandedCard === index ? 'Show Less' : 'Learn More'}</span>
                          <svg 
                            className={`w-4 h-4 ml-2 transition-transform ${expandedCard === index ? 'rotate-180' : 'group-hover:translate-x-1'}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            {expandedCard === index ? (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            )}
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Fintech Stats */}
        <section className="py-16 bg-black relative gradient-bg-animated">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-12" data-animate="fade-up">
              <div className="text-xs font-medium text-emerald-400 tracking-wide uppercase mb-4">Why Choose Us</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Trusted by Institutions Worldwide
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { number: '86%', title: 'Lower Fees', desc: 'Cost savings on partnerships', icon: '💰' },
                { number: '24/7', title: 'Support', desc: 'Round-the-clock assistance', icon: '🛟' },
                { number: '500+', title: 'Partners', desc: 'Global university network', icon: '🌐' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  data-animate="scale" 
                  data-delay={index * 100}
                  className={`flex ${index === 0 ? 'card-slide-left delay-100' : index === 1 ? 'card-zoom-in delay-200' : 'card-slide-right delay-300'}`}
                >
                  <div className="gradient-border w-full">
                    <div className="fintech-card bg-black/90 h-full flex flex-col">
                      <div className="icon-bounce text-3xl mb-4">{item.icon}</div>
                      <div className="number-transition text-5xl font-bold text-emerald-400 mb-3">{item.number}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400 flex-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Clean and Minimal */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-950 relative">
          {/* Animated Section Divider */}
          <div className="section-divider mb-16"></div>
          
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center" data-animate="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                Join hundreds of institutions already benefiting from our global network
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/register" className="btn-premium px-8 py-4 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all">
                  Get Started Today
                </Link>
                <Link href="/contact" className="btn-premium px-8 py-4 bg-transparent text-emerald-400 font-semibold rounded-lg border border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
