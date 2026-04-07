import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle, Code2, Search, Sparkles, Zap } from 'lucide-react';
import ContactCTA from '../components/sections/ContactCTA';
import Pricing from '../components/sections/Pricing';
import FloatingIcon from '../components/common/FloatingIcon';
import { MotionItem, MotionSection } from '../components/common/MotionSection';

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

  const packageIncludes = [
    'Strategic consulting',
    'Monthly reporting',
    'Performance optimization',
    'Technical support',
    'Competitor analysis',
    'Custom recommendations',
    'Priority communication',
    'Scalable solutions',
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-[#faf8f5] pb-20 pt-16 sm:pb-24 sm:pt-20">
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
            <FloatingIcon icon={Code2} label="Custom Build" className="left-0 top-20 hidden xl:flex" delay={0.2} />
            <FloatingIcon icon={Search} label="SEO Growth" className="right-0 top-16 hidden xl:flex" delay={0.35} />

            <motion.div variants={stagger}>
              <MotionItem variants={fadeUp} className="mx-auto max-w-4xl text-center">
              <span className="tag mb-5 gap-2">
                <Sparkles size={12} />
                Services
              </span>
              <h1 className="section-title text-4xl sm:text-6xl lg:text-[4.35rem]">
                Premium growth systems built to feel
                {' '}
                <span className="bg-gradient-to-r from-violet-600 via-secondary to-primary bg-clip-text text-transparent">
                  clean and conversion-ready.
                </span>
              </h1>
              <p className="section-subtitle mt-6 text-center text-lg">
                From the first landing page to the full operating system behind your leads, we build service experiences that stay calm, clear, and conversion-focused.
              </p>
              </MotionItem>

              <MotionItem className="mx-auto mt-10 max-w-5xl" variants={fadeUp}>
                <div className="grid gap-3 rounded-[28px] border border-primary/10 bg-white/75 p-4 shadow-soft backdrop-blur-2xl sm:grid-cols-3 sm:p-5">
                  {[
                    { value: '250+', label: 'Projects delivered' },
                    { value: '3.4x', label: 'Average lead growth' },
                    { value: '14d', label: 'Average launch cycle' },
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
          <MotionSection className="space-y-10" as={motion.div}>
            {services.map((service, index) => {
              const Icon = service.icon;
              const reverse = index % 2 === 1;

              return (
                <MotionItem key={service.title}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                    className="panel overflow-hidden p-6 sm:p-8 lg:p-10"
                  >
                    <div className={`grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] ${reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
                      <div>
                        <div className="mb-6 flex items-center gap-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/15 via-secondary/12 to-accent/12 shadow-[0_14px_34px_rgba(124,58,237,0.12)]">
                            <Icon className="text-primary" size={30} />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/55">
                              Service 0{index + 1}
                            </p>
                            <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-dark">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        <p className="max-w-2xl text-lg leading-8 text-slate-600">
                          {service.description}
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                          {service.features.map((feature) => (
                            <motion.div
                              key={feature}
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                              className="flex items-center gap-3 rounded-3xl border border-primary/10 bg-white/75 px-4 py-3 text-sm text-slate-700"
                            >
                              <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-lavender">
                                <CheckCircle className="text-primary" size={16} />
                              </span>
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="relative">
                        <motion.div
                          animate={{ y: [0, -12, 0] }}
                          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}
                          className="glass-panel relative overflow-hidden p-6 sm:p-8"
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),rgba(255,255,255,0.42)_40%,rgba(243,232,255,0.6)_100%)]" />
                          <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-primary/12 blur-3xl" />
                          <div className="absolute bottom-6 right-8 h-24 w-24 rounded-full bg-accent/12 blur-3xl" />

                          <div className="relative z-10">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/55">
                                  Solution Focus
                                </p>
                                <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-dark">
                                  {service.title}
                                </h3>
                              </div>
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glow">
                                <Icon size={22} />
                              </div>
                            </div>

                            <div className="mt-8 grid grid-cols-3 gap-3">
                              {[78, 92, 88].map((value, innerIndex) => (
                                <div key={value} className="rounded-3xl border border-primary/10 bg-white/85 px-4 py-4 text-center">
                                  <p className="text-2xl font-extrabold tracking-[-0.04em] text-dark">{value}%</p>
                                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary/55">
                                    {innerIndex === 0 ? 'Clarity' : innerIndex === 1 ? 'Speed' : 'Growth'}
                                  </p>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 rounded-3xl border border-primary/10 bg-white/85 p-4">
                              <p className="text-sm leading-7 text-slate-600">
                                Built to improve trust, communicate your offer more clearly, and turn interest into the next measurable action.
                              </p>
                            </div>

                            <motion.a
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.22 }}
                              href="/contact"
                              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
                            >
                              Request service walkthrough
                              <ArrowRight size={15} />
                            </motion.a>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.article>
                </MotionItem>
              );
            })}
          </MotionSection>
        </div>
      </section>

      <Pricing />

      <section className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-28">
        <div className="absolute left-1/2 top-0 -z-10 h-56 w-[620px] -translate-x-1/2 rounded-full bg-violet-100/45 blur-[100px]" />
        <div className="container-x">
          <MotionSection as={motion.div}>
            <MotionItem className="mx-auto mb-12 max-w-3xl text-center">
              <span className="tag mb-5">Package Includes</span>
              <h2 className="section-title">Everything needed to support a cleaner launch and smarter growth loop.</h2>
              <p className="section-subtitle text-center">
                Every engagement includes strategic guidance, reporting discipline, and room to optimize beyond the initial build.
              </p>
            </MotionItem>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {packageIncludes.map((item) => (
                <MotionItem key={item}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                    className="panel flex items-center gap-3 px-5 py-5"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/12 to-accent/12">
                      <CheckCircle className="text-primary" size={18} />
                    </span>
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </motion.div>
                </MotionItem>
              ))}
            </div>
          </MotionSection>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
