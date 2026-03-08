"use client";

import { Experience as ExperienceType } from "@/data/experience";
import { TechBadge } from "./TechBadge";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

interface TimelineItemProps {
  experience: ExperienceType;
  index: number;
  stepNumber?: string;
}

export function TimelineItem({ experience, index, stepNumber }: TimelineItemProps) {
  return (
    <AnimatedSection delay={index * 0.15}>
      <div className="relative pl-10 md:pl-14 pb-14 last:pb-0 group">
        {/* Timeline line with gradient glow */}
        <div className="absolute left-[7px] top-3 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />
        <div className="absolute left-[5px] top-3 bottom-0 w-[3px] bg-gradient-to-b from-accent/10 via-transparent to-transparent blur-sm" />

        {/* Timeline dot with step number */}
        <div className="absolute left-0 top-2">
          <div className="w-[15px] h-[15px] rounded-full bg-background border-2 border-accent flex items-center justify-center">
            <div className="w-[5px] h-[5px] rounded-full bg-accent" />
          </div>
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-md" />
          {/* Step number */}
          {stepNumber && (
            <span className="absolute -left-1 -top-6 font-mono text-[10px] text-accent/60 tracking-wider">
              {stepNumber}
            </span>
          )}
        </div>

        {/* Content card */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-2xl p-6 md:p-8 gradient-border corner-brackets"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 gap-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {experience.role}
              </h3>
              <p className="text-sm font-medium gradient-text">
                {experience.company}
              </p>
            </div>
            <span className="text-foreground-subtle text-sm font-mono shrink-0 glass rounded-lg px-3 py-1">
              {experience.period}
            </span>
          </div>

          <p className="text-foreground-muted text-sm leading-relaxed mb-5">
            {experience.description}
          </p>

          <ul className="space-y-2.5 mb-6">
            {experience.contributions.map((contribution, i) => (
              <li
                key={i}
                className="text-foreground-muted text-sm flex items-start gap-3"
              >
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end" />
                <span className="leading-relaxed">{contribution}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
