import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'campus', 'events', 'facilities', 'students']

  // University-specific Unsplash images
  const galleryImages = [
    {
      id: 1,
      category: 'campus',
      title: 'Main Campus Building',
      description: 'Our state-of-the-art main building',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 2,
      category: 'events',
      title: 'Annual Tech Fest',
      description: 'Students showcasing innovation',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 3,
      category: 'facilities',
      title: 'Modern Library',
      description: 'Extensive collection of resources',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 4,
      category: 'students',
      title: 'Student Life',
      description: 'Vibrant campus community',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 5,
      category: 'campus',
      title: 'Sports Complex',
      description: 'World-class athletic facilities',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 6,
      category: 'events',
      title: 'Cultural Festival',
      description: 'Celebrating diversity',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 7,
      category: 'facilities',
      title: 'Research Labs',
      description: 'Cutting-edge laboratories',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 8,
      category: 'students',
      title: 'Graduation Day',
      description: 'Celebrating success',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 9,
      category: 'campus',
      title: 'Auditorium',
      description: 'Modern event space',
      image: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 10,
      category: 'facilities',
      title: 'Computer Lab',
      description: 'Advanced technology hub',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 11,
      category: 'events',
      title: 'Seminar Series',
      description: 'Industry expert talks',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 12,
      category: 'students',
      title: 'Study Groups',
      description: 'Collaborative learning',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80'
    }
  ]

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Campus Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful campus, vibrant events, and state-of-the-art facilities
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold capitalize transition-all ${
                filter === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer group"
              >
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg bg-gray-100">
                  {/* actual image */}
                  <img
                    src={image.image}
                    alt={image.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = `https://picsum.photos/800/600?random=${image.id}`
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* dark overlay on hover for readability */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for enlarged image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X size={32} />
                </button>
                
                <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden bg-gray-900">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = `https://picsum.photos/1200/800?random=${selectedImage.id}`
                    }}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-bold text-2xl mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {selectedImage.description}
                    </p>
                    <span className="inline-block mt-3 px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm capitalize">
                      {selectedImage.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Gallery
