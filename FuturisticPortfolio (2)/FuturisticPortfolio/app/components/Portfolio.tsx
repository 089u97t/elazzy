import ScrollReveal from './ScrollReveal'

const projects = [
  { title: 'Amazon Website', description: 'For marketing products, like Amazon.', image: '/promo_iphone_tradein__bugw15ka691e_medium.jpg' },
  { title: 'Uber App', description: 'Transportation App', image: '/mmh.jpeg' },
  { title: 'Log.net', description: 'For money transactions and for buying log.', image: '/promo_apple_watch_series_9_order__b3u85rm9zf6u_medium.jpg' },
  { title: 'Food Website', description: 'For hotels and restaurants', image: '/promo_ipad__fioegapg12qi_medium.jpg' },
  { title: 'TikTok Clone', description: 'App for entertainment', image: '/promo_ipad__fioegapg12qi_medium.jpg' },
  { title: 'Hotel Website', description: 'For booking hotel rooms', image: '/nnb.jpeg' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-12 text-center">Our Projects</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <a href="#" className="mt-4 inline-block text-[#00ff88] hover:text-[#00cc6a] transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

