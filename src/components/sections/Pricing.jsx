import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MotionItem, MotionSection } from '../common/MotionSection';

export default function Pricing() {
  const packages = [
    {
      name: 'Starter',
      price: 299,
      description: 'Perfect for startups',
      eyebrow: 'Launch Basics',
      features: [
        'Basic website design',
        'SEO optimization',
        '5 pages',
        'Mobile responsive',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      price: 799,
      description: 'For growing businesses',
      eyebrow: 'Most Popular',
      features: [
        'Advanced web development',
        'Full SEO suite',
        'Unlimited pages',
        'Analytics integration',
        'Advertising setup',
        'Priority support',
        'Monthly reports',
      ],
      highlighted: true,
    },
    {
      name: 'Premium',
      price: 1499,
      description: 'Enterprise solutions',
      eyebrow: 'Scale & Systemize',
      features: [
        'Custom web applications',
        'Complete digital marketing',
        'E-commerce integration',
        'Booking system',
        'API development',
        '24/7 dedicated support',
        'Strategic consulting',
        'Custom integrations',
      ],
    },
  ];

  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-20 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.12),transparent_60%)]" />

      <div className="container-x">
        <MotionSection>
          <MotionItem className="mx-auto mb-16 max-w-3xl text-center">
            <span className="tag mb-5 gap-2">
              <Sparkles size={12} />
              Pricing
            </span>
            <h2 className="section-title">Packages structured for clarity, momentum, and premium delivery.</h2>
            <p className="section-subtitle text-center">
              Choose the engagement level that fits your stage now, with room to scale into deeper strategy and execution later.
            </p>
          </MotionItem>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <MotionItem key={pkg.name}>
                <motion.article
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`relative flex h-full flex-col overflow-hidden rounded-[32px] border p-8 shadow-soft ${
                    pkg.highlighted
                      ? 'border-primary/20 bg-gradient-to-br from-primary via-secondary to-accent text-white shadow-glow'
                      : 'border-primary/10 bg-white/85 backdrop-blur-xl'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                      Recommended
                    </div>
                  )}

                  <div>
                    <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${pkg.highlighted ? 'text-white/70' : 'text-primary/60'}`}>
                      {pkg.eyebrow}
                    </p>
                    <h3 className={`mt-4 text-3xl font-extrabold tracking-[-0.05em] ${pkg.highlighted ? 'text-white' : 'text-dark'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`mt-3 text-sm leading-7 ${pkg.highlighted ? 'text-white/80' : 'text-slate-600'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  <div className="my-8">
                    <span className={`text-5xl font-extrabold tracking-[-0.06em] ${pkg.highlighted ? 'text-white' : 'text-dark'}`}>
                      ${pkg.price}
                    </span>
                    <span className={`ml-2 text-sm font-medium ${pkg.highlighted ? 'text-white/75' : 'text-slate-500'}`}>
                      /month
                    </span>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      className={`mb-8 inline-flex w-full items-center justify-center rounded-3xl px-6 py-4 text-sm font-bold transition ${
                        pkg.highlighted
                          ? 'bg-white text-primary hover:bg-lavender'
                          : 'bg-primary text-white hover:bg-secondary'
                      }`}
                    >
                      Get Started
                    </Link>
                  </motion.div>

                  <ul className="mt-auto space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm ${
                          pkg.highlighted ? 'bg-white/10 text-white' : 'bg-lavender/60 text-slate-700'
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl ${
                            pkg.highlighted ? 'bg-white/15' : 'bg-white'
                          }`}
                        >
                          <Check size={16} className={pkg.highlighted ? 'text-white' : 'text-primary'} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </MotionItem>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
