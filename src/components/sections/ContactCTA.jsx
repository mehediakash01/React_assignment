import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[32px] bg-dark px-6 py-14 text-center text-white sm:px-10 lg:px-16"
        >
          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-accent/25 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Start a Project
            </span>
            <h2 className="mt-6 text-4xl font-display md:text-5xl">
              Ready to turn the site into your strongest sales asset?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Book a consultation and we&apos;ll map the highest-impact improvements across messaging, design, SEO, and conversion flow.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary transition duration-300 hover:-translate-y-0.5 hover:bg-light"
              >
                Schedule Your Consultation <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-base font-bold text-white/85 transition duration-300 hover:bg-white/10"
              >
                Review Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
