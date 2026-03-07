"use client";

import { Project } from "@/data/projects";
import { TechBadge } from "./TechBadge";
import { AnimatedSection } from "./AnimatedSection";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative rounded-3xl overflow-hidden h-full glass-card gradient-border"
      >
        {/* Decorative header */}
        <div
          className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}
        >
          <div className="absolute inset-0 dot-pattern opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />

          {/* Floating icon */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass rounded-2xl p-5 shadow-2xl"
            >
              <span className="text-4xl font-bold gradient-text">
                {project.title.charAt(0)}
              </span>
            </motion.div>
          </div>

          {/* Status badge for active projects */}
          {project.id === "lockage" && (
            <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              <span className="text-xs font-medium text-foreground-muted">
                In Development
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-7">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>

          <p className="text-foreground-muted text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
            {project.technologies.length > 5 && (
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-surface-2 text-foreground-subtle border border-border">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground-subtle hover:text-accent transition-colors duration-300"
              >
                <FiGithub className="w-4 h-4" />
                Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground-subtle hover:text-accent transition-colors duration-300"
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground-subtle hover:text-accent transition-colors duration-300"
              >
                <SiGoogleplay className="w-3.5 h-3.5" />
                Play Store
              </a>
            )}
            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground-subtle hover:text-accent transition-colors duration-300"
              >
                <SiAppstore className="w-3.5 h-3.5" />
                App Store
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
