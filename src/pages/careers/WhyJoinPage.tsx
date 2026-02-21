import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, GraduationCap, Heart, Shield, Globe, Users, Award, BookOpen, Coffee } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { careerBenefits, careerPaths } from '@/data';

const icons: Record<string, React.ElementType> = {
  TrendingUp,
  DollarSign,
  GraduationCap,
  Heart,
  Shield,
  Globe,
  Users,
  Award,
  BookOpen,
  Coffee,
};

export default function WhyJoinPage() {
  return (
    <div className="bg-[#0a0a0a]">
      <PageHeader
        title="Mengapa Bergabung"
        subtitle="Karir"
        description="Temukan keuntungan dan peluang yang menanti Anda di Dion Pongkor & Partners."
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
              Apa yang Kami Tawarkan
            </h2>
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

      {/* Career Paths */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4 block">
              Pengembangan Karir
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Jalur Karir
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Kami menawarkan jalur karir yang jelas dengan peluang pertumbuhan yang berkelanjutan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {careerPaths.map((path, pathIndex) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: pathIndex * 0.1 }}
                className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-8">{path.title}</h3>
                <div className="space-y-6">
                  {path.steps.map((step, stepIndex) => (
                    <div key={step.role} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
                          <span className="text-orange-500 font-bold">{stepIndex + 1}</span>
                        </div>
                        {stepIndex < path.steps.length - 1 && (
                          <div className="w-px h-full bg-white/10 mt-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <h4 className="text-lg font-semibold text-white">{step.role}</h4>
                        <p className="text-orange-500 text-sm mb-1">{step.duration}</p>
                        <p className="text-white/50 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
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
                Pelatihan
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Pengembangan Berkelanjutan
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Kami berinvestasi dalam pengembangan profesional setiap anggota tim. 
                Dari pelatihan teknis hingga pengembangan kepemimpinan, kami menyediakan 
                sumber daya yang Anda butuhkan untuk sukses.
              </p>
              <ul className="space-y-4">
                {[
                  'Pelatihan teknis internal dan eksternal',
                  'Program mentoring dengan partner senior',
                  'Dukungan untuk sertifikasi profesional',
                  'Konferensi dan seminar industri',
                  'Pengembangan kepemimpinan',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/60">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-white/10" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
