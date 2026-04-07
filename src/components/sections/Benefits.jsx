import { motion, useInView } from 'framer-motion';
import { Sparkles, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { useRef } from 'react';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: EASE_OUT_EXPO } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const benefits = [
  {
    icon: TrendingUp,
    title: 'Rapid Growth',
    description: 'Measurable results in weeks, not months. Built for steady momentum and cleaner handoff.',
    accent: '#ede9fe',
    iconColor: '#7c3aed',
    stat: '3.4×',
    statLabel: 'avg. lead lift',
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Messaging, SEO, and campaign strategy aligned so the right audience lands on the right offer.',
    accent: '#dbeafe',
    iconColor: '#2563eb',
    stat: '42%',
    statLabel: 'organic traffic',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Senior-minded collaborators who shape both strategy and front-end execution together.',
    accent: '#dcfce7',
    iconColor: '#16a34a',
    stat: '8yr',
    statLabel: 'avg. experience',
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'We move quickly with a calmer process that keeps revision loops focused and practical.',
    accent: '#fef3c7',
    iconColor: '#d97706',
    stat: '14d',
    statLabel: 'avg. launch',
  },
];

function BenefitCard({ benefit, index }) {
  const { icon: Icon, title, description, accent, iconColor, stat, statLabel } = benefit;
  return (
    <motion.div
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 36, filter: 'blur(5px)' },
        show: {
          opacity: 1, y: 0, filter: 'blur(0px)',
          transition: { duration: 0.75, ease: EASE_OUT_EXPO, delay: index * 0.09 },
        },
      }}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE_OUT_EXPO } }}
      className="group flex flex-col overflow-hidden rounded-[22px] border border-stone-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-shadow duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.10)]"
    >
      {/* Top color strip */}
      <div className="h-1.5 w-full transition-all duration-500 group-hover:h-2" style={{ backgroundColor: accent, filter: 'saturate(1.5)' }} />

      <div className="flex flex-1 flex-col p-6">
        {/* Icon + stat */}
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: accent }}>
            <Icon size={20} style={{ color: iconColor }} />
          </div>
          <div className="text-right">
            <p className="font-display text-[1.6rem] font-black leading-none tracking-[-0.05em] text-stone-900">{stat}</p>
            <p className="mt-0.5 text-[11px] text-stone-400">{statLabel}</p>
          </div>
        </div>

        <h3 className="mt-5 font-display text-[1.15rem] font-black tracking-[-0.03em] text-stone-900">{title}</h3>
        <p className="mt-2.5 text-[13.5px] leading-[1.75] text-stone-500">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-32">
      {/* Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
      />
      <div className="absolute left-1/2 top-0 -z-10 h-64 w-[600px] -translate-x-1/2 rounded-full bg-violet-50/60 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>

          {/* Two-col layout: left text / right grid */}
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-16">

            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600">
                  <Sparkles size={10} className="fill-violet-400 text-violet-400" />
                  Why Kodawave
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mt-6 font-display text-[2.4rem] font-black leading-[1.06] tracking-[-0.04em] text-stone-900 sm:text-[3rem]"
              >
                Sharper thinking,{' '}
                <em className="not-italic text-violet-600">higher standard</em>{' '}
                for digital detail.
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-5 text-[15px] leading-[1.8] text-stone-500">
                We pair strategy with design discipline and practical execution — so the final experience feels premium, calm, and ready to support growth.
              </motion.p>

              {/* Quote card */}
              <motion.div
                variants={fadeUp}
                className="mt-8 overflow-hidden rounded-[20px] border border-stone-100 bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.05)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">What clients get</p>
                <p className="mt-3 text-[15px] leading-[1.75] text-stone-700">
                  Clear positioning, premium visual polish, and a delivery process that keeps momentum steady without unnecessary chaos.
                </p>
                {/* Colored bar */}
                <div className="mt-5 flex gap-1">
                  {['#ede9fe', '#dbeafe', '#dcfce7', '#fef3c7'].map((c) => (
                    <div key={c} className="h-1 flex-1 rounded-full" style={{ backgroundColor: c, filter: 'saturate(1.6)' }} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: 2×2 grid */}
            <motion.div variants={stagger} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => <BenefitCard key={b.title} benefit={b} index={i} />)}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}