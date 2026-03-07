import { AnimatedSection } from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
        {title}
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
