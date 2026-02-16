require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./models/Course');
const University = require('./models/University');
const Service = require('./models/Service');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

const courses = [
  {
    title: "Business Management & Leadership",
    description: "Comprehensive program designed for corporate executives and managers. Learn strategic planning, team management, and organizational leadership with real-world case studies.",
    duration: "12 weeks",
    level: "Advanced",
    category: "Business",
    price: 2500,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    syllabus: ["Strategic Management", "Leadership Skills", "Financial Planning", "Team Building", "Change Management"],
    isActive: true
  },
  {
    title: "Data Science & Analytics",
    description: "Master data analysis, machine learning, and statistical modeling. Perfect for organizations looking to upskill their technical teams in data-driven decision making.",
    duration: "16 weeks",
    level: "Intermediate",
    category: "Technology",
    price: 3000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    syllabus: ["Python Programming", "Statistical Analysis", "Machine Learning", "Data Visualization", "Big Data"],
    isActive: true
  },
  {
    title: "Digital Marketing Mastery",
    description: "Complete digital marketing course covering SEO, social media, content marketing, and analytics. Ideal for marketing teams and business development professionals.",
    duration: "10 weeks",
    level: "Beginner",
    category: "Marketing",
    price: 1800,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    syllabus: ["SEO Fundamentals", "Social Media Marketing", "Content Strategy", "Email Marketing", "Analytics"],
    isActive: true
  },
  {
    title: "Project Management Professional (PMP)",
    description: "Industry-recognized certification preparation course. Learn project planning, execution, and delivery methodologies used by leading organizations worldwide.",
    duration: "8 weeks",
    level: "Intermediate",
    category: "Management",
    price: 2200,
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800",
    syllabus: ["Project Planning", "Risk Management", "Agile Methodologies", "Stakeholder Management", "Quality Control"],
    isActive: true
  },
  {
    title: "Cybersecurity Fundamentals",
    description: "Essential cybersecurity training for IT professionals and organizations. Learn to protect systems, networks, and data from cyber threats.",
    duration: "14 weeks",
    level: "Intermediate",
    category: "Technology",
    price: 2800,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    syllabus: ["Network Security", "Ethical Hacking", "Cryptography", "Security Policies", "Incident Response"],
    isActive: true
  },
  {
    title: "Financial Analysis & Investment",
    description: "Advanced financial modeling and investment analysis course. Perfect for finance professionals and corporate decision-makers.",
    duration: "12 weeks",
    level: "Advanced",
    category: "Finance",
    price: 3200,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
    syllabus: ["Financial Modeling", "Investment Analysis", "Portfolio Management", "Risk Assessment", "Corporate Finance"],
    isActive: true
  }
];

const universities = [
  {
    name: "Harvard University",
    country: "United States",
    city: "Cambridge, MA",
    description: "One of the world's most prestigious universities, Harvard offers exceptional programs across all disciplines. Strong B2B partnerships for executive education and research collaborations.",
    ranking: 1,
    website: "https://www.harvard.edu",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
    programs: ["Business Administration", "Law", "Medicine", "Engineering", "Computer Science"],
    tuitionFee: "$50,000 - $75,000/year",
    isActive: true
  },
  {
    name: "Stanford University",
    country: "United States",
    city: "Stanford, CA",
    description: "Leading institution in technology and innovation. Excellent partnerships for corporate training programs and technology transfer initiatives.",
    ranking: 2,
    website: "https://www.stanford.edu",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400",
    programs: ["Computer Science", "Engineering", "Business", "Medicine", "Law"],
    tuitionFee: "$55,000 - $80,000/year",
    isActive: true
  },
  {
    name: "University of Oxford",
    country: "United Kingdom",
    city: "Oxford",
    description: "Historic institution with cutting-edge research facilities. Strong B2B programs in executive education and international student exchanges.",
    ranking: 3,
    website: "https://www.ox.ac.uk",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400",
    programs: ["Philosophy", "Politics", "Economics", "Medicine", "Law"],
    tuitionFee: "£25,000 - £40,000/year",
    isActive: true
  },
  {
    name: "MIT (Massachusetts Institute of Technology)",
    country: "United States",
    city: "Cambridge, MA",
    description: "World leader in science and technology education. Exceptional corporate partnership programs and research collaboration opportunities.",
    ranking: 4,
    website: "https://www.mit.edu",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400",
    programs: ["Engineering", "Computer Science", "Physics", "Mathematics", "Business"],
    tuitionFee: "$53,000 - $77,000/year",
    isActive: true
  },
  {
    name: "University of Cambridge",
    country: "United Kingdom",
    city: "Cambridge",
    description: "Renowned for academic excellence and research innovation. Strong partnerships for group enrollments and scholarship programs.",
    ranking: 5,
    website: "https://www.cam.ac.uk",
    logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400",
    programs: ["Natural Sciences", "Engineering", "Medicine", "Law", "Business"],
    tuitionFee: "£24,000 - £38,000/year",
    isActive: true
  },
  {
    name: "National University of Singapore",
    country: "Singapore",
    city: "Singapore",
    description: "Asia's leading university with strong global partnerships. Excellent programs for international students and corporate training initiatives.",
    ranking: 11,
    website: "https://www.nus.edu.sg",
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400",
    programs: ["Engineering", "Business", "Computer Science", "Medicine", "Law"],
    tuitionFee: "S$30,000 - S$50,000/year",
    isActive: true
  }
];

