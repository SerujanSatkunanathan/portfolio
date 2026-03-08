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

// Flatten all tech items for the marquee
const allTechItems = techStack.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.title }))
);

// Split into two rows for opposing marquee
const row1 = allTechItems.slice(0, Math.ceil(allTechItems.length / 2));
const row2 = allTechItems.slice(Math.ceil(allTechItems.length / 2));

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof allTechItems;
  reverse?: boolean;
}) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden marquee-wrapper">
      <div
        className={`flex gap-4 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((tech, i) => {
          const Icon = iconMap[tech.icon] || TbApi;
          return (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-3 glass rounded-2xl px-5 py-3 shrink-0 group hover:border-accent/30 transition-all duration-300 cursor-default"
            >
              <div className="w-9 h-9 rounded-xl bg-surface-2/50 flex items-center justify-center group-hover:bg-accent/10 transition-all duration-300">
                <Icon className="w-4.5 h-4.5 text-foreground-subtle group-hover:text-accent transition-colors duration-300" />
              </div>
              <span className="text-sm text-foreground-muted group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="tech-stack" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-gradient-start/5 rounded-full blur-[100px] animate-drift" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          number="02."
          title="Tech Stack"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        {/* Infinite Marquee Stream */}
        <AnimatedSection className="mb-16">
          <div className="space-y-4">
            <MarqueeRow items={row1} />
            <MarqueeRow items={row2} reverse />
          </div>
          <p className="text-center text-foreground-subtle/50 text-xs mt-4 font-mono">
            hover to pause · drag to explore
          </p>
        </AnimatedSection>

        {/* Detailed Grid View */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category, catIdx) => (
            <AnimatedSection key={category.title} delay={catIdx * 0.1}>
              <div className="glass-card rounded-2xl p-6 h-full gradient-border corner-brackets">
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
