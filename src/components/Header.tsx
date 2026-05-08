"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
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
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  // Theme handling
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Recalculate dropdown position whenever it opens so it stays anchored to
  // the "More" button even when the viewport is resized.
  useEffect(() => {
    if (isDropdownOpen && moreButtonRef.current) {
      const rect = moreButtonRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 8,
        left: rect.left - 16,
      });
    }
  }, [isDropdownOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className="border-b border-iwu-light-grey/20 bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 relative z-50">
              <Image
                src="/logo_lab_icon_version.png"
                alt="IWU AI Lab Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="font-tungsten text-3xl tracking-wide uppercase mt-1">
                IWU AI Lab
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {mainLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-base font-gotham transition-colors hover:text-iwu-red ${
                      isActive ? "text-iwu-red font-bold" : "text-foreground/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/*
               * Dropdown trigger only — the panel is rendered as a fixed sibling
               * of the <header> (see below the </header> tag).
               *
               * WHY: backdrop-filter on a parent creates a new stacking context.
               * Any backdrop-filter on a *child* of that element is then clipped
               * to the parent's painted area, making the child's blur invisible.
               * Moving the panel outside the blurred container breaks that chain.
               */}
              <div
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  ref={moreButtonRef}
                  className="flex items-center gap-1 text-base font-gotham text-foreground/80 hover:text-iwu-red transition-colors py-2"
                >
                  More{" "}
                  <FaChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <Link
                href="/club"
                className="ml-2 px-5 py-2 bg-iwu-spirit text-white rounded font-bold font-gotham hover:bg-iwu-red transition-colors shadow-sm"
              >
                AI Club
              </Link>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                  className="p-2 ml-2 rounded-full hover:bg-iwu-light-grey/20 transition-colors text-foreground/80 hover:text-foreground"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? (
                    <FaSun size={18} />
                  ) : (
                    <FaMoon size={18} />
                  )}
                </button>
              )}
            </nav>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 lg:hidden relative z-50">
              {mounted && (
                <button
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                  className="p-2 rounded-full hover:bg-iwu-light-grey/20 transition-colors text-foreground"
                >
                  {theme === "dark" ? (
                    <FaSun size={20} />
                  ) : (
                    <FaMoon size={20} />
                  )}
                </button>
              )}

              <button
                className="text-foreground p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <FaXmark size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/*
       * Dropdown panel — rendered as a fixed sibling of <header>, NOT inside
       * the backdrop-blur container, so its own backdrop-blur-xl works correctly.
       */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            style={{ top: dropdownPos.top, left: dropdownPos.left }}
            className="fixed z-50 w-48 py-2 flex flex-col rounded-md border border-white/20 bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl shadow-xl"
          >
            {moreLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-base font-gotham transition-colors hover:bg-white/10 hover:text-iwu-red ${
                  pathname === link.href
                    ? "text-iwu-red font-bold"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

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
                    className={`text-xl font-gotham transition-colors ${
                      isActive ? "text-iwu-red font-bold" : "text-foreground"
                    }`}
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
                className="block w-full text-center px-6 py-4 bg-iwu-spirit text-white rounded-lg font-bold font-gotham text-lg shadow-md"
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