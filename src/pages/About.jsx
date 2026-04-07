import { motion } from 'framer-motion';
import { ArrowRight, Award, BadgeCheck, Sparkles, Target, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingIcon from '../components/common/FloatingIcon';
import { MotionItem, MotionSection } from '../components/common/MotionSection';
import ContactCTA from '../components/sections/ContactCTA';
import Testimonials from '../components/sections/Testimonials';
import { teamMembers, stats } from '../data/content';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: EASE_OUT_EXPO },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

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
      <section className="relative overflow-hidden bg-[#faf8f5] pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute -left-16 top-16 -z-10 h-80 w-80 rounded-full bg-violet-100/55 blur-[120px]" />
        <div className="absolute right-0 top-10 -z-10 h-64 w-64 rounded-full bg-fuchsia-100/45 blur-[110px]" />
        <div className="absolute bottom-4 left-1/2 -z-10 h-52 w-[620px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[100px]" />

        <div className="container-x">
          <MotionSection className="relative" as={motion.div}>
            <FloatingIcon icon={Target} label="Strategy First" className="left-0 top-16 hidden xl:flex" delay={0.2} />
            <FloatingIcon icon={Sparkles} label="Premium Execution" className="right-0 top-20 hidden xl:flex" delay={0.35} />

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <MotionItem className="mx-auto max-w-4xl text-center">
                <span className="tag mb-5 gap-2">
                  <Sparkles size={12} />
                  About LuminaStudio
                </span>
                <h1 className="section-title text-4xl sm:text-6xl lg:text-[4.3rem]">
                  Independent digital experts creating
                  {' '}
                  <span className="bg-gradient-to-r from-violet-600 via-secondary to-primary bg-clip-text text-transparent">
                    premium growth experiences.
                  </span>
                </h1>
                <p className="section-subtitle mt-6 text-center text-lg">
                  We partner with growth-minded teams that need premium websites, sharper messaging, and stronger conversion systems without the usual friction.
                </p>
              </MotionItem>

              <MotionItem className="mx-auto mt-10 max-w-5xl">
                <div className="grid gap-3 rounded-[28px] border border-primary/10 bg-white/75 p-4 shadow-soft backdrop-blur-2xl sm:grid-cols-3 sm:p-5">
                  {[
                    { value: '98%', label: 'Renewal intent' },
                    { value: '90d', label: 'Impact window' },
                    { value: '250+', label: 'Delivered projects' },
                  ].map((metric) => (
                    <div key={metric.label} className="rounded-3xl border border-primary/10 bg-white px-5 py-5 text-center sm:px-6">
                      <p className="font-display text-3xl font-black tracking-[-0.05em] text-dark sm:text-[2.2rem]">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/55">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </MotionItem>
            </motion.div>
          </MotionSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-28">
        <div className="absolute -right-24 top-28 -z-10 h-72 w-72 rounded-full bg-violet-100/40 blur-[120px]" />
        <div className="absolute -left-24 bottom-16 -z-10 h-72 w-72 rounded-full bg-blue-100/35 blur-[110px]" />

        <div className="container-x">
          <MotionSection className="mb-20 grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <MotionItem>
              <span className="tag mb-5">Vision & Expertise</span>
              <h2 className="section-title max-w-3xl">
                We help ambitious companies look more credible and move more decisively online.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Our vision is simple: every business should have a digital experience that feels as considered as its strongest offer. That means better design, better structure, and cleaner momentum from the first interaction.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                We combine technical execution, SEO foundations, paid growth thinking, and operations-aware design so the website does more than just look good.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Senior-level strategy from discovery through launch.',
                  'Clear systems for messaging, design, and measurable conversion improvements.',
                  'Lean collaboration model that keeps feedback focused and momentum high.',
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                    className="flex items-start gap-3 rounded-3xl border border-primary/10 bg-white/75 px-5 py-4"
                  >
                    <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-lavender">
                      <BadgeCheck className="text-primary" size={16} />
                    </span>
                    <p className="text-slate-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </MotionItem>

            <MotionItem>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-panel relative overflow-hidden p-6 sm:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.86),rgba(255,255,255,0.45)_38%,rgba(243,232,255,0.64)_100%)]" />
                <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-primary/12 blur-3xl" />
                <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full bg-accent/12 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/55">Strategy Snapshot</p>
                      <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-dark">Plan. Build. Grow.</h3>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glow">
                      <Target size={22} />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4">
                    {[
                      { title: 'Discovery', copy: 'Clarify business goals, audience priorities, and offer positioning.' },
                      { title: 'Design & Build', copy: 'Shape the interface, motion, and responsive system with premium visual discipline.' },
                      { title: 'Optimization', copy: 'Track lead quality, rankings, and launch follow-up improvements with intention.' },
                    ].map((step, index) => (
                      <motion.div
                        key={step.title}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                        className="rounded-3xl border border-primary/10 bg-white/85 p-5"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/45">0{index + 1}</p>
                        <h4 className="mt-3 text-xl font-extrabold tracking-[-0.03em] text-dark">{step.title}</h4>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{step.copy}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.22 }} className="mt-5">
                    <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                      Start your strategy session
                      <ArrowRight size={15} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </MotionItem>
          </MotionSection>

          <MotionSection className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <MotionItem key={stat.label}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                  className="panel px-6 py-8 text-center"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/50">Impact</p>
                  <h3 className="mt-4 text-5xl font-extrabold tracking-[-0.06em] text-dark">{stat.value}</h3>
                  <p className="mt-3 font-semibold text-slate-600">{stat.label}</p>
                </motion.div>
              </MotionItem>
            ))}
          </MotionSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-28">
        <div className="absolute left-1/2 top-0 -z-10 h-52 w-[620px] -translate-x-1/2 rounded-full bg-violet-100/45 blur-[100px]" />
        <div className="container-x">
          <MotionSection>
            <MotionItem className="mx-auto mb-14 max-w-3xl text-center">
              <span className="tag mb-5">Team & Strategy</span>
              <h2 className="section-title">A focused team built around sharp thinking, premium execution, and steady momentum.</h2>
              <p className="section-subtitle text-center">
                We keep strategy close to design and delivery, so every decision supports trust, clarity, and measurable growth.
              </p>
            </MotionItem>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {differentiators.map((item) => {
                const Icon = item.icon;

                return (
                  <MotionItem key={item.title}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
                      className="panel p-8 text-left"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/15 via-secondary/12 to-accent/12">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.04em] text-dark">{item.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                    </motion.div>
                  </MotionItem>
                );
              })}
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-28">
        <div className="container-x">
          <MotionSection>
            <MotionItem className="mx-auto mb-14 max-w-3xl text-center">
              <span className="tag mb-5">Achievements</span>
              <h2 className="section-title">Awards, recognitions, and proof that the process delivers.</h2>
              <p className="section-subtitle text-center">
                Tangible outcomes matter, but so does the quality of the collaboration that gets teams there.
              </p>
            </MotionItem>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {recognitions.map((item) => {
                const Icon = item.icon;

                return (
                  <MotionItem key={item.title}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
                      className="panel h-full p-8 text-left"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/15 via-secondary/12 to-accent/12">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/45">{item.label}</p>
                      <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-dark">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                    </motion.div>
                  </MotionItem>
                );
              })}
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-28">
        <div className="absolute -right-20 top-24 -z-10 h-64 w-64 rounded-full bg-fuchsia-100/45 blur-[110px]" />
        <div className="container-x">
          <MotionSection>
            <MotionItem className="mx-auto mb-14 max-w-3xl text-center">
              <span className="tag mb-5">Team Overview</span>
              <h2 className="section-title">Meet the people shaping the strategy, design, and delivery behind every launch.</h2>
              <p className="section-subtitle text-center">
                A smaller, high-trust team means clearer communication, stronger accountability, and faster progress.
              </p>
            </MotionItem>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {teamMembers.map((member, index) => (
                <MotionItem key={member.name}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
                    className="panel h-full p-7 text-center"
                  >
                    <div className="relative mx-auto h-32 w-32">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 blur-xl" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative h-32 w-32 rounded-full border-4 border-white object-cover"
                      />
                    </div>

                    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/45">
                      Team 0{index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-extrabold tracking-[-0.03em] text-dark">{member.name}</h3>
                    <p className="mt-2 font-semibold text-primary">{member.role}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{member.bio}</p>
                  </motion.div>
                </MotionItem>
              ))}
            </div>
          </MotionSection>
        </div>
      </section>

      <Testimonials
        kicker="Client Feedback"
        title="Trusted by teams who needed polish, performance, and calm execution at the same time"
        subtitle="From first call to post-launch support, our clients value the blend of strategic clarity, visual detail, and dependable delivery."
      />

      <ContactCTA />
    </div>
  );
}
