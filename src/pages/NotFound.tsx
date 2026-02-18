import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-lg"
      >
        <div className="text-9xl font-bold text-orange-500 mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-white/60 mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin telah dipindahkan atau dihapus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium w-full sm:w-auto">
              <Home className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
          <Link to="/kontak">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium w-full sm:w-auto"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
