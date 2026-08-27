'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import ThemeToggle from "@/components/ThemeToggle"
import TimeMachine from './TimeMachine'
import { MobileSideNav } from "./MobileSideNav"
import { Archive, Site } from '@/payload-types'
import SocialIcon from '@/components/SocialIcon'

interface HeaderTopNavigationProps {
  archive?: Archive | null;
  socials?: Site["socialPlatforms"];
  navLinks?: Site["headerNavLinks"];
  brandName?: string;
  resumeUrl?: string | null;
}

export default function HeaderTopNavigation({
  archive,
  socials = [],
  navLinks = [],
  brandName,
  resumeUrl,
}: HeaderTopNavigationProps) {
  const [open, setOpen] = useState(false)

  const validNavLinks = (navLinks ?? []).filter((item) => typeof item.href === "string" && item.href.trim().length > 0);

  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-330 items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <Link href="#top" className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight" aria-label={`${brandName} home`}>
          <span className="text-primary transition-transform group-hover:-translate-x-1">{brandName}</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {validNavLinks.map((item, index) => (
            <Link key={item.id} href={item.href} className="nav-link">
              <span className="mr-1 text-primary">0{index + 1}</span>{item.label}
            </Link>
          ))}
          {resumeUrl && (
            <Link href={resumeUrl} className="nav-link">Résumé <ArrowUpRight className="h-3.5 w-3.5" /></Link>
          )}
          <span className="ml-1 h-4 w-px bg-border" />
          {socials && socials.map((platform) => (
            <a key={platform.id} href={platform.url} target="_blank" rel="noreferrer" aria-label={platform.name} className="text-muted-foreground transition-colors hover:text-primary">
              <SocialIcon iconName={platform.icon} size={16} color={platform.iconColor ?? undefined} />
            </a>
          ))}
          <TimeMachine archive={archive} />
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-1 md:hidden">
          <TimeMachine archive={archive} />
          <ThemeToggle />
          <button type="button" className="icon-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/70 px-6 py-6 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-5">
            {validNavLinks.map((item, index) => (
              <Link key={item.id} href={item.href} onClick={() => setOpen(false)} className="nav-link text-sm">
                <span className="mr-2 text-primary">0{index + 1}</span>{item.label}
              </Link>
            ))}
            {resumeUrl && (
              <Link href={resumeUrl} className="nav-link text-sm">Résumé ↗</Link>
            )}
            <div className="flex gap-4 pt-2">
              {socials && socials.map((platform) => (
                <a key={platform.id} href={platform.url} target="_blank" rel="noreferrer" aria-label={platform.name} className="text-muted-foreground hover:text-primary">
                  <SocialIcon iconName={platform.icon} size={20} color={platform.iconColor ?? undefined} />
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
