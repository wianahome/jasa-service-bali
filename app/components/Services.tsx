"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Wind, 
  Settings, 
  Refrigerator, 
  Box, 
  IceCream, 
  Store,
  ArrowRight
} from "lucide-react";

interface ServiceProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}

const serviceData: ServiceProps[] = [
  {
    title: "Service AC",
    desc: "Cuci AC, tambah freon, dan perbaikan modul untuk semua merk AC Split maupun Cassette.",
    icon: <Wind className="w-6 h-6" />,
    image: "/service-ac.jpg", 
  },
  {
    title: "Mesin Cuci",
    desc: "Spesialis perbaikan mesin cuci Top Loading & Front Loading yang berisik atau air tidak keluar.",
    icon: <Settings className="w-6 h-6" />,
    image: "/service-mesin-cuci.jpg",
  },
  {
    title: "Kulkas & Freezer",
    desc: "Perbaikan kulkas tidak dingin, ganti kompresor, hingga perbaikan Freezer Box industri.",
    icon: <Refrigerator className="w-6 h-6" />,
    image: "/service-kulkas.jpg",
  },
  {
    title: "Chiller & Showcase",
    desc: "Optimasi pendingin untuk toko dan resto agar suhu tetap stabil dan hemat energi.",
    icon: <Store className="w-6 h-6" />,
    image: "/service-showcase.jpg",
  },
  {
    title: "Undercounter",
    desc: "Layanan maintenance rutin chiller undercounter khusus untuk dapur cafe dan hotel.",
    icon: <Box className="w-6 h-6" />,
    image: "/service-undercounter.jpg",
  },
  {
    title: "Sparepart Ori",
    desc: "Penyediaan suku cadang asli untuk memastikan perangkat Anda awet dalam jangka panjang.",
    icon: <IceCream className="w-6 h-6" />,
    image: "/service-sparepart.jpg",
  }
];

const Services = () => {
  return (
    <section id="layanan" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-jsb-teal font-bold tracking-widest uppercase text-sm mb-4"
          >
            Layanan Unggulan
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6"
          >
            Solusi Perbaikan <span className="text-jsb-blue">Elektronik Terintegrasi</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            Kami melayani panggilan untuk rumah tangga, cafe, hingga hotel di seluruh area Bali dengan teknisi yang berpengalaman di bidangnya.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group service-card-glass rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Gambar Layanan */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Konten Card */}
              <div className="p-8">
                <div className="w-12 h-12 bg-jsb-teal/10 dark:bg-jsb-teal/20 text-jsb-teal rounded-xl flex items-center justify-center mb-6 group-hover:bg-jsb-teal group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-jsb-blue dark:text-jsb-teal font-bold text-sm group/btn"
                >
                  Konsultasi Sekarang
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;