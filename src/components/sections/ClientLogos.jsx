import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useRef } from 'react';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(5px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: EASE_OUT_EXPO } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const clients = [
  { name: 'TechFlow',    initial: 'T', accent: '#ede9fe', iconColor: '#7c3aed' },
  { name: 'GrowthHub',   initial: 'G', accent: '#dbeafe', iconColor: '#2563eb' },
  { name: 'InnovateLabs',initial: 'I', accent: '#dcfce7', iconColor: '#16a34a' },
  { name: 'DigitalPeak', initial: 'D', accent: '#fef3c7', iconColor: '#d97706' },
  { name: 'CloudVision', initial: 'C', accent: '#fce7f3', iconColor: '#db2777' },
  { name: 'NextWave',    initial: 'N', accent: '#f0fdf4', iconColor: '#15803d' },
];

/* Marquee strip */
const TICKER = ['800K+ freelancers', '20K+ teams', '150+ active clients', 'Trusted globally', 'No lock-in contracts', '5-star rated'];

function Marquee() {
  const doubled = [...TICKER, ...TICKER];
  return (
    <div className="relative mt-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#faf8f5] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#faf8f5] to-transparent" />
      <motion.div
        className="flex gap-3"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex-shrink-0 rounded-full border border-stone-100 bg-white px-4 py-2 text-[12px] font-semibold text-stone-500 shadow-sm">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ClientLogos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#faf8f5] py-20 sm:py-24">
      {/* Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>

          {/* Header row */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600">
                  <Sparkles size={10} className="fill-violet-400 text-violet-400" />
                  Trusted By Partners
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-5 font-display text-[2.2rem] font-black leading-[1.08] tracking-[-0.04em] text-stone-900 sm:text-[2.8rem]"
              >
                Brands that trust{' '}
                <em className="not-italic text-violet-600">LuminaStudio</em>.
              </motion.h2>
            </div>

            {/* Stat pill */}
            <motion.div
              variants={fadeUp}
              className="flex-shrink-0 self-start rounded-2xl border border-stone-100 bg-white px-5 py-4 shadow-[0_2px_16px_rgba(0,0,0,0.05)] lg:self-auto"
            >
              <p className="font-display text-[2rem] font-black leading-none tracking-[-0.05em] text-stone-900">150+</p>
              <p className="mt-1 text-[12px] text-stone-400">active client relationships</p>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div variants={fadeUp} className="my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-stone-100" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-300">06 partners</span>
            <div className="h-px flex-1 bg-stone-100" />
          </motion.div>

          {/* Logo grid */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                custom={i}
                variants={{
                  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
                  show: {
                    opacity: 1, y: 0, filter: 'blur(0px)',
                    transition: { duration: 0.65, ease: EASE_OUT_EXPO, delay: i * 0.07 },
                  },
                }}
                whileHover={{ y: -5, transition: { duration: 0.3, ease: EASE_OUT_EXPO } }}
                className="group flex flex-col items-center gap-3 overflow-hidden rounded-[20px] border border-stone-100 bg-white px-4 py-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow duration-400 hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)]"
              >
                {/* Monogram */}
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl font-display text-lg font-black transition-transform duration-400 group-hover:scale-105"
                  style={{ backgroundColor: client.accent, color: client.iconColor }}
                >
                  {client.initial}
                </div>
                <span className="text-center text-[12px] font-semibold leading-tight tracking-tight text-stone-600">
                  {client.name}
                </span>
                {/* Bottom accent line */}
                <div className="h-0.5 w-8 rounded-full opacity-0 transition-all duration-400 group-hover:opacity-100" style={{ backgroundColor: client.iconColor }} />
              </motion.div>
            ))}
          </motion.div>

          {/* Marquee */}
          <motion.div variants={fadeUp}>
            <Marquee />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}