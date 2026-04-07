import { motion, useInView } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { useRef } from 'react';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: EASE_OUT_EXPO } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    content: 'Kodawave made our portfolio feel premium, focused, and surprisingly easy to maintain. Traffic increased 300% in three months.',
    rating: 5,
    accent: '#ede9fe',
    accentText: '#7c3aed',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GrowthHub',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    content: 'The team is professional, responsive, and delivers. The 3D visuals and calm aesthetic instantly lifted our agency above competitors.',
    rating: 5,
    accent: '#dbeafe',
    accentText: '#2563eb',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Marketing Director, InnovateLabs',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    content: 'Setup was seamless and every section already looked like thoughtful client work. Clients keep complimenting the site — Kodawave quietly does the selling.',
    rating: 5,
    accent: '#dcfce7',
    accentText: '#16a34a',
  },
];

/* Marquee strip (reverse direction) */
const TICKER_ITEMS = [
  '"300% traffic lift in 90 days"',
  '"Delivered in 14 days, exactly as promised"',
  '"Best agency experience we have had"',
  '"Clients compliment the site constantly"',
  '"Inquiries doubled within weeks"',
  '"Like thoughtful client work, every section"',
];

function Marquee() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative mt-14 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#faf8f5] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#faf8f5] to-transparent" />
      <motion.div
        className="flex gap-3"
        animate={{ x: ['-50%', '0%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex-shrink-0 rounded-full border border-stone-100 bg-white px-5 py-2.5 text-[13px] italic text-stone-500 shadow-sm">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function TestimonialCard({ t, index }) {
  return (
    <motion.article
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 40, filter: 'blur(5px)' },
        show: {
          opacity: 1, y: 0, filter: 'blur(0px)',
          transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay: index * 0.1 },
        },
      }}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE_OUT_EXPO } }}
      className="group flex flex-col overflow-hidden rounded-[24px] border border-stone-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-shadow duration-500 hover:shadow-[0_14px_52px_rgba(0,0,0,0.10)]"
    >
      {/* Color strip */}
      <div className="h-1.5 w-full transition-all duration-500 group-hover:h-2" style={{ backgroundColor: t.accent, filter: 'saturate(1.5)' }} />

      <div className="flex flex-1 flex-col p-7">
        {/* Stars */}
        <div className="flex gap-1">
          {Array(t.rating).fill(0).map((_, i) => (
            <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="mt-5 flex-1 text-[15px] leading-[1.8] text-stone-700">
          "{t.content}"
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-stone-50" />

        {/* Author */}
        <div className="flex items-center gap-3">
          <img
            src={t.image}
            alt={t.name}
            className="h-11 w-11 flex-shrink-0 rounded-full border-2 border-white object-cover shadow-[0_4px_12px_rgba(0,0,0,0.10)]"
          />
          <div>
            <p className="text-[14px] font-bold tracking-tight text-stone-900">{t.name}</p>
            <p className="text-[12px] text-stone-400">{t.role}</p>
          </div>
          {/* Accent dot */}
          <div className="ml-auto h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: t.accent, filter: 'saturate(1.8)' }} />
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials({
  kicker = 'Testimonials',
  title = 'What clients say after launch',
  subtitle = 'Teams come to Kodawave for sharper design, clearer messaging, and a launch process that feels thoughtfully managed.',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-32">
      {/* Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
      />
      <div className="absolute left-1/2 top-0 -z-10 h-64 w-[700px] -translate-x-1/2 rounded-full bg-amber-50/80 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>

          {/* Header */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600">
              <Sparkles size={10} className="fill-violet-400 text-violet-400" />
              {kicker}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-center font-display text-[2.6rem] font-black leading-[1.06] tracking-[-0.04em] text-stone-900 sm:text-[3.2rem]"
          >
            {title.split(' ').map((word, i) => (
              <motion.span key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
                  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: i * 0.045 } },
                }}
                className="mr-[0.22em] inline-block"
              >
                {i === 2 ? <em className="not-italic text-violet-600">{word}</em> : word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-lg text-center text-[15px] leading-[1.8] text-stone-500">
            {subtitle}
          </motion.p>

          {/* Divider */}
          <motion.div variants={fadeUp} className="mb-12 mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-stone-100" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-300">03 reviews</span>
            <div className="h-px flex-1 bg-stone-100" />
          </motion.div>

          {/* Cards */}
          <motion.div variants={stagger} className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} />
            ))}
          </motion.div>

          {/* Marquee quotes */}
          <motion.div variants={fadeUp}>
            <Marquee />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}