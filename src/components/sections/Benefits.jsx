import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, Zap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Rapid Growth',
      description: 'See measurable results in weeks, not months. Our strategies drive consistent growth.',
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Reach exactly the right audience at the right time with our data-driven approach.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with seasoned professionals who understand your industry and goals.',
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Quick turnarounds without compromising on quality. We move fast and iterate efficiently.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose Kodawave</h2>
          <p className="section-subtitle text-center">
            We combine strategy, creativity, and execution to deliver results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div>
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
