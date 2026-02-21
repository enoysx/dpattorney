import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  {
    name: 'Tim Kami',
    href: '/tim',
    children: [
      { name: 'Partner', href: '/tim/partner' },
      { name: 'Senior Associate', href: '/tim/senior-associate' },
      { name: 'Associate', href: '/tim/associate' },
    ],
  },
  {
    name: 'Area Praktik',
    href: '/area-praktik',
    children: [
      { name: 'Hukum Korporasi & M&A', href: '/area-praktik/corporate-ma' },
      { name: 'Perbankan & Keuangan', href: '/area-praktik/banking-finance' },
      { name: 'Pasar Modal', href: '/area-praktik/capital-markets' },
      { name: 'Penyelesaian Sengketa', href: '/area-praktik/dispute-resolution' },
      { name: 'Ketenagakerjaan', href: '/area-praktik/employment' },
      { name: 'Energi & Infrastruktur', href: '/area-praktik/energy-infrastructure' },
      { name: 'Kekayaan Intelektual', href: '/area-praktik/intellectual-property' },
      { name: 'Properti & Konstruksi', href: '/area-praktik/real-estate' },
      { name: 'Perpajakan', href: '/area-praktik/tax' },
      { name: 'Teknologi & Data', href: '/area-praktik/technology-data' },
    ],
  },
  { name: 'Wawasan Hukum', href: '/wawasan' },
  {
    name: 'Karir',
    href: '/karir',
    children: [
      { name: 'Mengapa Bergabung', href: '/karir/mengapa-bergabung' },
      { name: 'Budaya Perusahaan', href: '/karir/budaya' },
      { name: 'Lowongan Terbuka', href: '/karir/lowongan' },
    ],
  },
  { name: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsMobileMenuOpen(false)
      setOpenDropdown(null)
    }, 0)

    return () => clearTimeout(t)
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DP</span>
                </div>
                <span className="text-white font-semibold text-lg tracking-wide">
                  PONGKOR & PARTNERS
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors relative group flex items-center gap-1 ${
                      isActive(link.href)
                        ? 'text-orange-500'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {link.children && <ChevronDown className="w-4 h-4" />}
                    <span
                      className={`absolute -bottom-1 left-4 right-4 h-0.5 bg-orange-500 transition-all duration-300 ${
                        isActive(link.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden min-w-[240px] shadow-xl">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`block px-4 py-3 text-sm transition-colors ${
                                location.pathname === child.href
                                  ? 'bg-orange-500/20 text-orange-500'
                                  : 'text-white/70 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/kontak">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-glow">
                  <Phone className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-lg pt-24 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col p-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`block py-3 text-lg font-medium ${
                      isActive(link.href) ? 'text-orange-500' : 'text-white'
                    }`}
                    onClick={() => !link.children && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-1 border-l border-white/10 ml-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`block py-2 text-sm ${
                            location.pathname === child.href
                              ? 'text-orange-500'
                              : 'text-white/60'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <Link to="/kontak" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-medium">
                    <Phone className="w-5 h-5 mr-2" />
                    Hubungi Kami
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
