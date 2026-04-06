import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/content';

export default function Blog() {
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
            <span className="tag mb-5">Blog</span>
            <h1 className="section-title text-5xl mb-6">Blog & Resources</h1>
            <p className="section-subtitle text-center text-lg">
              Insights, tips, and strategies to boost your digital growth
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="panel lift-card overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 text-left">
                  <div className="mb-4 flex items-center gap-4 text-sm text-slate-500">
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>By {post.author}</span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-dark transition-colors hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="mb-6 line-clamp-2 text-slate-600">
                    {post.description}
                  </p>

                  <button className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3">
                    Read More <ArrowRight size={18} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <button className="btn-primary">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="panel p-8 md:p-12"
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-display text-dark">
                Subscribe to Our Newsletter
              </h2>
              <p className="mb-8 mt-4 text-slate-600">
                Get the latest insights and tips on digital growth delivered to your inbox every week.
              </p>
              <form className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-gray-300 px-6 py-3 focus:border-primary focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary px-8"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
