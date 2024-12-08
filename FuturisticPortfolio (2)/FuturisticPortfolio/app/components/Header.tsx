import { motion } from 'framer-motion'

interface HeaderProps {
  mousePosition: { x: number; y: number }
}

export default function Header({ mousePosition }: HeaderProps) {
  return (
    <motion.header
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,255,136,0.3) 0%, rgba(0,0,0,0) 80%)`,
        }}
      />
      <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
        <motion.div
          className="text-3xl font-bold"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Francis.
        </motion.div>
        <motion.ul
          className="flex space-x-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-[#00ff88] transition-colors">
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      </nav>
      <motion.div
        className="text-center z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold mb-4">IGBOAYAKA PAULINE</h1>
        <p className="text-xl mb-8">The future of design is here. Where technology and creativity converge.</p>
        <motion.button
          className="bg-[#00ff88] text-black px-8 py-3 rounded-full font-bold hover:bg-[#00cc6a] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          DOWNLOAD CV
        </motion.button>
      </motion.div>
    </motion.header>
  )
}

