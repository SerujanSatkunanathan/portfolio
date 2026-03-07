"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const stats = [
  { label: "Apps Shipped", value: "5+", icon: "📱" },
  { label: "Technologies", value: "15+", icon: "⚡" },
  { label: "Platforms", value: "iOS & Android", icon: "🚀" },
];

export function About() {
  return (
    <section id="about" className="py-28 relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gradient-mid/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="Building impactful mobile experiences"
        />

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: Decorative card */}
          <AnimatedSection className="lg:col-span-2">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-gradient-start/10 to-gradient-end/10 rounded-3xl blur-xl" />

              <div className="relative glass-card rounded-3xl p-8 text-center">
                <div className="grid-pattern absolute inset-0 rounded-3xl opacity-20" />
                <div className="relative z-10">
                  <div className="text-7xl font-bold gradient-text mb-2">
                    1+
                  </div>
                  <div className="text-foreground-muted text-sm mb-8">
                    Years of Professional Experience
                  </div>

                  <div className="space-y-3">
                    {[
                      { text: "Production Apps", dot: "bg-red-500" },
                      { text: "Cross-Platform", dot: "bg-orange-500" },
                      { text: "Full-Stack Capable", dot: "bg-amber-500" },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="flex items-center gap-3 text-sm text-foreground-muted"
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${item.dot}`}
                        />
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <AnimatedSection delay={0.15} className="lg:col-span-3 space-y-6">
            <p className="text-foreground-muted text-lg leading-[1.8]">
              I&apos;m a{" "}
              <span className="text-foreground font-medium">
                Flutter Developer
              </span>{" "}
              based in Sri Lanka with over a year of professional experience
              building production mobile applications. I specialize in crafting
              cross-platform apps that are performant, scalable, and delightful
              to use.
            </p>
            <p className="text-foreground-muted text-lg leading-[1.8]">
              My journey started with a passion for creating intuitive mobile
              experiences. Since then, I&apos;ve shipped apps to both the{" "}
              <span className="text-foreground font-medium">App Store</span> and{" "}
              <span className="text-foreground font-medium">Google Play</span>,
              worked on government-backed environmental platforms, and built
              everything from dating apps to AI-powered tools.
            </p>
            <p className="text-foreground-muted text-lg leading-[1.8]">
              I&apos;m driven by the intersection of clean code and meaningful
              impact — solving real-world problems through technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-2xl p-5 text-center group"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-foreground-subtle text-xs mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
