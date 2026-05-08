"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "People", href: "/people" },
  { name: "Activities", href: "/activities" },
  { name: "Resources", href: "/resources" },
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "About Us", href: "/about-us" },
  { name: "Join", href: "/join" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-iwu-light-grey/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
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
          {navLinks.map((link) => {
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
          <Link 
            href="/club"
            className="ml-4 px-5 py-2 bg-iwu-spirit text-white rounded font-bold hover:bg-iwu-red transition-colors"
          >
            AI Club
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-background border-b border-iwu-light-grey/20 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-semibold transition-colors ${isActive ? 'text-iwu-red' : 'text-foreground'}`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link 
            href="/club"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center mt-2 px-5 py-3 bg-iwu-spirit text-white rounded font-bold"
          >
            AI Club
          </Link>
        </nav>
      )}
    </header>
  );
}
