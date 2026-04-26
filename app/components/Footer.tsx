"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin,  
  MessageCircle 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
              <div className="flex gap-6">
                <Link href="https://www.instagram.com/jasaservicebalii" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white/10 transition-all hover:-translate-y-1">
                <Image src="/instagram.svg" alt="Logo" width="30" height="30" className="hover:opacity-80 transition-opacity" />
                </Link>
                 <Link href="https://www.tiktok.com/@jasaservicesbalii" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white/10 transition-all hover:-translate-y-1">
                <Image src="/tiktok.svg" alt="Logo" width="30" height="30" className="hover:opacity-80 transition-opacity" />
                </Link>
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