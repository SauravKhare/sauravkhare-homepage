import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/Reveal'
import { Contact as ContactType } from '@/payload-types'
import { DEFAULT_EMAIL } from '@/lib/fallbacks'

interface ContactProps {
  config?: ContactType | null;
  email?: string;
}

export function Contact({ config, email = DEFAULT_EMAIL }: ContactProps) {
  const heading = config?.heading;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-space scroll-mt-24">
      <Reveal as="header">
        <SectionHeading
          id="contact-heading"
          label={heading?.label ?? "Open channel"}
          title={heading?.title ?? "Have a hard interface problem?"}
          subtitle={heading?.subtitle}
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-primary">{config?.eyebrow ?? "Let\u2019s talk about the interesting version"}</p>
            <a href={`mailto:${email}`} className="mt-4 block font-serif text-3xl tracking-[-0.03em] text-foreground transition-colors hover:text-primary sm:text-5xl">
              {email}
            </a>
          </div>
          <a href={config?.cta?.href ?? `mailto:${email}`} className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary">
            {config?.cta?.text ?? "Start a conversation"} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
