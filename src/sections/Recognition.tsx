import { motion } from 'framer-motion';

const awards = [
  { name: 'Chambers & Partners', years: '2019-2024' },
  { name: 'The Legal 500', years: '2020-2024' },
  { name: 'IFLR1000', years: '2018-2024' },
  { name: 'ALB Asia', years: '2021-2024' },
];

export default function Recognition() {
  return (
    <section className="relative py-16 bg-[#0a0a0a]">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-white/40 text-sm uppercase tracking-wider">
            Recognized Excellence
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-white/70 font-semibold text-lg mb-1 group-hover:text-orange-500 transition-colors duration-300">
                {award.name}
              </div>
              <div className="text-white/30 text-sm">
                {award.years}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
