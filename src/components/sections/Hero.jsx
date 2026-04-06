import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center py-20">
      <div className="container-x w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title text-5xl lg:text-6xl">
              Transform Your Digital Presence
            </h1>
            <p className="text-lg text-gray-600 mt-6 mb-8">
              Unlock exponential growth with our cutting-edge web development, SEO expertise, and targeted advertising solutions. We help businesses like yours scale faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-30"></div>
              <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.3 }} />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="url(#grad1)" />
                <circle cx="120" cy="120" r="80" fill="#6366f1" opacity="0.2" />
                <circle cx="280" cy="280" r="100" fill="#ec4899" opacity="0.2" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
