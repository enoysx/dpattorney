import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const quickLinks = [
  { name: 'Tentang Kami', href: '/tentang-kami' },
  { name: 'Tim Kami', href: '/tim/partner' },
  { name: 'Area Praktik', href: '/area-praktik' },
  { name: 'Wawasan Hukum', href: '/wawasan' },
  { name: 'Karir', href: '/karir' },
  { name: 'Kontak', href: '/kontak' },
];

const practiceLinks = [
  { name: 'Hukum Korporasi & M&A', href: '/area-praktik/corporate-ma' },
  { name: 'Perbankan & Keuangan', href: '/area-praktik/banking-finance' },
  { name: 'Pasar Modal', href: '/area-praktik/capital-markets' },
  { name: 'Penyelesaian Sengketa', href: '/area-praktik/dispute-resolution' },
  { name: 'Energi & Infrastruktur', href: '/area-praktik/energy-infrastructure' },
];

const legalLinks = [
  { name: 'Kebijakan Privasi', href: '/kebijakan-privasi' },
  { name: 'Syarat & Ketentuan', href: '/syarat-ketentuan' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-20 pb-8">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DP</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-wide">
                ATTORNEY
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Menavigasi kompleksitas dengan presisi digital. Mitra hukum terpercaya Anda di seluruh Asia.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Instagram, href: 'https://instagram.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-orange-500 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Practice Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6">Area Praktik</h4>
            <ul className="space-y-3">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-orange-500 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium">Kantor Pusat</div>
                  <div className="text-white/40 text-xs">
                    Marina Bay Financial Centre<br />
                    Singapore 018982
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a
                  href="mailto:info@dpattorney.com"
                  className="text-white/50 hover:text-orange-500 text-sm transition-colors duration-300"
                >
                  info@dpattorney.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a
                  href="tel:+6561234567"
                  className="text-white/50 hover:text-orange-500 text-sm transition-colors duration-300"
                >
                  +65 6123 4567
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white/30 text-sm"
            >
              © 2024 DP Attorney. Hak Cipta Dilindungi.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-6"
            >
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white/30 hover:text-white/50 text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
