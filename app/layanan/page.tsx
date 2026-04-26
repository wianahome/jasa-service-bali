import React from 'react';
import { 
  Wind, 
  Settings, 
  Refrigerator, 
  Box, 
  ThermometerSnowflake, 
  Store 
} from 'lucide-react'; // Menggunakan lucide-react untuk ikon

const services = [
  {
    title: "Service AC",
    description: "Cuci AC, tambah freon, perbaikan kebocoran, hingga instalasi unit baru untuk hunian dan kantor.",
    icon: <Wind className="w-10 h-10 text-jsb-yellow" />,
  },
  {
    title: "Mesin Cuci",
    description: "Perbaikan modul, mati total, air tidak keluar, hingga penggantian sparepart original.",
    icon: <Settings className="w-10 h-10 text-jsb-yellow" />,
  },
  {
    title: "Kulkas",
    description: "Servis kulkas 1 pintu, 2 pintu, hingga side-by-side. Solusi kulkas tidak dingin atau berisik.",
    icon: <Refrigerator className="w-10 h-10 text-jsb-yellow" />,
  },
  {
    title: "Freezer Box",
    description: "Penanganan khusus untuk freezer box industri maupun rumah tangga agar suhu kembali stabil.",
    icon: <Box className="w-10 h-10 text-jsb-yellow" />,
  },
  {
    title: "Chiller & Undercounter",
    description: "Perawatan rutin dan perbaikan kompresor untuk perangkat pendingin dapur komersial.",
    icon: <ThermometerSnowflake className="w-10 h-10 text-jsb-yellow" />,
  },
  {
    title: "Showcase",
    description: "Optimasi suhu showcase agar produk jualan Anda tetap segar dan menarik dipandang.",
    icon: <Store className="w-10 h-10 text-jsb-yellow" />,
  },
];

export default function ServicePage() {
  return (
    <div className="bg-jsb-dark min-h-screen text-white font-sans mt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-gradient-to-b from-black/50 to-jsb-dark">
        <div className="max-w-4xl mx-auto">
          <span className="border border-teal-400 text-teal-400 px-4 py-1 rounded-full text-sm font-semibold tracking-widest uppercase">
            Teknisi Professional & Terpercaya
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4">
            Layanan <span className="text-jsb-yellow uppercase">Jasa Service Bali</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Solusi cepat dan bergaransi untuk segala kerusakan elektronik pendingin Anda.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-jsb-card p-8 rounded-2xl border border-gray-800 hover:border-jsb-blue transition-all duration-300 group"
            >
              <div className="mb-6 inline-block p-4 bg-black/30 rounded-xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-jsb-blue">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-6 flex items-center text-jsb-yellow font-semibold hover:underline">
                Konsultasi Sekarang &rarr;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="bg-jsb-blue rounded-3xl p-10 md:p-16 text-center max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Butuh Perbaikan Mendadak?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-xl">
            Teknisi kami siap meluncur ke lokasi Anda di seluruh area Bali. Respon cepat, jujur, dan bergaransi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#" 
              className="bg-white text-jsb-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-jsb-yellow hover:text-black transition-colors"
            >
              Hubungi Kami Segera!
            </a>
            {/* <button className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-jsb-blue transition-all">
              Lihat Daftar Harga
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}