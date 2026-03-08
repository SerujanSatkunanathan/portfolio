import { AnimatedSection } from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  number?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  number,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {number && (
        <span className="font-mono text-sm text-accent tracking-wider mb-3 block">
          {number}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="text-foreground-subtle text-base md:text-lg max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </AnimatedSection>
  );
}
