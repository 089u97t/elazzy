'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const images = ['/about-1.jpg', '/about-2.jpg', '/about-3.jpg']

export default function About() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        </ScrollReveal>
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
          <ScrollReveal delay={0.2} className="w-full lg:w-1/2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Hello, I'm IGBOAYAKA PAULINE. I'm at the cutting edge of design, merging creativity with futuristic technology to create groundbreaking web experiences and bring your dreams to reality.
              </p>
              <p className="text-lg leading-relaxed">
                I am a passionate full-stack developer with a keen eye for detail and a love for creating visually stunning and user-friendly websites. My technical skills include proficiency in HTML, CSS, JavaScript, and various frontend frameworks such as React and Vue.js. I also have experience with backend technologies like Node.js, Python, and databases like MongoDB and Django.
              </p>
              <button className="bg-[#00ff88] text-black px-6 py-2 rounded-full font-bold hover:bg-[#00cc6a] transition-colors">
                Contact Me
              </button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="w-full lg:w-1/2">
            <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="About Me"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

