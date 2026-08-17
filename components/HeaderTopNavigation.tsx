'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/BrandIcons'
import ThemeToggle from "@/components/ThemeToggle"
import TimeMachine from './TimeMachine'
import { MobileSideNav } from "./MobileSideNav"
import { Archive } from '@/payload-types'

interface HeaderTopNavigationProps {
  records?: Archive["records"] | null;
}

const socials = [
  { href: 'https://github.com/SauravKhare', label: 'GitHub', Icon: GithubIcon },
  { href: 'https://www.linkedin.com/in/sauravkhare', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'https://twitter.com/ErahkSaurav', label: 'X', Icon: XIcon },
]
const links = [{ href: '#experience', label: 'Experience' }, { href: '#work', label: 'Work' }, { href: '#contact', label: 'Contact' }]

export default function HeaderTopNavigation({ records }: HeaderTopNavigationProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-330 items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <Link href="#top" className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight" aria-label="Saurav Khare home">
          <span className="text-primary transition-transform group-hover:-translate-x-1">Saurav Khare</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map((link, index) => <Link key={link.href} href={link.href} className="nav-link"><span className="mr-1 text-primary">0{index + 1}</span>{link.label}</Link>)}
          <Link href="/resume" className="nav-link">Résumé <ArrowUpRight className="h-3.5 w-3.5" /></Link>
          <span className="ml-1 h-4 w-px bg-border" />
          {socials.map(({ href, label, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-muted-foreground transition-colors hover:text-primary">
            <Icon className="h-4 w-4" />
          </a>)}
          <TimeMachine records={records ?? []} />
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-1 md:hidden">
          <TimeMachine records={records ?? []} />
          <ThemeToggle /><button type="button" className="icon-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button></div>
      </div>
      {open && <nav className="border-t border-border/70 px-6 py-6 md:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-5">{links.map((link, index) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="nav-link text-sm"><span className="mr-2 text-primary">0{index + 1}</span>{link.label}</Link>)}<Link href="/resume" className="nav-link text-sm">Résumé ↗</Link><div className="flex gap-4 pt-2">{socials.map(({ href, label, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-muted-foreground hover:text-primary"><Icon className="h-5 w-5" /></a>)}</div></div></nav>}
    </header>
  );
}
