"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { techStack } from "@/data/techStack";
import { motion } from "framer-motion";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiLaravel,
  SiFlask,
  SiPhp,
  SiPython,
  SiGit,
  SiGithub,
  SiPostman,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { TbApi, TbDatabase, TbCloud, TbChartBar } from "react-icons/tb";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiLaravel,
  SiFlask,
  SiPhp,
  SiPython,
  SiGit,
  SiGithub,
  SiPostman,
  SiPandas,
  SiNumpy,
  SiAmazonwebservices: TbCloud,
  SiPowerbi: TbChartBar,
  TbApi,
  TbDatabase,
};

const categoryIcons: Record<string, string> = {
  "Mobile Development": "📱",
  Backend: "⚙️",
  "Cloud & DevOps": "☁️",
  "Data & Analytics": "📊",
};

export function TechStack() {
  return (
    <section id="tech-stack" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-gradient-start/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category, catIdx) => (
            <AnimatedSection key={category.title} delay={catIdx * 0.1}>
              <div className="glass-card rounded-2xl p-6 h-full gradient-border">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">
                    {categoryIcons[category.title] || "🔧"}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.items.map((tech) => {
                    const Icon = iconMap[tech.icon] || TbApi;
                    return (
                      <motion.div
                        key={tech.name}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 group cursor-default py-1"
                      >
                        <div className="w-9 h-9 rounded-xl glass flex items-center justify-center group-hover:border-accent/30 transition-all duration-300">
                          <Icon className="w-4 h-4 text-foreground-subtle group-hover:text-accent transition-colors duration-300" />
                        </div>
                        <span className="text-sm text-foreground-muted group-hover:text-foreground transition-colors duration-300">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
