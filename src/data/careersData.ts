export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
}

export const jobOpenings: JobOpening[] = [
  {
    id: 'associate-corporate',
    title: 'Associate - Corporate & M&A',
    department: 'Corporate',
    location: 'Singapore',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Kami mencari Associate yang berbakat untuk bergabung dengan tim Corporate & M&A kami. Kandidat ideal akan memiliki pengalaman dalam transaksi korporasi dan M&A.',
    requirements: [
 'Sarjana Hukum dari universitas terkemuka',
      'Pengalaman 2-4 tahun di hukum korporasi/M&A',
      'Kemampuan analitis yang kuat',
      'Keterampilan komunikasi yang sangat baik',
      'Mampu bekerja dalam tim',
      'Berbahasa Inggris dengan fasih',
    ],
    responsibilities: [
      'Menangani transaksi M&A dari awal hingga selesai',
      'Melakukan due diligence',
      'Menyusun dan meninjau kontrak',
      'Berkomunikasi dengan klien',
      'Melakukan penelitian hukum',
    ],
    postedDate: '2024-12-10',
  },
  {
    id: 'senior-associate-fintech',
    title: 'Senior Associate - Fintech',
    department: 'Fintech',
    location: 'Singapore',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Tim Fintech kami mencari Senior Associate dengan pengalaman dalam regulasi teknologi keuangan dan transaksi fintech.',
    requirements: [
      'Sarjana Hukum, preferensi untuk LL.M.',
      'Pengalaman 4-6 tahun di fintech atau banking',
      'Pemahaman mendalam tentang regulasi fintech',
      'Pengalaman dengan cryptocurrency/blockchain adalah nilai tambah',
      'Kemampuan untuk bekerja mandiri',
    ],
    responsibilities: [
      'Menasihati klien fintech pada regulasi',
      'Menangani transaksi fintech',
      'Melakukan review kepatuhan',
      'Menyusun kebijakan dan prosedur',
      'Mentoring junior associates',
    ],
    postedDate: '2024-12-08',
  },
  {
    id: 'associate-dispute',
    title: 'Associate - Dispute Resolution',
    department: 'Dispute Resolution',
    location: 'Singapore',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Kami mencari Associate untuk tim Penyelesaian Sengketa kami. Pengalaman dalam litigasi atau arbitrasi sangat dihargai.',
    requirements: [
      'Sarjana Hukum dengan hasil yang sangat baik',
      'Pengalaman 1-3 tahun dalam litigasi',
      'Advocacy skills yang kuat',
      'Kemampuan menulis yang sangat baik',
      'Bersedia bekerja di bawah tekanan',
    ],
    responsibilities: [
      'Menangani kasus litigasi dan arbitrasi',
      'Menyusun pleadings dan submissions',
      'Melakukan legal research',
      'Berkomunikasi dengan klien dan pengadilan',
      'Mempersiapkan witnesses',
    ],
    postedDate: '2024-12-05',
  },
  {
    id: 'paralegal-corporate',
    title: 'Paralegal - Corporate',
    department: 'Corporate',
    location: 'Singapore',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Kami mencari Paralegal yang berpengalaman untuk mendukung tim Corporate kami.',
    requirements: [
      'Diploma atau sertifikat paralegal',
      'Pengalaman 2+ tahun sebagai paralegal',
      'Kemampuan organisasi yang sangat baik',
      'Perhatian terhadap detail',
      'Kemampuan multitasking',
    ],
    responsibilities: [
      'Mendukung attorney dalam transaksi',
      'Mengelola dokumen dan filing',
      'Melakukan research dasar',
      'Mengoordinasikan dengan klien',
      'Mengelola jadwal dan deadline',
    ],
    postedDate: '2024-12-01',
  },
  {
    id: 'associate-energy',
    title: 'Associate - Energy & Infrastructure',
    department: 'Energy & Infrastructure',
    location: 'Singapore',
    type: 'Full-time',
    experience: '2-5 years',
    description: 'Tim Energy & Infrastructure kami mencari Associate dengan minat dalam proyek energi terbarukan.',
    requirements: [
      'Sarjana Hukum dari universitas terkemuka',
      'Pengalaman 2-5 tahun di project finance atau infrastruktur',
      'Pemahaman tentang proyek energi adalah nilai tambah',
      'Kemampuan analitis yang kuat',
      'Kemampuan untuk bekerja dalam tim',
    ],
    responsibilities: [
      'Menangani proyek energi dan infrastruktur',
      'Melakukan due diligence',
      'Menyusun dan meninjau kontrak proyek',
      'Berkomunikasi dengan klien dan lender',
      'Melakukan penelitian hukum',
    ],
    postedDate: '2024-11-28',
  },
  {
    id: 'legal-secretary',
    title: 'Legal Secretary',
    department: 'Administration',
    location: 'Singapore',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Kami mencari Legal Secretary yang berpengalaman untuk mendukung beberapa partner.',
    requirements: [
      'Pengalaman 3+ tahun sebagai legal secretary',
      'Kemampuan mengetik yang cepat dan akurat',
      'Mahir dalam Microsoft Office',
      'Kemampuan komunikasi yang sangat baik',
      'Kemampuan multitasking dan prioritisasi',
    ],
    responsibilities: [
      'Menyediakan dukungan administratif untuk partner',
      'Mengelola jadwal dan appointment',
      'Menyiapkan dokumen dan correspondence',
      'Mengelola filing sistem',
      'Berkoordinasi dengan klien',
    ],
    postedDate: '2024-11-25',
  },
];

