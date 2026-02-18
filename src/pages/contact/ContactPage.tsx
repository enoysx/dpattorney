import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PageHeader from '@/components/PageHeader';
import { offices } from '@/data';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (_name: string, _value: string) => {
    // Form change handler (no-op for now)
    void _name
    void _value
  };

  return (
    <div className="bg-[#0a0a0a]">
      <PageHeader
        title="Kontak Kami"
        subtitle="Hubungi Kami"
        description="Hubungi tim kami untuk konsultasi atau pertanyaan tentang layanan hukum kami."
      />

      {/* Offices */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4 block">
              Lokasi Kami
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Kantor Kami
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Kami memiliki kantor di berbagai lokasi strategis di Asia untuk melayani klien kami.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 bg-white/[0.03] border rounded-2xl ${
                  office.isHeadquarters
                    ? 'border-orange-500/50'
                    : 'border-white/10 hover:border-orange-500/30'
                } transition-colors duration-300`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {office.city}
                      {office.isHeadquarters && (
                        <span className="ml-2 text-xs bg-orange-500/20 text-orange-500 px-2 py-1 rounded-full">
                          HQ
                        </span>
                      )}
                    </h3>
                    <p className="text-white/50 text-sm">{office.country}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-white/60 text-sm">
                    {office.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-orange-500" />
                      <a
                        href={`tel:${office.phone}`}
                        className="text-white/60 hover:text-orange-500 transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-orange-500" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-white/60 hover:text-orange-500 transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Clock className="w-4 h-4 text-orange-500 mt-0.5" />
                      <span className="text-white/60">{office.hours}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4 block">
                Kirim Pesan
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Hubungi Tim Kami
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Isi formulir di samping dan tim kami akan menghubungi Anda sesegera mungkin. 
                Kami biasanya merespons dalam 24 jam pada hari kerja.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <a
                      href="mailto:info@dpattorney.com"
                      className="text-white/50 hover:text-orange-500 transition-colors"
                    >
                      info@dpattorney.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Telepon</div>
                    <a
                      href="tel:+6561234567"
                      className="text-white/50 hover:text-orange-500 transition-colors"
                    >
                      +65 6123 4567
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {submitted ? (
                <div className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-white/60">
                    Terima kasih telah menghubungi kami. Tim kami akan menghubungi Anda sesegera mungkin.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">
                        Nama Depan <span className="text-orange-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Masukkan nama depan"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500"
                        onChange={(e) => handleChange('firstName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">
                        Nama Belakang <span className="text-orange-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Masukkan nama belakang"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500"
                        onChange={(e) => handleChange('lastName', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email <span className="text-orange-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Masukkan email"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500"
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Nomor Telepon
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Masukkan nomor telepon"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500"
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">
                      Perusahaan/Organisasi
                    </Label>
                    <Input
                      id="company"
                      placeholder="Masukkan nama perusahaan"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500"
                      onChange={(e) => handleChange('company', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType" className="text-white">
                      Jenis Pertanyaan <span className="text-orange-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(value) => handleChange('inquiryType', value)}
                    >
                      <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-orange-500">
                        <SelectValue placeholder="Pilih jenis pertanyaan" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1a1a] border-white/10">
                        <SelectItem value="general">Pertanyaan Umum</SelectItem>
                        <SelectItem value="legal">Konsultasi Hukum</SelectItem>
                        <SelectItem value="career">Karir</SelectItem>
                        <SelectItem value="media">Media</SelectItem>
                        <SelectItem value="partnership">Kemitraan</SelectItem>
                        <SelectItem value="other">Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Pesan <span className="text-orange-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Jelaskan pertanyaan atau kebutuhan Anda"
                      required
                      rows={5}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500 resize-none"
                      onChange={(e) => handleChange('message', e.target.value)}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-full font-medium transition-all duration-300 hover:shadow-glow"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
