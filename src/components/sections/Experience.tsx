"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-gradient-end/5 rounded-full blur-[100px] animate-drift" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <SectionHeading
          number="03."
          title="Experience"
          subtitle="My journey building production applications"
        />

        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              index={index}
              stepNumber={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
