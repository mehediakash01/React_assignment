import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BarChart3, Calendar, Globe2, Search } from 'lucide-react';

export default function Hero() {
  const servicePills = ['Web Development', 'SEO Strategy', 'Paid Campaigns', 'Booking Systems'];
  const metrics = [
    { value: '3.4x', label: 'more qualified leads' },
    { value: '42%', label: 'lift in organic traffic' },
    { value: '14d', label: 'average launch sprint' },
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(199,155,99,0.22),transparent_55%)]" />
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container-x w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="tag mb-6">Digital Growth Studio</span>
            <h1 className="section-title max-w-3xl">
              Calm, conversion-ready websites for ambitious brands.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Kodawave blends web development, SEO, online advertising, and smart booking systems into one polished growth engine built to look premium and perform hard.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {servicePills.map((pill) => (
                <span key={pill} className="rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur">
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {metrics.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                  className="panel p-5 text-left"
                >
                  <p className="text-3xl font-display text-dark">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-2xl"
          >
            <div className="absolute left-4 top-8 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute bottom-0 right-4 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-panel relative overflow-hidden p-6 sm:p-8"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(255,255,255,0.08))]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/55">
                      Growth Snapshot
                    </p>
                    <h2 className="mt-3 text-3xl font-display text-dark sm:text-4xl">
                      Launch plan that feels premium at every touchpoint
                    </h2>
                  </div>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Live
                  </span>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    { icon: Globe2, title: 'Build', copy: 'Fast, responsive product sites' },
                    { icon: Search, title: 'Rank', copy: 'Organic growth foundations' },
                    { icon: Calendar, title: 'Operate', copy: 'Booking and workflows synced' },
                  ].map(({ icon: Icon, title, copy }) => (
                    <div key={title} className="rounded-3xl border border-black/5 bg-white/85 p-4 text-left">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-dark">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[28px] border border-primary/10 bg-light/80 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/55">
                        Performance Trend
                      </p>
                      <p className="mt-3 text-2xl font-display text-dark">+186% organic sessions</p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                      <BarChart3 size={20} />
                    </div>
                  </div>

                  <div className="mt-6 flex items-end gap-3">
                    {[32, 56, 44, 70, 64, 92, 118].map((height) => (
                      <div key={height} className="w-full rounded-full bg-primary/10 p-1">
                        <div
                          className="w-full rounded-full bg-gradient-to-t from-primary via-primary/90 to-secondary/80"
                          style={{ height }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
