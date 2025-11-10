import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import apiClient from '../services/api';

const ApplicationModal = ({ isOpen, onClose, selectedCourse, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    courseInterested: '',
    intakeYear: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Update courseInterested when selectedCourse changes
  useEffect(() => {
    if (selectedCourse?.title) {
      setFormData(prev => ({
        ...prev,
        courseInterested: selectedCourse.title
      }));
    }
  }, [selectedCourse]);

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Andaman and Nicobar Islands'
  ];

  const intakeYears = ['2026', '2027', '2028'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Debug: Log form data with types
    console.log('📤 Submitting form data:', formData);
    console.log('📋 Field types:', {
      fullName: typeof formData.fullName,
      email: typeof formData.email,
      phone: typeof formData.phone,
      state: typeof formData.state,
      courseInterested: typeof formData.courseInterested,
      intakeYear: typeof formData.intakeYear,
      consent: typeof formData.consent,
      consentValue: formData.consent
    });

    try {
      const response = await apiClient.post('/api/contact', formData);
      
      if (response.data.success) {
        setStatus({
          type: 'success',
          message: 'Application submitted successfully! We will contact you within 24-48 hours.'
        });
        
        // Call success callback if provided
        if (onSuccess) {
          onSuccess();
        }

        // Reset form
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            state: '',
            courseInterested: selectedCourse?.title || '',
            intakeYear: '',
            consent: false
          });
          setStatus({ type: '', message: '' });
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Submission error:', error.response?.data || error);
      
      // Show detailed error message from backend
      let errorMessage = 'Failed to submit application. Please try again.';
      
      if (error.response?.data?.errors) {
        // Show validation errors
        const validationErrors = error.response.data.errors.map(err => err.message).join(', ');
        errorMessage = `Validation errors: ${validationErrors}`;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      
      setStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-2">Apply for Admission</h2>
            {selectedCourse && (
              <p className="text-white/90">
                {selectedCourse.title}
              </p>
            )}
          </div>

          {/* Form */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    placeholder="amit@example.com"
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
                  <p className="text-xs text-gray-500 mt-1">10-digit number</p>
                </div>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="courseInterested" className="block text-sm font-semibold text-gray-700 mb-2">
                    Course Interested *
                  </label>
                  <input
                    type="text"
                    id="courseInterested"
                    name="courseInterested"
                    value={formData.courseInterested}
                    onChange={handleChange}
                    required
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
                  />
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
                    <option value="">Select year</option>
                    {intakeYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
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
                    I consent to College of Excellence collecting and storing my personal information for admission purposes. I agree to receive communications regarding my application. *
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
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
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

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || status.type === 'success'}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : status.type === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Application Submitted!
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
      </motion.div>
    </AnimatePresence>
  );
};

export default ApplicationModal;
