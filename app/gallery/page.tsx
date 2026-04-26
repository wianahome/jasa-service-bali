"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const categories = ["Semua", "AC", "Mesin Cuci", "Kulkas", "Chiller"];

const galleryImages = [
  { id: 1, src: "/gallery/ac-1.png", category: "AC", title: "Service AC Split" },
  { id: 2, src: "/gallery/kulkas-1.jpg", category: "Kulkas", title: "Perbaikan Kulkas Inverter" },
  { id: 3, src: "/gallery/mc-1.jpg", category: "Mesin Cuci", title: "Ganti Modul Mesin Cuci" },
  { id: 4, src: "/gallery/chiller-1.jpg", category: "Chiller", title: "Maintenance Chiller Resto" },
  { id: 5, src: "/gallery/ac-2.jpg", category: "AC", title: "Instalasi AC Cassette" },
  { id: 6, src: "/gallery/box-1.jpg", category: "Chiller", title: "Service Freezer Box" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("Semua");

  const filteredImages = filter === "Semua" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="bg-jsb-dark min-h-screen text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gallery <span className="text-jsb-yellow uppercase">Pekerjaan Kami</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dokumentasi nyata hasil kerja teknisi profesional JSB di lapangan. Kami mengutamakan kerapian dan kepuasan pelanggan.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all ${
                filter === cat 
                ? "bg-jsb-blue border-jsb-blue text-white" 
                : "border-gray-700 text-gray-400 hover:border-jsb-yellow"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl bg-jsb-card border border-gray-800 transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black via-black/80 to-transparent">
                <span className="text-jsb-blue text-xs font-bold uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">Belum ada foto untuk kategori ini.</p>
          </div>
        )}

      </div>
    </div>
  );
}