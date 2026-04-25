"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const areas = [
  "Seminyak", "Kuta", "Gianyar", "Ubud", 
  "Denpasar", "Sanur", "Jimbaran", "Uluwatu", 
  "Nusa Dua", "Ungasan", "Canggu", "Kerobokan"
];

const ServiceArea = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Bagian Kiri: Teks */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-jsb-teal font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <Navigation className="w-4 h-4" /> Area Operasional
              </h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                Kami Hadir di Seluruh <span className="text-jsb-blue">Titik Strategis Bali</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                Teknisi kami siap meluncur ke lokasi Anda dengan peralatan lengkap. 
                Tanpa biaya transportasi tambahan untuk area jangkauan utama kami.
              </p>
              
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="w-12 h-12 bg-jsb-teal/20 rounded-full flex items-center justify-center text-jsb-teal">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Butuh layanan cepat?</p>
                  <p className="text-sm text-slate-500">Estimasi tiba 30-60 menit tergantung lokasi.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bagian Kanan: Grid Area */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(0, 209, 193, 0.1)",
                    borderColor: "var(--jsb-teal)"
                  }}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl cursor-default transition-colors"
                >
                  <MapPin className="w-4 h-4 text-jsb-blue" />
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Dekorasi Tambahan */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-center lg:text-left"
            >
              <p className="text-sm text-slate-400 italic">
                *Area lain di luar daftar tetap bisa kami layani dengan perjanjian terlebih dahulu.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceArea;