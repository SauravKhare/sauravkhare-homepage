"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <WbSunnyOutlinedIcon style={{ fontSize: 18 }} className="transition-opacity duration-300 group-hover:opacity-100" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative flex w-fit cursor-pointer items-center gap-2 bg-transparent transition-all duration-500"
      aria-label="Toggle contrast"
    >

      <span>{theme === "dark" ? (<BedtimeOutlinedIcon style={{ fontSize: 18 }} className="transition-opacity duration-300 group-hover:opacity-100" />) : (<WbSunnyOutlinedIcon style={{ fontSize: 18 }} className="transition-opacity duration-300 group-hover:opacity-100" />)}</span>
    </button>
  );
}