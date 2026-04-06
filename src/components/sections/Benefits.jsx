import { motion } from 'framer-motion';
import { Sparkles, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { MotionItem, MotionSection } from '../common/MotionSection';

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
    <section className="py-24 sm:py-28">
      <div className="container-x">
        <MotionSection>
          <MotionItem>
            <div className="panel overflow-hidden">
              <div className="grid grid-cols-1 gap-12 p-8 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-14">
                <div>
                  <span className="tag mb-5 gap-2">
                    <Sparkles size={12} />
                    Why Kodawave
                  </span>
                  <h2 className="section-title max-w-xl">A smaller team with sharper thinking and a higher standard for digital detail.</h2>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                    We pair strategy with design discipline and practical execution, so the final experience feels premium, calm, and ready to support growth.
                  </p>

                  <div className="mt-8 rounded-[32px] border border-primary/10 bg-white/75 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/50">
                      What clients get
                    </p>
                    <p className="mt-4 text-lg leading-8 text-slate-700">
                      Clear positioning, premium visual polish, and a delivery process that keeps momentum steady without unnecessary chaos.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <MotionItem key={benefit.title}>
                        <motion.div
                          whileHover={{ y: -8 }}
                          className="lift-card rounded-[32px] border border-primary/10 bg-white/80 p-7 text-left shadow-soft"
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/15 via-secondary/12 to-accent/12">
                            <Icon className="text-primary" size={24} />
                          </div>
                          <h3 className="mt-6 text-xl font-extrabold tracking-[-0.03em] text-dark">{benefit.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
                        </motion.div>
                      </MotionItem>
                    );
                  })}
                </div>
              </div>
            </div>
          </MotionItem>
        </MotionSection>
      </div>
    </section>
  );
}
