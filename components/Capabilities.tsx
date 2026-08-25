import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/Reveal'
import { Capability, CapabilitiesConfig } from '@/payload-types'

interface CapabilitiesProps {
  config?: CapabilitiesConfig | null;
  data?: Capability[] | null;
}

export function Capabilities({ config, data }: CapabilitiesProps) {
  if (!data || data.length === 0) {
    return null
  }

  const heading = config?.heading;

  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" className="section-space scroll-mt-24">
      <Reveal as="header">
        <SectionHeading
          id="capabilities-heading"
          label={heading?.label}
          title={heading?.title}
          subtitle={heading?.subtitle}
        />
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
