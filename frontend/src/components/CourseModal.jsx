import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, Calendar, DollarSign, BookOpen, Award, Users } from 'lucide-react'

const CourseModal = ({ course, onClose, onApply }) => {
  if (!course) return null

  const handleApplyClick = () => {
    if (onApply) {
      onApply(course)
    }
    onClose()
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X size={24} className="text-gray-700" />
          </button>

          {/* Header Image */}
          <div className="relative h-64 overflow-hidden rounded-t-2xl">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3 ${course.categoryColor} text-white`}>
                {course.category}
              </span>
              <h2 className="text-4xl font-bold text-white mb-2">{course.title}</h2>
              <p className="text-white/90 text-lg">{course.subtitle}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-xl">
                <Clock className="text-blue-600 mb-2" size={24} />
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-bold text-gray-900">{course.duration}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <Calendar className="text-purple-600 mb-2" size={24} />
                <p className="text-sm text-gray-600">Start Date</p>
                <p className="font-bold text-gray-900">{course.startDate}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <DollarSign className="text-green-600 mb-2" size={24} />
                <p className="text-sm text-gray-600">Annual Fee</p>
                <p className="font-bold text-gray-900">{course.fees}</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl">
                <Users className="text-orange-600 mb-2" size={24} />
                <p className="text-sm text-gray-600">Seats</p>
                <p className="font-bold text-gray-900">{course.seats}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Program</h3>
              <p className="text-gray-700 leading-relaxed">{course.description}</p>
            </div>

            {/* Key Highlights */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="text-primary-600" size={28} />
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {course.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary-600" />
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="text-primary-600" size={28} />
                Core Subjects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.subjects.map((subject, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-800">{subject}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div className="mb-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Eligibility Criteria</h4>
              <p className="text-gray-700">{course.eligibility}</p>
            </div>

            {/* Fee Breakdown */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fee Structure</h3>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl">
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <span className="text-gray-700">Tuition Fee</span>
                    <span className="font-bold text-gray-900">{course.tuitionFee}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <span className="text-gray-700">Other Fees</span>
                    <span className="font-bold text-gray-900">{course.otherFees}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-lg font-bold text-gray-900">Total Annual Fee</span>
                    <span className="text-2xl font-bold text-primary-600">{course.fees}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                * Scholarships available for eligible students. EMI options available.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleApplyClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Apply Now for {course.title}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all"
              >
                Browse More Courses
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CourseModal
