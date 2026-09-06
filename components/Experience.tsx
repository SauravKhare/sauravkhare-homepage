import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { TagRow } from '@/components/tag'
import { Reveal } from '@/components/Reveal'
import { Experience as ExperienceType, Technology, Experience1 } from '@/payload-types'
import { formatDate } from '@/lib/utils'

interface ExperienceProps {
  config?: Experience1 | null;
  data?: ExperienceType[] | null;
}

function getPeriod(exp: ExperienceType): string {
  const start = formatDate(exp.startingDate);
  if (exp.isCurrent) return `${start} — Now`;
  const end = exp.endingDate ? formatDate(exp.endingDate) : "";
  return end ? `${start} — ${end}` : start;
}

function getTechTags(exp: ExperienceType): string[] {
  return (exp.technologies ?? [])
    .filter((t): t is Technology => typeof t === "object" && t !== null)
    .map((t) => t.technology);
}

export function Experience({ config, data }: ExperienceProps) {
  if (!data || data.length === 0) {
    return null
  }

  const heading = config?.heading;

  return (
    <section id="experience" aria-labelledby="experience-heading" className="section-space scroll-mt-24">
      <Reveal as="header">
        <SectionHeading
          id="experience-heading"
          label={heading?.label}
          title={heading?.title}
          subtitle={heading?.subtitle}
        />
      </Reveal>

      <ol className="mt-16 flex flex-col">
        {data.map((exp, i) => (
          <Reveal
            as="li"
            key={exp.id}
            delay={i * 90}
            className="group relative grid gap-4 border-t border-border py-10 transition-colors hover:bg-primary/2 sm:grid-cols-[auto_1fr_150px] sm:gap-10"
          >
            <span className="ghost-index text-4xl sm:text-6xl" aria-hidden="true">0{i + 1}</span>
            <div>
              <span className="block h-px w-8 bg-primary transition-all duration-500 group-hover:w-16" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
                {exp.position} <span className="text-primary">/ {exp.link ? (<a href={exp.link} target="_blank" rel="noopener noreferrer">{exp.companyName}</a>) : null}</span>
              </h3>
              {exp.description ? (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/68">{exp.description}</p>
              ) : null}
              <div className="mt-5">
                <TagRow tags={getTechTags(exp)} />
              </div>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:pt-2 sm:text-right">{getPeriod(exp)}</p>
          </Reveal>
        ))}
      </ol>

      {config?.cta?.href && (
        <Reveal delay={160}>
          <Link href={config.cta.href} className="group mt-14 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-primary">
            {config.cta.text} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      )}
    </section>
  )
}
