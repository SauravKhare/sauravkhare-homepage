import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/BrandIcons'
import { Siteglobal } from '@/payload-types'
import { RichText } from '@/components/RichText/RichText'

interface FooterProps {
  data?: Siteglobal["footer"] | null;
}

const nav = [
  { label: 'Craft', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
  { label: 'X', href: 'https://x.com', Icon: XIcon },
]

export function Footer({ data }: FooterProps) {
  const footerEntry = data?.[0];

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border">
      <div className="mx-auto max-w-[1320px] px-6 pt-16 sm:px-10 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-[1fr_auto_auto] sm:gap-16">
          <div>
            <p className="font-serif text-2xl tracking-tight text-foreground">Saurav Khare</p>
            {footerEntry?.footerDescription ? (
              <div className="mt-3 max-w-xs">
                <RichText data={footerEntry.footerDescription} className="text-sm leading-relaxed text-muted-foreground" />
              </div>
            ) : (
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Frontend engineer building interfaces that feel obvious — end to end.
              </p>
            )}
            <a href="mailto:hello@sauravkhare.com" className="mt-4 inline-block font-mono text-xs tracking-[0.06em] text-primary transition-colors hover:text-foreground">
              hello@sauravkhare.com
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="eyebrow mb-1">Index</p>
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm text-foreground/75 transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="eyebrow mb-1">Elsewhere</p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Bengaluru · India · © {new Date().getFullYear()}</p>
          <Link href="#top" className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary">
            Back to top <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>

      <div className="mt-14 overflow-hidden px-4" aria-hidden="true">
        <p className="quote-monument select-none text-center" style={{ fontSize: '13vw' }}>
          PER ASPERA<br />AD ASTRA
        </p>
      </div>
    </footer>
  )
}
