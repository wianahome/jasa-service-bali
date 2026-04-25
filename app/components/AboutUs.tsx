"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, History, Users, Award } from "lucide-react";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "Pelanggan Puas", value: "1000+" },
    { icon: <History className="w-6 h-6" />, label: "Tahun Pengalaman", value: "10+" },
    { icon: <Award className="w-6 h-6" />, label: "Teknisi Sertifikasi", value: "15+" },
  ];

  return (
    <section id="tentang-kami" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Bagian Kiri: Visual/Image statis dengan aksen animasi */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/about-bali-service.jpg" // Gunakan foto tim atau workshop Anda
                alt="Tim Jasa Service Bali sedang bekerja"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Dekorasi Aksen Logo Colors */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-jsb-teal/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-jsb-blue/10 rounded-full blur-3xl -z-0" />
            
            {/* Stat Floating Card */}
            <div className="absolute bottom-5 right-5 z-20 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="flex flex-col gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 bg-jsb-teal/10 rounded-lg text-jsb-teal">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-xl font-bold dark:text-white">{stat.value}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bagian Kanan: Copywriting */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-jsb-teal font-bold tracking-widest uppercase text-sm mb-4">
              Tentang Jasa Service Bali
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Dedikasi Teknisi Lokal untuk <span className="text-jsb-blue">Kenyamanan Anda</span>
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Berawal dari semangat untuk memberikan solusi pendingin yang jujur dan transparan, 
              <strong> Jasa Service Bali</strong> kini hadir sebagai partner terpercaya bagi ribuan 
              rumah tangga dan bisnis di seluruh Bali. Kami memahami betapa krusialnya perangkat elektronik 
              bagi operasional harian Anda.
            </p>

            <div className="space-y-4 mb-10">
              <p className="font-semibold text-slate-800 dark:text-slate-200">Spesialisasi kami meliputi perbaikan & perawatan:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Jasa Service AC (Split, Cassette, Central)",
                  "Service Mesin Cuci Top & Front Loading",
                  "Service Kulkas & Freezer Box",
                  "Maintenance Chiller & Showcase",
                  "Undercounter & Cold Storage",
                  "Penggantian Suku Cadang Orisinal"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-5 h-5 text-jsb-teal flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-jsb-blue dark:hover:bg-jsb-teal transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Konsultasi Kerusakan Gratis
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;