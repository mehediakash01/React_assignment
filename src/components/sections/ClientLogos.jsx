import { motion } from 'framer-motion';

export default function ClientLogos() {
  const clients = ['TechFlow', 'GrowthHub', 'InnovateLabs', 'DigitalPeak', 'CloudVision', 'NextWave'];

  return (
    <section className="py-16 bg-white">
      <div className="container-x">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-600 font-semibold mb-12"
        >
          TRUSTED BY LEADING COMPANIES
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center h-24 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold text-gray-700">{client}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
