"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SITE_CONFIG } from "@/lib/constants";
import { FiGithub, FiExternalLink, FiGitCommit, FiStar, FiCode } from "react-icons/fi";

const stats = [
  { icon: FiCode, label: "Repositories", value: "10+" },
  { icon: FiGitCommit, label: "Contributions", value: "200+" },
  { icon: FiStar, label: "Languages", value: "5+" },
];

export function GitHub() {
  return (
    <section className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-mid/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="GitHub Activity"
          subtitle="Open source contributions and coding activity"
        />

        <AnimatedSection>
          <div className="glass-card rounded-3xl p-8 md:p-10 gradient-border">
            {/* Header */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="glass rounded-2xl p-3">
                <FiGithub className="w-7 h-7 text-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">
                  @{SITE_CONFIG.githubUsername}
                </span>
                <p className="text-foreground-subtle text-sm">
                  Building in public
                </p>
              </div>
            </div>

            {/* Contribution Graph */}
            <div className="mb-8 overflow-hidden rounded-2xl glass p-4">
              <img
                src={`https://ghchart.rshah.org/C3110C/${SITE_CONFIG.githubUsername}`}
                alt="GitHub Contribution Graph"
                className="w-full opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Custom Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass rounded-2xl p-5 text-center"
                  >
                    <Icon className="w-5 h-5 text-accent mx-auto mb-3" />
                    <div className="text-xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-foreground-subtle text-xs mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass hover:bg-surface-2/50 text-foreground font-medium transition-all group"
              >
                <FiExternalLink className="w-4 h-4 text-foreground-muted group-hover:text-accent transition-colors" />
                View GitHub Profile
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
