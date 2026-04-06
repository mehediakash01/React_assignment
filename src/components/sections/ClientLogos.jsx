import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { MotionItem, MotionSection } from '../common/MotionSection';

export default function ClientLogos() {
  const clients = ['TechFlow', 'GrowthHub', 'InnovateLabs', 'DigitalPeak', 'CloudVision', 'NextWave'];

  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <MotionSection>
          <MotionItem>
            <div className="panel overflow-hidden px-6 py-8 sm:px-8">
              <div className="mb-8 flex flex-col gap-5 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
                <div>
                  <span className="tag gap-2">
                    <Sparkles size={12} />
                    Trusted By Partners
                  </span>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                    From local service brands to venture-backed product teams, our work is designed to travel well across industries and growth stages.
                  </p>
                </div>
                <div className="rounded-3xl border border-primary/10 bg-white/75 px-5 py-3 text-sm font-semibold text-primary">
                  150+ active client relationships
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {clients.map((client) => (
                  <MotionItem key={client}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="flex min-h-24 items-center justify-center rounded-[26px] border border-primary/10 bg-white/85 px-4 py-6 text-center shadow-[0_12px_28px_rgba(124,58,237,0.06)]"
                    >
                      <span className="text-base font-bold tracking-[0.12em] text-slate-700">{client}</span>
                    </motion.div>
                  </MotionItem>
                ))}
              </div>
            </div>
          </MotionItem>
        </MotionSection>
      </div>
    </section>
  );
}
