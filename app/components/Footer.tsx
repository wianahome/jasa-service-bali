"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin,  
  MessageCircle 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Kolom 1: Branding/Tentang */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter">
              JASA SERVICE <span className="text-jsb-teal">BALI</span>
            </h2>
            <p className="text-blue-100 leading-relaxed max-w-sm">
              Solusi terpercaya untuk perbaikan AC, mesin cuci, kulkas, dan alat elektronik lainnya di seluruh wilayah Bali. Teknisi profesional, harga jujur.
            </p>
          </div>

          {/* Kolom 2: Kontak Kami */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-jsb-teal transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <a href="https://wa.me/6281322124442" className="text-lg hover:text-jsb-teal transition-colors">
                  0821-3162-161
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-jsb-teal transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:081322124442" className="text-lg hover:text-jsb-teal transition-colors">
                  0821-3162-161
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-jsb-teal transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:jbelectronicofficial@gmail.com" className="text-blue-100 hover:text-jsb-teal transition-colors break-all">
                  jbelectronicofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Alamat & Sosmed */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider">Alamat</h3>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-jsb-teal" />
              </div>
              <p className="text-blue-100 leading-relaxed">
                Jl.Pura Demak,<br />
                Pemecuta Klod.Kec.Denpasar Barat,<br />
                Kota Denpasar, Bali 80199
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-blue-200">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-all hover:-translate-y-1">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-black transition-all hover:-translate-y-1">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v5.48c.01 3.82-2.06 7.46-5.73 8.54-3.47 1.07-7.4-.31-9.27-3.44-1.95-3.13-1.34-7.51 1.41-10.02 1.55-1.44 3.7-2.11 5.77-1.88v3.91c-1.25-.24-2.6.13-3.47 1.1-.96 1.03-1.12 2.61-.43 3.84.71 1.25 2.22 1.94 3.63 1.63 1.14-.24 2.05-1.21 2.18-2.35.02-1.35.01-2.71.01-4.07 0-3.61 0-7.21 0-10.81z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] transition-all hover:-translate-y-1">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Garis Bawah & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <p>© {currentYear} Jasa Service Bali. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;