import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Landmark, TrendingUp, Scale, Users, Zap, Lightbulb, Home, Calculator, Cpu } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { practiceAreas } from '@/data';

const icons: Record<string, React.ElementType> = {
  Building2,
  Landmark,
  TrendingUp,
  Scale,
  Users,
  Zap,
  Lightbulb,
  Home,
  Calculator,
  Cpu,
};

export default function PracticeOverviewPage() {
  return (
    <div className="bg-[#0a0a0a]">
      <PageHeader
        title="Area Praktik"
        subtitle="Keahlian Kami"
        description="Layanan hukum spesialis yang disesuaikan dengan tantangan unik pasar Asia."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => {
              const Icon = icons[area.icon] || Building2;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/area-praktik/${area.slug}`}>
                    <div className="group relative h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.06] hover:border-orange-500/30 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative">
                        <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors duration-300">
                          <Icon className="w-7 h-7 text-orange-500" />
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          {area.name}
                          <ArrowRight className="w-5 h-5 text-orange-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </h3>

                        <p className="text-white/50 text-base leading-relaxed mb-6">
                          {area.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {area.services.slice(0, 3).map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/40 text-xs"
                            >
                              {service}
                            </span>
                          ))}
                          {area.services.length > 3 && (
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/40 text-xs">
                              +{area.services.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
