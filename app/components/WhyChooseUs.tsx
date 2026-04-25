"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Clock, 
  ThumbsUp, 
  Wrench, 
  Zap, 
  UserCheck 
} from "lucide-react";

const features = [
  {
    title: "Teknisi Berpengalaman",
    desc: "Tim profesional yang telah menangani ribuan unit AC dan alat rumah tangga di berbagai villa dan hotel.",
    icon: <UserCheck className="w-8 h-8" />,
    color: "bg-blue-500"
  },
  {
    title: "Garansi Pekerjaan",
    desc: "Kami memberikan jaminan garansi untuk setiap perbaikan guna memastikan perangkat Anda tetap awet.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-jsb-teal"
  },
  {
    title: "Respon Cepat",
    desc: "Tim kami tersebar di berbagai area Bali untuk memastikan layanan tiba tepat waktu di lokasi Anda.",
    icon: <Clock className="w-8 h-8" />,
    color: "bg-jsb-blue"
  },
  {
    title: "Harga Transparan",
    desc: "Tanpa biaya tersembunyi. Semua estimasi biaya akan dijelaskan sebelum pengerjaan dimulai.",
    icon: <ThumbsUp className="w-8 h-8" />,
    color: "bg-orange-500"
  },
  {
    title: "Peralatan Modern",
    desc: "Menggunakan alat diagnostik terbaru untuk pengerjaan yang lebih presisi dan efisien.",
    icon: <Wrench className="w-8 h-8" />,
    color: "bg-purple-500"
  },
  {
    title: "Layanan Darurat",
    desc: "Siap membantu Anda kapan pun terjadi kendala mendadak pada sistem pendingin Anda.",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-yellow-500"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-jsb-teal font-bold uppercase tracking-tighter text-sm mb-4"
          >
            Keunggulan Kami
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Alasan Mengapa <span className="text-jsb-blue">Ribuan Pelanggan</span> Memilih Kami
          </motion.h3>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-jsb-teal/30 transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                {item.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {item.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Tag */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all"
        >
          {/* Anda bisa menambahkan logo partner/brand di sini */}
          <span className="text-slate-400 font-bold tracking-widest uppercase">Trusted Partner:</span>
          <span className="text-slate-500 font-bold">DAIKIN</span>
          <span className="text-slate-500 font-bold">SHARP</span>
          <span className="text-slate-500 font-bold">LG</span>
          <span className="text-slate-500 font-bold">SAMSUNG</span>
          <span className="text-slate-500 font-bold">PANASONIC</span>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;