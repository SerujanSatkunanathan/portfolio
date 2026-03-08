"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiDownload,
  FiCompass,
} from "react-icons/fi";
import Image from "next/image";
import { useState, useEffect } from "react";

const titles = [
  "Flutter Developer",
  "Mobile Engineer",
  "Problem Solver",
  "App Architect",
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning!";
  if (hour < 18) return "Good afternoon!";
  return "Good evening!";
}

const socials = [
  { icon: FiLinkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
  { icon: FiGithub, href: SITE_CONFIG.github, label: "GitHub" },
  { icon: FiMail, href: `mailto:${SITE_CONFIG.email}`, label: "Email" },
  { icon: FiPhone, href: `tel:${SITE_CONFIG.phone}`, label: "Phone" },
  { icon: FiDownload, href: SITE_CONFIG.resumePath, label: "Resume" },
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [greeting, setGreeting] = useState("Welcome!");

  useEffect(() => {
    setGreeting(getGreeting());
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Drifting orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-start/8 rounded-full blur-[120px] animate-drift" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-gradient-end/8 rounded-full blur-[100px] animate-drift-slow" />

      {/* ===== Split Layout ===== */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* LEFT: Full-height Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-[45%] h-[40vh] md:min-h-[50vh] lg:h-auto lg:min-h-screen"
        >
          <Image
            src="/profile.png"
            alt={SITE_CONFIG.name}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlays for blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/90 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background lg:bg-gradient-to-b lg:from-transparent lg:via-transparent lg:to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
        </motion.div>

        {/* RIGHT: Content Card */}
        <div className="relative w-full lg:w-[55%] flex items-center justify-center px-4 md:px-6 py-12 lg:py-0 lg:pt-24 -mt-10 lg:mt-0 z-10">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-2xl w-full"
          >
            {/* Glassmorphism card */}
            <div className="relative glass rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden">
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent/50" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent/50" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent/50" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent/50" />

              {/* Metadata labels */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-foreground-subtle/50 tracking-wider uppercase">
                  Target_ID: {SITE_CONFIG.name.split(" ")[0].toUpperCase()}
                </span>
                <span className="font-mono text-[10px] text-foreground-subtle/50 tracking-wider uppercase">
                  System_Status: <span className="text-green-400">Online</span>
                </span>
              </div>

              {/* Greeting badge */}
              <motion.div
                initial={{ opacity: 0, y: -10, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 rounded-full border border-accent/20 mb-8"
              >
                <FiCompass className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground-muted italic">
                  {greeting} Ready to explore?
                </span>
              </motion.div>

              {/* Name — massive typography */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6"
              >
                <span className="text-foreground/90">
                  {SITE_CONFIG.name.split(" ")[0]}
                </span>
                <br />
                <span className="gradient-text">
                  {SITE_CONFIG.name.split(" ")[1]}
                </span>
              </motion.h1>

              {/* Role divider + title */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
                <div className="h-8 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={titleIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-sm md:text-base text-foreground-muted tracking-wider block"
                    >
                      {titles[titleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-accent/40 to-transparent" />
              </motion.div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
                </span>
                <span className="text-sm text-foreground-subtle">
                  Available for opportunities
                </span>
              </motion.div>

              {/* Bottom metadata */}
              <div className="mt-8 pt-4 border-t border-border/50">
                <span className="font-mono text-[10px] text-foreground-subtle/40 tracking-wider">
                  Location: {SITE_CONFIG.location}
                </span>
              </div>
            </div>

            {/* Social icon bar — centred below card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8 flex-wrap"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                const isDownload = social.label === "Resume";
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    download={isDownload || undefined}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-2xl glass flex items-center justify-center transition-all duration-300 group social-glow"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5 text-foreground-subtle group-hover:text-accent transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
