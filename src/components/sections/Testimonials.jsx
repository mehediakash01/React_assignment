import { motion } from 'framer-motion';
import { Quote, Sparkles, Star } from 'lucide-react';
import { MotionItem, MotionSection } from '../common/MotionSection';

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
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-16 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.08),transparent_55%)]" />

      <div className="container-x">
        <MotionSection>
          <MotionItem className="mx-auto mb-16 max-w-3xl text-center">
            <span className="tag mb-5 gap-2">
              <Sparkles size={12} />
              {kicker}
            </span>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle text-center">
              {subtitle}
            </p>
          </MotionItem>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <MotionItem key={testimonial.name}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="panel lift-card relative h-full overflow-hidden p-8 text-left"
                >
                  <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/15 via-secondary/12 to-accent/12">
                    <Quote size={18} className="text-primary" />
                  </div>

                  <div className="mb-6 flex gap-1">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} size={18} className="fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="mb-8 pr-10 text-lg leading-8 text-slate-700">
                    {testimonial.content}
                  </p>

                  <div className="mt-auto flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-[0_12px_28px_rgba(124,58,237,0.12)]"
                    />
                    <div>
                      <h4 className="font-extrabold tracking-[-0.03em] text-dark">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-70" />
                </motion.article>
              </MotionItem>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
