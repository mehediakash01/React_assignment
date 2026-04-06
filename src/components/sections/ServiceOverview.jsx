import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Code2, Search, Zap } from 'lucide-react';

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
    <section className="py-24" id="services">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="tag mb-5">Services</span>
          <h2 className="section-title">Growth systems designed to feel considered, not cluttered.</h2>
          <p className="section-subtitle text-center">
            Each offer is packaged to help you launch faster, communicate more clearly, and turn attention into booked conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="panel lift-card flex h-full flex-col p-8 text-left"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/8">
                    <Icon className="text-primary" size={30} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/45">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-dark">{service.title}</h3>
                <p className="mt-3 text-slate-600 leading-7">{service.description}</p>

                <div className="mt-6 space-y-3">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-2xl bg-light/70 px-4 py-3 text-sm leading-6 text-slate-700">
                      {bullet}
                    </div>
                  ))}
                </div>

                <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View service details <ArrowRight size={16} />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
