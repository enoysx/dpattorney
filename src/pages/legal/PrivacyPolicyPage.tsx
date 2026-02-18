import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { privacyPolicy } from '@/data';

export default function PrivacyPolicyPage() {
  const sections = privacyPolicy.content.split('## ').filter(Boolean);

  return (
    <div className="bg-[#0a0a0a]">
      <PageHeader
        title={privacyPolicy.title}
        subtitle="Dokumen Legal"
        description={`Terakhir diperbarui: ${privacyPolicy.lastUpdated}`}
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {sections.map((section, index) => {
              const lines = section.trim().split('\n');
              const title = lines[0];
              const content = lines.slice(1).join('\n');

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
                  <div className="text-white/60 leading-relaxed whitespace-pre-line">
                    {content}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
