import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MotionItem, MotionSection } from '../common/MotionSection';

export default function ContactCTA() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-x">
        <MotionSection>
          <MotionItem>
            <div className="glass-panel relative overflow-hidden rounded-[36px] px-6 py-14 text-center sm:px-10 lg:px-16">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.92)_0%,rgba(243,232,255,0.82)_52%,rgba(236,72,153,0.10)_100%)]" />
              <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-primary/14 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-accent/14 blur-3xl" />

              <div className="relative">
                <span className="tag gap-2">
                  <Sparkles size={12} />
                  Start a Project
                </span>
                <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-[-0.05em] text-dark md:text-5xl lg:text-6xl">
                  Ready to turn your website into the clearest expression of your brand?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Book a consultation and we&apos;ll map the highest-impact improvements across messaging, design, SEO, and conversion flow.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link to="/contact" className="btn-primary px-8 py-4 text-base">
                      Schedule Your Consultation <ArrowRight size={20} />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link to="/services" className="btn-secondary px-8 py-4 text-base">
                      Review Services
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </MotionItem>
        </MotionSection>
      </div>
    </section>
  );
}
