'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Hero as HeroType } from '@/payload-types'
import SubHeading from '@/components/SubHeading'
import HeaderBio from '@/components/HeaderBio'
import { RichText } from '@/components/RichText/RichText'

interface HeroProps {
  data?: HeroType | null;
}

export function Hero({ data }: HeroProps) {
  if (!data) {
    return null
  }

  const isImageLeft = data.imagePosition === "left";

  return (
    <section id="top" className="relative pt-14 sm:pt-20 lg:pt-24">
      <div className={`grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start ${isImageLeft ? 'direction-rtl' : ''}`}>
        <div className={isImageLeft ? 'lg:order-2' : ''}>
          <Reveal>
            <p className="eyebrow mb-6">{data.eyebrow}</p>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="serif-display text-balance text-[clamp(3rem,8.5vw,7.5rem)]">
              <RichText data={data.heading} className="inline" />
            </h1>
          </Reveal>
          {data.subHeading && data.subHeading.length > 0 && (
            <Reveal delay={100}>
              <SubHeading data={data.subHeading} />
            </Reveal>
          )}
          {data.bio && (
            <Reveal delay={140}>
              <div className="mt-8 max-w-xl">
                <HeaderBio bio={data.bio} className="text-lg leading-relaxed text-foreground/72 sm:text-xl" />
              </div>
            </Reveal>
          )}
          {data.cta?.href && (
            <Reveal delay={210}>
              <div className="mt-10">
                <Link href={data.cta.href} className="group inline-flex items-center gap-2 border-b-2 border-primary pb-1.5 font-mono text-xs uppercase tracking-[0.13em] text-foreground transition-colors hover:text-primary">
                  {data.cta.text} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={180} className={`lg:pt-2 ${isImageLeft ? 'lg:order-1' : ''}`}>
          <div className="relative">
            {data.decorativeImage && typeof data.decorativeImage === "object" && "url" in data.decorativeImage && (
              <Image src={data.decorativeImage.url!} alt="" width={144} height={144} aria-hidden="true" className="spin-slow pointer-events-none absolute -right-6 -top-8 z-0 h-28 w-28 object-contain opacity-70 mix-blend-screen sm:h-36 sm:w-36" />
            )}
            <div className="corner-frame float-slow relative">
              <div className="feature-media relative aspect-[4/5]">
                {data.heroImage && typeof data.heroImage === "object" && "url" in data.heroImage && (
                  <Image src={data.heroImage.url!} alt={data.heroImageAlt} fill sizes="(max-width: 1024px) 100vw, 420px" priority className="object-cover" />
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {data.marqueeItems && data.marqueeItems.length > 0 && (
        <Reveal delay={260}>
          <div className="marquee-mask mt-16 overflow-hidden border-y border-border/70 py-4 sm:mt-20">
            <div className="marquee-track">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
                  {data.marqueeItems!.map((item) => (
                    <span key={`${dup}-${item.id}`} className="flex items-center gap-6 pr-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {item.text}
                      <span className="mark-plus text-primary" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </section>
  )
}
