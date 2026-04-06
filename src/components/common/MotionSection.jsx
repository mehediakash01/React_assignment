import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function MotionSection({ children, className = '', as: Component = motion.div }) {
  return (
    <Component
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Component>
  );
}

export function MotionItem({ children, className = '', as: Component = motion.div }) {
  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}
