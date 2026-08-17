'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Siteglobal } from '@/payload-types'
import SubHeading from '@/components/SubHeading'
import HeaderBio from '@/components/HeaderBio'

interface HeroProps {
  data?: Siteglobal["header"] | null;
}

export function Hero({ data }: HeroProps) {
  const header = data?.[0];

  if (header) {
    return (
      <section id="top" className="relative pt-14 sm:pt-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Frontend engineer <span className="text-primary">/</span> 5.6 years <span className="text-primary">/</span> India · remote</p>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="serif-display text-balance text-[clamp(3rem,8.5vw,7.5rem)]">
                {header.heading || "Saurav Khare"}
              </h1>
            </Reveal>
            {header.subHeading && header.subHeading.length > 0 && (
              <Reveal delay={100}>
                <SubHeading data={header.subHeading} />
              </Reveal>
            )}
            {header.bio && (
              <Reveal delay={140}>
                <div className="mt-8 max-w-xl">
                  <HeaderBio bio={header.bio} className="text-lg leading-relaxed text-foreground/72 sm:text-xl" />
                </div>
              </Reveal>
            )}
            <Reveal delay={210}>
              <div className="mt-10">
                <Link href="#work" className="group inline-flex items-center gap-2 border-b-2 border-primary pb-1.5 font-mono text-xs uppercase tracking-[0.13em] text-foreground transition-colors hover:text-primary">
                  Inspect the work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:pt-2">
            <div className="relative">
              <Image src="/art/abstract-burst.png" alt="" width={144} height={144} aria-hidden="true" className="spin-slow pointer-events-none absolute -right-6 -top-8 z-0 h-28 w-28 object-contain opacity-70 mix-blend-screen sm:h-36 sm:w-36" />
              <div className="corner-frame float-slow relative">
                <div className="feature-media relative aspect-[4/5]">
                  <Image src="/art/hero-figure.png" alt="Dithered engraving of a classical figure surrounded by radiating light" fill sizes="(max-width: 1024px) 100vw, 420px" priority className="object-cover" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={260}>
          <div className="marquee-mask mt-16 overflow-hidden border-y border-border/70 py-4 sm:mt-20">
            <div className="marquee-track">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
                  {marqueeItems.map((item) => (
                    <span key={`${dup}-${item}`} className="flex items-center gap-6 pr-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {item}
                      <span className="mark-plus text-primary" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    )
  }

  return (
    <section id="top" className="relative pt-14 sm:pt-20 lg:pt-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">Frontend engineer <span className="text-primary">/</span> 5.6 years <span className="text-primary">/</span> India · remote</p>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="serif-display text-balance text-[clamp(3rem,8.5vw,7.5rem)]">
              Hello, I&apos;m<br />
              <span className="text-primary">Saurav.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-foreground/72 sm:text-xl">
              I design and engineer the whole interface — the pixels you touch and the systems, APIs, and AI behind them. Fast on the surface, considered underneath.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-10">
              <Link href="#work" className="group inline-flex items-center gap-2 border-b-2 border-primary pb-1.5 font-mono text-xs uppercase tracking-[0.13em] text-foreground transition-colors hover:text-primary">
                Inspect the work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="lg:pt-2">
          <div className="relative">
            <Image src="/art/abstract-burst.png" alt="" width={144} height={144} aria-hidden="true" className="spin-slow pointer-events-none absolute -right-6 -top-8 z-0 h-28 w-28 object-contain opacity-70 mix-blend-screen sm:h-36 sm:w-36" />
            <div className="corner-frame float-slow relative">
              <div className="feature-media relative aspect-[4/5]">
                <Image src="/art/hero-figure.png" alt="Dithered engraving of a classical figure surrounded by radiating light" fill sizes="(max-width: 1024px) 100vw, 420px" priority className="object-cover" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={260}>
        <div className="marquee-mask mt-16 overflow-hidden border-y border-border/70 py-4 sm:mt-20">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
                {marqueeItems.map((item) => (
                  <span key={`${dup}-${item}`} className="flex items-center gap-6 pr-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {item}
                    <span className="mark-plus text-primary" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

const marqueeItems = ['Interface craft', 'Design systems', 'Performance', 'Accessibility', 'AI products', 'Frontend architecture', 'Type & motion', 'Backend & data']
