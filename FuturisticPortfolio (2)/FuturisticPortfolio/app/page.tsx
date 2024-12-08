'use client'

import { useEffect, useState } from 'react'
import Header from './components/Header'
import PortalHeroSlider from './components/PortalHeroSlider'
import About from './components/About'
import FurnitureSlider from './components/FurnitureSlider'
import CoffeeShopSlider from './components/CoffeeShopSlider'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com' },
    { icon: FaTwitter, url: 'https://twitter.com' },
    { icon: FaLinkedin, url: 'https://linkedin.com' },
    { icon: FaInstagram, url: 'https://instagram.com' },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      <Header mousePosition={mousePosition} />
      <PortalHeroSlider />
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-4 bg-gray-900 p-2 rounded-r-lg">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#00ff88] hover:text-[#00cc6a] transition-colors"
            >
              <link.icon />
            </a>
          ))}
        </div>
      </div>
      <main>
        <About />
        <section id="services" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            <FurnitureSlider />
          </div>
        </section>
        <section id="projects" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Projects</h2>
            <CoffeeShopSlider />
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

