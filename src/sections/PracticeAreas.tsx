import { motion } from 'framer-motion';
import { Bitcoin, Building2, Zap, ArrowUpRight } from 'lucide-react';

const practiceAreas = [
  {
    icon: Bitcoin,
    title: 'Fintech & Crypto',
    description: 'Navigating the evolving landscape of digital assets, blockchain technology, and cryptocurrency regulations across Asian markets.',
    tags: ['Blockchain', 'DeFi', 'NFTs'],
  },
  {
    icon: Building2,
    title: 'Mergers & Acquisitions',
    description: 'Strategic counsel for complex cross-border transactions, due diligence, and post-merger integration in the Asia-Pacific region.',
    tags: ['Cross-border', 'Due Diligence', 'Integration'],
  },
  {
    icon: Zap,
    title: 'Energy & Infrastructure',
    description: 'Advising on major energy projects, renewable investments, and infrastructure development across emerging Asian economies.',
    tags: ['Renewables', 'PPP', 'Project Finance'],
  },
];

export default function PracticeAreas() {
  return (
    <section id="expertise" className="relative py-24 bg-[#0a0a0a]">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Our Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Practice Areas
            </h2>
          </div>
          <p className="text-white/50 text-lg max-w-md mt-4 md:mt-0">
            Specialized legal services tailored to the unique challenges of Asian markets.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.06] hover:border-orange-500/30 overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors duration-300">
                    <area.icon className="w-7 h-7 text-orange-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    {area.title}
                    <ArrowUpRight className="w-5 h-5 text-orange-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-base leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/40 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