const services = [
  {
    title: "Overseas Education Consulting",
    description: "Comprehensive B2B consulting services for educational institutions. We provide visa support for group applications, scholarship partnership coordination, and access to our searchable database of countries and regions with B2B opportunities.",
    icon: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
    features: [
      "Group visa application support",
      "Scholarship partnership coordination",
      "Country/region database with B2B angles",
      "Student placement services",
      "Pre-departure orientation programs"
    ],
    isActive: true
  },
  {
    title: "Corporate Skill Development",
    description: "Tailored training programs for businesses with flexible duration, scalability options, and clear ROI metrics. Our courses are designed specifically for corporate clients looking to upskill their workforce.",
    icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    features: [
      "Customizable program duration",
      "Scalable for teams of any size",
      "ROI-focused curriculum",
      "Industry-specific training modules",
      "Progress tracking and certification"
    ],
    isActive: true
  },
  {
    title: "University Partnership Programs",
    description: "Build strategic partnerships with leading universities worldwide. Access our database of partner institutions with detailed B2B affiliation information, bulk enrollment options, and collaborative program development.",
    icon: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
    features: [
      "Partner university database with filters",
      "Bulk enrollment management",
      "B2B affiliation details",
      "Joint program development",
      "Student exchange coordination"
    ],
    isActive: true
  },
  {
    title: "Admission Support Services",
    description: "End-to-end admission support for educational institutions and their students. From application preparation to acceptance, we handle the entire process with dedicated support teams.",
    icon: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    features: [
      "Application review and optimization",
      "Document preparation assistance",
      "Interview coaching",
      "Deadline management",
      "Post-admission support"
    ],
    isActive: true
  },
  {
    title: "Language Training Programs",
    description: "Professional language training solutions for international education preparation. IELTS, TOEFL, and other language proficiency programs designed for institutional partnerships.",
    icon: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800",
    features: [
      "IELTS and TOEFL preparation",
      "Business English courses",
      "Group training packages",
      "Online and in-person options",
      "Certified instructors"
    ],
    isActive: true
  },
  {
    title: "Career Counseling & Placement",
    description: "Professional career guidance and placement services for students and institutions. Connect with global employers and prepare students for international career opportunities.",
    icon: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800",
    features: [
      "Career assessment and planning",
      "Resume and portfolio development",
      "Interview preparation",
      "Employer networking events",
      "Job placement assistance"
    ],
    isActive: true
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Course.deleteMany({});
    await University.deleteMany({});
    await Service.deleteMany({});

    console.log('Existing data cleared');

    // Insert new data
    await Course.insertMany(courses);
    console.log('Courses seeded successfully');

    await University.insertMany(universities);
    console.log('Universities seeded successfully');

    await Service.insertMany(services);
    console.log('Services seeded successfully');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
