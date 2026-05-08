"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Gradient/Glow (Subtle) */}
      <div className="absolute inset-0 bg-gradient-to-b from-iwu-red/5 to-transparent dark:from-iwu-red/10"></div>
      
      {/* Central Interactive Animation */}
      <div className="relative flex items-center justify-center w-full max-w-2xl mx-auto aspect-square sm:aspect-video md:aspect-square">
        
        {/* Orbiting Circles */}
        {/* Circle 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 sm:inset-12 md:inset-20 border border-iwu-red/20 dark:border-iwu-red/30 rounded-full"
        />
        {/* Circle 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute inset-10 sm:inset-20 md:inset-32 border border-iwu-spirit/20 dark:border-iwu-spirit/30 rounded-full"
        >
          {/* Orbital Node */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-iwu-spirit rounded-full shadow-[0_0_10px_rgba(209,18,66,0.8)]" />
        </motion.div>
        {/* Circle 3 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute inset-16 sm:inset-28 md:inset-44 border border-iwu-action-light/40 dark:border-iwu-action-light/20 rounded-full"
        >
           {/* Orbital Node */}
           <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 w-2 h-2 bg-iwu-action rounded-full shadow-[0_0_8px_rgba(9,189,203,0.8)]" />
        </motion.div>

        {/* Central Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-background/80 backdrop-blur shadow-xl border border-iwu-light-grey/20 flex items-center justify-center"
        >
          <Image
            src="/logo_lab_icon_version.png"
            alt="IWU AI Lab"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
            priority
          />
        </motion.div>
      </div>

      {/* Hero Text */}
      <div className="absolute bottom-12 md:bottom-24 w-full text-center px-4 z-20">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-tungsten uppercase tracking-widest text-foreground"
        >
          Indiana Wesleyan <span className="text-iwu-red">AI Lab</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 text-lg md:text-xl text-iwu-dark-grey max-w-2xl mx-auto font-gotham"
        >
          Faith, Innovation, and the Future of Intelligence.
        </motion.p>
      </div>
    </section>
  );
}
