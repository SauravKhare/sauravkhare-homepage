import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/Reveal'
import { Siteglobal } from '@/payload-types'
import SocialIcon from '@/components/SocialIcon'

interface ContactProps {
  data?: Siteglobal["socialPlatforms"] | null;
}

export function Contact({ data }: ContactProps) {
  const hasSocials = data && data.length > 0;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-space scroll-mt-24">
      <Reveal as="header">
        <SectionHeading id="contact-heading" label="Open channel" title="Have a hard interface problem?">
          <span className="text-foreground/65">I like the kind that sits between product, design, engineering, and the edge cases nobody has named yet.</span>
        </SectionHeading>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-primary">Let&apos;s talk about the interesting version</p>
            <a href="mailto:hello@sauravkhare.com" className="mt-4 block font-serif text-3xl tracking-[-0.03em] text-foreground transition-colors hover:text-primary sm:text-5xl">
              hello@sauravkhare.com
            </a>
            {hasSocials && (
              <div className="mt-6 flex gap-4">
                {data.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.platformUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={platform.platform}
                  >
                    <SocialIcon
                      iconName={platform.platformIcon}
                      size={20}
                      color={platform.platformIconColor ?? undefined}
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="mailto:hello@sauravkhare.com" className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary">
            Start a conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
