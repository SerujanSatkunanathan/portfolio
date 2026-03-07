"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-start/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-gradient-mid/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="Production applications and systems I've designed and built"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
