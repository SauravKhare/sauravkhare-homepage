"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CircleHalf } from "@phosphor-icons/react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-20.5 opacity-0" aria-hidden="true" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      // Removed the hard shadow and translation. Added dashed borders and a soft ink-wash on hover.
      className="group relative flex h-8 w-fit cursor-pointer items-center gap-2 border-2 border-dashed border-ink/40 bg-transparent px-3 font-mono text-xs uppercase tracking-widest text-ink transition-all duration-500 hover:border-ink hover:bg-ink/5 focus:outline-none"
      aria-label="Toggle contrast"
    >
      <CircleHalf weight="fill" className="h-3 w-3 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}