import { motion } from 'framer-motion';
import { Globe, Building, Users } from 'lucide-react';

const networks = [
  {
    icon: Globe,
    name: 'LEX Global',
    description: 'Premier international legal network spanning 150+ countries',
  },
  {
    icon: Building,
    name: 'Maritime Counsel',
    description: 'Specialized maritime and shipping law alliance',
  },
  {
    icon: Users,
    name: 'Pacific Alliance',
    description: 'Strategic partnership across Asia-Pacific markets',
  },
];

export default function GlobalNetwork() {
  return (
    <section className="relative py-20 bg-[#0a0a0a]">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-white/40 text-sm uppercase tracking-wider mb-4 block">
            Strategic Alliances
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Global Network
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {networks.map((network, index) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300">
                <network.icon className="w-8 h-8 text-white/60 group-hover:text-orange-500 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {network.name}
              </h3>
              <p className="text-white/40 text-sm max-w-xs">
                {network.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
