import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: EASE_OUT_EXPO } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const packages = [
  {
    name: 'Starter',
    eyebrow: 'Launch Basics',
    price: 299,
    description: 'Perfect for startups finding their footing online.',
    features: ['Basic website design', 'SEO optimization', '5 pages', 'Mobile responsive', 'Email support'],
    cta: 'Get started',
    accent: '#f5f3ff',
    tag: '01',
  },
  {
    name: 'Growth',
    eyebrow: 'Most Popular',
    price: 799,
    description: 'For growing businesses ready to scale their digital presence.',
    features: ['Advanced web development', 'Full SEO suite', 'Unlimited pages', 'Analytics integration', 'Advertising setup', 'Priority support', 'Monthly reports'],
    cta: 'Start growing',
    accent: '#1c1917',
    highlighted: true,
    tag: '02',
  },
  {
    name: 'Premium',
    eyebrow: 'Scale & Systemize',
    price: 1499,
    description: 'Enterprise-grade solutions for teams that demand full coverage.',
    features: ['Custom web applications', 'Complete digital marketing', 'E-commerce integration', 'Booking system', 'API development', '24/7 dedicated support', 'Strategic consulting', 'Custom integrations'],
    cta: 'Talk to us',
    accent: '#faf8f5',
    tag: '03',
  },
];

function PricingCard({ pkg, index }) {
  const isHighlighted = pkg.highlighted;
  return (
    <motion.article
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 44, filter: 'blur(5px)' },
        show: {
          opacity: 1, y: 0, filter: 'blur(0px)',
          transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay: index * 0.11 },
        },
      }}
      whileHover={{ y: -7, transition: { duration: 0.38, ease: EASE_OUT_EXPO } }}
      className={`relative flex flex-col overflow-hidden rounded-[26px] border ${
        isHighlighted
          ? 'border-stone-700 bg-stone-900'
          : 'border-stone-100 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
      } transition-shadow duration-500 hover:shadow-[0_16px_60px_rgba(0,0,0,0.12)]`}
    >
      {/* Eyebrow + tag row */}
      <div className={`flex items-center justify-between px-7 pt-7`}>
        <span className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${isHighlighted ? 'text-stone-400' : 'text-stone-400'}`}>
          {pkg.eyebrow}
        </span>
        <span className={`font-mono text-[11px] font-semibold tracking-[0.15em] ${isHighlighted ? 'text-stone-600' : 'text-stone-300'}`}>
          {pkg.tag}
        </span>
      </div>

      {/* Title */}
      <div className="px-7 pt-4">
        <h3 className={`font-display text-[2rem] font-black tracking-[-0.05em] ${isHighlighted ? 'text-white' : 'text-stone-900'}`}>
          {pkg.name}
        </h3>
        <p className={`mt-2 text-[14px] leading-relaxed ${isHighlighted ? 'text-stone-400' : 'text-stone-500'}`}>
          {pkg.description}
        </p>
      </div>

      {/* Price */}
      <div className={`mx-7 mt-7 border-t ${isHighlighted ? 'border-stone-800' : 'border-stone-50'} pt-6`}>
        <div className="flex items-baseline gap-1">
          <span className={`font-display text-[3.2rem] font-black leading-none tracking-[-0.06em] ${isHighlighted ? 'text-white' : 'text-stone-900'}`}>
            ${pkg.price}
          </span>
          <span className={`text-[13px] font-medium ${isHighlighted ? 'text-stone-500' : 'text-stone-400'}`}>/mo</span>
        </div>
      </div>

      {/* CTA */}
      <div className="px-7 pt-6">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.975 }}>
          <Link
            to="/contact"
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[13px] font-bold transition-opacity hover:opacity-90 ${
              isHighlighted
                ? 'bg-white text-stone-900'
                : 'bg-stone-900 text-white'
            }`}
          >
            {pkg.cta} <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      {/* Divider */}
      <div className={`mx-7 mt-7 h-px ${isHighlighted ? 'bg-stone-800' : 'bg-stone-50'}`} />

      {/* Features */}
      <ul className="flex flex-1 flex-col gap-2.5 px-7 py-6">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-center gap-3">
            <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${isHighlighted ? 'bg-stone-800' : 'bg-stone-50'}`}>
              <Check size={11} className={isHighlighted ? 'text-stone-300' : 'text-stone-500'} />
            </span>
            <span className={`text-[13px] ${isHighlighted ? 'text-stone-300' : 'text-stone-600'}`}>{f}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-32">
      {/* Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
      />
      <div className="absolute -right-20 top-10 -z-10 h-80 w-80 rounded-full bg-violet-100/40 blur-[120px]" />
      <div className="absolute -left-10 bottom-20 -z-10 h-64 w-64 rounded-full bg-amber-100/30 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>

          {/* Header */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600">
              <Sparkles size={10} className="fill-violet-400 text-violet-400" />
              Pricing
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-center font-display text-[2.6rem] font-black leading-[1.06] tracking-[-0.04em] text-stone-900 sm:text-[3.2rem]"
          >
            Packages built for{' '}
            <em className="not-italic text-violet-600">clarity</em> and momentum.
          </motion.h2>

          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-[1.8] text-stone-500">
            Choose the engagement level that fits your stage now, with room to scale into deeper strategy later.
          </motion.p>

          {/* Divider */}
          <motion.div variants={fadeUp} className="mb-12 mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-stone-100" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-300">03 packages</span>
            <div className="h-px flex-1 bg-stone-100" />
          </motion.div>

          {/* Cards */}
          <motion.div variants={stagger} className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {packages.map((pkg, i) => <PricingCard key={pkg.name} pkg={pkg} index={i} />)}
          </motion.div>

          {/* Footer note */}
          <motion.p variants={fadeUp} className="mt-10 text-center text-[13px] text-stone-400">
            All plans include a free onboarding call. No lock-in contracts.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}