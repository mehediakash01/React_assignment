import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BarChart3, Calendar, Globe2, Search, Sparkles, TrendingUp } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

/* ─── Easing presets ────────────────────────────────────────────── */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
const EASE_IN_OUT  = [0.76, 0, 0.24, 1];

/* ─── Stagger container ─────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { duration: 0.75, ease: EASE_OUT_EXPO } },
};

/* ─── Marquee ticker ─────────────────────────────────────────────── */
const TICKER_ITEMS = [
  'Web Development', 'SEO Strategy', 'Online Advertising',
  'Booking Systems', 'Conversion Funnels', 'Brand Identity',
];

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative mt-8 sm:mt-10 overflow-hidden" aria-hidden>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16 bg-gradient-to-r from-[#faf8f5] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16 bg-gradient-to-l from-[#faf8f5] to-transparent" />
      <motion.div
        className="flex gap-2 sm:gap-3"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 rounded-full border border-stone-200 bg-white/80 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-[13px] font-medium tracking-tight text-stone-600 shadow-sm backdrop-blur"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Metric pill ────────────────────────────────────────────────── */
function MetricPill({ value, label, delay }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay }}
      className="group flex flex-col gap-0.5 rounded-2xl border border-stone-100 bg-white px-5 py-4 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]"
    >
      <span className="font-display text-[2rem] font-black leading-none tracking-[-0.05em] text-stone-900">
        {value}
      </span>
      <span className="text-[13px] text-stone-500">{label}</span>
    </motion.div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────── */
