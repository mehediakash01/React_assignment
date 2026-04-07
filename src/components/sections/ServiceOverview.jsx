import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, Code2, Search, Sparkles, Zap } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

/* ─── Easing ─────────────────────────────────────────────────────── */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

/* ─── Animation variants ─────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: 'blur(5px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: EASE_OUT_EXPO, delay: i * 0.1 },
  }),
};

/* ─── Services data ──────────────────────────────────────────────── */
const services = [
  {
    icon: Code2,
    title: 'Web Development',
    tag: '01',
    description:
      'Custom web solutions built with modern architecture for speed, polish, and responsive usability.',
    bullets: [
      'Landing pages and multi-page websites',
      'Performance-first front-end architecture',
    ],
    accent: '#ede9fe',
    iconColor: '#7c3aed',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    tag: '02',
    description:
      'Search visibility strategy connecting technical health, content structure, and conversion intent.',
    bullets: [
      'Technical audits and content strategy',
      'Keyword mapping and search intent alignment',
    ],
    accent: '#dbeafe',
    iconColor: '#2563eb',
  },
  {
    icon: Zap,
    title: 'Online Advertising',
    tag: '03',
    description:
      'Paid campaigns tuned for clean creative, clear offers, and measurable return on spend.',
    bullets: [
      'Paid search and social campaign setup',
      'Creative testing with reporting dashboards',
    ],
    accent: '#fef3c7',
    iconColor: '#d97706',
  },
  {
    icon: Calendar,
    title: 'Booking Management',
    tag: '04',
    description:
      'Operational systems that help teams capture, confirm, and manage appointments without friction.',
    bullets: [
      'Appointment automation and reminders',
      'Calendar, CRM, and payment integrations',
    ],
    accent: '#dcfce7',
    iconColor: '#16a34a',
  },
];

/* ─── Service Card ───────────────────────────────────────────────── */
function ServiceCard({ service, index }) {
  const { icon: Icon, title, tag, description, bullets, accent, iconColor } = service;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE_OUT_EXPO } }}
      className="group relative flex flex-col overflow-hidden rounded-[24px] border border-stone-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)]"
    >
      {/* Top accent strip */}
      <div
        className="h-1.5 w-full transition-all duration-500 group-hover:h-2"
        style={{ backgroundColor: accent, filter: 'saturate(1.4)' }}
      />

      <div className="flex flex-1 flex-col p-7">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          {/* Icon */}
          <div
            className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundColor: accent }}
          >
            <Icon size={22} style={{ color: iconColor }} />
          </div>

          {/* Index tag */}
          <span className="mt-1 rounded-full border border-stone-100 bg-stone-50 px-3 py-1 font-mono text-[11px] font-semibold tracking-[0.18em] text-stone-400">
            {tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-5 font-display text-[1.35rem] font-black leading-tight tracking-[-0.04em] text-stone-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-[14px] leading-[1.8] text-stone-500">{description}</p>

        {/* Bullets */}
        <ul className="mt-6 flex flex-1 flex-col gap-2.5">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 rounded-xl border border-stone-50 bg-stone-50/80 px-4 py-3"
            >
              <span
                className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ backgroundColor: iconColor }}
              />
              <span className="text-[13px] leading-snug text-stone-600">{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <motion.div
          className="mt-7 border-t border-stone-50 pt-5"
          initial={false}
        >
          <Link
            to="/services"
            className="group/link inline-flex items-center gap-2 text-[13px] font-bold tracking-tight"
            style={{ color: iconColor }}
          >
            View service details
            <motion.span
              className="inline-flex"
              animate={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={14} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}

/* ─── Section header word-by-word reveal ────────────────────────── */
function SplitHeadline({ text }) {
  const words = text.split(' ');
  return (
    <h2 className="font-display text-[2.4rem] font-black leading-[1.08] tracking-[-0.04em] text-stone-900 sm:text-[3rem]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
            show: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: i * 0.045 },
            },
          }}
          className="mr-[0.28em] inline-block"
        >
          {i === 4 || i === 6 ? (
            <em className="not-italic text-violet-600">{word}</em>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </h2>
  );
}

/* ─── Main export ────────────────────────────────────────────────── */
export default function ServiceOverview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-32"
    >
      {/* ── Noise overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Orbs ── */}
      <div className="absolute -left-20 top-1/4 -z-10 h-80 w-80 rounded-full bg-violet-100/50 blur-[120px]" />
      <div className="absolute -right-10 bottom-20 -z-10 h-64 w-64 rounded-full bg-blue-100/40 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {/* ── Section label + header ── */}
          <motion.div variants={fadeUp} className="mx-auto mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600">
              <Sparkles size={10} className="fill-violet-400 text-violet-400" />
              Services
            </span>
          </motion.div>

          <motion.div variants={containerVariants} className="mx-auto mb-5 max-w-3xl text-center">
            <SplitHeadline text="Growth systems designed to feel calm and conversion-ready." />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-16 max-w-xl text-center text-[15px] leading-[1.8] text-stone-500"
          >
            Each service reduces friction, sharpens positioning, and moves visitors toward
            their next confident step.
          </motion.p>

          {/* ── Horizontal rule with "04 services" label ── */}
          <motion.div
            variants={fadeUp}
            className="mb-10 flex items-center gap-4"
          >
            <div className="h-px flex-1 bg-stone-100" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-300">
              04 services
            </span>
            <div className="h-px flex-1 bg-stone-100" />
          </motion.div>

          {/* ── Cards grid ── */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </motion.div>

          {/* ── Bottom CTA strip ── */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <p className="text-[14px] text-stone-400">
              Not sure which service fits best?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-[13px] font-semibold text-white shadow-[0_2px_20px_rgba(0,0,0,0.18)] transition-shadow hover:shadow-[0_4px_28px_rgba(0,0,0,0.26)]"
            >
              Book a free consultation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}