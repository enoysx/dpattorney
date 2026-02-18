import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-orange-500" />
            </div>
          </motion.div>

          {/* Quote Text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-relaxed mb-10"
          >
            "They don't just understand the
            <br className="hidden sm:block" />
            law; they understand the{' '}
            <span className="text-orange-500">architecture</span>
            <br className="hidden sm:block" />
            of innovation. DP Attorney is the only firm we trust
            <br className="hidden sm:block" />
            with our digital future."
          </motion.blockquote>

          {/* Author */}
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
  );
}
