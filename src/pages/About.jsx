import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Target } from 'lucide-react';
import ContactCTA from '../components/sections/ContactCTA';
import { teamMembers, stats } from '../data/content';

export default function About() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title text-5xl mb-6">About Kodawave</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              We're a team of passionate digital experts dedicated to transforming businesses through innovative technology and strategic thinking.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-dark mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-4">
                To empower businesses of all sizes by providing cutting-edge digital solutions that drive sustainable growth and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that great design and technology, combined with strategic thinking, can transform businesses and create lasting impact in the digital world.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to be the trusted partner for companies looking to accelerate their digital transformation journey and achieve extraordinary results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl h-96"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Target className="text-primary/30 mx-auto mb-4" size={80} />
                  <p className="text-gray-400 font-semibold">Digital Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-5xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why We're Different</h2>
            <p className="section-subtitle text-center">
              What sets Kodawave apart from the competition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Award,
                title: 'Proven Expertise',
                description: 'Years of experience delivering results for diverse industries and business types.',
              },
              {
                icon: Users,
                title: 'Dedicated Team',
                description: 'Talented professionals committed to your success and growth.',
              },
              {
                icon: TrendingUp,
                title: 'Results-Driven',
                description: 'We focus on measurable outcomes and continuous improvement.',
              },
              {
                icon: Target,
                title: 'Strategic Approach',
                description: 'Custom solutions tailored to your unique business goals.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle text-center">
              Talented professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
