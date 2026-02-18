import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';
import { articles, categories } from '@/data';

export default function InsightsLandingPage() {
  const featuredArticle = articles.find((a) => a.featured);
  const recentArticles = articles.filter((a) => !a.featured).slice(0, 6);

  return (
    <div className="bg-[#0a0a0a]">
      <PageHeader
        title="Wawasan Hukum"
        subtitle="Insights"
        description="Analisis dan pemikiran terkini dari para ahli hukum kami tentang perkembangan terbaru di Asia."
      />

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-6 block">
                Artikel Unggulan
              </span>
              <Link to={`/wawasan/${featuredArticle.id}`}>
                <div className="group grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-full">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 text-white/50 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredArticle.date).toLocaleDateString('id-ID')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{featuredArticle.author}</div>
                        <div className="text-white/50 text-sm">Penulis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Kategori</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/wawasan/kategori/${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 hover:border-orange-500 rounded-full"
                  >
                    {category}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-2xl font-bold text-white">Artikel Terbaru</h2>
            <Link
              to="/wawasan"
              className="text-orange-500 hover:text-orange-400 text-sm font-medium flex items-center gap-2"
            >
              Lihat Semua
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/wawasan/${article.id}`} className="group">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white/40 text-sm mb-3">
                    <span>{new Date(article.date).toLocaleDateString('id-ID')}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
