export interface TechItem {
  name: string;
  icon: string; // react-icons identifier
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    title: "Mobile Development",
    items: [
      { name: "Flutter", icon: "SiFlutter" },
      { name: "Dart", icon: "SiDart" },
      { name: "Provider", icon: "SiFlutter" },
      { name: "Firebase", icon: "SiFirebase" },
      { name: "REST APIs", icon: "TbApi" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel", icon: "SiLaravel" },
      { name: "Flask", icon: "SiFlask" },
      { name: "PHP", icon: "SiPhp" },
      { name: "Python", icon: "SiPython" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "SiAmazonwebservices" },
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Postman", icon: "SiPostman" },
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      { name: "Power BI", icon: "SiPowerbi" },
      { name: "Pandas", icon: "SiPandas" },
      { name: "NumPy", icon: "SiNumpy" },
      { name: "SQL", icon: "TbDatabase" },
    ],
  },
];
