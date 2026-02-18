export interface Office {
  id: string;
  city: string;
  country: string;
  address: string[];
  phone: string;
  fax: string;
  email: string;
  hours: string;
  mapLink: string;
  isHeadquarters?: boolean;
}

export const offices: Office[] = [
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    address: [
      'Marina Bay Financial Centre',
      'Tower 3, Level 42',
      '12 Marina Boulevard',
      'Singapore 018982',
    ],
    phone: '+65 6123 4567',
    fax: '+65 6123 4568',
    email: 'singapore@dpattorney.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM SGT',
    mapLink: 'https://maps.google.com/?q=Marina+Bay+Financial+Centre+Singapore',
    isHeadquarters: true,
  },
  {
    id: 'hong-kong',
    city: 'Hong Kong',
    country: 'Hong Kong SAR',
    address: [
      'International Commerce Centre',
      'Suite 5801, 58/F',
      '1 Austin Road West',
      'Kowloon, Hong Kong',
    ],
    phone: '+852 2345 6789',
    fax: '+852 2345 6790',
    email: 'hongkong@dpattorney.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM HKT',
    mapLink: 'https://maps.google.com/?q=International+Commerce+Centre+Hong+Kong',
  },
  {
    id: 'jakarta',
    city: 'Jakarta',
    country: 'Indonesia',
    address: [
      'Sudirman Central Business District',
      'Lot 11, Level 45',
      'Jl. Jenderal Sudirman Kav. 52-53',
      'Jakarta 12190',
    ],
    phone: '+62 21 1234 5678',
    fax: '+62 21 1234 5679',
    email: 'jakarta@dpattorney.com',
    hours: 'Monday - Friday: 8:30 AM - 5:30 PM WIB',
    mapLink: 'https://maps.google.com/?q=SCBD+Jakarta',
  },
  {
    id: 'bangkok',
    city: 'Bangkok',
    country: 'Thailand',
    address: [
      'Sathorn Square Office Tower',
      'Level 32',
      '98 North Sathorn Road',
      'Bangkok 10500',
    ],
    phone: '+66 2 123 4567',
    fax: '+66 2 123 4568',
    email: 'bangkok@dpattorney.com',
    hours: 'Monday - Friday: 8:30 AM - 5:30 PM ICT',
    mapLink: 'https://maps.google.com/?q=Sathorn+Square+Bangkok',
  },
  {
    id: 'kuala-lumpur',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    address: [
      'Petronas Twin Towers',
      'Level 76, Tower 2',
      'Kuala Lumpur City Centre',
      'Kuala Lumpur 50088',
    ],
    phone: '+60 3 1234 5678',
    fax: '+60 3 1234 5679',
    email: 'kualalumpur@dpattorney.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM MYT',
    mapLink: 'https://maps.google.com/?q=Petronas+Twin+Towers+KL',
  },
  {
    id: 'manila',
    city: 'Manila',
    country: 'Philippines',
    address: [
      'Ayala Tower One',
      'Level 38',
      '6769 Ayala Avenue',
      'Makati City 1226',
    ],
    phone: '+63 2 1234 5678',
    fax: '+63 2 1234 5679',
    email: 'manila@dpattorney.com',
    hours: 'Monday - Friday: 8:30 AM - 5:30 PM PHT',
    mapLink: 'https://maps.google.com/?q=Ayala+Tower+One+Manila',
  },
];

export const contactFormFields = [
  {
    name: 'firstName',
    label: 'Nama Depan',
    type: 'text',
    required: true,
    placeholder: 'Masukkan nama depan',
  },
  {
    name: 'lastName',
    label: 'Nama Belakang',
    type: 'text',
    required: true,
    placeholder: 'Masukkan nama belakang',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    placeholder: 'Masukkan email',
  },
  {
    name: 'phone',
    label: 'Nomor Telepon',
    type: 'tel',
    required: false,
    placeholder: 'Masukkan nomor telepon',
  },
  {
    name: 'company',
    label: 'Perusahaan/Organisasi',
    type: 'text',
    required: false,
    placeholder: 'Masukkan nama perusahaan',
  },
  {
    name: 'inquiryType',
    label: 'Jenis Pertanyaan',
    type: 'select',
    required: true,
    options: [
      { value: '', label: 'Pilih jenis pertanyaan' },
      { value: 'general', label: 'Pertanyaan Umum' },
      { value: 'legal', label: 'Konsultasi Hukum' },
      { value: 'career', label: 'Karir' },
      { value: 'media', label: 'Media' },
      { value: 'partnership', label: 'Kemitraan' },
      { value: 'other', label: 'Lainnya' },
    ],
  },
  {
    name: 'practiceArea',
    label: 'Area Praktik (jika konsultasi hukum)',
    type: 'select',
    required: false,
    options: [
      { value: '', label: 'Pilih area praktik' },
      { value: 'corporate', label: 'Hukum Korporasi & M&A' },
      { value: 'banking', label: 'Perbankan & Keuangan' },
      { value: 'capital-markets', label: 'Pasar Modal' },
      { value: 'dispute', label: 'Penyelesaian Sengketa' },
      { value: 'employment', label: 'Ketenagakerjaan' },
      { value: 'energy', label: 'Energi & Infrastruktur' },
      { value: 'ip', label: 'Kekayaan Intelektual' },
      { value: 'real-estate', label: 'Properti & Konstruksi' },
      { value: 'tax', label: 'Perpajakan' },
      { value: 'technology', label: 'Teknologi & Perlindungan Data' },
    ],
  },
  {
    name: 'message',
    label: 'Pesan',
    type: 'textarea',
    required: true,
    placeholder: 'Jelaskan pertanyaan atau kebutuhan Anda',
    rows: 5,
  },
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/dpattorney',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/dpattorney',
    icon: 'Twitter',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/dpattorney',
    icon: 'Facebook',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/dpattorney',
    icon: 'Instagram',
  },
];
