import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, Shield, Lightbulb, Handshake } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import { firmHistory, firmValues, firmStats, awardsList, leadershipMessage } from '@/data';

const statIcons: Record<string, React.ElementType> = {
  founded: TrendingUp,
  professionals: Users,
  partners: Users,
  offices: Globe,
  countries: Globe,
  clients: Users,
  transactions: TrendingUp,
  awards: Award,
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a]">
      <PageHeader
        title="Tentang Kami"
        subtitle="Profil Perusahaan"
        description="DP Attorney adalah firma hukum terkemuka di Asia dengan pengalaman lebih dari 25 tahun dalam memberikan solusi hukum inovatif."
      />

      {/* Leadership Message */}
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
                Pesan dari Managing Partner
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Selamat datang di DP Attorney
              </h2>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed whitespace-pre-line">
                {leadershipMessage.managingPartner.message}
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
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={leadershipMessage.managingPartner.image}
                    alt={leadershipMessage.managingPartner.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white font-semibold text-xl">
                      {leadershipMessage.managingPartner.name}
                    </div>
                    <div className="text-orange-500">
                      {leadershipMessage.managingPartner.title}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Dalam Angka"
            subtitle="Statistik Kami"
            description="Pencapaian kami dalam memberikan layanan hukum berkualitas."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { key: 'professionals', label: 'Profesional Hukum', value: firmStats.professionals },
              { key: 'partners', label: 'Partner', value: firmStats.partners },
              { key: 'offices', label: 'Kantor', value: firmStats.offices },
              { key: 'countries', label: 'Negara', value: firmStats.countries },
              { key: 'clients', label: 'Klien', value: firmStats.clients },
              { key: 'transactions', label: 'Transaksi', value: firmStats.transactions },
              { key: 'awards', label: 'Penghargaan', value: firmStats.awards },
              { key: 'founded', label: 'Didirikan', value: firmStats.founded },
            ].map((stat, index) => {
              const Icon = statIcons[stat.key];
              return (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-xl"
                >
                  <Icon className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nilai-Nilai Kami"
            subtitle="Budaya Perusahaan"
            description="Prinsip-prinsip yang membimbing setiap tindakan kami."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {firmValues.map((value, index) => {
              const icons: Record<string, React.ElementType> = {
                Users,
                Award,
                Lightbulb,
                Shield,
                Handshake,
                Globe,
              };
              const Icon = icons[value.icon] || Shield;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-orange-500/30 transition-colors duration-300"
                >
                  <Icon className="w-10 h-10 text-orange-500 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-white/50 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Perjalanan Kami"
            subtitle="Sejarah"
            description="Perjalanan DP Attorney dari pendirian hingga menjadi firma hukum terkemuka di Asia."
          />
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/30 to-transparent" />
            
            <div className="space-y-12">
              {firmHistory.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="pl-12 md:pl-0">
                      <span className="text-orange-500 text-2xl font-bold">{item.year}</span>
                      <h3 className="text-xl font-semibold text-white mt-2 mb-3">{item.title}</h3>
                      <p className="text-white/50 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-[#0a0a0a]" />
                  
                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Penghargaan & Pengakuan"
            subtitle="Awards"
            description="Pengakuan atas keunggulan layanan hukum kami dari berbagai institusi terkemuka."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {awardsList.map((award, index) => (
              <motion.div
                key={`${award.year}-${award.award}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:border-orange-500/30 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <div className="text-orange-500 text-sm font-medium mb-1">{award.year}</div>
                  <h3 className="text-white font-semibold mb-1">{award.award}</h3>
                  <p className="text-white/50 text-sm">{award.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
