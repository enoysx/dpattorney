import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Bitcoin, Building2, Zap, Scale, Users, Landmark, TrendingUp, Calculator, Home, Cpu, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { practiceAreas, articles, partners } from '@/data';

const icons: Record<string, React.ElementType> = {
  Building2,
  Landmark,
  TrendingUp,
  Scale,
  Users,
  Zap,
  Lightbulb,
  Home,
  Calculator,
  Cpu,
  Bitcoin,
};

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const recentArticles = articles.slice(0, 3);

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-orange-400 text-sm font-medium">
              Firma Hukum Terkemuka di Asia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            Pengacara yang
            <br />
            <span className="text-gradient">mengerti Asia.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Menavigasi kompleksitas dengan presisi digital. Kami menggabungkan keahlian regional
            yang mendalam dengan pendekatan futuristik terhadap nasihat hukum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/area-praktik">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-glow group">
                Area Praktik Kami
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/tim/partner">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full font-medium text-lg transition-all duration-300"
              >
                Kenali Tim Kami
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <span className="text-white/40 text-sm">Gulir untuk menjelajah</span>
              <ChevronDown className="w-5 h-5 text-white/40" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { value: 25, suffix: '+', label: 'Tahun Keunggulan' },
              { value: 150, suffix: '+', label: 'Profesional Hukum' },
              { value: 20, suffix: '+', label: 'Lokasi Kantor' },
              { value: 500, suffix: '+', label: 'Klien Korporat' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/50 text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4 block">
                Tentang Dion Pongkor & Partners
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
                Mendefinisikan Ulang
                <br />
                Infrastruktur Hukum
                <br />
                <span className="text-gradient">untuk Era Digital</span>
              </h2>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  Hukum tradisional sudah usang. Kami adalah pelopor. Di Dion Pongkor & Partners, kami melihat
                  kerangka hukum bukan sebagai kendala, melainkan sebagai kode dasar
                  bisnis modern.
                </p>
                <p>
                  Dengan mengintegrasikan kecerdasan data dengan nasihat kelas atas, kami memberikan
                  kejelasan dalam lanskap regulasi yang semakin kompleks di seluruh Asia
                  dan beyond.
                </p>
              </div>
              <div className="mt-10">
                <Link to="/tentang-kami">
                  <Button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 rounded-full font-medium text-lg transition-all duration-300 group">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-2xl opacity-50" />
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/images/about-image.jpg"
                    alt="Dion Pongkor Office"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-orange-500 mb-1">98%</div>
                <div className="text-white/60 text-sm">Kepuasan Klien</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          >
            <div>
              <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4 block">
                Keahlian Kami
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Area Praktik
              </h2>
            </div>
            <p className="text-white/50 text-lg max-w-md mt-4 md:mt-0">
              Layanan hukum spesialis yang disesuaikan dengan tantangan unik pasar Asia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.slice(0, 6).map((area, index) => {
              const Icon = icons[area.icon] || Building2;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/area-praktik/${area.slug}`}>
                    <div className="group relative h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.06] hover:border-orange-500/30 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative">
                        <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors duration-300">
                          <Icon className="w-7 h-7 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          {area.name}
                          <ArrowRight className="w-5 h-5 text-orange-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </h3>
                        <p className="text-white/50 text-base leading-relaxed">
                          {area.shortDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link to="/area-praktik">
              <Button className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full font-medium text-lg transition-all duration-300 group">
                Lihat Semua Area Praktik
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center">
                <span className="text-4xl text-orange-500">"</span>
              </div>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-relaxed mb-10"
            >
              "Mereka tidak hanya memahami
              <br className="hidden sm:block" />
              hukum; mereka memahami{' '}
              <span className="text-orange-500">arsitektur</span>
              <br className="hidden sm:block" />
              inovasi. Dion Pongkor & Partners adalah satu-satunya firma yang kami percayai
              <br className="hidden sm:block" />
              untuk masa depan digital kami."
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-white font-semibold text-lg">Elena Zhang</div>
              <div className="text-white/50">CEO, TechVenture Asia</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4 block">
              Tim Kami
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Leadership Kami
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Bertemu dengan para partner berpengalaman yang memimpin tim kami.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.slice(0, 4).map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/tim/partner/${partner.id}`}>
                  <div className="group">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-orange-500 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-orange-500 text-sm font-medium mb-2">
                        {partner.role}
                      </p>
                      <p className="text-white/40 text-sm">
                        {partner.expertise.join(', ')}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link to="/tim/partner">
              <Button className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full font-medium text-lg transition-all duration-300 group">
                Lihat Semua Partner
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          >
            <div>
              <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4 block">
                Wawasan
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Wawasan Hukum
              </h2>
            </div>
            <Link
              to="/wawasan"
              className="text-white/50 hover:text-orange-500 text-sm font-medium flex items-center gap-2 mt-4 md:mt-0 transition-colors duration-300"
            >
              Lihat Semua Artikel
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Siap untuk Masa Depan?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/50 mb-10 max-w-2xl mx-auto"
            >
              Transformasikan strategi hukum Anda dengan mitra yang memahami lanskap digital.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link to="/kontak">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-glow group">
                  Jadwalkan Konsultasi
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
