"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { 
  FaLaptopCode, 
  FaUsers, 
  FaFlask, 
  FaUserPlus, 
  FaBook, 
  FaCalendarDays, 
  FaCircleInfo 
} from "react-icons/fa6";

const nodes = [
  // Ring 1 (Inner) - 2 nodes
  { id: "projects", label: "Projects", icon: FaLaptopCode, href: "/projects", ring: 1, angle: 0 },
  { id: "people", label: "People", icon: FaUsers, href: "/people", ring: 1, angle: 180 },
  // Ring 2 (Middle) - 2 nodes
  { id: "research", label: "Research", icon: FaFlask, href: "/research", ring: 2, angle: 90 },
  { id: "join", label: "Join", icon: FaUserPlus, href: "/join", ring: 2, angle: 270 },
  // Ring 3 (Outer) - 3 nodes
  { id: "publications", label: "Papers", icon: FaBook, href: "/publications", ring: 3, angle: 0 },
  { id: "activities", label: "Activities", icon: FaCalendarDays, href: "/activities", ring: 3, angle: 120 },
  { id: "about", label: "About", icon: FaCircleInfo, href: "/about-us", ring: 3, angle: 240 },
];

export default function HeroSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Constants for ring sizing so they don't touch edges on mobile
  // Mobile uses smaller insets, Desktop uses larger
  // Sizes and colors adjusted as requested
  const rings = {
    1: { duration: 30, insetClass: "inset-14 sm:inset-20 md:inset-28", colorClass: "border-iwu-red/20 dark:border-iwu-red/40" },
    2: { duration: 45, insetClass: "inset-6 sm:inset-10 md:inset-14", colorClass: "border-iwu-dark-grey/20 dark:border-iwu-light-grey/20" },
    3: { duration: 60, insetClass: "-inset-2 sm:inset-0", colorClass: "border-iwu-red/20 dark:border-iwu-red/40" },
  };

  return (
    <section className="relative w-full flex flex-col items-center pt-20 pb-16 overflow-hidden bg-background">
      <ParticleBackground />
      
      {/* Central Interactive Animation Container */}
      <div className="relative flex items-center justify-center w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] mx-auto z-10 mb-12">
        
        {/* Render Rings */}
        {[1, 2, 3].map((ringNum) => {
          const r = rings[ringNum as keyof typeof rings];
          const ringNodes = nodes.filter(n => n.ring === ringNum);
          
          return (
            <div 
              key={`ring-${ringNum}`}
              className={`absolute ${r.insetClass} border ${r.colorClass} rounded-full`}
              style={{
                animation: `spin-cw ${r.duration}s linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {ringNodes.map((node) => {
                const Icon = node.icon;
                return (
                  <div 
                    key={node.id}
                    className="absolute inset-0"
                    style={{ transform: `rotate(${node.angle}deg)` }}
                  >
                    {/* The Node itself sits on the top edge of the wrapper */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Link 
                        href={node.href}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="group flex flex-col items-center justify-center relative"
                        style={{
                          // Removed counter-rotation so icons point to center automatically!
                        }}
                      >
                        {/* Interactive Dot Background */}
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-background border border-iwu-light-grey/40 dark:border-iwu-light-grey/20 rounded-full shadow-md flex items-center justify-center text-foreground transition-transform duration-300 group-hover:scale-125 group-hover:border-iwu-red group-hover:text-iwu-red group-hover:shadow-[0_0_15px_rgba(166,25,46,0.5)]">
                          <Icon size={24} className="md:w-7 md:h-7" />
                        </div>
                        {/* Tooltip Label */}
                        <span className="absolute top-[120%] opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur text-foreground text-sm font-bold px-3 py-1.5 rounded shadow pointer-events-none whitespace-nowrap z-50">
                          {node.label}
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Central Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-background/80 backdrop-blur shadow-xl border border-iwu-light-grey/20 flex items-center justify-center transition-transform duration-300 hover:scale-110"
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
      <div className="relative w-full text-center px-4 z-20 mt-4 md:mt-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-tungsten uppercase tracking-widest text-foreground drop-shadow-sm"
        >
          Indiana Wesleyan <span className="text-iwu-red">AI Lab</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-iwu-dark-grey max-w-2xl mx-auto font-gotham"
        >
          Faith, Innovation, and the Future of Intelligence.
        </motion.p>
      </div>
    </section>
  );
}
