import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Users, ShieldCheck, Clock } from 'lucide-react';

const stats = [
  { label: "Tahun Pengalaman", value: "10+", icon: <Clock className="w-6 h-6" /> },
  { label: "Teknisi Ahli", value: "15+", icon: <Users className="w-6 h-6" /> },
  { label: "Pelanggan Puas", value: "1.000+", icon: <CheckCircle2 className="w-6 h-6" /> },
  { label: "Layanan Bergaransi", value: "100%", icon: <ShieldCheck className="w-6 h-6" /> },
];

export default function AboutPage() {
  return (
    <div className="bg-jsb-dark min-h-screen text-white">
      {/* Hero Section - About */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-jsb-blue/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-jsb-blue font-bold tracking-[0.2em] mb-4 uppercase">Siapa Kami</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Solusi Terpercaya untuk <br />
              <span className="text-jsb-yellow italic">Pendingin Anda di Bali.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              JSB (Jasa Service Bali) berdiri dengan visi memberikan layanan teknis yang jujur dan profesional. 
              Kami memahami betapa pentingnya kenyamanan rumah dan kelancaran bisnis Anda di iklim tropis Bali. 
              Itulah mengapa kami hanya mengirimkan teknisi yang tersertifikasi dan berpengalaman.
            </p>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden border-2 border-jsb-card">
             {/* Ganti dengan foto workshop atau tim Anda */}
            <div className="absolute inset-0 bg-gradient-to-t from-jsb-dark to-transparent z-10" />
            <Image 
              src="/about-tim.png" 
              alt="Tim Teknisi JSB" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-jsb-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-jsb-card transition-colors">
                <div className="text-jsb-yellow flex justify-center mb-4 italic">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan Kami (Visi Misi) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-6">Mengapa Memilih <span className="text-jsb-blue">JSB?</span></h2>
            <p className="text-gray-400">
              Kami tidak hanya memperbaiki kerusakan, kami memastikan perangkat Anda bekerja optimal dalam jangka panjang.
            </p>
          </div>
          
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-jsb-card border-l-4 border-jsb-yellow">
              <h4 className="text-xl font-bold mb-3 italic">Transparansi Harga</h4>
              <p className="text-gray-400 text-sm">Tidak ada biaya tersembunyi. Semua estimasi biaya dijelaskan di awal sebelum pengerjaan dimulai.</p>
            </div>
            <div className="p-8 rounded-2xl bg-jsb-card border-l-4 border-jsb-blue">
              <h4 className="text-xl font-bold mb-3 italic">Garansi Resmi</h4>
              <p className="text-gray-400 text-sm">Setiap perbaikan dan penggantian sparepart dilindungi oleh garansi untuk memastikan ketenangan pikiran Anda.</p>
            </div>
            <div className="p-8 rounded-2xl bg-jsb-card border-l-4 border-jsb-blue">
              <h4 className="text-xl font-bold mb-3 italic">Area Cakupan Luas</h4>
              <p className="text-gray-400 text-sm">Melayani seluruh area Bali, mulai dari Denpasar, Badung, Gianyar, hingga Tabanan.</p>
            </div>
            <div className="p-8 rounded-2xl bg-jsb-card border-l-4 border-jsb-yellow">
              <h4 className="text-xl font-bold mb-3 italic">Suku Cadang Asli</h4>
              <p className="text-gray-400 text-sm">Kami menggunakan sparepart berkualitas tinggi agar perangkat elektronik Anda memiliki usia pakai lebih lama.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-jsb-blue/20 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 italic text-jsb-yellow tracking-wider">LOKASI KAMI</h2>
          <div className="w-full h-[400px] rounded-3xl overflow-hidden border-4 border-jsb-card grayscale hover:grayscale-0 transition-all duration-700">
            {/* Embed Google Maps Bali Here */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.33125638148!2d115.1542323!3d-8.6726833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f3e1a39399d%3A0x67300c0f991f868d!2sDenpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1714100000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}