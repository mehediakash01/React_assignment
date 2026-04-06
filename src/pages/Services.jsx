import { motion } from 'framer-motion';
import { Code2, Search, Zap, Calendar, CheckCircle } from 'lucide-react';
import Pricing from '../components/sections/Pricing';
import ContactCTA from '../components/sections/ContactCTA';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'We build responsive, high-performance websites and web applications using modern technologies.',
      features: [
        'Custom web applications',
        'E-commerce solutions',
        'Progressive web apps',
        'API development',
        'Website optimization',
        'Technical SEO implementation',
      ],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Increase your visibility and drive organic traffic with comprehensive SEO strategies.',
      features: [
        'Keyword research & analysis',
        'On-page optimization',
        'Link building',
        'Technical SEO audit',
        'Content strategy',
        'Performance tracking',
      ],
    },
    {
      icon: Zap,
      title: 'Online Advertising',
      description: 'Data-driven advertising campaigns optimized for maximum ROI and conversions.',
      features: [
        'Google Ads management',
        'Social media advertising',
        'Retargeting campaigns',
        'Audience targeting',
        'Performance analytics',
        'Campaign optimization',
      ],
    },
    {
      icon: Calendar,
      title: 'Booking & Management',
      description: 'Streamline your operations with smart booking systems and management solutions.',
      features: [
        'Appointment scheduling',
        'Calendar integration',
        'Automated notifications',
        'Client management',
        'Payment processing',
        'Resource optimization',
      ],
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="section-title text-5xl">Our Services</h1>
            <p className="section-subtitle text-center text-lg">
              Comprehensive solutions designed to drive your digital growth and business success
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-x">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20 pb-20 border-b border-gray-200 last:border-b-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center">
                        <Icon className="text-primary" size={40} />
                      </div>
                      <h2 className="text-3xl font-bold text-dark">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="text-primary flex-shrink-0" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl h-80 flex items-center justify-center">
                      <Icon className="text-primary/30" size={150} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Pricing />

      <section className="py-20 bg-gray-50">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Package Includes</h2>
            <p className="section-subtitle text-center">
              All packages include these as standard
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Strategic consulting',
              'Monthly reporting',
              'Performance optimization',
              'Technical support',
              'Competitor analysis',
              'Custom recommendations',
              'Priority communication',
              'Scalable solutions',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
