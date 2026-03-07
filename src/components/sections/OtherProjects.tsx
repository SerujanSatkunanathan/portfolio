"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TechBadge } from "@/components/ui/TechBadge";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { FiFolder, FiArrowUpRight } from "react-icons/fi";

export function OtherProjects() {
  const other = projects.filter((p) => !p.featured);

  return (
    <section className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Other Projects"
          subtitle="Experiments and side projects"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {other.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-7 h-full gradient-border group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:border-accent/30 transition-all duration-300">
                    <FiFolder className="w-5 h-5 text-foreground-subtle group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <FiArrowUpRight className="w-5 h-5 text-foreground-subtle/0 group-hover:text-foreground-subtle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-foreground-muted text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
