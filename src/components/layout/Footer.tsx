import { SITE_CONFIG } from "@/lib/constants";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-foreground-subtle/60 text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-subtle hover:text-foreground-muted transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-subtle hover:text-foreground-muted transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-foreground-subtle hover:text-foreground-muted transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
