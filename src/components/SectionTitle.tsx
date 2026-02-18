import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${alignClass[align]} mb-12`}
    >
      {subtitle && (
        <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4 block">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
          light ? 'text-gray-900' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-gray-600' : 'text-white/60'}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