export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const metrics = [
    { value: '3.4×', label: 'more qualified leads' },
    { value: '42%',  label: 'organic traffic lift'  },
    { value: '14d',  label: 'average launch sprint'  },
  ];

  const bars = [32, 56, 44, 70, 64, 92, 118];

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#faf8f5] pb-20 pt-12 sm:pb-32 md:pb-40 lg:pt-24 lg:pb-48"
    >
      {/* ── Noise texture overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* ── Orb blurs ── */}
      <div className="absolute -top-32 left-1/4 -z-10 h-80 w-80 rounded-full bg-violet-200/40 blur-[100px] md:h-96 md:w-96 md:blur-[120px] lg:h-[480px] lg:w-[480px]" />
      <div className="absolute right-0 top-10 -z-10 h-64 w-64 rounded-full bg-amber-100/60 blur-[80px] md:h-72 md:w-72 md:blur-[100px] lg:h-96 lg:w-96" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 xl:px-10">
        {/* ── Main grid ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-start gap-8 sm:gap-12 md:gap-16 lg:grid-cols-[1fr_minmax(380px,480px)] lg:gap-8 xl:gap-12 2xl:gap-16"
        >
          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-violet-600">
                <Sparkles size={11} className="fill-violet-400 text-violet-400" />
                Calm Growth Systems
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-7 max-w-3xl font-display text-[2.5rem] font-black leading-[1.04] tracking-[-0.04em] text-stone-900 sm:text-[3.5rem] md:text-[4rem] lg:text-5xl xl:text-6xl 2xl:text-7xl"
            >
              Digital experiences that{' '}
              <em className="not-italic text-violet-600">convert</em>{' '}
              with clarity.
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-[17px] leading-[1.75] text-stone-500"
            >
              Kodawave designs high-end websites and growth systems for teams that need web
              development, SEO, advertising, and online booking — in one polished ecosystem.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.025, y: -1 }} whileTap={{ scale: 0.975 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_2px_20px_rgba(0,0,0,0.2)] transition-shadow hover:shadow-[0_4px_28px_rgba(0,0,0,0.28)]"
                >
                  Get Free Consultation <ArrowRight size={15} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.025, y: -1 }} whileTap={{ scale: 0.975 }}>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-7 py-3.5 text-[14px] font-semibold text-stone-700 shadow-sm transition-colors hover:border-stone-300"
                >
                  Explore Services <ArrowUpRight size={15} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Ticker */}
            <motion.div variants={fadeUp}>
              <Ticker />
            </motion.div>

            {/* Metrics row */}
            <motion.div
              variants={container}
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:max-w-lg"
            >
              {metrics.map((m, i) => (
                <MetricPill key={m.label} {...m} delay={0.55 + i * 0.07} />
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.3 }}
            className="relative mx-auto w-full max-w-lg lg:sticky lg:top-6 lg:mx-0"
          >
            {/* Floating tag top-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.95, duration: 0.55, ease: EASE_OUT_EXPO }}
              className="absolute -right-3 -top-4 z-20 flex items-center gap-1.5 rounded-full bg-emerald-500 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              Live
            </motion.div>

            {/* Main card */}
            <div className="overflow-hidden rounded-[28px] border border-stone-100 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.10)]">
              {/* Card header */}
              <div className="border-b border-stone-50 px-6 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                  Growth Snapshot
                </p>
                <h2 className="mt-2 font-display text-[1.45rem] font-black leading-snug tracking-tight text-stone-900">
                  From traffic to booked conversations.
                </h2>
              </div>

              {/* Service trio */}
              <div className="grid grid-cols-3 divide-x divide-stone-50 border-b border-stone-50">
                {[
                  { icon: Globe2,    title: 'Build',  sub: 'Premium front-end polish' },
                  { icon: Search,    title: 'Rank',   sub: 'SEO-ready architecture'    },
                  { icon: Calendar,  title: 'Book',   sub: 'Connected booking flows'   },
                ].map(({ icon: Icon, title, sub }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + i * 0.09, duration: 0.5, ease: EASE_OUT_EXPO }}
                    className="group flex flex-col items-center gap-2 px-3 py-5 text-center transition-colors hover:bg-stone-50/70"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={17} className="text-violet-600" />
                    </div>
                    <span className="text-[13px] font-bold text-stone-800">{title}</span>
                    <span className="text-[11px] leading-4 text-stone-400">{sub}</span>
                  </motion.div>
                ))}
              </div>

              {/* Chart block */}
              <div className="px-6 py-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                      Performance Trend
                    </p>
                    <p className="mt-1.5 font-display text-[1.65rem] font-black tracking-[-0.04em] text-stone-900">
                      +186%
                    </p>
                    <p className="text-[12px] text-stone-400">organic sessions</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 shadow-[0_4px_16px_rgba(124,58,237,0.35)]">
                    <TrendingUp size={17} className="text-white" />
                  </div>
                </div>

                {/* Bars */}
                <div className="mt-5 flex items-end gap-1.5">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 overflow-hidden rounded-t-full"
                      style={{ backgroundColor: 'rgb(245 245 244)' }}
                    >
                      <motion.div
                        className="w-full rounded-t-full bg-gradient-to-t from-violet-600 to-indigo-400"
                        initial={{ height: 0 }}
                        animate={{ height: h * 0.68 }}
                        transition={{ delay: 0.7 + i * 0.07, duration: 0.7, ease: EASE_OUT_EXPO }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* X-axis months */}
                <div className="mt-2 flex gap-1.5 text-[10px] text-stone-300">
                  {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'].map((m) => (
                    <span key={m} className="flex-1 text-center">{m}</span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-stone-50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {['#e0e7ff', '#ede9fe', '#ddd6fe'].map((c, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    <Link
                      to="/contact"
                      className="flex items-center gap-1.5 text-[13px] font-semibold text-violet-600 hover:text-violet-700"
                    >
                      Start your sprint <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0,   y: 0  }}
              transition={{ delay: 1.05, duration: 0.6, ease: EASE_OUT_EXPO }}
              className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-stone-100 bg-white px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.09)] md:flex md:flex-col md:gap-0.5 lg:-bottom-6 lg:-left-6"
            >
              <span className="text-[11px] text-stone-400">Avg. Leads / Month</span>
              <span className="font-display text-xl font-black tracking-tight text-stone-900">↑ 340%</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0,  y: 0   }}
              transition={{ delay: 1.15, duration: 0.6, ease: EASE_OUT_EXPO }}
              className="absolute -right-4 top-1/3 hidden rounded-2xl border border-stone-100 bg-white px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.09)] md:flex md:flex-col md:gap-0.5 lg:-right-6"
            >
              <span className="text-[11px] text-stone-400">Launch Sprint</span>
              <span className="font-display text-xl font-black tracking-tight text-stone-900">14 days</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}