"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Berapa biaya kunjungan dan pengecekan?",
    answer: "Untuk area jangkauan utama kami, biaya pengecekan adalah Rp 50.000. Namun, jika Anda memutuskan untuk melanjutkan ke tahap perbaikan, biaya pengecekan tersebut GRATIS (hanya membayar biaya servis/part saja)."
  },
  {
    question: "Apakah ada garansi setelah perbaikan?",
    answer: "Ya, kami memberikan garansi pengerjaan mulai dari 30 hingga 90 hari tergantung pada jenis kerusakan dan suku cadang yang diganti. Nota fisik atau digital akan dikirimkan sebagai bukti klaim garansi."
  },
  {
    question: "Berapa lama waktu tunggu teknisi sampai ke lokasi?",
    answer: "Untuk area seperti Denpasar, Kuta, dan Seminyak, teknisi kami biasanya tiba dalam waktu 30-60 menit. Untuk area Gianyar atau Uluwatu, kami sarankan melakukan booking minimal 2 jam sebelumnya."
  },
  {
    question: "Apakah teknisi membawa suku cadang sendiri?",
    answer: "Teknisi kami selalu membawa suku cadang standar yang sering rusak. Jika ada kerusakan pada komponen khusus, kami akan menginformasikan estimasi harga terlebih dahulu sebelum melakukan pembelian suku cadang asli."
  },
  {
    question: "Apakah melayani perbaikan di hari libur?",
    answer: "Kami melayani layanan darurat 24/7 termasuk hari Minggu dan hari libur nasional, karena kami tahu masalah AC atau mesin pendingin bisa terjadi kapan saja di Bali yang panas."
  }
];

const FAQ = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Bagian Kiri: Judul */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-jsb-blue/10 rounded-2xl flex items-center justify-center text-jsb-blue mb-6">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                Punya <span className="text-jsb-teal">Pertanyaan?</span> Kami Punya Jawabannya
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Masih ragu atau ada hal yang kurang jelas? Berikut adalah beberapa hal yang sering ditanyakan pelanggan kami.
              </p>
              <a 
                href="https://wa.me/628123456789" 
                className="inline-flex items-center gap-2 font-bold text-jsb-blue hover:text-jsb-teal transition-colors"
              >
                Tanya langsung via WhatsApp →
              </a>
            </motion.div>
          </div>

          {/* Bagian Kanan: Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border rounded-2xl transition-all duration-300 ${
                    activeIdx === index 
                    ? "border-jsb-teal bg-slate-50 dark:bg-slate-900 shadow-md" 
                    : "border-slate-200 dark:border-slate-800 bg-transparent"
                  }`}
                >
                  <button
                    onClick={() => setActiveIdx(activeIdx === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`font-bold text-lg ${activeIdx === index ? "text-jsb-teal" : "text-slate-800 dark:text-slate-200"}`}>
                      {faq.question}
                    </span>
                    <div className={`transition-transform duration-300 ${activeIdx === index ? "rotate-180 text-jsb-teal" : "text-slate-400"}`}>
                      {activeIdx === index ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIdx === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                          <div className="h-px bg-slate-200 dark:bg-slate-800 mb-4" />
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;