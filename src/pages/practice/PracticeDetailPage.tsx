import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPracticeBySlug, practiceAreas, getMemberById } from '@/data';

export default function PracticeDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const practice = slug ? getPracticeBySlug(slug) : null;

  if (!practice) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Area praktik tidak ditemukan</h1>
          <Link to="/area-praktik" className="text-orange-500 hover:underline">
            Lihat Semua Area Praktik
          </Link>
        </div>
      </div>
    );
  }

  const keyContacts = practice.keyContacts
    .map((id) => getMemberById(id))
    .filter(Boolean);

  const relatedAreas = practice.relatedAreas
    .map((id) => practiceAreas.find((a) => a.id === id))
    .filter(Boolean);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Breadcrumb */}
      <div className="pt-24 pb-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/area-praktik"
            className="inline-flex items-center gap-2 text-white/50 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Area Praktik
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4 block">
              Area Praktik
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {practice.name}
            </h1>
            <p className="text-xl text-white/60 max-w-3xl leading-relaxed">
              {practice.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Tentang</h2>
              <div className="prose prose-invert max-w-none">
                {practice.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-white/60 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Highlight</h2>
              <ul className="space-y-4">
                {practice.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-white/60">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-10">Layanan Kami</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {practice.services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white/[0.03] border border-white/10 rounded-xl"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                  <span className="text-white/70">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Contacts */}
      {keyContacts.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-10">Kontak Kunci</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyContacts.map((contact) => (
                  <Link
                    key={contact!.id}
                    to={`/tim/${contact!.type}/${contact!.id}`}
                  >
                    <div className="group flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:border-orange-500/30 transition-colors duration-300">
                      <img
                        src={contact!.image}
                        alt={contact!.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-orange-500 transition-colors">
                          {contact!.name}
                        </h4>
                        <p className="text-white/50 text-sm">{contact!.role}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Areas */}
      {relatedAreas.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-10">Area Terkait</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedAreas.map((area) => (
                  <Link
                    key={area!.id}
                    to={`/area-praktik/${area!.slug}`}
                  >
                    <div className="group flex items-center justify-between p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:border-orange-500/30 transition-colors duration-300">
                      <span className="text-white/70 group-hover:text-white transition-colors">
                        {area!.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Butuh Bantuan {practice.name}?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Hubungi tim kami untuk konsultasi tentang kebutuhan hukum Anda.
            </p>
            <Link to="/kontak">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full font-medium transition-all duration-300 hover:shadow-glow">
                <Users className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
