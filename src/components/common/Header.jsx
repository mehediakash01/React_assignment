import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Sparkles, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div className="container-x max-w-[88rem] px-0">
        <div className="panel flex items-center justify-between px-4 py-3 sm:px-5 lg:px-6 bg-white/70 backdrop-blur-2xl">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-white shadow-glow">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/60">Digital Agency</p>
              <p className="text-lg font-extrabold tracking-[-0.04em] text-dark">LuminaStudio</p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-3xl px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                    isActive
                      ? 'bg-primary text-white shadow-glow'
                      : 'text-slate-700 hover:bg-white hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <NavLink to="/contact" className="btn-primary px-6 py-3">
                Get Consultation
              </NavLink>
            </motion.div>
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.94 }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/10 bg-white/80 text-primary md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="panel mt-3 overflow-hidden bg-white/80 px-4 py-4 backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `rounded-3xl px-4 py-3 text-sm font-semibold transition ${
                        isActive ? 'bg-primary text-white' : 'text-slate-700 hover:bg-lavender hover:text-primary'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <motion.div whileTap={{ scale: 0.98 }} className="pt-2">
                  <NavLink to="/contact" className="btn-primary w-full" onClick={() => setIsOpen(false)}>
                    Get Consultation
                  </NavLink>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
