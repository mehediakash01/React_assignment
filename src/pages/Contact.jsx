import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

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

  return (
    <div>
      <section className="py-20">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="tag mb-5">Contact</span>
            <h1 className="section-title text-5xl mb-6">Get In Touch</h1>
            <p className="section-subtitle text-center text-lg">
              Ready to start your digital transformation? Let's talk about your project
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-dark mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Email</h3>
                    <p className="text-gray-600">hello@kodawave.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Office Location</h3>
                    <p className="text-gray-600">
                      123 Innovation Street<br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                <h3 className="font-bold text-dark mb-4">Quick Response Time</h3>
                <p className="text-gray-600 mb-4">
                  We respond to all inquiries within 24 hours during business days.
                </p>
                <p className="text-primary font-semibold">Average response: 2-4 hours</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold text-dark mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="advertising">Online Advertising</option>
                    <option value="booking">Booking Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="panel overflow-hidden p-8 md:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="text-left">
                <span className="tag mb-5">Office Location</span>
                <h2 className="text-3xl font-display text-dark">Remote-friendly team, available for focused consultation calls.</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                  We collaborate with clients across time zones and keep communication tight through scheduled strategy calls, async updates, and launch check-ins.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    '123 Innovation Street, Tech City, TC 12345',
                    'Monday to Friday, 9:00 AM to 6:00 PM',
                    'Average first response time: 2 to 4 business hours',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-light/80 px-4 py-4 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-black/5 bg-light/70 p-5">
                <div className="relative min-h-[320px] overflow-hidden rounded-[24px] border border-primary/10 bg-[radial-gradient(circle_at_top,rgba(199,155,99,0.22),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,239,231,0.95))] p-6">
                  <div className="absolute left-10 top-14 h-24 w-24 rounded-full border border-primary/10 bg-white/70" />
                  <div className="absolute right-12 top-12 h-20 w-20 rounded-full border border-primary/10 bg-white/60" />
                  <div className="absolute bottom-12 left-20 h-16 w-16 rounded-full border border-primary/10 bg-white/70" />
                  <div className="absolute inset-x-12 top-1/2 h-px -translate-y-1/2 bg-primary/10" />
                  <div className="absolute left-1/2 top-12 h-[75%] w-px -translate-x-1/2 bg-primary/10" />

                  <div className="absolute left-[52%] top-[46%] -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-soft">
                      <MapPin size={26} />
                      <span className="absolute -bottom-8 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
                        HQ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
