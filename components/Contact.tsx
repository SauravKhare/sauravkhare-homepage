import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/Reveal'
import { Contact as ContactType } from '@/payload-types'

interface ContactProps {
  config?: ContactType | null;
  email?: string;
}

export function Contact({ config, email }: ContactProps) {
  if (!config) {
    return null
  }

  const heading = config.heading;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-space scroll-mt-24">
      <Reveal as="header">
        <SectionHeading
          id="contact-heading"
          label={heading?.label}
          title={heading?.title}
          subtitle={heading?.subtitle}
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {config.eyebrow && (
              <p className="eyebrow text-primary">{config.eyebrow}</p>
            )}
            {email && (
              <a href={`mailto:${email}`} className="mt-4 block font-serif text-3xl tracking-[-0.03em] text-foreground transition-colors hover:text-primary sm:text-5xl">
                {email}
              </a>
            )}
          </div>
          {config.cta?.href && (
            <a href={config.cta.href} className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary">
              {config.cta.text} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          )}
        </div>
      </Reveal>
    </section>
  )
}
