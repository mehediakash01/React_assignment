import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MotionItem, MotionSection } from './MotionSection';

export default function Footer() {
  const services = ['Web Development', 'SEO Optimization', 'Online Advertising', 'Booking Management'];
  const company = ['About Us', 'Blog', 'Contact'];

  return (
    <footer className="relative overflow-hidden px-4 pb-6 pt-10 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-full bg-[linear-gradient(180deg,rgba(31,22,55,0.96)_0%,rgba(15,11,28,1)_100%)]" />
      <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-0 top-16 -z-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-x max-w-[88rem] px-0">
        <MotionSection className="rounded-[36px] border border-white/10 bg-white/5 px-6 py-10 text-white backdrop-blur-2xl sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <MotionItem>
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent text-white shadow-glow">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">Digital Agency</p>
                    <h3 className="text-2xl font-extrabold tracking-[-0.05em] text-white">LuminaStudio</h3>
                  </div>
                </div>

                <h4 className="mt-8 text-3xl font-extrabold tracking-[-0.05em] text-white sm:text-4xl">
                  Premium websites and growth systems designed to feel clear from the very first click.
                </h4>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  We combine strategy, design, SEO, and performance thinking to help ambitious brands look more credible and convert with more confidence.
                </p>

                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="mt-8 inline-flex">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-3xl bg-white px-6 py-4 text-sm font-bold text-primary transition hover:bg-lavender"
                  >
                    Start a Project <ArrowUpRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </MotionItem>

            <MotionItem>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">Services</p>
                  <ul className="mt-5 space-y-3">
                    {services.map((item) => (
                      <li key={item}>
                        <Link to="/services" className="text-sm font-semibold text-white/80 transition hover:text-white">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">Company</p>
                  <ul className="mt-5 space-y-3">
                    {company.map((item) => (
                      <li key={item}>
                        <Link
                          to={item === 'About Us' ? '/about' : item === 'Blog' ? '/blog' : '/contact'}
                          className="text-sm font-semibold text-white/80 transition hover:text-white"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sm:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">Contact</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {[
                      { icon: Phone, value: '+1 (555) 123-4567' },
                      { icon: Mail, value: 'hello@luminastudio.com' },
                      { icon: MapPin, value: '123 Innovation Street, Tech City, TC 12345' },
                    ].map(({ icon: Icon, value }) => (
                      <div key={value} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                          <Icon size={18} />
                        </div>
                        <p className="mt-4 text-sm leading-6 text-white/75">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MotionItem>
          </div>

          <MotionItem className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-sm text-white/55">&copy; 2026 LuminaStudio. All rights reserved.</p>
              <p className="text-sm text-white/45">Built with React, Tailwind CSS, and Framer Motion.</p>
            </div>
          </MotionItem>
        </MotionSection>
      </div>
    </footer>
  );
}
