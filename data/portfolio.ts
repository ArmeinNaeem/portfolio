export type Project = {
  number: string;
  name: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  tone: "lavender" | "mint" | "peach";
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Drug Addicts Recovery & Rehabilitation",
    description:
      "A MERN platform designed to support recovery and rehabilitation. It includes registration, an AI chatbot, communication with supervisors, mindful games and activities, and a journal.",
    category: "Full-stack web app",
    image: "/projects/recovery-road.png",
    imageAlt: "Recovery Road dashboard showing patient progress, upcoming therapy sessions, and recovery resources",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    tone: "lavender",
  },
  {
    number: "02",
    name: "AI Image Studio",
    description:
      "A full-stack text-to-image app that turns prompts into images using FLUX.1-schnell. Llama 3.1 enhances prompts through an automated n8n workflow; users can browse prompt history, view generated images in a fullscreen gallery, and download them.",
    category: "AI image generation",
    image: "/projects/ai-image-studio.png",
    imageAlt: "Screenshot of the PixelMind AI Image Studio interface with prompt controls and an image gallery",
    technologies: ["Next.js", "React", "TypeScript", "HF Inference API", "FLUX.1", "Llama 3.1", "n8n"],
    tone: "mint",
  },
  {
    number: "03",
    name: "Price Track",
    description:
      "A Next.js and React price-tracking app that uses Cheerio to scrape product prices from Daraz-like e-commerce sites, helping users follow listings and compare prices over time.",
    category: "Price tracking app",
    image: "/projects/price-track.png",
    imageAlt: "Screenshot of the PriceWatch landing page with a product tracking form",
    technologies: ["Next.js", "React", "Cheerio"],
    tone: "peach",
  },
  {
    number: "04",
    name: "Web Watches",
    description:
      "An online store for browsing and buying men's and women's watches. It pairs an HTML, CSS, and Bootstrap storefront with a C# backend and an MS SQL database.",
    category: "E-commerce website",
    image: "/projects/web-watches.png",
    imageAlt: "Screenshot of the Janjua Watch e-commerce website featuring a watch collection",
    technologies: ["C#", "MS SQL", "HTML", "CSS", "Bootstrap"],
    tone: "lavender",
  },
];

export type Skill = {
  name: string;
  label: string;
  icon:
    | "react"
    | "next"
    | "javascript"
    | "typescript"
    | "python"
    | "node"
    | "express"
    | "mongodb"
    | "supabase"
    | "flutter"
    | "sql"
    | "tailwind"
    | "api";
};

export const skills: Skill[] = [
  { name: "React", label: "React", icon: "react" },
  { name: "Next.js", label: "Next.js", icon: "next" },
  { name: "JavaScript", label: "JavaScript", icon: "javascript" },
  { name: "TypeScript", label: "TypeScript", icon: "typescript" },
  { name: "Python", label: "Python", icon: "python" },
  { name: "Node.js", label: "Node.js", icon: "node" },
  { name: "Express", label: "Express", icon: "express" },
  { name: "MongoDB", label: "MongoDB", icon: "mongodb" },
  { name: "Supabase", label: "Supabase", icon: "supabase" },
  { name: "Flutter", label: "Flutter", icon: "flutter" },
  { name: "SQL", label: "SQL", icon: "sql" },
  { name: "Tailwind CSS", label: "Tailwind", icon: "tailwind" },
  { name: "REST APIs", label: "REST APIs", icon: "api" },
];
