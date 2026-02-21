import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, DollarSign, GraduationCap, Heart, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';
import { careerBenefits, jobOpenings } from '@/data';

const icons: Record<string, React.ElementType> = {
  TrendingUp,
  DollarSign,
  GraduationCap,
  Heart,
  Shield,
  Globe,
};

export default function CareersLandingPage() {
  return (
    <div className="bg-[#0a0a0a]">
      <PageHeader
        title="Karir di Dion Pongkor & Partners"
        subtitle="Bergabung dengan Kami"
        description="Bangun karir hukum Anda bersama firma terkemuka di Asia. Kami mencari talenta terbaik untuk bergabung dengan tim kami."
      />

      {/* Benefits */}
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
              Keuntungan
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Mengapa Bergabung?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Kami menawarkan lingkungan kerja yang mendukung pertumbuhan profesional Anda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerBenefits.map((benefit, index) => {
              const Icon = icons[benefit.icon] || Shield;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-orange-500/30 transition-colors duration-300"
                >
                  <Icon className="w-10 h-10 text-orange-500 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/50 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture Preview */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4 block">
                Budaya Kami
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Budaya yang Membangun Karir
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Di Dion Pongkor & Partners, kami percaya bahwa budaya perusahaan yang kuat adalah kunci 
                keberhasilan. Kami menciptakan lingkungan yang inklusif, kolaboratif, dan 
                mendukung pertumbuhan setiap individu.
              </p>
              <Link to="/karir/budaya">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full font-medium transition-all duration-300 hover:shadow-glow group">
                  Pelajari Budaya Kami
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-white/10" />
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-white/10" />
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-white/10" />
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-white/10" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <div>
              <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4 block">
                Lowongan
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Lowongan Terbuka
              </h2>
            </div>
            <Link
              to="/karir/lowongan"
              className="text-orange-500 hover:text-orange-400 text-sm font-medium flex items-center gap-2 mt-4 md:mt-0"
            >
              Lihat Semua Lowongan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="space-y-4">
            {jobOpenings.slice(0, 4).map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/karir/lowongan#${job.id}`}>
                  <div className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:border-orange-500/30 transition-colors duration-300">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
                        <span>{job.department}</span>
                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                        <span>{job.location}</span>
                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                        <span>{job.type}</span>
                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Siap untuk Bergabung?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Jelajahi peluang karir di Dion Pongkor & Partners dan mulai perjalanan profesional Anda bersama kami.
            </p>
            <Link to="/karir/lowongan">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-glow group">
                Lihat Lowongan
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
