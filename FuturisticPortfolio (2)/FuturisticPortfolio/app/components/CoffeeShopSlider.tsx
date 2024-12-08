'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { title: 'Amazon Website', description: 'For marketing products, like Amazon.', image: '/project-1.jpg' },
  { title: 'Uber App', description: 'Transportation App', image: '/project-2.jpg' },
  { title: 'Log.net', description: 'For money transactions and for buying log.', image: '/project-3.jpg' },
  { title: 'Food Website', description: 'For hotels and restaurants', image: '/project-4.jpg' },
  { title: 'TikTok Clone', description: 'App for entertainment', image: '/project-5.jpg' },
  { title: 'Hotel Website', description: 'For booking hotel rooms', image: '/project-6.jpg' },
]

export default function CoffeeShopSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="w-1/2 h-full"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="w-1/2 h-full bg-gray-900 flex items-center justify-center p-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">{projects[currentIndex].title}</h2>
            <p className="text-xl mb-8">{projects[currentIndex].description}</p>
            <button className="bg-[#00ff88] text-black px-6 py-2 rounded-full font-bold hover:bg-[#00cc6a] transition-colors">
              Learn More
            </button>
          </div>
        </div>
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

