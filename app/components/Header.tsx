"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, MessageCircle } from "lucide-react";
import Link from "next/link";
import { reportWaConversion } from "../lib/google-ads";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default Dark Mode

  // Sinkronisasi class dark pada HTML
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Layanan", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Tentang Kami", href: "#" },
    { name: "Kontak Kami", href: "#" },
  ];

  const waLink = "https://wa.me/628213162161?text=Halo%20Jasa%20Service%20Bali."

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          
          {/* Logo - Menggunakan gambar yang dikirim */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image 
              src="/image_f00756.jpg" 
              alt="Logo Jasa Service Bali" 
              width={50} 
              height={50}
              className="rounded-full"
            />
            <div className="text-jsb-yellow text-2xl text-bold font-bold">
                J S B
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-jsb-teal dark:hover:text-jsb-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons (Toggle & WA) */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            {/* <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 transition-all hover:scale-110"
              aria-label="Toggle Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}

           

            {/* WhatsApp Button Desktop */}

            <button 
                onClick={() => reportWaConversion}
                className="flex items-center gap-2 bg-jsb-blue text-white px-5 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-jsb-teal/20">
            <MessageCircle size={18} />
            <Link href={waLink} target="_blank">
              WhatsApp Us
              </Link>
            </button>


            {/* Hamburger Mobile */}
            <button
              className="md:hidden text-slate-800 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-700 dark:text-slate-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="flex items-center justify-center gap-2 bg-jsb-teal text-white px-6 py-3 rounded-xl font-bold mt-2">
                <MessageCircle size={20} />
                WhatsApp Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;