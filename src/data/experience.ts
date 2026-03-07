export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "trivyol",
    role: "Junior Mobile Application Developer",
    company: "Trivyol Inc",
    period: "May 2025 – Jan 2026",
    description:
      "Worked on Apaluma, a government-backed environmental intelligence platform providing real-time environmental data to citizens and authorities.",
    contributions: [
      "Built the Flutter mobile application from the ground up, delivering a production-ready app shipped to both App Store and Google Play",
      "Integrated Google Maps SDK for interactive environmental data visualization with custom markers and overlays",
      "Implemented real-time weather data updates using REST APIs, providing live environmental insights to users",
      "Developed continuous location tracking with background services for accurate environmental data collection",
      "Architected state management using Provider pattern, ensuring predictable data flow across the app",
      "Collaborated closely with backend engineers and UI/UX designers to deliver data-driven environmental dashboards",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Google Maps",
      "Provider",
      "REST APIs",
      "Firebase",
    ],
  },
  {
    id: "aus-etech",
    role: "Mobile Application Developer Intern",
    company: "AUS-Etech",
    period: "Nov 2024 – May 2025",
    description:
      "Contributed to multiple cross-platform mobile applications and backend systems, gaining full-stack development experience in a fast-paced startup environment.",
    contributions: [
      "Developed Crush Date — a cross-platform Flutter dating app featuring real-time chat, user profiles, and matching algorithms",
      "Built Task Chase — a freelancer marketplace app with complete UI implementation and Firebase authentication",
      "Contributed to Laravel backend development, building RESTful APIs for mobile app data consumption",
      "Implemented Firebase Authentication across multiple projects, handling user registration and session management",
      "Developed admin panel interfaces for content and user management",
      "Designed branding assets and logos, contributing to the visual identity of client projects",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Laravel",
      "PHP",
      "REST APIs",
    ],
  },
];
