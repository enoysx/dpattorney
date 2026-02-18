import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { partners, seniorAssociates, associates, type TeamMember } from '@/data';

const teamData: Record<string, { title: string; subtitle: string; members: TeamMember[] }> = {
  partner: {
    title: 'Partner',
    subtitle: 'Tim Kami',
    members: partners,
  },
  'senior-associate': {
    title: 'Senior Associate',
    subtitle: 'Tim Kami',
    members: seniorAssociates,
  },
  associate: {
    title: 'Associate',
    subtitle: 'Tim Kami',
    members: associates,
  },
};

export default function TeamArchivePage() {
  const { type } = useParams<{ type: string }>();
  const data = type ? teamData[type] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Tim tidak ditemukan</h1>
          <Link to="/tim/partner" className="text-orange-500 hover:underline">
            Lihat Partner
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a]">
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        description={`Bertemu dengan ${data.title.toLowerCase()} berpengalaman kami yang memimpin praktik hukum kami.`}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/tim/${type}/${member.id}`}>
                  <div className="group">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      
                      {/* Social Links */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors duration-300"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-orange-500 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-orange-500 text-sm font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-white/40 text-sm mb-4">
                        {member.expertise.join(', ')}
                      </p>
                      <div className="flex items-center gap-2 text-orange-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Lihat Profil
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
