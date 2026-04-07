import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Laptop, Megaphone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Animation Presets ─────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } 
  },
};

/* ─── Floating Icon Component ───────────────────────────────────── */
function FloatingIcon({ icon: Icon, className = "", delay = 0, size = 82 }) {
  return (
    <motion.div
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 6, -6, 0]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      className={`absolute text-violet-300/30 hidden lg:block ${className}`}
    >
      <Icon size={size} strokeWidth={1.3} />
    </motion.div>
  );
}

/* ─── Ticker ────────────────────────────────────────────────────── */
function Ticker() {
  const items = ['Web Development', 'SEO Strategy', 'Online Advertising', 'Booking Systems', 'Conversion Optimization'];
  return (
    <div className="relative mt-10 md:mt-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 md:w-12 bg-gradient-to-r from-[#faf8f5] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 md:w-12 bg-gradient-to-l from-[#faf8f5] to-transparent" />
      
      <motion.div
        className="flex gap-3 md:gap-4 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-xs md:text-sm font-medium tracking-tight text-stone-600 shadow-sm backdrop-blur"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Main Hero Component ───────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[#faf8f5] pt-16 pb-16 lg:pt-20 lg:pb-24">
      
      {/* Background Orbs - Responsive */}
      <div className="absolute left-1/3 top-12 h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-violet-200/30 blur-[120px] -z-10" />
      <div className="absolute right-1/4 bottom-12 h-[350px] w-[350px] md:h-[450px] md:w-[450px] rounded-full bg-pink-200/20 blur-[110px] -z-10" />

      <div className="mx-auto max-w-5xl px-5 md:px-6 text-center relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 md:px-5 md:py-2 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-violet-600">
              <Sparkles size={14} className="text-violet-500" />
              DIGITAL GROWTH STUDIO
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-black leading-[1.05] tracking-[-0.03em] text-stone-900 px-2"
          >
            Digital experiences that{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              convert
            </span>{' '}
            with clarity.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="mt-6 md:mt-8 max-w-xl md:max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-stone-600 leading-relaxed px-2"
          >
            We build high-converting websites, SEO systems, advertising campaigns, 
            and seamless online booking experiences for ambitious brands.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-3xl bg-stone-900 px-8 md:px-10 py-4 text-base md:text-lg font-semibold text-white shadow-xl hover:shadow-2xl w-full sm:w-auto"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 rounded-3xl border-2 border-stone-300 bg-white px-8 md:px-10 py-4 text-base md:text-lg font-semibold text-stone-700 hover:border-stone-400 w-full sm:w-auto"
              >
                View Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Ticker */}
          <motion.div variants={fadeUp}>
            <Ticker />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Icons - Hidden on mobile, visible on lg and above */}
      <FloatingIcon 
        icon={TrendingUp} 
        className="top-24 right-6 lg:right-16 xl:right-32" 
        delay={0.5} 
      />

      <FloatingIcon 
        icon={Laptop} 
        className="bottom-32 left-6 lg:left-16 xl:left-28" 
        delay={1.3} 
      />

      <FloatingIcon 
        icon={Megaphone} 
        className="top-52 left-8 lg:left-24 text-6xl" 
        delay={2.2} 
        size={62}
      />

      <FloatingIcon 
        icon={Calendar} 
        className="bottom-44 right-8 lg:right-28 text-6xl" 
        delay={3.4} 
        size={58}
      />
    </section>
  );
}