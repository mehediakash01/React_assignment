import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const packages = [
    {
      name: 'Starter',
      price: 299,
      description: 'Perfect for startups',
      features: [
        'Basic website design',
        'SEO optimization',
        '5 pages',
        'Mobile responsive',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      price: 799,
      description: 'For growing businesses',
      features: [
        'Advanced web development',
        'Full SEO suite',
        'Unlimited pages',
        'Analytics integration',
        'Advertising setup',
        'Priority support',
        'Monthly reports',
      ],
      highlighted: true,
    },
    {
      name: 'Premium',
      price: 1499,
      description: 'Enterprise solutions',
      features: [
        'Custom web applications',
        'Complete digital marketing',
        'E-commerce integration',
        'Booking system',
        'API development',
        '24/7 dedicated support',
        'Strategic consulting',
        'Custom integrations',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle text-center">
            Choose the perfect plan for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl p-8 transition-all duration-300 ${
                pkg.highlighted
                  ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-2xl scale-105'
                  : 'bg-gray-50 border-2 border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className={pkg.highlighted ? 'text-white/80' : 'text-gray-600'}>
                {pkg.description}
              </p>
              
              <div className="my-6">
                <span className="text-5xl font-bold">${pkg.price}</span>
                <span className={pkg.highlighted ? 'text-white/80' : 'text-gray-600'}>/month</span>
              </div>

              <Link
                to="/contact"
                className={`w-full py-3 rounded-lg font-semibold text-center block mb-8 transition-all ${
                  pkg.highlighted
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                Get Started
              </Link>

              <ul className="space-y-4">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check
                      size={20}
                      className={pkg.highlighted ? 'text-white' : 'text-primary'}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
