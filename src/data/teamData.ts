export interface TeamMember {
  id: string;
  name: string;
  role: string;
  type: 'partner' | 'senior-associate' | 'associate';
  image: string;
  expertise: string[];
  email: string;
  phone: string;
  linkedin: string;
  bio: string;
  education: string[];
  experience: string[];
  languages: string[];
  awards?: string[];
}

export const partners: TeamMember[] = [
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'Managing Partner',
    type: 'partner',
    image: '/images/team-sarah.jpg',
    expertise: ['Corporate Law', 'M&A', 'Cross-border Transactions'],
    email: 'sarah.jenkins@dpattorney.com',
    phone: '+65 6123 4561',
    linkedin: 'https://linkedin.com',
    bio: 'Sarah Jenkins adalah Managing Partner di DP Attorney dengan pengalaman lebih dari 20 tahun dalam hukum korporasi dan M&A. Beliau telah menangani transaksi lintas batas senilai miliaran dolar di seluruh Asia Pasifik.',
    education: [
      'LL.M., Harvard Law School',
      'Sarjana Hukum, National University of Singapore',
    ],
    experience: [
      'Managing Partner, DP Attorney (2015 - sekarang)',
      'Partner, Baker & McKenzie (2005 - 2015)',
      'Associate, Allen & Gledhill (2000 - 2005)',
    ],
    languages: ['English', 'Mandarin', 'Indonesian'],
    awards: [
      'Chambers Asia Pacific - Band 1, Corporate/M&A (2020-2024)',
      'IFLR1000 - Leading Lawyer, M&A (2018-2024)',
      'Asian Legal Business - Top 50 Lawyers in Asia (2022)',
    ],
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'Senior Partner',
    type: 'partner',
    image: '/images/team-david.jpg',
    expertise: ['Fintech', 'Blockchain', 'Cryptocurrency Regulations'],
    email: 'david.chen@dpattorney.com',
    phone: '+65 6123 4562',
    linkedin: 'https://linkedin.com',
    bio: 'David Chen adalah pakar terkemuka dalam regulasi fintech dan blockchain di Asia. Beliau telah membantu berbagai startup crypto dan perusahaan teknologi keuangan menavigasi lanskap regulasi yang kompleks.',
    education: [
      'J.D., Stanford Law School',
      'B.S. Computer Science, MIT',
    ],
    experience: [
      'Senior Partner, DP Attorney (2018 - sekarang)',
      'General Counsel, Binance (2015 - 2018)',
      'Associate, Skadden Arps (2008 - 2015)',
    ],
    languages: ['English', 'Mandarin', 'Japanese'],
    awards: [
      'Chambers Fintech - Band 1 (2021-2024)',
      'Legal 500 - Leading Individual, TMT (2020-2024)',
    ],
  },
  {
    id: 'alisha-patel',
    name: 'Alisha Patel',
    role: 'Partner',
    type: 'partner',
    image: '/images/team-alisha.jpg',
    expertise: ['Energy', 'Infrastructure', 'Project Finance'],
    email: 'alisha.patel@dpattorney.com',
    phone: '+65 6123 4563',
    linkedin: 'https://linkedin.com',
    bio: 'Alisha Patel memiliki keahlian mendalam dalam proyek energi dan infrastruktur di pasar berkembang Asia. Beliau telah menasihati pada proyek-proyek energi terbarukan senilai lebih dari $5 miliar.',
    education: [
      'LL.M., London School of Economics',
      'Sarjana Hukum, University of Delhi',
    ],
    experience: [
      'Partner, DP Attorney (2019 - sekarang)',
      'Partner, Clifford Chance (2010 - 2019)',
      'Associate, Amarchand & Mangaldas (2005 - 2010)',
    ],
    languages: ['English', 'Hindi', 'Indonesian'],
    awards: [
      'Chambers Energy - Band 2 (2020-2024)',
      'IJGlobal - Asia Pacific Lawyer of the Year (2022)',
    ],
  },
  {
    id: 'michael-ross',
    name: 'Michael Ross',
    role: 'Partner',
    type: 'partner',
    image: '/images/team-michael.jpg',
    expertise: ['International Arbitration', 'Dispute Resolution', 'Litigation'],
    email: 'michael.ross@dpattorney.com',
    phone: '+65 6123 4564',
    linkedin: 'https://linkedin.com',
    bio: 'Michael Ross adalah arbiter dan pengacara sengketa internasional yang diakui secara internasional. Beliau telah menangani arbitrasi di bawah berbagai aturan termasuk ICC, SIAC, dan HKIAC.',
    education: [
      'LL.M., Cambridge University',
      'Sarjana Hukum, University of Sydney',
    ],
    experience: [
      'Partner, DP Attorney (2017 - sekarang)',
      'Partner, Herbert Smith Freehills (2008 - 2017)',
      'Barrister, Sydney Bar (2000 - 2008)',
    ],
    languages: ['English', 'French'],
    awards: [
      'Chambers Arbitration - Band 1 (2019-2024)',
      'Who\'s Who Legal - Arbitration Thought Leader (2021-2024)',
    ],
  },
  {
    id: 'james-wong',
    name: 'James Wong',
    role: 'Partner',
    type: 'partner',
    image: '/images/team-james.jpg',
    expertise: ['Banking & Finance', 'Capital Markets', 'Securitization'],
    email: 'james.wong@dpattorney.com',
    phone: '+65 6123 4565',
    linkedin: 'https://linkedin.com',
    bio: 'James Wong memiliki pengalaman luas dalam perbankan dan pasar modal. Beliau telah menasihati bank-bank internasional dan perusahaan dalam transaksi pembiayaan kompleks.',
    education: [
      'LL.M., NYU School of Law',
      'Sarjana Hukum, University of Hong Kong',
    ],
    experience: [
      'Partner, DP Attorney (2016 - sekarang)',
      'Partner, Linklaters (2007 - 2016)',
      'Associate, Freshfields (2000 - 2007)',
    ],
    languages: ['English', 'Cantonese', 'Mandarin'],
    awards: [
      'Chambers Banking & Finance - Band 2 (2018-2024)',
      'Legal 500 - Leading Individual (2019-2024)',
    ],
  },
  {
    id: 'lisa-tan',
    name: 'Lisa Tan',
    role: 'Partner',
    type: 'partner',
    image: '/images/team-lisa.jpg',
    expertise: ['Intellectual Property', 'Technology', 'Data Protection'],
    email: 'lisa.tan@dpattorney.com',
    phone: '+65 6123 4566',
    linkedin: 'https://linkedin.com',
    bio: 'Lisa Tan adalah pakar IP dan perlindungan data dengan fokus pada sektor teknologi. Beliau membantu perusahaan melindungi aset intelektual mereka dan mematuhi regulasi data.',
    education: [
      'LL.M., Berkeley Law',
      'Sarjana Hukum, NUS',
    ],
    experience: [
      'Partner, DP Attorney (2020 - sekarang)',
      'Head of IP, Google APAC (2015 - 2020)',
      'Associate, Rouse & Co (2008 - 2015)',
    ],
    languages: ['English', 'Mandarin', 'Malay'],
    awards: [
      'Chambers IP - Band 2 (2021-2024)',
      'WIPR - Asia IP Woman of the Year (2023)',
    ],
  },
];

