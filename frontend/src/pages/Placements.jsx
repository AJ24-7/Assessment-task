import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Building2, 
  Users, 
  Award, 
  Briefcase, 
  Target,
  ChevronRight,
  Calendar,
  MapPin,
  DollarSign,
  CheckCircle,
  Star
} from 'lucide-react'

const Placements = () => {
  const [activeTab, setActiveTab] = useState('highlights')

  // Placement Statistics
  const stats = [
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      value: '95%', 
      label: 'Placement Rate',
      color: 'bg-green-500'
    },
    { 
      icon: <DollarSign className="w-8 h-8" />, 
      value: '₹18 LPA', 
      label: 'Highest Package',
      color: 'bg-blue-500'
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      value: '₹6.5 LPA', 
      label: 'Average Package',
      color: 'bg-purple-500'
    },
    { 
      icon: <Building2 className="w-8 h-8" />, 
      value: '150+', 
      label: 'Companies Visited',
      color: 'bg-orange-500'
    },
  ]

  // Top Recruiters
  const topRecruiters = [
    {
      name: 'Tata Consultancy Services',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop',
      packages: '₹3.5 - ₹7 LPA',
      roles: 'Software Engineer, Data Analyst'
    },
    {
      name: 'Infosys',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop',
      packages: '₹3.6 - ₹6.5 LPA',
      roles: 'System Engineer, Consultant'
    },
    {
      name: 'Wipro',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop',
      packages: '₹3.5 - ₹6 LPA',
      roles: 'Project Engineer, Developer'
    },
    {
      name: 'Cognizant',
      logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=100&fit=crop',
      packages: '₹4 - ₹7.5 LPA',
      roles: 'GenC, Programmer Analyst'
    },
    {
      name: 'Amazon',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop',
      packages: '₹12 - ₹18 LPA',
      roles: 'SDE I, SDE II'
    },
    {
      name: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=200&h=100&fit=crop',
      packages: '₹14 - ₹18 LPA',
      roles: 'Software Engineer'
    },
    {
      name: 'Accenture',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop',
      packages: '₹4.5 - ₹8 LPA',
      roles: 'Application Development'
    },
    {
      name: 'Deloitte',
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=100&fit=crop',
      packages: '₹6 - ₹10 LPA',
      roles: 'Business Analyst, Consultant'
    },
  ]

  // Student Success Stories
  const successStories = [
    {
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      company: 'Amazon',
      package: '₹18 LPA',
      role: 'SDE I',
      course: 'B.Tech CSE',
      year: '2024',
      testimonial: 'The rigorous training and placement support helped me land my dream job at Amazon. The mock interviews were particularly helpful.'
    },
    {
      name: 'Rahul Verma',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      company: 'Microsoft',
      package: '₹16 LPA',
      role: 'Software Engineer',
      course: 'B.Tech IT',
      year: '2024',
      testimonial: 'College provided excellent coding culture and mentorship. The placement cell was very supportive throughout the process.'
    },
    {
      name: 'Ananya Patel',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      company: 'Deloitte',
      package: '₹10 LPA',
      role: 'Business Analyst',
      course: 'MBA',
      year: '2024',
      testimonial: 'The industry connections and real-world projects prepared me well for corporate challenges. Grateful for the opportunities.'
    },
    {
      name: 'Arjun Singh',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      company: 'TCS',
      package: '₹7 LPA',
      role: 'Digital Analyst',
      course: 'B.Tech ECE',
      year: '2024',
      testimonial: 'From technical workshops to soft skills training, the college ensured holistic development for placements.'
    },
  ]

  // Upcoming Placement Drives
  const upcomingDrives = [
    {
      company: 'Google',
      logo: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=200&h=100&fit=crop',
      date: 'Nov 25, 2025',
      roles: ['SWE Intern', 'STEP Intern'],
      eligibility: 'B.Tech CSE/IT (2026 Batch)',
      package: '₹15-20 LPA',
      status: 'Registrations Open'
    },
    {
      company: 'Adobe',
      logo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200&h=100&fit=crop',
      date: 'Dec 5, 2025',
      roles: ['Software Engineer', 'UI/UX Developer'],
      eligibility: 'All Branches (2026 Batch)',
      package: '₹12-18 LPA',
      status: 'Upcoming'
    },
    {
      company: 'Goldman Sachs',
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=100&fit=crop',
      date: 'Dec 15, 2025',
      roles: ['Analyst', 'Associate'],
      eligibility: 'B.Tech/MBA (2026 Batch)',
      package: '₹18-25 LPA',
      status: 'Upcoming'
    },
    {
      company: 'Flipkart',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop',
      date: 'Jan 10, 2026',
      roles: ['SDE 1', 'Product Manager'],
      eligibility: 'B.Tech All (2026 Batch)',
      package: '₹10-15 LPA',
      status: 'Upcoming'
    },
  ]

  // Tied-up Companies
  const tiedUpCompanies = [
    {
      name: 'Tech Giants',
      companies: [
        { name: 'Google', logo: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=150&h=150&fit=crop' },
        { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=150&h=150&fit=crop' },
        { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=150&h=150&fit=crop' },
        { name: 'Meta', logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=150&h=150&fit=crop' },
      ]
    },
    {
      name: 'IT Services',
      companies: [
        { name: 'TCS', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=150&fit=crop' },
        { name: 'Infosys', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop' },
        { name: 'Wipro', logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&h=150&fit=crop' },
        { name: 'HCL', logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=150&h=150&fit=crop' },
      ]
    },
    {
      name: 'Consulting',
      companies: [
        { name: 'Deloitte', logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=150&h=150&fit=crop' },
        { name: 'PwC', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop' },
        { name: 'EY', logo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=150&h=150&fit=crop' },
        { name: 'KPMG', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=150&fit=crop' },
      ]
    },
    {
      name: 'Finance & Banking',
      companies: [
        { name: 'ICICI Bank', logo: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=150&h=150&fit=crop' },
        { name: 'HDFC Bank', logo: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=150&h=150&fit=crop' },
        { name: 'Axis Bank', logo: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=150&h=150&fit=crop' },
        { name: 'Goldman Sachs', logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=150&h=150&fit=crop' },
      ]
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Award className="w-16 h-16" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Placements & Career Growth
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Empowering Students with World-Class Career Opportunities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-2xl font-bold">95%</span>
                <span className="text-sm ml-2">Placement Rate</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-2xl font-bold">150+</span>
                <span className="text-sm ml-2">Companies</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-2xl font-bold">₹18 LPA</span>
                <span className="text-sm ml-2">Highest Package</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`${stat.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {['highlights', 'recruiters', 'stories', 'drives', 'partners'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Tab */}
      {activeTab === 'highlights' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-center mb-12">Placement Highlights 2024</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop" 
                    alt="Placement ceremony"
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-primary-600">Record-Breaking Year</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Highest package of ₹18 LPA by Amazon</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">95% students placed in top companies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Average package increased to ₹6.5 LPA</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">150+ companies participated in campus recruitment</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                    alt="Training session"
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-primary-600">Placement Support</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Target className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Industry-expert led training programs</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Mock interviews and aptitude tests</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Soft skills and communication workshops</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Resume building and LinkedIn profile optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Top Recruiters Tab */}
      {activeTab === 'recruiters' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-4xl font-bold text-center mb-4">Top Recruiters</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Leading companies from various sectors trust our students for their talent and dedication
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topRecruiters.map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                  >
                    <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-3 text-gray-900">{company.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <DollarSign className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{company.packages}</span>
                        </div>
                        <div className="flex items-start">
                          <Briefcase className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{company.roles}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Success Stories Tab */}
      {activeTab === 'stories' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-4xl font-bold text-center mb-4">Student Success Stories</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Hear from our alumni who are now thriving in their dream careers
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {successStories.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                  >
                    <div className="flex items-center p-6 bg-gradient-to-r from-primary-50 to-purple-50">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="font-bold text-xl text-gray-900">{story.name}</h3>
                        <p className="text-sm text-gray-600">{story.course} | Class of {story.year}</p>
                      </div>
                      <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4 pb-4 border-b">
                        <div>
                          <p className="text-sm text-gray-600">Company</p>
                          <p className="font-bold text-lg text-primary-600">{story.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Package</p>
                          <p className="font-bold text-lg text-green-600">{story.package}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">Role</p>
                        <p className="font-semibold text-gray-800">{story.role}</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700 italic">"{story.testimonial}"</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Upcoming Drives Tab */}
      {activeTab === 'drives' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-4xl font-bold text-center mb-4">Upcoming Placement Drives</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Stay updated with the latest recruitment opportunities on campus
              </p>

              <div className="max-w-4xl mx-auto space-y-6">
                {upcomingDrives.map((drive, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-48 h-48 md:h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                        <img 
                          src={drive.logo} 
                          alt={drive.company}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{drive.company}</h3>
                            <div className="flex items-center text-gray-600 mb-2">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="font-semibold">{drive.date}</span>
                            </div>
                          </div>
                          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            drive.status === 'Registrations Open' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {drive.status}
                          </span>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Roles</p>
                            <div className="space-y-1">
                              {drive.roles.map((role, i) => (
                                <p key={i} className="text-sm font-semibold text-gray-800">{role}</p>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Package</p>
                            <p className="text-lg font-bold text-green-600">{drive.package}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Eligibility</p>
                            <p className="text-sm font-semibold text-gray-800">{drive.eligibility}</p>
                          </div>
                        </div>

                        {drive.status === 'Registrations Open' && (
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center"
                          >
                            Register Now
                            <ChevronRight className="w-5 h-5 ml-2" />
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Tied-up Partners Tab */}
      {activeTab === 'partners' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-4xl font-bold text-center mb-4">Our Recruitment Partners</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Strategic partnerships with industry leaders ensuring diverse career opportunities
              </p>

              <div className="space-y-12 max-w-6xl mx-auto">
                {tiedUpCompanies.map((category, catIndex) => (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Building2 className="w-6 h-6 mr-3 text-primary-600" />
                      {category.name}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {category.companies.map((company, compIndex) => (
                        <motion.div
                          key={compIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: compIndex * 0.05 }}
                          whileHover={{ y: -5, scale: 1.05 }}
                          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all cursor-pointer"
                        >
                          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center mb-3">
                            <img 
                              src={company.logo} 
                              alt={company.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <p className="text-center font-semibold text-gray-800">{company.name}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Join Our Placement Drive</h3>
                <p className="text-xl mb-6 text-white/90">
                  Interested in recruiting our talented students? Partner with us today!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Contact Placement Cell
                  <ChevronRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Placements
