"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop: Floating pill navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center transition-all duration-500 ${
          isScrolled ? "pt-4" : "pt-6"
        }`}
      >
        <nav
          className={`flex items-center gap-1 px-2 py-2 rounded-2xl transition-all duration-500 ${
            isScrolled
              ? "glass shadow-2xl shadow-black/30"
              : "bg-surface/40 backdrop-blur-sm border border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-sm font-bold tracking-tight px-4 py-1.5 rounded-xl"
          >
            <span className="gradient-text">
              {SITE_CONFIG.name.split(" ")[0]}
            </span>
            <span className="text-foreground-subtle">.</span>
          </a>

          {/* Divider */}
          <div className="w-px h-5 bg-border mx-1" />

          {/* Nav links */}
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-[13px] rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground-subtle hover:text-foreground-muted"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-surface-3/80 border border-border -z-10"
                    transition={{
                      type: "spring",
                      bounce: 0.15,
                      duration: 0.5,
                    }}
                  />
                )}
              </a>
            );
          })}

          {/* Divider */}
          <div className="w-px h-5 bg-border mx-1" />

          {/* Resume button */}
          <a
            href={SITE_CONFIG.resumePath}
            download
            className="flex items-center gap-1.5 text-[13px] px-4 py-1.5 rounded-xl bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end text-white font-medium hover:shadow-lg hover:shadow-accent-glow transition-all"
          >
            <FiDownload className="w-3.5 h-3.5" />
            Resume
          </a>
        </nav>
      </motion.header>

      {/* Mobile: Sticky top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <nav
          className={`flex items-center justify-between px-5 h-14 transition-all duration-500 ${
            isScrolled ? "glass shadow-xl shadow-black/20" : "bg-transparent"
          }`}
        >
          <a href="#" className="text-sm font-bold tracking-tight">
            <span className="gradient-text">
              {SITE_CONFIG.name.split(" ")[0]}
            </span>
            <span className="text-foreground-subtle">.</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground-muted hover:text-foreground transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="glass border-t border-border overflow-hidden"
            >
              <ul className="px-5 py-3 space-y-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm text-foreground-muted hover:text-foreground transition-colors py-2.5 px-3 rounded-xl hover:bg-surface-2/50"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2 pb-1">
                  <a
                    href={SITE_CONFIG.resumePath}
                    download
                    className="inline-flex items-center gap-1.5 text-sm px-5 py-2.5 rounded-xl bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end text-white font-medium"
                  >
                    <FiDownload className="w-3.5 h-3.5" />
                    Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
