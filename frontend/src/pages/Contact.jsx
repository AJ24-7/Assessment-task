import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Download } from 'lucide-react'
import axios from 'axios'
import Toast from '../components/Toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    courseInterested: '',
    intakeYear: '',
    consent: false
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (type, message) => {
    setToast({ type, message })
  }

  const closeToast = () => {
    setToast(null)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Send to backend API which will forward to Pipedream
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await axios.post(`${apiUrl}/api/contact`, formData)
      
      if (response.data.success) {
        showToast('success', '✨ Application submitted successfully! We will contact you within 24-48 hours.')
        setStatus({
          type: 'success',
          message: 'Thank you! Your application has been submitted successfully. We will contact you soon.'
        })
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          state: '',
          courseInterested: '',
          intakeYear: '',
          consent: false
        })
      }
    } catch (error) {
      showToast('error', '❌ Failed to submit application. Please try again or contact us directly.')
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const courses = [
    'B.Tech Computer Science',
    'MBA (Master of Business Administration)',
    'B.Sc (Hons) Data Science',
    'B.Des (Bachelor of Design)',
    'B.Com (Hons) with CA',
    'BA (Hons) Psychology',
    'Other'
  ]

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Andaman and Nicobar Islands'
  ]

  const intakeYears = ['2026', '2027', '2028']

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Rajiv Gandhi Education City, Knowledge Park, New Delhi 110001',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 11 4567 8900',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'admissions@collegeofexcellence.edu.in',
      color: 'bg-purple-500'
    }
  ]

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
      showToast('success', '📥 Brochure downloaded successfully!')
    } catch (error) {
      showToast('error', 'Failed to download brochure. Please try again.')
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your journey? Fill out the form below and our admissions team will get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className={`${info.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                <info.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600">{info.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Application Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Amit Kumar Sharma"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="amit.sharma@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="9876543210"
                  />
                  <p className="text-xs text-gray-500 mt-1">Enter 10-digit mobile number</p>
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                    State *
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your state</option>
                    {indianStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="courseInterested" className="block text-sm font-semibold text-gray-700 mb-2">
                    Course Interested *
                  </label>
                  <select
                    id="courseInterested"
                    name="courseInterested"
                    value={formData.courseInterested}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="intakeYear" className="block text-sm font-semibold text-gray-700 mb-2">
                    Intake Year *
                  </label>
                  <select
                    id="intakeYear"
                    name="intakeYear"
                    value={formData.intakeYear}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select intake year</option>
                    {intakeYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Consent Checkbox */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700">
                      I consent to College of Excellence collecting and storing my personal information for admission purposes. I agree to receive communications regarding my application via email, phone, or SMS. *
                    </span>
                  </label>
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-start gap-3 ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-800'
                        : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="flex-shrink-0 mt-0.5" size={20} />
                    ) : (
                      <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
                    )}
                    <p className="text-sm">{status.message}</p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Why Apply Now?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Early bird discounts available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Limited seats in popular programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Scholarship opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Fast-track admission process</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={handleBrochureDownload}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 transition-colors"
                  >
                    <Download size={18} />
                    Download Brochure (PDF)
                  </button>
                </li>
                <li>
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                    → Admission Requirements
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                    → Tuition & Fees
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                    → Scholarship Information
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
