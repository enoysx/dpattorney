export interface PracticeArea {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  services: string[];
  keyContacts: string[];
  highlights: string[];
  relatedAreas: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'corporate-ma',
    name: 'Hukum Korporasi & M&A',
    nameEn: 'Corporate & M&A',
    slug: 'corporate-ma',
    icon: 'Building2',
    shortDescription: 'Penasihat hukum korporasi terdepan untuk transaksi M&A, restrukturisasi, dan governance.',
    fullDescription: `Tim Hukum Korporasi & M&A kami adalah salah satu yang terbesar dan paling berpengalaman di Asia. Kami menangani transaksi kompleks mulai dari merger lintas batas, akuisisi strategis, hingga divestasi dan joint venture.

Kami memahami bahwa setiap transaksi unik dan memerlukan pendekatan yang disesuaikan. Tim kami bekerja sama erat dengan klien untuk memahami tujuan bisnis mereka dan memberikan solusi hukum yang praktis dan komersial.`,
    services: [
      'Mergers & Acquisitions',
      'Joint Ventures & Strategic Alliances',
      'Corporate Restructuring',
      'Corporate Governance',
      'Due Diligence',
      'Shareholder Agreements',
      'Private Equity & Venture Capital',
    ],
    keyContacts: ['sarah-jenkins', 'robert-kim'],
    highlights: [
      'Menasihati pada merger senilai $2.5B di sektor telekomunikasi',
      'Menangani 50+ transaksi M&A di Asia Tenggara setiap tahun',
      'Mendapatkan penghargaan "Deal of the Year" dari Asian Legal Business',
    ],
    relatedAreas: ['banking-finance', 'capital-markets', 'tax'],
  },
  {
    id: 'banking-finance',
    name: 'Perbankan & Keuangan',
    nameEn: 'Banking & Finance',
    slug: 'banking-finance',
    icon: 'Landmark',
    shortDescription: 'Solusi hukum komprehensif untuk perbankan, pembiayaan proyek, dan structured finance.',
    fullDescription: `Tim Perbankan & Keuangan kami menasihati bank, lembaga keuangan, dan perusahaan dalam transaksi pembiayaan kompleks. Kami memiliki pengalaman luas dalam syndicated lending, project finance, dan structured finance.

Kami memahami dinamika pasar keuangan di Asia dan memberikan nasihat yang relevan dengan konteks bisnis lokal.`,
    services: [
      'Syndicated Lending',
      'Project Finance',
      'Acquisition Finance',
      'Structured Finance',
      'Islamic Finance',
      'Trade Finance',
      'Financial Regulatory',
    ],
    keyContacts: ['james-wong'],
    highlights: [
      'Menasihati pada pembiayaan proyek infrastruktur senilai $1B',
      'Mendapatkan penghargaan "Banking Team of the Year"',
      'Menangani 100+ transaksi pembiayaan setiap tahun',
    ],
    relatedAreas: ['corporate-ma', 'capital-markets', 'energy-infrastructure'],
  },
  {
    id: 'capital-markets',
    name: 'Pasar Modal',
    nameEn: 'Capital Markets',
    slug: 'capital-markets',
    icon: 'TrendingUp',
    shortDescription: 'Bantuan hukum untuk IPO, bond issuance, dan transaksi pasar modal lainnya.',
    fullDescription: `Tim Pasar Modal kami menasihati perusahaan dalam penawaran umum, penerbitan surat berharga, dan transaksi pasar modal lainnya. Kami memiliki track record yang terbukti dalam IPO di berbagai bursa Asia.

Kami membantu klien menavigasi regulasi pasar modal yang kompleks dan memastikan kepatuhan penuh terhadap persyaratan pengungkapan.`,
    services: [
      'Initial Public Offerings (IPO)',
      'Secondary Offerings',
      'Bond Issuances',
      'Convertible Securities',
      'Rights Issues',
      'Private Placements',
      'Regulatory Compliance',
    ],
    keyContacts: ['james-wong', 'yuki-tanaka'],
    highlights: [
      'Menasihati pada 20+ IPO di bursa Asia',
      'Menangani penerbitan bond senilai $5B',
      'Mendapatkan penghargaan "Equity Deal of the Year"',
    ],
    relatedAreas: ['corporate-ma', 'banking-finance'],
  },
  {
    id: 'dispute-resolution',
    name: 'Penyelesaian Sengketa',
    nameEn: 'Dispute Resolution',
    slug: 'dispute-resolution',
    icon: 'Scale',
    shortDescription: 'Representasi dalam litigasi, arbitrasi internasional, dan penyelesaian sengketa.',
    fullDescription: `Tim Penyelesaian Sengketa kami adalah salah satu yang paling dihormati di Asia. Kami menangani litigasi kompleks, arbitrasi internasional, dan penyelesaian sengketa alternatif.

Kami memiliki pengalaman dalam berbagai aturan arbitrasi termasuk ICC, SIAC, HKIAC, dan LCIA. Tim kami terdiri dari pengacara litigasi berpengalaman dan arbiter yang diakui.`,
    services: [
      'International Arbitration',
      'Commercial Litigation',
      'Investment Treaty Arbitration',
      'Mediation & Conciliation',
      'Enforcement of Awards',
      'Regulatory Investigations',
      'Crisis Management',
    ],
    keyContacts: ['michael-ross', 'siti-rahman'],
    highlights: [
      'Memenangkan arbitrasi senilai $500M di ICC',
      'Mendapatkan penghargaan "Arbitration Team of the Year"',
      'Menangani 30+ kasus arbitrasi setiap tahun',
    ],
    relatedAreas: ['corporate-ma', 'employment'],
  },
  {
    id: 'employment',
    name: 'Ketenagakerjaan',
    nameEn: 'Employment & Industrial Relations',
    slug: 'employment',
    icon: 'Users',
    shortDescription: 'Nasihat hukum ketenagakerjaan, kebijakan HR, dan penyelesaian sengketa tenaga kerja.',
    fullDescription: `Tim Ketenagakerjaan kami menasihati perusahaan dalam semua aspek hukum ketenagakerjaan. Dari penyusunan kontrak kerja hingga penanganan sengketa industrial, kami memberikan solusi yang praktis.

Kami memahami tantangan unik di setiap yurisdiksi Asia dan membantu klien mematuhi regulasi ketenagakerjaan yang kompleks.`,
    services: [
      'Employment Contracts & Policies',
      'Industrial Relations',
      'Termination & Redundancy',
      'Executive Compensation',
      'Employee Data Protection',
      'Workplace Investigations',
      'Labor Disputes',
    ],
    keyContacts: ['anna-schmidt'],
    highlights: [
      'Menasihati 100+ perusahaan multinasional',
      'Menangani restrukturisasi tenaga kerja 10,000+ karyawan',
      'Mendapatkan penghargaan "Employment Team of the Year"',
    ],
    relatedAreas: ['corporate-ma', 'dispute-resolution'],
  },
  {
    id: 'energy-infrastructure',
    name: 'Energi & Infrastruktur',
    nameEn: 'Energy & Infrastructure',
    slug: 'energy-infrastructure',
    icon: 'Zap',
    shortDescription: 'Bantuan hukum untuk proyek energi, infrastruktur, dan project finance.',
    fullDescription: `Tim Energi & Infrastruktur kami adalah salah satu yang terkemuka di Asia. Kami menasihati pada proyek energi terbarukan, infrastruktur transportasi, dan pengembangan properti komersial.

Kami memiliki pengalaman dalam berbagai struktur proyek termasuk PPP, BOT, dan EPC contracts. Tim kami memahami risiko unik dalam proyek infrastruktur dan memberikan solusi yang inovatif.`,
    services: [
      'Renewable Energy Projects',
      'Power & Utilities',
      'Transportation Infrastructure',
      'Oil & Gas',
      'Mining & Resources',
      'Project Finance',
      'EPC Contracts',
    ],
    keyContacts: ['alisha-patel', 'priya-sharma'],
    highlights: [
      'Menasihati pada proyek energi terbarukan senilai $5B',
      'Menangani 40+ proyek infrastruktur di Asia',
      'Mendapatkan penghargaan "Infrastructure Deal of the Year"',
    ],
    relatedAreas: ['banking-finance', 'corporate-ma'],
  },
  {
    id: 'intellectual-property',
    name: 'Kekayaan Intelektual',
    nameEn: 'Intellectual Property',
    slug: 'intellectual-property',
    icon: 'Lightbulb',
    shortDescription: 'Perlindungan IP, lisensi, dan penegakan hak kekayaan intelektual.',
    fullDescription: `Tim Kekayaan Intelektual kami membantu klien melindungi dan memonetisasi aset intelektual mereka. Kami menangani paten, merek dagang, hak cipta, dan rahasia dagang.

Kami memiliki pengalaman dalam litigasi IP dan telah memenangkan kasus-kasus penting di berbagai yurisdiksi Asia. Tim kami juga menasihati pada lisensi IP dan transaksi teknologi.`,
    services: [
      'Patent Prosecution & Litigation',
      'Trademark Registration & Enforcement',
      'Copyright Protection',
      'Trade Secrets',
      'IP Licensing',
      'Technology Transfer',
      'IP Due Diligence',
    ],
    keyContacts: ['lisa-tan'],
    highlights: [
      'Mendaftarkan 500+ paten dan merek dagang setiap tahun',
      'Memenangkan kasus pelanggaran paten senilai $100M',
      'Mendapatkan penghargaan "IP Team of the Year"',
    ],
    relatedAreas: ['technology-data', 'corporate-ma'],
  },
  {
    id: 'real-estate',
    name: 'Properti & Konstruksi',
    nameEn: 'Real Estate & Construction',
    slug: 'real-estate',
    icon: 'Home',
    shortDescription: 'Jasa hukum untuk transaksi properti, pengembangan, dan kontrak konstruksi.',
    fullDescription: `Tim Properti & Konstruksi kami menasihati pada transaksi properti komersial, pengembangan real estate, dan proyek konstruksi. Kami memiliki pengalaman dalam berbagai jenis properti termasuk perkantoran, ritel, industri, dan hospitality.

Kami membantu klien dalam seluruh siklus hidup proyek real estate mulai dari akuisisi lahan, perencanaan, konstruksi, hingga divestasi.`,
    services: [
      'Property Acquisitions & Disposals',
      'Real Estate Development',
      'Construction Contracts',
      'Property Finance',
      'Leasing',
      'Real Estate Investment',
      'Strata Title Matters',
    ],
    keyContacts: ['kevin-lee'],
    highlights: [
      'Menasihati pada transaksi properti senilai $3B',
      'Menangani 60+ proyek konstruksi setiap tahun',
      'Mendapatkan penghargaan "Real Estate Deal of the Year"',
    ],
    relatedAreas: ['energy-infrastructure', 'banking-finance'],
  },
  {
    id: 'tax',
    name: 'Perpajakan',
    nameEn: 'Tax',
    slug: 'tax',
    icon: 'Calculator',
    shortDescription: 'Nasihat pajak, perencanaan pajak, dan penyelesaian sengketa pajak.',
    fullDescription: `Tim Perpajakan kami menasihati perusahaan dan individu dalam perencanaan pajak, kepatuhan, dan penyelesaian sengketa. Kami memiliki pengalaman dalam pajak lintas batas dan transfer pricing.

Kami membantu klien mengoptimasi struktur pajak mereka sambil memastikan kepatuhan penuh terhadap regulasi. Tim kami juga menasihati pada transaksi yang memiliki implikasi pajak signifikan.`,
    services: [
      'Corporate Tax Planning',
      'Transfer Pricing',
      'Tax Disputes & Litigation',
      'International Tax',
      'M&A Tax',
      'Indirect Tax (GST/VAT)',
      'Tax Due Diligence',
    ],
    keyContacts: ['maria-garcia'],
    highlights: [
      'Menghemat $50M+ pajak untuk klien melalui perencanaan optimal',
      'Menangani 20+ sengketa pajak setiap tahun',
      'Mendapatkan penghargaan "Tax Team of the Year"',
    ],
    relatedAreas: ['corporate-ma', 'banking-finance'],
  },
  {
    id: 'technology-data',
    name: 'Teknologi & Perlindungan Data',
    nameEn: 'Technology & Data Protection',
    slug: 'technology-data',
    icon: 'Cpu',
    shortDescription: 'Bantuan hukum untuk teknologi, privasi data, dan keamanan siber.',
    fullDescription: `Tim Teknologi & Perlindungan Data kami menasihati perusahaan teknologi dan startup dalam berbagai aspek hukum teknologi. Kami memiliki pengalaman dalam perlindungan data, keamanan siber, dan transaksi teknologi.

Kami membantu klien mematuhi regulasi privasi data seperti GDPR dan PDPA, serta menangani insiden keamanan data. Tim kami juga menasihati pada kontrak teknologi dan lisensi perangkat lunak.`,
    services: [
      'Data Protection & Privacy',
      'Cybersecurity',
      'Technology Contracts',
      'Software Licensing',
      'Fintech Regulations',
      'E-commerce',
      'Digital Transformation',
    ],
    keyContacts: ['david-chen', 'lisa-tan', 'daniel-ng'],
    highlights: [
      'Menasihati 50+ perusahaan teknologi',
      'Mengimplementasikan program kepatuhan data untuk 30+ perusahaan',
      'Mendapatkan penghargaan "TMT Team of the Year"',
    ],
    relatedAreas: ['intellectual-property', 'corporate-ma', 'fintech'],
  },
];

export const getPracticeBySlug = (slug: string): PracticeArea | undefined => {
  return practiceAreas.find((area) => area.slug === slug);
};

export const getPracticeById = (id: string): PracticeArea | undefined => {
  return practiceAreas.find((area) => area.id === id);
};
