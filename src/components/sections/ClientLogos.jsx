import { motion } from 'framer-motion';

export default function ClientLogos() {
  const clients = ['TechFlow', 'GrowthHub', 'InnovateLabs', 'DigitalPeak', 'CloudVision', 'NextWave'];

  return (
    <section className="py-16">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="panel overflow-hidden px-6 py-8 sm:px-8"
        >
          <div className="mb-8 flex flex-col gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/45">Trusted By Partners</p>
              <p className="mt-3 text-lg leading-8 text-slate-600">
                From local service brands to venture-backed product teams, our work is designed to travel well across industries.
              </p>
            </div>
            <div className="rounded-full bg-light px-5 py-3 text-sm font-semibold text-primary">
              150+ active client relationships
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex min-h-24 items-center justify-center rounded-[22px] border border-black/5 bg-white/90 px-4 py-6 text-center"
              >
                <span className="text-base font-semibold tracking-[0.12em] text-slate-700">{client}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
