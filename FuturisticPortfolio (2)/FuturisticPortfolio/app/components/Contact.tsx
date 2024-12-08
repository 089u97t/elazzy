'use client'

import { useState, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix Leaflet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
  iconUrl: '/leaflet/images/marker-icon.png',
  shadowUrl: '/leaflet/images/marker-shadow.png',
})

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    setMapLoaded(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'francismarytochukwu2344@gmail.com',
        }),
      })
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">Get in Touch</h2>
        </ScrollReveal>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          <ScrollReveal delay={0.2} className="w-full lg:w-1/2">
            <div className="p-6 sm:p-8 bg-gray-900 rounded-lg shadow-lg h-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-4 text-sm sm:text-base">Let's collaborate and bring your ideas to life!</p>
              <ul className="space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
                <li>
                  <a href="mailto:igboayakat@gmail.com" className="text-[#00ff88] hover:underline break-all">
                    igboayakat@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+2347043087291" className="text-[#00ff88] hover:underline">
                    +234 7043 087 291
                  </a>
                </li>
                <li>
                  <a href="tel:+2349055779446" className="text-[#00ff88] hover:underline">
                    +234 9055 779 446
                  </a>
                </li>
                <li className="break-words">1 Alafia Street, Ijegun-Ikotun, Lagos, Nigeria</li>
              </ul>
              <div className="h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                {mapLoaded && (
                  <MapContainer center={[6.5244, 3.3792]} zoom={15} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[6.5244, 3.3792]}>
                      <Popup>
                        1 Alafia Street, Ijegun-Ikotun, Lagos, Nigeria
                      </Popup>
                    </Marker>
                  </MapContainer>
                )}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-gray-900 rounded-lg shadow-lg h-full">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00ff88] text-black font-bold py-3 px-4 rounded-md hover:bg-[#00cc6a] transition-colors text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

