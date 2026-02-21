import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { cultureValues } from '@/data';

export default function CulturePage() {
  return (
    <div className="bg-[#0a0a0a]">
      <PageHeader
        title="Budaya Perusahaan"
        subtitle="Karir"
        description="Nilai-nilai yang membentuk siapa kami dan bagaimana kami bekerja."
      />

      {/* Values */}
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
              Nilai-Nilai Kami
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Apa yang Kami Junjung Tinggi
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-orange-500/30 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-white/50 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
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
              Galeri
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Kehidupan di Dion Pongkor & Partners
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`aspect-square rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-white/10 ${
                  item === 1 || item === 6 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Diversity */}
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
                Keberagaman
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Keberagaman & Inklusi
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Kami percaya bahwa keberagaman memperkuat tim kami. Dengan anggota tim dari 
                berbagai latar belakang, budaya, dan pengalaman, kami dapat memberikan 
                perspektif yang lebih luas dan solusi yang lebih inovatif.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Negara', value: '15+' },
                  { label: 'Bahasa', value: '20+' },
                  { label: 'Wanita di Leadership', value: '40%' },
                  { label: 'Program D&I', value: '10+' },
                ].map((stat, index) => (
                  <div key={index} className="p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                    <div className="text-2xl font-bold text-orange-500 mb-1">{stat.value}</div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
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
