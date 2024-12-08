import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the email to a server for newsletter subscription
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Francis.</h3>
            <p className="text-gray-400">Bringing your digital dreams to life with futuristic design and cutting-edge technology.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-[#00ff88] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href={`https://www.${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff88] transition-colors"
                >
                  <i className={`bx bxl-${social} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
                required
              />
              <motion.button
                type="submit"
                className="w-full bg-[#00ff88] text-black font-bold py-2 px-4 rounded-md hover:bg-[#00cc6a] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 Francis. All rights reserved. | <a href="#" className="hover:text-[#00ff88]">Privacy Policy</a> | <a href="#" className="hover:text-[#00ff88]">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

