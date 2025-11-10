import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, DollarSign, Filter, GraduationCap } from 'lucide-react';

const FeeRangeModal = ({ isOpen, onClose, courses, onSelectCourse }) => {
  const [minFee, setMinFee] = useState(0);
  const [maxFee, setMaxFee] = useState(500000);
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Extract fee value from string (₹2,50,000 -> 250000)
  const extractFeeValue = (feeString) => {
    return parseInt(feeString.replace(/[₹,]/g, ''));
  };

  // Get min and max fees from all courses
  const getMinMaxFees = () => {
    const fees = courses.map(course => extractFeeValue(course.fees));
    return {
      min: Math.min(...fees),
      max: Math.max(...fees)
    };
  };

  const { min: absoluteMin, max: absoluteMax } = getMinMaxFees();

  useEffect(() => {
    setMinFee(absoluteMin);
    setMaxFee(absoluteMax);
  }, [absoluteMin, absoluteMax]);

  // Filter courses based on fee range
  useEffect(() => {
    const filtered = courses.filter(course => {
      const courseFee = extractFeeValue(course.fees);
      return courseFee >= minFee && courseFee <= maxFee;
    });
    setFilteredCourses(filtered);
  }, [minFee, maxFee, courses]);

  const formatIndianCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
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
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/20 rounded-xl">
                <Filter size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Find Courses by Fee Range</h2>
                <p className="text-white/90 text-sm mt-1">
                  Adjust the slider to filter courses within your budget
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {/* Fee Range Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600 mb-1">Minimum Fee</p>
                  <p className="text-2xl font-bold text-primary-600">
                    {formatIndianCurrency(minFee)}
                  </p>
                </div>
                <div className="px-4">
                  <DollarSign className="text-gray-400" size={24} />
                </div>
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600 mb-1">Maximum Fee</p>
                  <p className="text-2xl font-bold text-secondary-600">
                    {formatIndianCurrency(maxFee)}
                  </p>
                </div>
              </div>

              {/* Dual Range Slider */}
              <div className="relative px-2">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full absolute"
                    style={{
                      left: `${((minFee - absoluteMin) / (absoluteMax - absoluteMin)) * 100}%`,
                      right: `${100 - ((maxFee - absoluteMin) / (absoluteMax - absoluteMin)) * 100}%`
                    }}
                  />
                </div>
                <input
                  type="range"
                  min={absoluteMin}
                  max={absoluteMax}
                  step="10000"
                  value={minFee}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value < maxFee - 20000) {
                      setMinFee(value);
                    }
                  }}
                  className="absolute w-full -top-1 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary-600 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-lg"
                />
                <input
                  type="range"
                  min={absoluteMin}
                  max={absoluteMax}
                  step="10000"
                  value={maxFee}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value > minFee + 20000) {
                      setMaxFee(value);
                    }
                  }}
                  className="absolute w-full -top-1 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-secondary-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-secondary-600 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-lg"
                />
              </div>
            </div>

            {/* Filtered Courses */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Courses in Your Budget
                </h3>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'}
                </span>
              </div>

              {filteredCourses.length === 0 ? (
                <div className="text-center py-12">
                  <GraduationCap className="mx-auto text-gray-300 mb-4" size={64} />
                  <p className="text-gray-500 text-lg">
                    No courses found in this fee range
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Try adjusting the slider to see more courses
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredCourses.map((course) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow cursor-pointer group"
                      onClick={() => {
                        onSelectCourse(course);
                        onClose();
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <span className={`inline-block ${course.categoryColor} text-white text-xs px-2 py-1 rounded-full mb-2`}>
                            {course.category}
                          </span>
                          <h4 className="font-bold text-gray-900 text-sm group-hover:text-primary-600 transition-colors">
                            {course.title}
                          </h4>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-semibold text-gray-900">{course.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Annual Fee:</span>
                          <span className="font-bold text-primary-600 text-lg">{course.fees}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Available Seats:</span>
                          <span className="font-semibold text-gray-900">{course.seats}</span>
                        </div>
                      </div>

                      <button className="w-full mt-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 rounded-lg font-semibold text-sm hover:shadow-md transition-all">
                        View Details
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FeeRangeModal;
