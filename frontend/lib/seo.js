// SEO Configuration for Global Education Council B2B Platform

export const siteConfig = {
  name: 'Global Education Council',
  description: 'Leading B2B education platform connecting institutions worldwide with strategic partnerships, courses, and certification programs.',
  url: 'https://globaleducationcouncil.com',
  ogImage: 'https://globaleducationcouncil.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/globaleducouncil',
    linkedin: 'https://linkedin.com/company/global-education-council',
  },
  keywords: [
    'B2B education platform',
    'educational partnerships',
    'university partnerships',
    'global education network',
    'institutional collaboration',
    'education consulting',
    'overseas education',
    'skill development programs',
    'certification programs',
    'education technology',
    'academic partnerships',
    'international education',
  ],
};

export const generateMetadata = (page) => {
  const pages = {
    home: {
      title: 'Global Education Council - B2B Education Platform & Partnerships',
      description: 'Transform education through global partnerships. Connect with 500+ institutions across 50+ countries. B2B solutions for universities, colleges, and training organizations.',
      keywords: 'B2B education platform, educational partnerships, university partnerships, global education network',
      canonical: '/',
    },
    services: {
      title: 'B2B Education Services - Global Education Council',
      description: 'Comprehensive B2B education services including overseas education consulting, skill development programs, bulk applications, and institutional partnerships.',
      keywords: 'B2B education services, education consulting, institutional services, overseas education',
      canonical: '/services',
    },
    courses: {
      title: 'Professional Courses & Training Programs - Global Education Council',
      description: 'Explore professional courses and skill development programs designed for institutional partnerships. Industry-recognized certifications and training solutions.',
      keywords: 'professional courses, skill development, training programs, certification courses',
      canonical: '/courses',
    },
    universities: {
      title: 'Partner Universities & Institutions - Global Education Council',
      description: 'Connect with 200+ partner universities across 50+ countries. Explore global education opportunities and institutional collaborations.',
      keywords: 'partner universities, global universities, international institutions, education partnerships',
      canonical: '/universities',
    },
    partnerships: {
      title: 'Strategic Partnerships - Global Education Council',
      description: 'Build strategic partnerships with leading educational institutions worldwide. Join our network of 500+ partners for mutual growth.',
      keywords: 'strategic partnerships, education partnerships, institutional collaboration, B2B partnerships',
      canonical: '/partnerships',
    },
    contact: {
      title: 'Contact Us - Global Education Council',
      description: 'Get in touch with our B2B education team. Contact us for partnerships, inquiries, and institutional collaboration opportunities.',
      keywords: 'contact education council, B2B inquiries, partnership inquiries',
      canonical: '/contact',
    },
    about: {
      title: 'About Us - Global Education Council',
      description: 'Leading B2B education platform since 2015. Empowering institutions worldwide with quality education partnerships and opportunities.',
      keywords: 'about global education council, education platform, B2B education company',
      canonical: '/about',
    },
    blog: {
      title: 'Education Insights & Resources - Global Education Council Blog',
      description: 'Latest insights, trends, and resources in global education, partnerships, and institutional collaboration.',
      keywords: 'education blog, education insights, industry trends, education resources',
      canonical: '/blog',
    },
  };

  return pages[page] || pages.home;
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Global Education Council',
  description: 'Leading B2B education platform connecting institutions worldwide with strategic partnerships, courses, and certification programs.',
  url: 'https://globaleducationcouncil.com',
  logo: 'https://globaleducationcouncil.com/logo.png',
  foundingDate: '2015',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Education Street',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-234-567-8900',
    contactType: 'Customer Service',
    email: 'info@globaleducation.com',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://twitter.com/globaleducouncil',
    'https://linkedin.com/company/global-education-council',
    'https://facebook.com/globaleducouncil',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '500',
  },
};

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://globaleducationcouncil.com${item.path}`,
  })),
});

export const serviceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.type,
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Global Education Council',
  },
  areaServed: 'Worldwide',
  description: service.description,
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
  },
});

export const courseSchema = (course) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.title,
  description: course.description,
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Global Education Council',
  },
  courseCode: course.category,
  educationalLevel: course.level,
  timeRequired: course.duration,
  offers: {
    '@type': 'Offer',
    price: course.price,
    priceCurrency: 'USD',
  },
});

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
