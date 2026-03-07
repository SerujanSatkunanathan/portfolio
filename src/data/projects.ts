export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  playStore?: string;
  appStore?: string;
  featured: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "apaluma",
    title: "Apaluma",
    description:
      "Government-backed environmental intelligence platform delivering live weather data, interactive maps, and real-time location tracking to empower environmental awareness.",
    longDescription:
      "Apaluma is a production mobile application built for Trivyol Inc, providing citizens and authorities with real-time environmental data. The app features live weather updates, Google Maps integration with custom environmental data overlays, and continuous location tracking for accurate data collection.",
    technologies: [
      "Flutter",
      "Dart",
      "Google Maps",
      "Provider",
      "REST APIs",
      "Firebase",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.app.apaluma.apollo",
    appStore: "https://apps.apple.com/us/app/apaluma-inc/id6747425571",
    featured: true,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
  {
    id: "lockage",
    title: "Lockage",
    description:
      "Location-aware luggage storage platform with smart recommendations, QR-based booking, and office storage management. Currently in active development.",
    longDescription:
      "Lockage is a full-stack platform that helps travelers find secure luggage storage near their location. Features include smart location-based recommendations, QR code booking system, and an office storage management dashboard.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Google OAuth",
      "Vercel",
    ],
    demo: "https://lockage.vercel.app/",
    featured: true,
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
  },
  {
    id: "crush-date",
    title: "Crush Date",
    description:
      "Cross-platform dating application with real-time chat, user profiles, and intelligent matching — built with Flutter and powered by Firebase and Laravel.",
    technologies: ["Flutter", "Dart", "Firebase", "Laravel", "PHP", "REST APIs"],
    featured: true,
    gradient: "from-rose-500/20 via-pink-500/10 to-fuchsia-500/20",
  },
  {
    id: "recognify",
    title: "Recognify",
    description:
      "Facial recognition web system leveraging DeepFace and FaceNet deep learning models for accurate face detection and identification.",
    technologies: ["Python", "DeepFace", "FaceNet", "Flask", "OpenCV"],
    github: "https://github.com/SerujanSatkunanathan/Recognify",
    featured: true,
    gradient: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
  },
  {
    id: "space-talk",
    title: "Space Talk",
    description:
      "Real-time chat application with Firebase authentication, friend request system, and live messaging.",
    technologies: ["Flutter", "Firebase", "Dart"],
    featured: false,
    gradient: "from-purple-500/20 via-violet-500/10 to-indigo-500/20",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Real-time weather tracking app with location-based forecasts using the OpenWeather API.",
    technologies: ["Flutter", "Dart", "OpenWeather API"],
    featured: false,
    gradient: "from-sky-500/20 via-blue-500/10 to-cyan-500/20",
  },
  {
    id: "fusion",
    title: "Fusion",
    description:
      "Conversational AI mobile app powered by Google Gemini API for intelligent, context-aware conversations.",
    technologies: ["Flutter", "Dart", "Gemini API"],
    featured: false,
    gradient: "from-teal-500/20 via-emerald-500/10 to-green-500/20",
  },
];
