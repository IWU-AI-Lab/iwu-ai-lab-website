"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark, FaMoon, FaSun, FaChevronDown } from "react-icons/fa6";

const mainLinks = [
  { name: "Projects", href: "/projects" },
  { name: "People", href: "/people" },
  { name: "Research", href: "/research" },
];

const moreLinks = [
  { name: "Activities", href: "/activities" },
  { name: "Resources", href: "/resources" },
  { name: "Publications", href: "/publications" },
  { name: "About Us", href: "/about-us" },
  { name: "Join", href: "/join" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Theme handling
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-iwu-light-grey/20 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 relative z-50">
            <Image 
              src="/logo_lab_icon_version.png" 
              alt="IWU AI Lab Logo" 
              width={48} 
              height={48} 
              className="w-12 h-12"
            />
            <span className="font-tungsten text-3xl tracking-wide uppercase mt-1">IWU AI Lab</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-iwu-red ${isActive ? 'text-iwu-red' : 'text-foreground/80'}`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-foreground/80 hover:text-iwu-red transition-colors py-2">
                More <FaChevronDown size={12} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 w-48 py-2 mt-1 bg-background border border-iwu-light-grey/20 rounded-md shadow-lg flex flex-col"
                  >
                    {moreLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href}
                        className={`px-4 py-2 text-sm transition-colors hover:bg-iwu-light-grey/10 hover:text-iwu-red ${pathname === link.href ? 'text-iwu-red font-bold' : 'text-foreground/80'}`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/club"
              className="ml-2 px-5 py-2 bg-iwu-spirit text-white rounded font-bold hover:bg-iwu-red transition-colors shadow-sm"
            >
              AI Club
            </Link>
            
            {/* Theme Toggle */}
            {mounted && (
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 ml-2 rounded-full hover:bg-iwu-light-grey/20 transition-colors text-foreground/80 hover:text-foreground"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            )}
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden relative z-50">
            {mounted && (
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-iwu-light-grey/20 transition-colors text-foreground"
              >
                {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            )}
            <button 
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[40] bg-background/95 backdrop-blur-lg pt-24 px-6 flex flex-col gap-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {[...mainLinks, ...moreLinks].map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-tungsten uppercase tracking-wide transition-colors ${isActive ? 'text-iwu-red' : 'text-foreground'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-8 mb-12">
              <Link 
                href="/club"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-4 bg-iwu-spirit text-white rounded-lg font-bold text-lg shadow-md"
              >
                Go to AI Club Portal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
