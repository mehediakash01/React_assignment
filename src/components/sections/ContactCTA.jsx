import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
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

/* Animated word-split headline */
function SplitHeadline({ text }) {
  const words = text.split(' ');
  return (
    <h2 className="font-display text-[2.8rem] font-black leading-[1.06] tracking-[-0.04em] text-white sm:text-[3.6rem] lg:text-[4.4rem]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
            show: {
              opacity: 1, y: 0, filter: 'blur(0px)',
              transition: { duration: 0.65, ease: EASE_OUT_EXPO, delay: i * 0.04 },
            },
          }}
          className="mr-[0.22em] inline-block"
        >
          {i === 3 ? <em className="not-italic text-violet-300">{word}</em> : word}
        </motion.span>
      ))}
    </h2>
  );
}

export default function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-32">
      {/* Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Dark card */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] bg-stone-900 px-8 py-16 sm:px-14 lg:px-20 lg:py-20"
          >
            {/* Inner orbs */}
            <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-indigo-500/15 blur-[90px]" />
            <div className="absolute left-1/2 top-1/2 h-40 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/8 blur-[80px]" />

            {/* Noise on dark card */}
            <div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-[0.04]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
            />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              {/* Badge */}
              <motion.div variants={fadeUp} className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                  <Sparkles size={10} className="fill-violet-400 text-violet-400" />
                  Start a Project
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={stagger} className="mt-7">
                <SplitHeadline text="Ready to turn your website into your clearest brand expression?" />
              </motion.div>

              {/* Sub */}
              <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-lg text-[15px] leading-[1.8] text-stone-400">
                Book a consultation and we'll map the highest-impact improvements across messaging, design, SEO, and conversion flow.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <motion.div whileHover={{ scale: 1.025, y: -1 }} whileTap={{ scale: 0.975 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-bold text-stone-900 shadow-[0_2px_20px_rgba(255,255,255,0.15)] transition-shadow hover:shadow-[0_4px_32px_rgba(255,255,255,0.22)]"
                  >
                    Schedule consultation <ArrowRight size={15} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.025, y: -1 }} whileTap={{ scale: 0.975 }}>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-800/60 px-7 py-3.5 text-[14px] font-semibold text-stone-300 backdrop-blur transition-colors hover:border-stone-600"
                  >
                    Review services
                  </Link>
                </motion.div>
              </motion.div>

              {/* Micro trust row */}
              <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-6">
                {['Free onboarding call', 'No lock-in contracts', '14-day launch sprint'].map((item, i) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-stone-600" />
                    <span className="text-[12px] text-stone-500">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}