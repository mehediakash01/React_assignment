import { motion } from 'framer-motion';
import { Award, BadgeCheck, Sparkles, Target, TrendingUp, Users } from 'lucide-react';
import ContactCTA from '../components/sections/ContactCTA';
import Testimonials from '../components/sections/Testimonials';
import { teamMembers, stats } from '../data/content';

export default function About() {
  const recognitions = [
    {
      title: 'Design-forward delivery',
      label: '2024 Studio Award',
      description: 'Recognized for shipping premium-feeling client websites without sacrificing clarity, pace, or usability.',
      icon: Award,
    },
    {
      title: 'SEO performance excellence',
      label: 'Top 5% campaign cohort',
      description: 'Recent launches consistently improved search visibility and conversion intent within the first 90 days.',
      icon: Sparkles,
    },
    {
      title: 'Client satisfaction benchmark',
      label: '98% renewal intent',
      description: 'Most projects continue into support, optimization, or campaign expansion work after the initial build.',
      icon: TrendingUp,
    },
  ];

  const differentiators = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Years of experience delivering results across local services, product brands, and growth-stage teams.',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'A compact team means clearer communication, stronger ownership, and fewer handoff gaps.',
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'We keep design and growth metrics connected so the site feels polished and performs in-market.',
    },
    {
      icon: Target,
      title: 'Strategic Approach',
      description: 'Every project starts with positioning, audience clarity, and a conversion-aware content structure.',
    },
  ];

  return (
    <div>
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="tag mb-6">About Kodawave</span>
            <h1 className="section-title max-w-4xl">
              Independent digital experts building websites with clarity, care, and measurable ambition.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We partner with growing brands that need a website experience strong enough to support trust, visibility, and conversion from the first scroll onward.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="tag mb-5">Vision & Expertise</span>
              <h2 className="mb-6 text-4xl font-display text-dark">
                We help growing companies look more credible and operate more smoothly online.
              </h2>
              <p className="mb-4 text-lg leading-8 text-slate-600">
                Our vision is simple: every business should have a website experience that feels as considered as its best product or service.
              </p>
              <p className="mb-6 text-lg leading-8 text-slate-600">
                We combine technical execution, SEO foundations, paid growth thinking, and operations-aware design so the website does more than sit there looking nice.
              </p>

              <div className="space-y-4">
                {[
                  'Senior-level strategy from discovery through launch.',
                  'Clear systems for messaging, design, and measurable conversion improvements.',
                  'Lean collaboration model that keeps feedback focused and momentum high.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/70 px-4 py-4">
                    <BadgeCheck className="mt-0.5 text-primary" size={18} />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-panel relative overflow-hidden p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,155,99,0.18),transparent_35%)]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/50">Strategy Snapshot</p>
                    <h3 className="mt-3 text-3xl font-display text-dark">Plan. Build. Grow.</h3>
                  </div>
                  <Target className="text-primary/30" size={52} />
                </div>

                <div className="mt-8 grid gap-4">
                  {[
                    { title: 'Discovery', copy: 'Clarify business goals, audience, and offer positioning.' },
                    { title: 'Design & Build', copy: 'Shape the interface, motion, and responsive front-end system.' },
                    { title: 'Optimization', copy: 'Track lead quality, rankings, and launch follow-up improvements.' },
                  ].map((step, index) => (
                    <div key={step.title} className="rounded-[24px] border border-black/5 bg-white/90 p-5 text-left">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/40">0{index + 1}</p>
                      <h4 className="mt-3 text-xl font-semibold text-dark">{step.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{step.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="panel p-8 text-center"
              >
                <h3 className="mb-2 text-5xl font-display text-primary">{stat.value}</h3>
                <p className="font-semibold text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="tag mb-5">Team & Strategy</span>
            <h2 className="section-title">A focused team built around strategy, delivery, and momentum.</h2>
            <p className="section-subtitle text-center">
              What sets Kodawave apart from the competition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="panel p-8 text-left"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-dark">{item.title}</h3>
                  <p className="leading-7 text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="tag mb-5">Achievements</span>
            <h2 className="section-title">Awards, recognitions, and proof that the process works.</h2>
            <p className="section-subtitle text-center">
              Tangible outcomes matter, but so does the quality of the process that gets teams there.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {recognitions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="panel p-8 text-left"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon size={28} />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary/45">{item.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-dark">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="tag mb-5">Team Overview</span>
            <h2 className="section-title">Meet the people shaping the strategy and the build.</h2>
            <p className="section-subtitle text-center">
              Talented professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="panel p-8 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto mb-5 h-32 w-32 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                <p className="mb-3 font-semibold text-primary">{member.role}</p>
                <p className="text-sm leading-7 text-slate-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        kicker="Client Feedback"
        title="Trusted by teams who needed polish and performance at the same time"
        subtitle="From first call to post-launch support, our clients value the mix of strategic clarity, visual detail, and dependable execution."
      />

      <ContactCTA />
    </div>
  );
}
