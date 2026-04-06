import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials({
  kicker = 'Testimonials',
  title = 'What clients say after launch',
  subtitle = 'Teams come to Kodawave for sharper design, clearer messaging, and a launch process that feels thoughtfully managed.',
}) {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      content: 'Kodawave transformed our online presence completely. Our traffic increased by 300% in just three months.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GrowthHub',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      content: 'The team is professional, responsive, and delivers results. Highly recommend their services.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Marketing Director, InnovateLabs',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      content: 'Working with Kodawave has been a game-changer for our marketing campaigns. Outstanding ROI.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="tag mb-5">{kicker}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle text-center">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="panel lift-card p-8 text-left"
            >
              <div className="mb-6 flex gap-1">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="mb-8 text-lg leading-8 text-slate-700">{testimonial.content}</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
