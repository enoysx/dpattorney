import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Upload, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PageHeader from '@/components/PageHeader';
import { jobOpenings } from '@/data';

export default function ApplicationFormPage() {
  const [searchParams] = useSearchParams();
  const positionId = searchParams.get('position');
  const selectedJob = positionId ? jobOpenings.find((j) => j.id === positionId) : null;

  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({
    position: selectedJob?.id || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen">
        <PageHeader
          title="Lamaran Terkirim"
          subtitle="Karir"
          description=""
        />
        <section className="py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Terima Kasih!
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Lamaran Anda telah berhasil dikirim. Tim HR kami akan meninjau aplikasi Anda 
                dan menghubungi Anda jika profil Anda sesuai.
              </p>
              <Link to="/karir/lowongan">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full font-medium">
                  Lihat Lowongan Lainnya
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a]">
      <PageHeader
        title="Formulir Lamaran"
        subtitle="Karir"
        description="Isi formulir di bawah ini untuk melamar posisi di Dion Pongkor & Partners."
      />

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/karir/lowongan"
            className="inline-flex items-center gap-2 text-white/50 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Lowongan
          </Link>

          {/* Progress */}
          <div className="flex items-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    s <= step
                      ? 'bg-orange-500 text-white'
                      : 'bg-white/10 text-white/50'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 h-1 rounded-full ${
                      s < step ? 'bg-orange-500' : 'bg-white/10'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl space-y-8"
          >
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-6">Informasi Pribadi</h3>
                
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
                    Nomor Telepon <span className="text-orange-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Masukkan nomor telepon"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500"
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position" className="text-white">
                    Posisi yang Dilamar <span className="text-orange-500">*</span>
                  </Label>
                  <Select
                    value={formData.position}
                    onValueChange={(value) => handleChange('position', value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-orange-500">
                      <SelectValue placeholder="Pilih posisi" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-white/10">
                      {jobOpenings.map((job) => (
                        <SelectItem key={job.id} value={job.id}>
                          {job.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-full font-medium"
                >
                  Lanjutkan
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-6">Pengalaman & Pendidikan</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="education" className="text-white">
                    Pendidikan Terakhir <span className="text-orange-500">*</span>
                  </Label>
                  <Input
                    id="education"
                    placeholder="Contoh: Sarjana Hukum, Universitas Indonesia"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500"
                    onChange={(e) => handleChange('education', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-white">
                    Pengalaman Kerja <span className="text-orange-500">*</span>
                  </Label>
                  <Textarea
                    id="experience"
                    placeholder="Ceritakan pengalaman kerja Anda"
                    required
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500 resize-none"
                    onChange={(e) => handleChange('experience', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills" className="text-white">
                    Keahlian
                  </Label>
                  <Input
                    id="skills"
                    placeholder="Contoh: Corporate Law, M&A, Fintech"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500"
                    onChange={(e) => handleChange('skills', e.target.value)}
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1 border-white/20 text-white hover:bg-white/10 py-6 rounded-full"
                  >
                    Kembali
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-full font-medium"
                  >
                    Lanjutkan
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-6">Dokumen & Submit</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="cv" className="text-white">
                    CV/Resume <span className="text-orange-500">*</span>
                  </Label>
                  <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-orange-500/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-white/30 mx-auto mb-4" />
                    <p className="text-white/50 mb-2">Klik untuk mengunggah atau seret file</p>
                    <p className="text-white/30 text-sm">PDF, DOC, DOCX (Maks. 5MB)</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter" className="text-white">
                    Surat Lamaran
                  </Label>
                  <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-orange-500/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-white/30 mx-auto mb-4" />
                    <p className="text-white/50 mb-2">Klik untuk mengunggah atau seret file</p>
                    <p className="text-white/30 text-sm">PDF, DOC, DOCX (Maks. 5MB)</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Pesan Tambahan
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Ceritakan mengapa Anda ingin bergabung dengan Dion Pongkor & Partners"
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500 resize-none"
                    onChange={(e) => handleChange('message', e.target.value)}
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="flex-1 border-white/20 text-white hover:bg-white/10 py-6 rounded-full"
                  >
                    Kembali
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-full font-medium"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Lamaran
                  </Button>
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
}
