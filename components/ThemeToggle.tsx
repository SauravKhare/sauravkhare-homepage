"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <WbSunnyOutlinedIcon style={{ fontSize: 18 }} className="transition-opacity duration-300 group-hover:opacity-100" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary ${className}`}
      aria-label="Toggle contrast"
    >

      <span>{theme === "dark" ? (<Sun aria-hidden="true" className="h-4 w-4 transition-opacity duration-300 group-hover:opacity-100" />) : (<Moon aria-hidden="true" className="h-4 w-4 transition-opacity duration-300 group-hover:opacity-100" />)}</span>
    </button>
  );
}