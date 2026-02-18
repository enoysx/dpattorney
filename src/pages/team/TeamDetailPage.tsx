import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, ArrowLeft, Award, GraduationCap, Briefcase, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getMemberById, allTeamMembers } from '@/data';

export default function TeamDetailPage() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const member = id ? getMemberById(id) : null;

  if (!member) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Profil tidak ditemukan</h1>
          <Link to={`/tim/${type}`} className="text-orange-500 hover:underline">
            Kembali ke Daftar Tim
          </Link>
        </div>
      </div>
    );
  }

  const relatedMembers = allTeamMembers
    .filter((m) => m.id !== member.id && m.type === member.type)
    .slice(0, 3);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Breadcrumb */}
      <div className="pt-24 pb-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={`/tim/${type}`}
            className="inline-flex items-center gap-2 text-white/50 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke {member.type === 'partner' ? 'Partner' : member.type === 'senior-associate' ? 'Senior Associate' : 'Associate'}
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-2xl opacity-50" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  {member.name}
                </h1>
                <p className="text-orange-500 text-xl font-medium mb-6">{member.role}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {member.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <a href={`mailto:${member.email}`}>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email
                  </Button>
                </a>
                <a href={`tel:${member.phone}`}>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Telepon
                  </Button>
                </a>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-white mb-4">Tentang</h3>
                <p className="text-white/60 leading-relaxed text-lg">{member.bio}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Pendidikan</h3>
              </div>
              <ul className="space-y-4">
                {member.education.map((edu, index) => (
                  <li key={index} className="text-white/60">
                    {edu}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Pengalaman</h3>
              </div>
              <ul className="space-y-4">
                {member.experience.map((exp, index) => (
                  <li key={index} className="text-white/60">
                    {exp}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Bahasa</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {member.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              {member.awards && member.awards.length > 0 && (
                <div className="mt-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Penghargaan</h3>
                  </div>
                  <ul className="space-y-3">
                    {member.awards.map((award, index) => (
                      <li key={index} className="text-white/60 text-sm">
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Members */}
      {relatedMembers.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-white mb-10">
              {member.type === 'partner' ? 'Partner Lainnya' : member.type === 'senior-associate' ? 'Senior Associate Lainnya' : 'Associate Lainnya'}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedMembers.map((related) => (
                <Link key={related.id} to={`/tim/${type}/${related.id}`}>
                  <div className="group flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:border-orange-500/30 transition-colors duration-300">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-orange-500 transition-colors">
                        {related.name}
                      </h4>
                      <p className="text-white/50 text-sm">{related.role}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
