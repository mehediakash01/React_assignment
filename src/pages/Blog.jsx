import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import FloatingIcon from '../components/common/FloatingIcon';
import { MotionItem, MotionSection } from '../components/common/MotionSection';
import { blogPosts } from '../data/content';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

export default function Blog() {
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
            <FloatingIcon icon={Sparkles} label="Fresh Insights" className="left-0 top-18 hidden xl:flex" delay={0.2} />
            <FloatingIcon icon={ArrowRight} label="Read & Apply" className="right-0 top-16 hidden xl:flex" delay={0.35} />

            <MotionItem className="mx-auto max-w-4xl text-center">
              <span className="tag mb-5 gap-2">
                <Sparkles size={12} />
                Blog
              </span>
              <h1 className="section-title text-4xl sm:text-6xl lg:text-[4.3rem]">
                Insights that make
                {' '}
                <span className="bg-gradient-to-r from-violet-600 via-secondary to-primary bg-clip-text text-transparent">
                  digital growth calmer and clearer.
                </span>
              </h1>
              <p className="section-subtitle mt-6 text-center text-lg">
                Explore strategy, design, performance, and marketing ideas created to help teams make better digital decisions with more confidence.
              </p>
            </MotionItem>
          </MotionSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-28">
        <div className="absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-violet-100/40 blur-[120px]" />
        <div className="container-x">
          <MotionSection>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.map((post) => (
                <MotionItem key={post.id}>
                  <motion.article
                    whileHover={{ y: -8, scale: 1.008 }}
                    transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
                    className="panel lift-card overflow-hidden"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-xl">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6 text-left sm:p-7">
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary/50">
                        <span>{post.date}</span>
                        <span className="text-primary/30">&bull;</span>
                        <span>{post.author}</span>
                      </div>

                      <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-dark transition-colors hover:text-primary">
                        {post.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                        {post.description}
                      </p>

                      <button className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all hover:translate-x-1">
                        Read More <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.article>
                </MotionItem>
              ))}
            </div>

            <MotionItem className="mt-16 text-center">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                className="btn-primary px-8 py-4 text-base"
              >
                Load More Articles
              </motion.button>
            </MotionItem>
          </MotionSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-28">
        <div className="absolute left-1/2 top-0 -z-10 h-56 w-[620px] -translate-x-1/2 rounded-full bg-violet-100/45 blur-[100px]" />
        <div className="container-x">
          <MotionSection>
            <MotionItem>
              <div className="glass-panel relative overflow-hidden p-8 sm:p-10 md:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.86),rgba(255,255,255,0.45)_38%,rgba(243,232,255,0.62)_100%)]" />
                <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-primary/12 blur-3xl" />
                <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full bg-accent/12 blur-3xl" />

                <div className="relative mx-auto max-w-2xl text-center">
                  <span className="tag mb-5">Newsletter</span>
                  <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-dark sm:text-4xl">
                    Subscribe for calmer, sharper digital guidance.
                  </h2>
                  <p className="mb-8 mt-4 text-lg leading-8 text-slate-600">
                    Get thoughtful insights on design, SEO, growth strategy, and conversion delivered to your inbox.
                  </p>
                  <form className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 rounded-3xl border border-primary/15 bg-white/85 px-6 py-4 text-slate-700 outline-none transition focus:border-primary"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary px-8 py-4"
                    >
                      Subscribe
                    </motion.button>
                  </form>
                </div>
              </div>
            </MotionItem>
          </MotionSection>
        </div>
      </section>
    </div>
  );
}
