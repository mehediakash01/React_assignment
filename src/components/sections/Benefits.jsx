import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Rapid Growth',
      description: 'See measurable results in weeks, not months. Our strategies are built for steady momentum and cleaner handoff.',
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Messaging, SEO, and campaign strategy stay aligned so the right audience lands on the right offer.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'You work with senior-minded collaborators who can shape both the strategy and the front-end execution.',
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'We move quickly, but with a calmer process that keeps revision loops focused and practical.',
    },
  ];

  return (
    <section className="py-24">
      <div className="container-x">
        <div className="panel overflow-hidden">
          <div className="grid grid-cols-1 gap-12 p-8 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="tag mb-5">Why Kodawave</span>
              <h2 className="section-title max-w-xl">A small team with a clear process and a high standard for detail.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                We pair sharp thinking with steady execution, so the site feels premium, easy to use, and ready to support the next stage of growth.
              </p>

              <div className="mt-8 rounded-[28px] bg-light/80 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/50">
                  What clients get
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Strategy that is easy to understand, design that feels premium, and execution that helps teams launch without chaos.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="lift-card rounded-[28px] border border-black/5 bg-white p-7 text-left"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-dark">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
