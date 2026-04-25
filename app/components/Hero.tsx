"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Zap } from "lucide-react";

const HeroService = () => {
  // Variasi animasi untuk staggered effect (muncul bergantian)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Jeda antar elemen
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative mt-20 w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 1. BACKGROUND IMAGE (Menggunakan gambar edit terbaru) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-mechanic.jpg" // Ganti dengan nama file gambar Anda di folder public
          alt="Jasa Service Bali Teknik Utama"
          fill
          priority // Prioritas loading karena di atas lipatan
          className="object-cover object-center"
        />
      </div>

      {/* 2. OVERLAY HITAM TRANSPARAN (Untuk Kontras) */}
      <div className="absolute inset-0 z-10 bg-slate-950/80 backdrop-blur-sm" />

      {/* 3. KONTEN (Teks & Tombol) */}
      <motion.div
        className="container mx-auto px-6 z-20 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center">
          
          {/* Badge Aksen */}
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1 rounded-md bg-jsb-teal/20 border border-jsb-teal/30 text-jsb-teal text-xs font-bold mb-4 tracking-[0.2em]"
          >
            TEKNISI PROFESSIONAL & TERPERCAYA
          </motion.span>

          {/* JUDUL UTAMA */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
              Solusi Tepat
            </span>
            <span className="block text-jsb-yellow">JASA SERVICE BALI</span>
          </motion.h1>

          {/* DESKRIPSI MENARIK */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-medium"
          >
            Jangan biarkan AC mati, Kulkas tidak dingin, atau Mesin Cuci rusak mengganggu kenyamanan Anda. Teknisi profesional kami siap datang, diagnosa cepat, dan perbaikan bergaransi. Rumah & bisnis Anda kembali nyaman hari ini!
          </motion.p>

          {/* TOMBOL AKSI (CTA) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-jsb-blue hover:bg-jsb-blue/90 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-xl shadow-jsb-teal/30"
            >
              <MessageCircle size={20} />
              Booking via WhatsApp
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-slate-600 text-white hover:bg-slate-800 px-8 py-4 rounded-xl font-bold transition-all"
            >
              Lihat Daftar Harga
            </motion.button>
          </motion.div>

          {/* Fitur Utama - Mini Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 w-full max-w-3xl text-left"
          >
            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
              <Zap className="w-8 h-8 text-jsb-yellow flex-shrink-0" />
              <div>
                <p className="font-bold text-white">Respon Cepat</p>
                <p className="text-sm text-slate-300">Langsung datang ke lokasi Anda.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
              <ShieldCheck className="w-8 h-8 text-jsb-teal flex-shrink-0" />
              <div>
                <p className="font-bold text-white">Garansi Service</p>
                <p className="text-sm text-slate-300">Perbaikan kami terjamin & bergaransi.</p>
              </div>
            </div>
            <div className="hidden md:flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="w-8 h-8 flex-shrink-0 text-3xl">👨🏽‍🔧</div>
              <div>
                <p className="font-bold text-white">Teknisi Ahli</p>
                <p className="text-sm text-slate-300">Berpengalaman & Ramah.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroService;