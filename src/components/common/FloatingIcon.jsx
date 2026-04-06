import { motion } from 'framer-motion';

export default function FloatingIcon({
  icon: Icon,
  label,
  className = '',
  iconClassName = '',
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.45, delay },
        scale: { duration: 0.45, delay },
        y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay },
      }}
      className={`panel pointer-events-none absolute flex items-center gap-3 px-4 py-3 ${className}`}
    >
      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 ${iconClassName}`}>
        <Icon size={20} className="text-primary" />
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/55">Service</p>
        <p className="text-sm font-semibold text-dark">{label}</p>
      </div>
    </motion.div>
  );
}
