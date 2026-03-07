"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SITE_CONFIG } from "@/lib/constants";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: SITE_CONFIG.location,
    href: undefined,
  },
];

const socials = [
  { icon: FiGithub, href: SITE_CONFIG.github, label: "GitHub" },
  { icon: FiLinkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: `mailto:${SITE_CONFIG.email}`, label: "Email" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.open(
      `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${body}`
    );
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-start/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-end/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's build something great together."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <AnimatedSection className="lg:col-span-2 space-y-8">
            <p className="text-foreground-muted leading-relaxed text-base">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of something great.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href
                      ? { href: item.href }
                      : {})}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:border-accent/30 transition-all duration-300">
                      <Icon className="w-5 h-5 text-foreground-subtle group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground-subtle uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-foreground text-sm font-medium mt-0.5">
                        {item.value}
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ y: -3 }}
                    className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:border-accent/30 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-foreground-subtle group-hover:text-accent transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 md:p-10 space-y-6 gradient-border"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-foreground-subtle uppercase tracking-wider mb-3"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-3.5 rounded-xl bg-background/50 border border-border text-foreground placeholder-foreground-subtle/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all duration-300 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-foreground-subtle uppercase tracking-wider mb-3"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-5 py-3.5 rounded-xl bg-background/50 border border-border text-foreground placeholder-foreground-subtle/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all duration-300 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-foreground-subtle uppercase tracking-wider mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-xl bg-background/50 border border-border text-foreground placeholder-foreground-subtle/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all duration-300 resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end text-white font-medium transition-all hover:shadow-lg hover:shadow-accent-glow"
              >
                <FiSend className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
