"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Wayan Sudira",
    role: "Owner Villa di Canggu",
    content: "Sangat puas dengan layanannya. Teknisi datang tepat waktu dan AC yang tadinya mati total langsung dingin lagi. Harga sangat transparan.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=wayan"
  },
  {
    name: "Sarah Miller",
    role: "Restaurant Manager, Seminyak",
    content: "Kami menggunakan jasa JSB untuk perawatan rutin chiller dan showcase. Profesional dan sangat membantu menjaga bisnis tetap berjalan lancar.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Gede Arta",
    role: "Rumah Tangga, Denpasar",
    content: "Mesin cuci saya rusak berat, tapi teknisinya bisa memperbaiki dengan cepat. Sparepart yang digunakan juga asli. Sangat direkomendasikan!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=gede"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-jsb-teal font-bold uppercase tracking-widest text-sm mb-4"
            >
              Testimoni Pelanggan
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
            >
              Apa Kata Mereka Tentang <span className="text-jsb-blue">Layanan Kami?</span>
            </motion.h3>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-sm border border-slate-200 dark:border-slate-700"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="font-bold text-slate-700 dark:text-slate-200">4.9/5 Rating</span>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 dark:text-slate-700" />
              
              <div className="flex text-yellow-400 mb-6">
                {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              <p className="text-slate-600 dark:text-slate-300 italic mb-8 relative z-10 leading-relaxed">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-jsb-teal">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{item.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 text-slate-400 text-sm"
        >
          Dipercaya oleh lebih dari 1.000+ pelanggan di seluruh Bali sejak 2020.
        </motion.p>
      </div>
    </section>
  );
};

export default Testimonials;