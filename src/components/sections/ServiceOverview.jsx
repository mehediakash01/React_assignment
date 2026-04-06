import { motion } from 'framer-motion';
import { Code2, Search, Zap, Calendar } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web solutions built with cutting-edge technologies for optimal performance and user experience.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Strategic SEO solutions to boost your online visibility and drive organic traffic to your website.',
    },
    {
      icon: Zap,
      title: 'Online Advertising',
      description: 'Data-driven advertising campaigns that reach your target audience and maximize ROI.',
    },
    {
      icon: Calendar,
      title: 'Booking Management',
      description: 'Streamline your scheduling with our smart booking and management solutions.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle text-center">
            Comprehensive digital solutions tailored to accelerate your business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
