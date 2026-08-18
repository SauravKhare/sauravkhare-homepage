import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/Reveal'
import { Capability } from '@/payload-types'

interface CapabilitiesProps {
  data?: Capability[] | null;
}

export function Capabilities({ data }: CapabilitiesProps) {
  if (data && data.length > 0) {
    return (
      <section id="capabilities" aria-labelledby="capabilities-heading" className="section-space scroll-mt-24">
        <Reveal as="header">
          <SectionHeading id="capabilities-heading" label="The full stack of the interface" title="One engineer, every layer.">
            <span className="text-foreground/65">I move between the visible surface and the decisions that make it dependable — and I own both.</span>
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((f, index) => (
            <Reveal key={f.id} delay={(index % 3) * 70} className="feature-item group flex h-full flex-col">
              <div className="feature-media relative aspect-square">
                {f.image && typeof f.image === "object" && "url" in f.image && (
                  <Image src={f.image.url!} alt={f.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                )}
              </div>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">{f.label}</p>
              <h3 className="feature-title mt-2 text-2xl sm:text-[1.7rem]">{f.title}</h3>
              <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
    )
  }

  const fallbackFeatures = [
    { n: '#01', label: 'Shape', title: 'UI & interaction', copy: 'A sharp visual system, fluid responsive behavior, and interactions that quietly explain themselves.', image: '/art/classical-face.png', alt: 'Dithered engraving of a classical marble face' },
    { n: '#02', label: 'Structure', title: 'Frontend architecture', copy: 'React, Next.js, TypeScript, rendering strategy, component APIs, and boundaries that hold as products grow.', image: '/art/abstract-grid.png', alt: 'Dithered warped wireframe grid' },
    { n: '#03', label: 'Connect', title: 'Backend & data', copy: 'The interface does not stop at the browser. I design the routes, contracts, caching, and services behind it.', image: '/art/abstract-flow.png', alt: 'Dithered flowing contour interference pattern' },
    { n: '#04', label: 'Include', title: 'Accessibility & quality', copy: 'Keyboard paths, semantics, testing, performance budgets, and the confidence to ship without holding your breath.', image: '/art/classical-face-2.png', alt: 'Dithered engraving of a classical figure' },
    { n: '#05', label: 'Extend', title: 'AI-enabled products', copy: 'Useful AI experiences with thoughtful streaming, tool calls, states, and a human-first fallback.', image: '/art/abstract-burst.png', alt: 'Dithered radial starburst' },
    { n: '#06', label: 'Sustain', title: 'Performance & polish', copy: 'Core Web Vitals, motion with intent, and the last 5% of detail that makes work feel finished.', image: '/art/abstract-sphere.png', alt: 'Dithered fragmented particle sphere' },
  ]

  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" className="section-space scroll-mt-24">
      <Reveal as="header">
        <SectionHeading id="capabilities-heading" label="The full stack of the interface" title="One engineer, every layer.">
          <span className="text-foreground/65">I move between the visible surface and the decisions that make it dependable — and I own both.</span>
        </SectionHeading>
      </Reveal>

      <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {fallbackFeatures.map((f, index) => (
          <Reveal key={f.n} delay={(index % 3) * 70} className="feature-item group flex h-full flex-col">
            <div className="feature-media relative aspect-square">
              <Image src={f.image} alt={f.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
            </div>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">{f.label}</p>
            <h3 className="feature-title mt-2 text-2xl sm:text-[1.7rem]">{f.title}</h3>
            <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
