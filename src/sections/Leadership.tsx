import { motion } from 'framer-motion';
import { Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

const teamMembers = [
  {
    name: 'Sarah Jenkins',
    role: 'Managing Partner',
    image: '/images/team-sarah.jpg',
    expertise: 'Corporate Law, M&A',
    linkedin: '#',
    email: 'sarah@dpattorney.com',
  },
  {
    name: 'David Chen',
    role: 'Senior Partner',
    image: '/images/team-david.jpg',
    expertise: 'Fintech, Blockchain',
    linkedin: '#',
    email: 'david@dpattorney.com',
  },
  {
    name: 'Alisha Patel',
    role: 'Partner',
    image: '/images/team-alisha.jpg',
    expertise: 'Energy, Infrastructure',
    linkedin: '#',
    email: 'alisha@dpattorney.com',
  },
  {
    name: 'Michael Ross',
    role: 'Partner',
    image: '/images/team-michael.jpg',
    expertise: 'International Arbitration',
    linkedin: '#',
    email: 'michael@dpattorney.com',
  },
];

export default function Leadership() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="people" className="relative py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Our Team
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Our Leadership
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'text-white hover:bg-white/10 hover:border-orange-500'
                  : 'text-white/30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'text-white hover:bg-white/10 hover:border-orange-500'
                  : 'text-white/30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Team Cards */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start"
            >
              <div className="group relative">
                {/* Image Container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-white/40 text-sm">
                    {member.expertise}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
