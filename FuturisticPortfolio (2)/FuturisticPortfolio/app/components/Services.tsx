import ScrollReveal from './ScrollReveal'

const services = [
  { title: 'Graphic Design', description: 'Bringing out the best part of every image.' },
  { title: 'Holographic UI', description: 'Creating futuristic website designs.' },
  { title: 'Ghost Writing', description: 'Writing inspirational and professional books.' },
  { title: 'Book Editing', description: 'Proofreading and improving book content.' },
  { title: 'Responsive Website', description: 'Creating futuristic websites for various businesses and organizations.' },
  { title: 'Custom Apps', description: 'Mobile and web apps to address various needs and solve problems in our society.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

