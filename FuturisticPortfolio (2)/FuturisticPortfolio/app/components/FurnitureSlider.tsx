'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  { title: 'Graphic Design', description: 'Bringing out the best part of every image.' },
  { title: 'Holographic UI', description: 'Creating futuristic website designs.' },
  { title: 'Ghost Writing', description: 'Writing inspirational and professional books.' },
  { title: 'Book Editing', description: 'Proofreading and improving book content.' },
  { title: 'Responsive Website', description: 'Creating futuristic websites for various businesses and organizations.' },
  { title: 'Custom Apps', description: 'Mobile and web apps to address various needs and solve problems in our society.' },
]

export default function FurnitureSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="grid grid-cols-3 gap-4"
          initial={false}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="w-64 h-64 bg-gray-800 p-6 rounded-lg shadow-lg transform"
              style={{
                rotateY: '45deg',
                rotateX: '20deg',
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </div>
  )
}