export const seniorAssociates: TeamMember[] = [
  {
    id: 'robert-kim',
    name: 'Robert Kim',
    role: 'Senior Associate',
    type: 'senior-associate',
    image: '/images/team-robert.jpg',
    expertise: ['Corporate Law', 'M&A', 'Private Equity'],
    email: 'robert.kim@dpattorney.com',
    phone: '+65 6123 4570',
    linkedin: 'https://linkedin.com',
    bio: 'Robert Kim adalah Senior Associate yang fokus pada transaksi korporasi dan private equity.',
    education: [
      'Sarjana Hukum, Seoul National University',
      'LL.M., NUS',
    ],
    experience: [
      'Senior Associate, DP Attorney (2021 - sekarang)',
      'Associate, Kim & Chang (2016 - 2021)',
    ],
    languages: ['English', 'Korean', 'Japanese'],
  },
  {
    id: 'anna-schmidt',
    name: 'Anna Schmidt',
    role: 'Senior Associate',
    type: 'senior-associate',
    image: '/images/team-anna.jpg',
    expertise: ['Employment Law', 'Industrial Relations', 'Compliance'],
    email: 'anna.schmidt@dpattorney.com',
    phone: '+65 6123 4571',
    linkedin: 'https://linkedin.com',
    bio: 'Anna Schmidt mengkhususkan diri dalam hukum ketenagakerjaan dan hubungan industrial.',
    education: [
      'LL.M., LSE',
      'Sarjana Hukum, University of Munich',
    ],
    experience: [
      'Senior Associate, DP Attorney (2020 - sekarang)',
      'Associate, DLA Piper (2015 - 2020)',
    ],
    languages: ['English', 'German', 'French'],
  },
  {
    id: 'kevin-lee',
    name: 'Kevin Lee',
    role: 'Senior Associate',
    type: 'senior-associate',
    image: '/images/team-kevin.jpg',
    expertise: ['Real Estate', 'Construction', 'Property Development'],
    email: 'kevin.lee@dpattorney.com',
    phone: '+65 6123 4572',
    linkedin: 'https://linkedin.com',
    bio: 'Kevin Lee memiliki pengalaman dalam proyek real estate dan konstruksi skala besar.',
    education: [
      'Sarjana Hukum, University of Melbourne',
      'Master of Construction Law, Monash University',
    ],
    experience: [
      'Senior Associate, DP Attorney (2022 - sekarang)',
      'Associate, King & Wood Mallesons (2017 - 2022)',
    ],
    languages: ['English', 'Cantonese'],
  },
  {
    id: 'maria-garcia',
    name: 'Maria Garcia',
    role: 'Senior Associate',
    type: 'senior-associate',
    image: '/images/team-maria.jpg',
    expertise: ['Tax Law', 'Transfer Pricing', 'Tax Disputes'],
    email: 'maria.garcia@dpattorney.com',
    phone: '+65 6123 4573',
    linkedin: 'https://linkedin.com',
    bio: 'Maria Garcia adalah pakar perpajakan dengan pengalaman dalam transfer pricing dan sengketa pajak.',
    education: [
      'LL.M. Taxation, NYU',
      'Sarjana Hukum, University of Philippines',
    ],
    experience: [
      'Senior Associate, DP Attorney (2019 - sekarang)',
      'Tax Consultant, PwC (2014 - 2019)',
    ],
    languages: ['English', 'Filipino', 'Spanish'],
  },
];

