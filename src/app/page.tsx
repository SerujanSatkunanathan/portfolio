import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { OtherProjects } from "@/components/sections/OtherProjects";
import { GitHub } from "@/components/sections/GitHub";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <GitHub />
      <Contact />
    </>
  );
}
