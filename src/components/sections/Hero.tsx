"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { FiArrowRight, FiGithub, FiMail } from "react-icons/fi";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-start/8 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-gradient-end/8 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-mid/5 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
              </span>
              <span className="text-sm text-foreground-muted">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-[1.1]"
            >
              {SITE_CONFIG.name.split(" ")[0]}{" "}
              <span className="gradient-text">
                {SITE_CONFIG.name.split(" ")[1]}
              </span>
            </motion.h1>

            {/* Title with animated underline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-xl md:text-2xl text-foreground-muted font-light">
                {SITE_CONFIG.title}
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-0.5 bg-gradient-to-r from-gradient-start to-gradient-end mt-3 rounded-full"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-foreground-subtle text-base md:text-lg leading-relaxed max-w-lg mb-10"
            >
              I craft scalable, high-performance mobile applications with
              Flutter — turning ideas into polished products that ship to the App
              Store & Google Play.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative px-7 py-3.5 rounded-xl bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end text-white font-medium transition-all flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl glass hover:bg-surface-2/50 text-foreground font-medium transition-all flex items-center gap-2 group"
              >
                <FiMail className="w-4 h-4 text-foreground-muted group-hover:text-accent transition-colors" />
                Contact
              </a>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl glass hover:bg-surface-2/50 text-foreground font-medium transition-all flex items-center gap-2 group"
              >
                <FiGithub className="w-4 h-4 text-foreground-muted group-hover:text-accent transition-colors" />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Right: Profile Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative animate-float">
              {/* Gradient glow behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gradient-start/20 via-gradient-mid/10 to-gradient-end/20 rounded-3xl blur-2xl" />

              {/* Card */}
              <div className="relative glass rounded-3xl p-3 max-w-[340px]">
                {/* Photo */}
                <div className="relative rounded-2xl overflow-hidden aspect-square mb-4">
                  <Image
                    src="/profile.png"
                    alt={SITE_CONFIG.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
                </div>

                {/* Info bar inside card */}
                <div className="px-3 pb-3">
                  <h2 className="text-lg font-semibold text-foreground">
                    {SITE_CONFIG.name}
                  </h2>
                  <p className="text-foreground-subtle text-sm">
                    {SITE_CONFIG.title} · {SITE_CONFIG.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-foreground-subtle/40 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-1.5 rounded-full bg-foreground-subtle"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
