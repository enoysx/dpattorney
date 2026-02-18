import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const pathNames: Record<string, string> = {
  'tentang-kami': 'Tentang Kami',
  'tim': 'Tim Kami',
  'partner': 'Partner',
  'senior-associate': 'Senior Associate',
  'associate': 'Associate',
  'area-praktik': 'Area Praktik',
  'corporate-ma': 'Hukum Korporasi & M&A',
  'banking-finance': 'Perbankan & Keuangan',
  'capital-markets': 'Pasar Modal',
  'dispute-resolution': 'Penyelesaian Sengketa',
  'employment': 'Ketenagakerjaan',
  'energy-infrastructure': 'Energi & Infrastruktur',
  'intellectual-property': 'Kekayaan Intelektual',
  'real-estate': 'Properti & Konstruksi',
  'tax': 'Perpajakan',
  'technology-data': 'Teknologi & Perlindungan Data',
  'wawasan': 'Wawasan Hukum',
  'karir': 'Karir',
  'mengapa-bergabung': 'Mengapa Bergabung',
  'budaya': 'Budaya Perusahaan',
  'lowongan': 'Lowongan Terbuka',
  'kontak': 'Kontak Kami',
  'kebijakan-privasi': 'Kebijakan Privasi',
  'syarat-ketentuan': 'Syarat & Ketentuan',
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  const breadcrumbItems: BreadcrumbItem[] = items || [
    { label: 'Beranda', href: '/' },
    ...paths.map((path, index) => {
      const href = '/' + paths.slice(0, index + 1).join('/');
      return {
        label: pathNames[path] || path,
        href: index < paths.length - 1 ? href : undefined,
      };
    }),
  ];

  return (
    <nav className="py-4 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-white/30 mx-2" />
              )}
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-white/50 hover:text-orange-500 transition-colors flex items-center gap-1"
                >
                  {index === 0 && <Home className="w-4 h-4" />}
                  {item.label}
                </Link>
              ) : (
                <span className="text-orange-500">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
