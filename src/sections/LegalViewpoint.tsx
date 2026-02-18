import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

const articles = [
  {
    title: 'The Future of AI Governance in Southeast Asia',
    excerpt: 'Exploring regulatory frameworks and compliance strategies for artificial intelligence deployment across ASEAN markets.',
    image: '/images/blog-ai-governance.jpg',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    category: 'Technology',
  },
  {
    title: 'Cross-Border M&A: 2025 Outlook',
    excerpt: 'Key trends and regulatory considerations for mergers and acquisitions in the post-pandemic Asian market.',
    image: '/images/blog-ma.jpg',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    category: 'M&A',
  },
  {
    title: 'Digital Assets & Property Rights',
    excerpt: 'Understanding the evolving legal landscape of cryptocurrency ownership and digital property protection.',
    image: '/images/blog-crypto.jpg',
    date: 'Dec 5, 2024',
    readTime: '5 min read',
    category: 'Fintech',
  },
];

export default function LegalViewpoint() {
  return (
    <section id="viewpoint" className="relative py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4 block">
              Insights
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Legal Viewpoint
            </h2>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 hover:text-orange-500 text-sm font-medium flex items-center gap-2 mt-4 md:mt-0 transition-colors duration-300"
          >
            View All Articles
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Meta */}
                <div className="flex items-center gap-4 text-white/40 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <div className="mt-4 flex items-center gap-2 text-orange-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read Article
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
