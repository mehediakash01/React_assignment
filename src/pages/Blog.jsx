import { motion } from 'framer-motion';
import { blogPosts } from '../data/content';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="section-title text-5xl mb-6">Blog & Resources</h1>
            <p className="section-subtitle text-center text-lg">
              Insights, tips, and strategies to boost your digital growth
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>

                  <h3 className="text-xl font-bold text-dark mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {post.description}
                  </p>

                  <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
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
            className="text-center mt-16"
          >
            <button className="btn-primary">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl p-8 md:p-12 shadow-lg"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-dark mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-8">
                Get the latest insights and tips on digital growth delivered to your inbox every week
              </p>
              <form className="flex gap-3 flex-col sm:flex-row max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
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
