import { Site } from "@/payload-types";

// Shared defaults
export const DEFAULT_BRAND_NAME = "Saurav Khare";
export const DEFAULT_EMAIL = "hello@sauravkhare.com";

// Default nav links
export const DEFAULT_HEADER_NAV_LINKS: NonNullable<Site["headerNavLinks"]> = [
  { label: "Experience", href: "#experience", id: "1" },
  { label: "Work", href: "#work", id: "2" },
  { label: "Contact", href: "#contact", id: "3" },
];

export const DEFAULT_FOOTER_NAV_LINKS: NonNullable<Site["footerNavLinks"]> = [
  { label: "Craft", href: "#capabilities", id: "1" },
  { label: "Experience", href: "#experience", id: "2" },
  { label: "Work", href: "#work", id: "3" },
  { label: "Contact", href: "#contact", id: "4" },
];

// Experience fallback data
export const FALLBACK_ROLES = [
  {
    role: "Senior Experience Engineer",
    company: "Publicis Sapient",
    period: "Aug 2024 — Now",
    description:
      "Owning the path from product intent to shipped interface: shaping interaction models, building the frontend architecture, and partnering across design and engineering to make complex work feel inevitable.",
    tags: ["Next.js", "React 19", "TypeScript", "Design systems", "Performance"],
  },
  {
    role: "Senior Systems Engineer",
    company: "Infosys",
    period: "Jul 2022 — Aug 2024",
    description:
      "Led SPA-to-Next.js migrations and hybrid rendering work that improved performance by 20%. Extended search with Coveo and AI-assisted discovery without losing product clarity.",
    tags: ["React", "Next.js", "Redux", "Coveo", "SSR"],
  },
  {
    role: "UI / Frontend Developer",
    company: "Voraco",
    period: "Jan 2021 — Jul 2022",
    description:
      "Built responsive React products from the ground up, including reusable UI libraries, GraphQL integrations, accessible states, and a WordPress-to-Craft CMS migration.",
    tags: ["React", "TypeScript", "GraphQL", "Tailwind", "Craft CMS"],
  },
];

// Showcase fallback data
export const FALLBACK_PROJECTS = [
  {
    title: "Poof.",
    type: "Live product",
    year: "2025",
    description:
      "An anonymous, self-destructing chat room powered by serverless real-time messaging.",
    href: "https://poof-rho.vercel.app",
    image: "/projects/poof.webp",
    tags: ["Next.js", "TypeScript", "Tailwind", "ElysiaJS"],
  },
  {
    title: "Grid",
    type: "Data interface",
    year: "2024",
    description:
      "Telemetry for curious fans: dense race data transformed into a calm, readable tool.",
    href: "#contact",
    image: "/projects/grid.webp",
    tags: ["React", "D3", "SWR", "Edge"],
  },
  {
    title: "Ledger",
    type: "Product system",
    year: "2024",
    description:
      "A finance workspace designed around hierarchy, useful defaults, and trust.",
    href: "#contact",
    image: "/projects/ledger.webp",
    tags: ["Next.js", "TypeScript", "Postgres"],
  },
];

// LastSeen fallback data
export const FALLBACK_MOVIES = [
  {
    title: "Perfect Days",
    year: "2023",
    director: "Wim Wenders",
    poster: "/movies/perfect-days.webp",
  },
  {
    title: "Drive",
    year: "2011",
    director: "Nicolas Winding Refn",
    poster: "/movies/drive.webp",
  },
  {
    title: "Whiplash",
    year: "2014",
    director: "Damien Chazelle",
    poster: "/movies/whiplash.webp",
  },
  {
    title: "La Haine",
    year: "1995",
    director: "Mathieu Kassovitz",
    poster: "/movies/la-haine.webp",
  },
];

// Capabilities fallback data
export const FALLBACK_FEATURES = [
  {
    n: "#01",
    label: "Shape",
    title: "UI & interaction",
    copy: "A sharp visual system, fluid responsive behavior, and interactions that quietly explain themselves.",
    image: "/art/classical-face.webp",
    alt: "Dithered engraving of a classical marble face",
  },
  {
    n: "#02",
    label: "Structure",
    title: "Frontend architecture",
    copy: "React, Next.js, TypeScript, rendering strategy, component APIs, and boundaries that hold as products grow.",
    image: "/art/abstract-grid.webp",
    alt: "Dithered warped wireframe grid",
  },
  {
    n: "#03",
    label: "Connect",
    title: "Backend & data",
    copy: "The interface does not stop at the browser. I design the routes, contracts, caching, and services behind it.",
    image: "/art/abstract-flow.webp",
    alt: "Dithered flowing contour interference pattern",
  },
  {
    n: "#04",
    label: "Include",
    title: "Accessibility & quality",
    copy: "Keyboard paths, semantics, testing, performance budgets, and the confidence to ship without holding your breath.",
    image: "/art/classical-face-2.webp",
    alt: "Dithered engraving of a classical figure",
  },
  {
    n: "#05",
    label: "Extend",
    title: "AI-enabled products",
    copy: "Useful AI experiences with thoughtful streaming, tool calls, states, and a human-first fallback.",
    image: "/art/abstract-burst.webp",
    alt: "Dithered radial starburst",
  },
  {
    n: "#06",
    label: "Sustain",
    title: "Performance & polish",
    copy: "Core Web Vitals, motion with intent, and the last 5% of detail that makes work feel finished.",
    image: "/art/abstract-sphere.webp",
    alt: "Dithered fragmented particle sphere",
  },
];
