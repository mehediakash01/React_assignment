import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BarChart3, Calendar, Globe2, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingIcon from '../common/FloatingIcon';
import { MotionItem, MotionSection } from '../common/MotionSection';

export default function Hero() {
  const servicePills = ['Web Development', 'SEO Strategy', 'Online Advertising', 'Booking Systems'];
  const metrics = [
    { value: '3.4x', label: 'more qualified leads' },
    { value: '42%', label: 'organic traffic lift' },
    { value: '14d', label: 'average launch sprint' },
  ];

  return (
    <section className="relative overflow-hidden pb-24 pt-14 sm:pb-28 lg:pb-32 lg:pt-20">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#faf5ff_0%,#f8f2ff_42%,#f3e8ff_100%)]" />
      <div className="absolute left-[-8%] top-20 -z-10 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
      <div className="absolute right-[-6%] top-16 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-[radial-gradient(circle_at_bottom,rgba(124,58,237,0.12),transparent_60%)]" />

      <div className="container-x">
        <MotionSection className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div className="relative z-10">
            <MotionItem>
              <span className="tag gap-2">
                <Sparkles size={12} />
                Calm Growth Systems For Modern Brands
              </span>
            </MotionItem>

            <MotionItem>
              <h1 className="section-title mt-6 max-w-4xl text-[2.9rem] sm:text-6xl lg:text-[4.75rem]">
                Premium digital experiences that feel effortless and convert with clarity.
              </h1>
            </MotionItem>

            <MotionItem>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Kodawave designs high-end websites and growth systems for teams that need web development, SEO, advertising, and online booking in one calm, polished ecosystem.
              </p>
            </MotionItem>

            <MotionItem className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className="btn-primary px-7 py-4 text-base">
                  Get Free Consultation <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link to="/services" className="btn-secondary px-7 py-4 text-base">
                  Explore Services <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </MotionItem>

            <MotionItem className="mt-8 flex flex-wrap gap-3">
              {servicePills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-3xl border border-primary/10 bg-white/75 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_10px_30px_rgba(124,58,237,0.08)] backdrop-blur-xl"
                >
                  {pill}
                </span>
              ))}
            </MotionItem>

            <MotionItem className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((item) => (
                <div key={item.label} className="lift-card panel px-5 py-5 text-left">
                  <p className="text-3xl font-extrabold tracking-[-0.04em] text-dark">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
                </div>
              ))}
            </MotionItem>
          </div>

          <MotionItem className="relative mx-auto w-full max-w-2xl">
            <FloatingIcon icon={Globe2} label="Website Launch" className="-left-2 top-10 hidden sm:flex lg:-left-10" delay={0.2} />
            <FloatingIcon icon={Search} label="SEO Lift" className="right-2 top-4 hidden sm:flex lg:-right-8" delay={0.35} />
            <FloatingIcon icon={Calendar} label="Booking Flow" className="bottom-14 left-4 hidden sm:flex lg:-left-6" delay={0.5} />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel relative overflow-hidden p-5 sm:p-6 lg:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),rgba(255,255,255,0.45)_38%,rgba(243,232,255,0.55)_100%)]" />
              <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-primary/12 blur-3xl" />
              <div className="absolute bottom-10 left-6 h-28 w-28 rounded-full bg-accent/12 blur-3xl" />

              <div className="relative z-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/55">Growth Snapshot</p>
                    <h2 className="mt-3 max-w-md text-2xl font-extrabold tracking-[-0.05em] text-dark sm:text-3xl">
                      Build a calmer path from traffic to booked conversations.
                    </h2>
                  </div>
                  <div className="self-start rounded-3xl bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-glow">
                    Live
                  </div>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {[
                    { icon: Globe2, title: 'Build', copy: 'Responsive sites with premium front-end polish' },
                    { icon: Search, title: 'Rank', copy: 'Search-ready architecture and content direction' },
                    { icon: Calendar, title: 'Manage', copy: 'Booking systems connected to your workflow' },
                  ].map(({ icon: Icon, title, copy }, index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: 0.08 * index }}
                      className="lift-card rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_12px_36px_rgba(124,58,237,0.08)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold tracking-[-0.03em] text-dark">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-primary/10 bg-white/85 p-5 shadow-[0_14px_40px_rgba(124,58,237,0.08)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/55">Performance Trend</p>
                      <p className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-dark">+186% organic sessions</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glow">
                      <BarChart3 size={20} />
                    </div>
                  </div>

                  <div className="mt-6 flex items-end gap-3">
                    {[32, 56, 44, 70, 64, 92, 118].map((height, index) => (
                      <motion.div
                        key={height}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.05 * index }}
                        className="w-full rounded-full bg-primary/8 p-1"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.7, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                          className="w-full rounded-full bg-gradient-to-t from-primary via-secondary to-accent"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </MotionItem>
        </MotionSection>
      </div>
    </section>
  );
}
