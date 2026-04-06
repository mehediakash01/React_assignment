import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Code2, Search, Sparkles, Zap } from 'lucide-react';
import FloatingIcon from '../common/FloatingIcon';
import { MotionItem, MotionSection } from '../common/MotionSection';

export default function ServiceOverview() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web solutions built with modern architecture for speed, polish, and responsive usability.',
      bullets: ['Landing pages and multi-page websites', 'Performance-first front-end architecture'],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Search visibility strategy that connects technical health, content structure, and conversion intent.',
      bullets: ['Technical audits and content strategy', 'Keyword mapping and search intent alignment'],
    },
    {
      icon: Zap,
      title: 'Online Advertising',
      description: 'Paid campaigns tuned for clean creative, clear offers, and measurable return on spend.',
      bullets: ['Paid search and social campaign setup', 'Creative testing with reporting dashboards'],
    },
    {
      icon: Calendar,
      title: 'Booking Management',
      description: 'Operational systems that help teams capture, confirm, and manage appointments without friction.',
      bullets: ['Appointment automation and reminders', 'Calendar, CRM, and payment integrations'],
    },
  ];

  return (
    <section className="relative py-24 sm:py-28" id="services">
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-x">
        <MotionSection className="relative">
          <FloatingIcon icon={Code2} label="Build Fast" className="left-4 top-32 hidden xl:flex" delay={0.25} />
          <FloatingIcon icon={Zap} label="Scale Smart" className="right-0 top-24 hidden xl:flex" delay={0.4} />

          <MotionItem className="mx-auto mb-16 max-w-3xl text-center">
            <span className="tag mb-5 gap-2">
              <Sparkles size={12} />
              Services
            </span>
            <h2 className="section-title">
              Growth systems designed to feel considered, calm, and conversion-ready.
            </h2>
            <p className="section-subtitle text-center">
              Each service is shaped to reduce friction, sharpen positioning, and move visitors toward the next confident step.
            </p>
          </MotionItem>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <MotionItem key={service.title}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="panel lift-card relative flex h-full flex-col overflow-hidden p-7 sm:p-8"
                  >
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-primary/12 via-secondary/10 to-accent/10" />
                    <div className="relative z-10">
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/90 shadow-[0_14px_32px_rgba(124,58,237,0.12)]">
                          <Icon className="text-primary" size={30} />
                        </div>
                        <span className="rounded-full bg-lavender px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/70">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-dark">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                        {service.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {service.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="rounded-3xl border border-primary/10 bg-white/75 px-4 py-3 text-sm leading-6 text-slate-700"
                          >
                            {bullet}
                          </div>
                        ))}
                      </div>

                      <Link
                        to="/services"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                      >
                        View service details <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                </MotionItem>
              );
            })}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