export const careerBenefits = [
  {
    title: 'Kompensasi Kompetitif',
    description: 'Gaji yang kompetitif dengan bonus berbasis kinerja dan review tahunan.',
    icon: 'DollarSign',
  },
  {
    title: 'Pengembangan Karir',
    description: 'Jalur karir yang jelas dengan peluang promosi berdasarkan merit.',
    icon: 'TrendingUp',
  },
  {
    title: 'Pelatihan Berkala',
    description: 'Akses ke pelatihan internal dan eksternal untuk pengembangan profesional.',
    icon: 'GraduationCap',
  },
  {
    title: 'Work-Life Balance',
    description: 'Kebijakan flexible working dan cuti yang generous.',
    icon: 'Heart',
  },
  {
    title: 'Asuransi Kesehatan',
    description: 'Cakupan asuransi kesehatan komprehensif untuk Anda dan keluarga.',
    icon: 'Shield',
  },
  {
    title: 'Global Exposure',
    description: 'Kesempatan untuk bekerja pada transaksi lintas batas dengan tim internasional.',
    icon: 'Globe',
  },
];

export const careerPaths = [
  {
    title: 'Associate Track',
    steps: [
      { role: 'Associate', duration: '2-3 years', description: 'Pengembangan fundamental skills' },
      { role: 'Senior Associate', duration: '3-4 years', description: 'Spesialisasi dan mentoring' },
      { role: 'Of Counsel', duration: 'Variable', description: 'Keahlian teknis mendalam' },
      { role: 'Partner', duration: '-', description: 'Kepemilikan dan leadership' },
    ],
  },
  {
    title: 'Counsel Track',
    steps: [
      { role: 'Associate', duration: '2-3 years', description: 'Pengembangan fundamental skills' },
      { role: 'Senior Associate', duration: '3-4 years', description: 'Spesialisasi teknis' },
      { role: 'Counsel', duration: 'Variable', description: 'Keahlian spesialis' },
      { role: 'Senior Counsel', duration: '-', description: 'Expert tanpa tanggung jawab bisnis partner' },
    ],
  },
];

export const cultureValues = [
  {
    title: 'Excellence',
    description: 'Kami berkomitmen untuk memberikan layanan hukum terbaik dengan standar tertinggi.',
  },
  {
    title: 'Collaboration',
    description: 'Kami bekerja sama sebagai tim untuk mencapai hasil terbaik bagi klien kami.',
  },
  {
    title: 'Innovation',
    description: 'Kami mengadopsi teknologi dan pendekatan baru untuk meningkatkan efisiensi.',
  },
  {
    title: 'Integrity',
    description: 'Kami menjunjung tinggi etika profesional dan kejujuran dalam setiap tindakan.',
  },
  {
    title: 'Diversity',
    description: 'Kami menghargai berbagai perspektif dan latar belakang dalam tim kami.',
  },
  {
    title: 'Client Focus',
    description: 'Klien adalah prioritas utama kami dalam setiap keputusan yang kami buat.',
  },
];