export const associates: TeamMember[] = [
  {
    id: 'john-lim',
    name: 'John Lim',
    role: 'Associate',
    type: 'associate',
    image: '/images/team-john.jpg',
    expertise: ['Corporate Law', 'Commercial Contracts'],
    email: 'john.lim@dpattorney.com',
    phone: '+65 6123 4580',
    linkedin: 'https://linkedin.com',
    bio: 'John Lim adalah Associate yang fokus pada hukum korporasi dan kontrak komersial.',
    education: ['Sarjana Hukum, SMU'],
    experience: [
      'Associate, DP Attorney (2022 - sekarang)',
      'Trainee, WongPartnership (2021 - 2022)',
    ],
    languages: ['English', 'Mandarin'],
  },
  {
    id: 'siti-rahman',
    name: 'Siti Rahman',
    role: 'Associate',
    type: 'associate',
    image: '/images/team-siti.jpg',
    expertise: ['Dispute Resolution', 'Arbitration'],
    email: 'siti.rahman@dpattorney.com',
    phone: '+65 6123 4581',
    linkedin: 'https://linkedin.com',
    bio: 'Siti Rahman adalah Associate di tim penyelesaian sengketa.',
    education: ['Sarjana Hukum, NUS'],
    experience: [
      'Associate, DP Attorney (2023 - sekarang)',
      'Trainee, Rajah & Tann (2022 - 2023)',
    ],
    languages: ['English', 'Malay', 'Indonesian'],
  },
  {
    id: 'tom-anderson',
    name: 'Tom Anderson',
    role: 'Associate',
    type: 'associate',
    image: '/images/team-tom.jpg',
    expertise: ['Banking & Finance', 'Fintech'],
    email: 'tom.anderson@dpattorney.com',
    phone: '+65 6123 4582',
    linkedin: 'https://linkedin.com',
    bio: 'Tom Anderson adalah Associate yang fokus pada perbankan dan fintech.',
    education: ['Sarjana Hukum, University of Oxford'],
    experience: [
      'Associate, DP Attorney (2023 - sekarang)',
      'Analyst, Goldman Sachs (2021 - 2022)',
    ],
    languages: ['English'],
  },
  {
    id: 'yuki-tanaka',
    name: 'Yuki Tanaka',
    role: 'Associate',
    type: 'associate',
    image: '/images/team-yuki.jpg',
    expertise: ['Capital Markets', 'Securities'],
    email: 'yuki.tanaka@dpattorney.com',
    phone: '+65 6123 4583',
    linkedin: 'https://linkedin.com',
    bio: 'Yuki Tanaka adalah Associate yang fokus pada pasar modal dan sekuritas.',
    education: ['LL.M., Georgetown', 'Sarjana Hukum, University of Tokyo'],
    experience: [
      'Associate, DP Attorney (2022 - sekarang)',
      'Associate, Anderson Mori (2020 - 2022)',
    ],
    languages: ['English', 'Japanese'],
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Associate',
    type: 'associate',
    image: '/images/team-priya.jpg',
    expertise: ['Energy', 'Infrastructure', 'Project Finance'],
    email: 'priya.sharma@dpattorney.com',
    phone: '+65 6123 4584',
    linkedin: 'https://linkedin.com',
    bio: 'Priya Sharma adalah Associate di tim energi dan infrastruktur.',
    education: ['Sarjana Hukum, NALSAR University'],
    experience: [
      'Associate, DP Attorney (2023 - sekarang)',
      'Trainee, Cyril Amarchand (2022 - 2023)',
    ],
    languages: ['English', 'Hindi', 'Tamil'],
  },
  {
    id: 'daniel-ng',
    name: 'Daniel Ng',
    role: 'Associate',
    type: 'associate',
    image: '/images/team-daniel.jpg',
    expertise: ['Technology', 'Data Protection', 'Cybersecurity'],
    email: 'daniel.ng@dpattorney.com',
    phone: '+65 6123 4585',
    linkedin: 'https://linkedin.com',
    bio: 'Daniel Ng adalah Associate yang fokus pada teknologi dan perlindungan data.',
    education: ['Sarjana Hukum, NUS', 'B.Comp, NUS'],
    experience: [
      'Associate, DP Attorney (2023 - sekarang)',
      'Software Engineer, Google (2020 - 2022)',
    ],
    languages: ['English', 'Mandarin'],
  },
];

export const allTeamMembers = [...partners, ...seniorAssociates, ...associates];

export const getMemberById = (id: string): TeamMember | undefined => {
  return allTeamMembers.find((member) => member.id === id);
};

export const getMembersByType = (type: TeamMember['type']): TeamMember[] => {
  return allTeamMembers.filter((member) => member.type === type);
};
