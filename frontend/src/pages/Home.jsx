import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Users, Award, TrendingUp, ChevronRight, CheckCircle, GraduationCap, Clock, DollarSign, Download, Filter } from 'lucide-react'
import CourseModal from '../components/CourseModal'
import FeeRangeModal from '../components/FeeRangeModal'
import ApplicationModal from '../components/ApplicationModal'
import Toast from '../components/Toast'
import axios from 'axios'

const Home = () => {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showFeeModal, setShowFeeModal] = useState(false)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [applicationCourse, setApplicationCourse] = useState(null)
  const [toast, setToast] = useState(null)

  const showToast = (type, message) => {
    setToast({ type, message })
  }

  const closeToast = () => {
    setToast(null)
  }

  const handleApplyCourse = (course) => {
    setApplicationCourse(course)
    setShowApplicationModal(true)
  }

  const handleApplicationSuccess = () => {
    showToast('success', '✨ Application submitted successfully! Check your email for confirmation.')
  }

  const handleBrochureDownload = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await axios.get(`${apiUrl}/api/brochure`, { responseType: 'blob' })
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'College_Brochure_2026.pdf')
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch (error) {
      console.error('Failed to download brochure:', error)
      alert('Failed to download brochure. Please try again.')
    }
  }
  
  const features = [
    {
      icon: BookOpen,
      title: 'Expert Faculty',
      description: 'Learn from industry experts and experienced professors',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Join a diverse community of students from around the world',
      color: 'bg-purple-500'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Nationally accredited programs with industry partnerships',
      color: 'bg-green-500'
    },
    {
      icon: TrendingUp,
      title: 'Career Success',
      description: '95% placement rate with top companies globally',
      color: 'bg-orange-500'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Students' },
    { number: '500+', label: 'Faculty Members' },
    { number: '100+', label: 'Programs' },
    { number: '95%', label: 'Placement Rate' }
  ]

  const programs = [
    {
      title: 'Computer Science & IT',
      description: 'Master cutting-edge technologies and programming',
      image: '🖥️'
    },
    {
      title: 'Business & Management',
      description: 'Develop leadership and entrepreneurial skills',
      image: '💼'
    },
    {
      title: 'Engineering',
      description: 'Innovate and solve real-world problems',
      image: '⚙️'
    },
    {
      title: 'Arts & Design',
      description: 'Express creativity through various mediums',
      image: '🎨'
    }
  ]

  // Indian Courses with Fee Structure in INR
  const courses = [
    {
      id: 1,
      title: 'B.Tech Computer Science',
      subtitle: 'Bachelor of Technology in Computer Science & Engineering',
      category: 'Engineering',
      categoryColor: 'bg-blue-600',
      duration: '4 Years',
      startDate: 'August 2026',
      fees: '₹2,50,000',
      tuitionFee: '₹2,20,000',
      otherFees: '₹30,000',
      seats: '120',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80',
      description: 'AICTE approved B.Tech program with specialization in AI, Machine Learning, Cloud Computing and IoT. Affiliated with top Indian universities with excellent placement record.',
      highlights: [
        'AICTE & UGC approved curriculum',
        'State-of-the-art labs with latest technology',
        'Internship with TCS, Infosys, Wipro, Amazon India',
        'Faculty from IITs, NITs and industry experts',
        'Tie-ups with Microsoft, Google, IBM for certifications'
      ],
      subjects: [
        'Data Structures & Algorithms',
        'Artificial Intelligence & ML',
        'Cloud Computing & DevOps',
        'Full Stack Web Development',
        'Android & iOS Development',
        'Cyber Security & Ethical Hacking',
        'Database Management Systems',
        'Software Engineering & Testing'
      ],
      eligibility: 'Minimum 60% in Class 12th (PCM). Valid JEE Main/State CET score required.'
    },
    {
      id: 2,
      title: 'MBA (Master of Business Administration)',
      subtitle: 'Post Graduate Diploma in Management',
      category: 'Management',
      categoryColor: 'bg-purple-600',
      duration: '2 Years',
      startDate: 'July 2026',
      fees: '₹3,50,000',
      tuitionFee: '₹3,00,000',
      otherFees: '₹50,000',
      seats: '100',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80',
      description: 'AICTE approved MBA program with specializations in Finance, Marketing, HR, and Operations. Strong industry interface with top Indian corporates.',
      highlights: [
        'AICTE approved & NBA accredited',
        'Industry internships with Fortune 500 companies',
        'Live projects with TCS, Wipro, HDFC',
        'Dedicated placement cell - 95% placement record',
        'Guest lectures by industry leaders and CEOs'
      ],
      subjects: [
        'Strategic Management',
        'Financial Management & Analysis',
        'Marketing Management',
        'Operations & Supply Chain',
        'Business Analytics & Big Data',
        'Entrepreneurship Development',
        'International Business',
        'Leadership & Organizational Behavior'
      ],
      eligibility: 'Graduate degree with minimum 50%. Valid CAT/MAT/XAT/CMAT score required.'
    },
    {
      id: 3,
      title: 'B.Sc (Hons) Data Science',
      subtitle: 'Bachelor of Science in Data Science & Analytics',
      category: 'Science',
      categoryColor: 'bg-green-600',
      duration: '3 Years',
      startDate: 'August 2026',
      fees: '₹1,80,000',
      tuitionFee: '₹1,55,000',
      otherFees: '₹25,000',
      seats: '80',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
      description: 'UGC approved program focusing on Data Science, Machine Learning, and Big Data Analytics. Industry-aligned curriculum with hands-on training.',
      highlights: [
        'Industry certification from IBM & Microsoft',
        'Live projects on real datasets',
        'Internship with analytics firms',
        'Access to high-performance computing',
        'Placement assistance with IT & analytics companies'
      ],
      subjects: [
        'Statistics & Probability',
        'Machine Learning & AI',
        'Big Data & Hadoop',
        'Data Visualization with Tableau/PowerBI',
        'Python & R Programming',
        'Deep Learning & Neural Networks',
        'Natural Language Processing',
        'Business Intelligence & Analytics'
      ],
      eligibility: 'Minimum 55% in Class 12th with Mathematics. PCM/PCB students eligible.'
    },
    {
      id: 4,
      title: 'B.Des (Bachelor of Design)',
      subtitle: 'Graphic Design & Visual Communication',
      category: 'Design',
      categoryColor: 'bg-pink-600',
      duration: '4 Years',
      startDate: 'August 2026',
      fees: '₹2,20,000',
      tuitionFee: '₹1,90,000',
      otherFees: '₹30,000',
      seats: '60',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80',
      description: 'UGC approved B.Des program offering specialization in UI/UX, Graphic Design, and Digital Media. Focus on creativity and industry-ready skills.',
      highlights: [
        'Industry-standard Adobe Creative Suite labs',
        'Portfolio development and showcase',
        'Internships with Leo Burnett, Ogilvy, WPP',
        'Annual design exhibitions and competitions',
        'International design school collaborations'
      ],
      subjects: [
        'Typography & Layout Design',
        'UI/UX & Interaction Design',
        'Brand Identity & Corporate Design',
        'Digital Illustration & Animation',
        'Motion Graphics & Video Editing',
        'Web & Mobile App Design',
        'Packaging & Print Design',
        'Design Thinking & Innovation'
      ],
      eligibility: 'Minimum 50% in Class 12th (any stream). Portfolio submission and design aptitude test required.'
    },
    {
      id: 5,
      title: 'B.Com (Hons) with CA',
      subtitle: 'Bachelor of Commerce - Accounting & Finance',
      category: 'Commerce',
      categoryColor: 'bg-orange-600',
      duration: '3 Years',
      startDate: 'August 2026',
      fees: '₹1,20,000',
      tuitionFee: '₹1,00,000',
      otherFees: '₹20,000',
      seats: '150',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&q=80',
      description: 'UGC approved B.Com program with CA foundation coaching. Prepares students for CA, CS, CMA and other professional certifications.',
      highlights: [
        'CA Foundation coaching included',
        'Tally, SAP & GST Practitioner certification',
        'Industrial training with Big 4 firms',
        'Guest lectures by Chartered Accountants',
        'Research opportunities in taxation & finance'
      ],
      subjects: [
        'Financial Accounting & Auditing',
        'Corporate Finance & Investment',
        'Direct & Indirect Taxation',
        'Cost & Management Accounting',
        'Business Law & Corporate Law',
        'Microeconomics & Macroeconomics',
        'Banking & Insurance',
        'GST & Indian Taxation System'
      ],
      eligibility: 'Minimum 50% in Class 12th with Commerce/Maths. Entrance test may be conducted.'
    },
    {
      id: 6,
      title: 'BA (Hons) Psychology',
      subtitle: 'Bachelor of Arts in Psychology & Counseling',
      category: 'Arts',
      categoryColor: 'bg-indigo-600',
      duration: '3 Years',
      startDate: 'August 2026',
      fees: '₹1,50,000',
      tuitionFee: '₹1,30,000',
      otherFees: '₹20,000',
      seats: '100',
      image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&h=600&fit=crop&q=80',
      description: 'UGC approved BA Psychology program with focus on clinical, counseling, and applied psychology. Prepares students for NET, M.Phil and clinical practice.',
      highlights: [
        'Clinical psychology lab & counseling center',
        'Research publications in peer-reviewed journals',
        'Internship at NIMHANS, mental health NGOs',
        'Workshops by renowned clinical psychologists',
        'NET/SET coaching and M.Phil pathway'
      ],
      subjects: [
        'Cognitive & Behavioral Psychology',
        'Social & Cultural Psychology',
        'Developmental Psychology',
        'Abnormal Psychology & Psychopathology',
        'Research Methodology & Statistics',
        'Counseling & Psychotherapy',
        'Organizational & Industrial Psychology',
        'Indian Psychology & Philosophy'
      ],
      eligibility: 'Minimum 50% in Class 12th (any stream). Personal interview and aptitude test required.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero background image from Unsplash with fallback */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop&q=80"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&h=900&fit=crop&q=80'
            }}
            referrerPolicy="no-referrer"
            alt="College campus"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* subtle color overlay to keep text legible */}

          {/* Decorative animated shapes (kept but subtle over image) */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 20, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-12 left-12 w-44 h-44 bg-primary-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, -20, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute bottom-12 right-12 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow"
            >
              Shape Your Future at
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-300">
                College of Excellence
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            >
              Discover world-class education, innovative programs, and endless opportunities
              to achieve your dreams.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-700 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  Apply Now
                  <ChevronRight size={20} />
                </motion.button>
              </Link>
              <motion.button
                onClick={handleBrochureDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Download Brochure
              </motion.button>
              <Link to="/gallery">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary-700 transition-all"
                >
                  Explore Campus
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience excellence in education with our world-class facilities and programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of programs designed to shape future leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="text-6xl mb-4">{program.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <button className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <ChevronRight size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Courses Section with Fees */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Discover detailed programs with transparent fee structure and comprehensive curriculum
            </p>
            
            {/* Fee Filter Button */}
            <motion.button
              onClick={() => setShowFeeModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Filter size={20} />
              Check Courses by Fees
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedCourse(course)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold text-white ${course.categoryColor}`}>
                    {course.category}
                  </span>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.subtitle}
                  </p>

                  {/* Quick Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock size={16} className="text-primary-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <DollarSign size={16} className="text-green-600" />
                      <span className="font-bold text-green-600">{course.fees}/year</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <GraduationCap size={16} className="text-orange-600" />
                      <span>{course.seats} seats available</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                    View Details & Apply
                    <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Courses Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-full font-bold text-lg hover:bg-primary-600 hover:text-white transition-all shadow-lg"
              >
                Explore All 100+ Programs
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who chose excellence.
              Your future starts here.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-700 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Apply for Admission
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Course Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onApply={handleApplyCourse}
        />
      )}

      {/* Fee Range Modal */}
      <FeeRangeModal
        isOpen={showFeeModal}
        onClose={() => setShowFeeModal(false)}
        courses={courses}
        onSelectCourse={(course) => setSelectedCourse(course)}
      />

      {/* Application Modal */}
      <ApplicationModal
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        selectedCourse={applicationCourse}
        onSuccess={handleApplicationSuccess}
      />

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </div>
  )
}

export default Home
