export const TAGS = {
  // Globals
  site: "site",
  hero: "hero",
  now: "now",
  experience: "experience",
  showcase: "showcase",
  capabilitiesConfig: "capabilitiesConfig",
  lastSeen: "lastSeen",
  contact: "contact",
  footer: "footer",
  archives: "archives",
  blog: "blog",

  // Global sub-fields
  globalSeo: "globalSeo",
  resume: "resume",
  socials: "socials",

  // Collections
  capabilities: "capabilities",
  experiences: "experiences",
  projects: "projects",
  technologies: "technologies",
  media: "media",
  posts: "posts",
} as const;

export type CacheTag = (typeof TAGS)[keyof typeof TAGS];
