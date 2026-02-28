"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CircleHalf } from "@phosphor-icons/react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering the UI after it mounts on the client
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Return a completely invisible placeholder of the exact same size to prevent layout shift
    return <div className="h-8 w-22.5 opacity-0" aria-hidden="true" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative flex h-8 w-fit items-center gap-2 border border-ink bg-canvas px-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-canvas focus:outline-none
      shadow-[2px_2px_0px_0px_var(--color-ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
      aria-label="Toggle contrast"
    >
      <CircleHalf weight="fill" className="h-3 w-3" />
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}