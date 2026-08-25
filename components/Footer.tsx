import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { Footerconfig, Site } from '@/payload-types'
import { RichText } from '@/components/RichText/RichText'
import SocialIcon from '@/components/SocialIcon'
import { CopyrightYear } from '@/components/CopyrightYear'
import { MonumentQuote } from '@/components/MonumentQuote'

interface FooterProps {
  config?: Footerconfig | null;
  brandName?: string;
  email?: string;
  socials?: Site["socialPlatforms"];
  navLinks?: Site["footerNavLinks"];
}

export function Footer({ config, brandName, email, socials, navLinks }: FooterProps) {
  const validNavLinks = (navLinks ?? []).filter((item) => typeof item.href === "string" && item.href.trim().length > 0);

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border">
      <div className="mx-auto max-w-[1320px] px-6 pt-16 sm:px-10 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-[1fr_auto_auto] sm:gap-16">
          <div>
            {brandName && (
              <p className="font-serif text-2xl tracking-tight text-foreground">{brandName}</p>
            )}
            {config?.description ? (
              <div className="mt-3 max-w-xs">
                <RichText data={config.description} className="text-sm leading-relaxed text-muted-foreground" />
              </div>
            ) : null}
            {email && (
              <a href={`mailto:${email}`} className="mt-4 inline-block font-mono text-xs tracking-[0.06em] text-primary transition-colors hover:text-foreground">
                {email}
              </a>
            )}
          </div>

          {validNavLinks.length > 0 && (
            <nav aria-label="Footer" className="flex flex-col gap-3">
              <p className="eyebrow mb-1">Index</p>
              {validNavLinks.map((item) => (
                <Link key={item.id} href={item.href} className="text-sm text-foreground/75 transition-colors hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {socials && socials.length > 0 && (
            <div className="flex flex-col gap-3">
              <p className="eyebrow mb-1">Elsewhere</p>
              <div className="flex items-center gap-3">
                {socials.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={platform.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <SocialIcon iconName={platform.icon} size={16} color={platform.iconColor ?? undefined} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          {config?.copyright && (
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{config.copyright} · © <CopyrightYear /></p>
          )}
          {config?.cta?.href && (
            <Link href={config.cta.href} className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary">
              {config.cta.text} <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-1" />
            </Link>
          )}
        </div>
      </div>

      {config?.decorativeText ? (
        <div className="mt-14 px-4">
          <MonumentQuote text={config.decorativeText} />
        </div>
      ) : null}
    </footer>
  )
}
