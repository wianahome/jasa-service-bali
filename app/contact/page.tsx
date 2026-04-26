"use client";

import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tambahkan logika pengiriman pesan di sini
    alert("Pesan Anda telah terkirim! Teknisi kami akan segera menghubungi Anda.");
  };

  return (
    <div className="bg-jsb-dark min-h-screen text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-jsb-blue font-bold tracking-widest uppercase mb-4">Hubungi Kami</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Butuh Bantuan <span className="text-jsb-yellow italic">Cepat?</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Jangan biarkan kenyamanan Anda terganggu. Konsultasikan kerusakan AC, Kulkas, atau Mesin Cuci Anda sekarang juga.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Kolom 1 & 2: Form Kontak */}
          <div className="lg:col-span-2 bg-jsb-card p-8 md:p-12 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-8">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Budi Santoso"
                    className="w-full bg-jsb-dark border border-gray-700 rounded-xl px-5 py-4 focus:outline-none focus:border-jsb-blue transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nomor WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="0812xxxx"
                    className="w-full bg-jsb-dark border border-gray-700 rounded-xl px-5 py-4 focus:outline-none focus:border-jsb-blue transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Layanan yang Dibutuhkan</label>
                <select className="w-full bg-jsb-dark border border-gray-700 rounded-xl px-5 py-4 focus:outline-none focus:border-jsb-blue transition-colors">
                  <option>Service AC</option>
                  <option>Service Kulkas / Freezer</option>
                  <option>Service Mesin Cuci</option>
                  <option>Chiller / Showcase</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Pesan / Keluhan Kerusakan</label>
                <textarea 
                  rows={4}
                  placeholder="Jelaskan masalah elektronik Anda..."
                  className="w-full bg-jsb-dark border border-gray-700 rounded-xl px-5 py-4 focus:outline-none focus:border-jsb-blue transition-colors"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-jsb-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" /> Kirim Sekarang
              </button>
            </form>
          </div>

          {/* Kolom 3: Info Kontak & WhatsApp Langsung */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-[#25D366] p-8 rounded-3xl text-white">
              <MessageCircle className="w-12 h-12 mb-4" />
              <h4 className="text-2xl font-bold mb-2">Respon Cepat via WA</h4>
              <p className="mb-6 opacity-90 text-sm">Klik tombol di bawah untuk konsultasi langsung dengan teknisi kami via WhatsApp.</p>
              <a 
                href="#" 
                target="_blank"
                className="block text-center bg-white text-[#25D366] font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Chat Sekarang
              </a>
            </div>

            {/* Information List */}
            <div className="bg-jsb-card p-8 rounded-3xl border border-gray-800 space-y-8">
              <div className="flex gap-4">
                <div className="bg-jsb-blue/10 p-3 rounded-lg text-jsb-blue">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold">Alamat Kami</h5>
                  <p className="text-gray-400 text-sm mt-1">Jl.Pura Demak,
                        Pemecutan Klod.Kec.Denpasar Barat,
                        Kota Denpasar, Bali 80199</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-jsb-yellow/10 p-3 rounded-lg text-jsb-yellow">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold">Telepon / WA</h5>
                  <p className="text-gray-400 text-sm mt-1">+62 821-3162-161</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-jsb-blue/10 p-3 rounded-lg text-jsb-blue">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold">Jam Operasional</h5>
                  <p className="text-gray-400 text-sm mt-1">Senin - Sabtu: 08:00 - 18:00 WITA<br/>Minggu: Emergency Only</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-gray-700/20 p-3 rounded-lg text-gray-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold">Email</h5>
                  <p className="text-gray-400 text-sm mt-1">jbelectronicofficial@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}