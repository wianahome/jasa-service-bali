'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { reportWaConversion } from '../lib/google-ads' 
import Image from 'next/image'

export const FloatingWA = () => {
  const phoneNumber = "628213162161"
  const message = "Halo Jasa Service Bali"
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => reportWaConversion()} 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.05, y: -5 }} 
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[999] flex items-center group cursor-pointer"
    >
      <div className="relative flex bg-jsb-yellow items-center rounded-full pr-1.5 border border-white/10 transition-all duration-300">
        
        {/* Glow Effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 via-cyan-400 to-yellow-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500" />


        {/* Label */}
        <span className="pl-5 pr-3 text-sm text-green-600 font-bold tracking-wide uppercase group-hover:text-cyan-200 transition-colors">
          WhatsApp Kami
        </span>

        {/* SVG Icon Container */}
        <div className="flex items-center justify-center w-20 h-20 rounded-full overflow-hidden">
          <Image 
            src="/whatsapp.svg" 
            alt="WhatsApp Icon" 
            width={50} 
            height={50}
            // Menggunakan priority agar icon langsung dimuat
            priority
          />
        </div>
        
      </div>
    </motion.a>
  )
}