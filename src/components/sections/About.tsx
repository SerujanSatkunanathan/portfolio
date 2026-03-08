"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const tabs = [
  { id: "about", label: "About Me" },
  { id: "journey", label: "My Journey" },
  { id: "values", label: "Core Values" },
  { id: "stats", label: "By The Numbers" },
];

const statsData = [
  { label: "Apps Shipped", value: "5+", icon: "📱" },
  { label: "Technologies", value: "15+", icon: "⚡" },
  { label: "Platforms", value: "iOS & Android", icon: "🚀" },
  { label: "Years Experience", value: "1+", icon: "⏳" },
];

export function About() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="py-28 relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-start/5 rounded-full blur-[120px] animate-drift-slow" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-mid/5 rounded-full blur-[140px] animate-drift" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <AnimatedSection>
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-gradient-start/20 via-transparent to-gradient-end/20 rounded-[2rem] blur-2xl opacity-50" />

            {/* Main Glass Panel */}
            <div className="relative glass-card rounded-[2rem] p-6 md:p-8 lg:p-12 overflow-hidden corner-brackets">
              <div className="grid-pattern absolute inset-0 rounded-[2rem] opacity-[0.15]" />

              {/* Header inside Panel */}
              <div className="relative flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-5 md:gap-6 text-center md:text-left">
                {/* Title */}
                <div>
                  <span className="font-mono text-sm text-accent tracking-wider mb-2 block">
                    01.
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
                    Who Am I <span className="text-accent">?</span>
                  </h2>
                </div>

                {/* Ref Badge */}
                <div className="glass px-4 py-2 rounded-lg border border-accent/20">
                  <span className="font-mono text-[10px] text-accent tracking-widest uppercase font-semibold text-shadow-glow">
                    Ref: Developer_File
                  </span>
                </div>
              </div>

              {/* Decorative line */}
              <div className="relative h-1 w-full bg-surface-2 rounded-full mb-10 overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-gradient-start via-gradient-mid to-transparent rounded-full" />
              </div>

              {/* Interactive Tabs */}
              <div className="relative flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-medium text-xs md:text-sm transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-foreground-subtle hover:text-foreground"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute inset-0 bg-gradient-to-r from-gradient-start/80 to-gradient-end/80 border border-accent/40 rounded-xl"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      {/* Unselected pulse effect frame */}
                      {!isActive && (
                        <div className="absolute inset-0 border border-border rounded-xl group-hover:border-accent/30 transition-colors" />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Area */}
              <div className="relative min-h-[250px] lg:min-h-[200px]">
                <AnimatePresence mode="wait">
                  {/* ABOUT ME */}
                  {activeTab === "about" && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="relative pl-5 md:pl-6"
                    >
                      <div className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-gradient-to-b from-accent/50 to-transparent" />
                      <div className="space-y-4 text-foreground-muted text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                        <p>
                          Hi, I&apos;m Serujan Satkunanathan, a{" "}
                          <span className="text-foreground font-semibold">
                            Flutter Developer
                          </span>{" "}
                          based in Sri Lanka with over a year of professional
                          experience. I specialize in building robust, engaging
                          mobile applications using{" "}
                          <span className="text-foreground">
                            Flutter, Dart, and Firebase
                          </span>
                          .
                        </p>
                        <p>
                          I focus on crafting seamless cross-platform apps that
                          are not just performant and scalable, but also
                          delightful to use across both iOS and Android
                          ecosystems.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* MY JOURNEY */}
                  {activeTab === "journey" && (
                    <motion.div
                      key="journey"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="relative pl-5 md:pl-6"
                    >
                      <div className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-gradient-to-b from-accent/50 to-transparent" />
                      <div className="space-y-4 text-foreground-muted text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                        <p>
                          My journey started with a fascination for mobile
                          development and creating intuitive user experiences.
                          Since then, I&apos;ve shipped applications to both the{" "}
                          <span className="text-foreground font-semibold">
                            App Store
                          </span>{" "}
                          and{" "}
                          <span className="text-foreground font-semibold">
                            Google Play
                          </span>
                          .
                        </p>
                        <p>
                          I have worked on diverse projects ranging from
                          government-backed environmental platforms to complex
                          dating apps with real-time matching, leveraging tools
                          like REST APIs, Provider, and Google Maps.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* CORE VALUES */}
                  {activeTab === "values" && (
                    <motion.div
                      key="values"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="relative pl-5 md:pl-6"
                    >
                      <div className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-gradient-to-b from-accent/50 to-transparent" />
                      <div className="space-y-4 text-foreground-muted text-base sm:text-lg lg:text-xl leading-relaxed italic">
                        <p>
                          &ldquo;I believe that the best apps aren&apos;t just
                          coded — they&apos;re crafted with intention, designed
                          for people, and built to last.&rdquo;
                        </p>
                        <p className="not-italic text-sm sm:text-base lg:text-lg font-light">
                          I am driven by the intersection of clean, maintainable
                          code and meaningful impact. My ultimate goal is to
                          solve real-world problems through innovative technology
                          while maintaining high standards of quality.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* BY THE NUMBERS */}
                  {activeTab === "stats" && (
                    <motion.div
                      key="stats"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
                    >
                      {statsData.map((stat, i) => (
                        <div
                          key={i}
                          className="glass-card rounded-2xl p-6 text-center group corner-brackets-inner"
                        >
                          <div className="text-3xl mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                          </div>
                          <div className="text-2xl font-black gradient-text stat-number mb-1">
                            {stat.value}
                          </div>
                          <div className="text-foreground-subtle text-xs uppercase tracking-wider font-semibold">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
