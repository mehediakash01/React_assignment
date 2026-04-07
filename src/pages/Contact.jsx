import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import FloatingIcon from '../components/common/FloatingIcon';
import { MotionItem, MotionSection } from '../components/common/MotionSection';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567' },
    { icon: Mail, title: 'Email', value: 'hello@luminastudio.com' },
    { icon: MapPin, title: 'Office Location', value: '123 Innovation Street, Tech City, TC 12345' },
    { icon: Clock, title: 'Business Hours', value: 'Monday - Friday: 9:00 AM - 6:00 PM' },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-[#faf8f5] pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute -left-16 top-16 -z-10 h-80 w-80 rounded-full bg-violet-100/55 blur-[120px]" />
        <div className="absolute right-0 top-10 -z-10 h-64 w-64 rounded-full bg-fuchsia-100/45 blur-[110px]" />
        <div className="absolute bottom-4 left-1/2 -z-10 h-52 w-[620px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[100px]" />

        <div className="container-x">
          <MotionSection className="relative">
            <FloatingIcon icon={Mail} label="Quick Replies" className="left-0 top-18 hidden xl:flex" delay={0.2} />
            <FloatingIcon icon={Phone} label="Book A Call" className="right-0 top-20 hidden xl:flex" delay={0.35} />

            <MotionItem className="mx-auto max-w-4xl text-center">
              <span className="tag mb-5 gap-2">
                <Sparkles size={12} />
                Contact
              </span>
              <h1 className="section-title text-4xl sm:text-6xl lg:text-[4.3rem]">
                Let&apos;s turn your next digital move into something clear, premium, and effective.
              </h1>
              <p className="section-subtitle mt-6 text-center text-lg">
                Whether you need a new website, better search visibility, stronger campaigns, or smoother booking systems, we&apos;d love to hear what you&apos;re building.
              </p>
            </MotionItem>
          </MotionSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-28">
        <div className="absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full bg-violet-100/40 blur-[120px]" />
        <div className="container-x">
          <MotionSection className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <MotionItem>
              <div className="panel h-full p-8 sm:p-10">
                <span className="tag mb-6">Contact Information</span>
                <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-dark sm:text-4xl">
                  A direct, thoughtful conversation starts here.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  We respond quickly, ask sharp questions, and keep the process focused so you get clarity from the first interaction.
                </p>

                <div className="mt-8 space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                        className="flex items-start gap-4 rounded-3xl border border-primary/10 bg-white/75 px-5 py-4"
                      >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/15 via-secondary/12 to-accent/12">
                          <Icon className="text-primary" size={20} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary/55">{item.title}</h3>
                          <p className="mt-2 text-slate-700">{item.value}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-[28px] bg-gradient-to-br from-primary via-secondary to-accent p-6 text-white shadow-glow">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">Response Promise</p>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em]">Average response in 2 to 4 business hours.</h3>
                  <p className="mt-3 text-white/80">
                    We respond to all inquiries within 24 hours during business days and keep next steps clear from the start.
                  </p>
                </div>
              </div>
            </MotionItem>

            <MotionItem>
              <div className="glass-panel relative overflow-hidden p-8 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.88),rgba(255,255,255,0.48)_36%,rgba(243,232,255,0.62)_100%)]" />
                <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-primary/12 blur-3xl" />
                <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full bg-accent/12 blur-3xl" />

                <div className="relative">
                  <span className="tag mb-6">Inquiry Form</span>
                  <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-dark sm:text-4xl">
                    Tell us about your project.
                  </h2>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Name</span>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full rounded-3xl border border-primary/15 bg-white/85 px-5 py-4 text-slate-700 outline-none transition focus:border-primary"
                          required
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Email</span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full rounded-3xl border border-primary/15 bg-white/85 px-5 py-4 text-slate-700 outline-none transition focus:border-primary"
                          required
                        />
                      </label>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Phone</span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full rounded-3xl border border-primary/15 bg-white/85 px-5 py-4 text-slate-700 outline-none transition focus:border-primary"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Service Interested In</span>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded-3xl border border-primary/15 bg-white/85 px-5 py-4 text-slate-700 outline-none transition focus:border-primary"
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">Web Development</option>
                          <option value="seo">SEO Optimization</option>
                          <option value="advertising">Online Advertising</option>
                          <option value="booking">Booking Management</option>
                        </select>
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">Message</span>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project"
                        rows="6"
                        className="w-full rounded-[28px] border border-primary/15 bg-white/85 px-5 py-4 text-slate-700 outline-none transition focus:border-primary resize-none"
                        required
                      ></textarea>
                    </label>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                      className="btn-primary w-full py-4 text-base"
                    >
                      Send Message <Send size={18} />
                    </motion.button>
                  </form>
                </div>
              </div>
            </MotionItem>
          </MotionSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-28">
        <div className="absolute left-1/2 top-0 -z-10 h-56 w-[620px] -translate-x-1/2 rounded-full bg-violet-100/45 blur-[100px]" />
        <div className="container-x">
          <MotionSection>
            <MotionItem>
              <div className="panel overflow-hidden p-8 sm:p-10">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className="text-left">
                    <span className="tag mb-5">Office Location</span>
                    <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-dark sm:text-4xl">
                      Remote-friendly collaboration, available for focused consultation calls.
                    </h2>
                    <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                      We work across time zones and keep communication clear through scheduled calls, async updates, and thoughtful launch planning.
                    </p>

                    <div className="mt-8 space-y-4">
                      {[
                        '123 Innovation Street, Tech City, TC 12345',
                        'Monday to Friday, 9:00 AM to 6:00 PM',
                        'Average first response time: 2 to 4 business hours',
                      ].map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                          className="rounded-3xl border border-primary/10 bg-white/75 px-5 py-4 text-slate-700"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[32px] border border-primary/10 bg-lavender/55 p-5">
                    <div className="relative min-h-[340px] overflow-hidden rounded-[28px] border border-primary/10 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.14),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,232,255,0.92))] p-6">
                      <div className="absolute left-10 top-14 h-24 w-24 rounded-full border border-primary/10 bg-white/70" />
                      <div className="absolute right-12 top-12 h-20 w-20 rounded-full border border-primary/10 bg-white/60" />
                      <div className="absolute bottom-12 left-20 h-16 w-16 rounded-full border border-primary/10 bg-white/70" />
                      <div className="absolute inset-x-12 top-1/2 h-px -translate-y-1/2 bg-primary/10" />
                      <div className="absolute left-1/2 top-12 h-[75%] w-px -translate-x-1/2 bg-primary/10" />

                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute left-[52%] top-[46%] -translate-x-1/2 -translate-y-1/2"
                      >
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-glow">
                          <MapPin size={26} />
                          <span className="absolute -bottom-8 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
                            HQ
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionItem>
          </MotionSection>
        </div>
      </section>
    </div>
  );
}
