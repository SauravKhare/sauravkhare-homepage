import Link from 'next/link'
import Image from 'next/image'
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

const fallbackRoles = [
  { role: 'Senior Experience Engineer', company: 'Publicis Sapient', period: 'Aug 2024 — Now', description: 'Owning the path from product intent to shipped interface: shaping interaction models, building the frontend architecture, and partnering across design and engineering to make complex work feel inevitable.', tags: ['Next.js', 'React 19', 'TypeScript', 'Design systems', 'Performance'] },
  { role: 'Senior Systems Engineer', company: 'Infosys', period: 'Jul 2022 — Aug 2024', description: 'Led SPA-to-Next.js migrations and hybrid rendering work that improved performance by 20%. Extended search with Coveo and AI-assisted discovery without losing product clarity.', tags: ['React', 'Next.js', 'Redux', 'Coveo', 'SSR'] },
  { role: 'UI / Frontend Developer', company: 'Voraco', period: 'Jan 2021 — Jul 2022', description: 'Built responsive React products from the ground up, including reusable UI libraries, GraphQL integrations, accessible states, and a WordPress-to-Craft CMS migration.', tags: ['React', 'TypeScript', 'GraphQL', 'Tailwind', 'Craft CMS'] },
]

export function Experience({ config, data }: ExperienceProps) {
  const hasCmsData = data && data.length > 0;
  const heading = config?.heading;

  return (
    <section id="experience" aria-labelledby="experience-heading" className="section-space scroll-mt-24">
      <div className="relative">
        {config?.decorativeImage && typeof config.decorativeImage === "object" && "url" in config.decorativeImage && (
          <div className="pointer-events-none absolute -right-4 -top-10 z-0 hidden h-32 w-32 opacity-40 mix-blend-screen lg:block" aria-hidden="true">
            <Image src={config.decorativeImage.url!} alt="" fill sizes="128px" className="float-slow object-contain" />
          </div>
        )}
        <Reveal as="header">
          <SectionHeading
            id="experience-heading"
            label={heading?.label ?? "The path"}
            title={heading?.title ?? "Six years of making complexity disappear"}
            subtitle={heading?.subtitle}
          />
        </Reveal>
      </div>

      <ol className="mt-16 flex flex-col">
        {hasCmsData
          ? data.map((exp, i) => (
              <Reveal
                as="li"
                key={exp.id}
                delay={i * 90}
                className="group relative grid gap-4 border-t border-border py-10 transition-colors hover:bg-primary/[0.02] sm:grid-cols-[auto_1fr_150px] sm:gap-10"
              >
                <span className="ghost-index text-4xl sm:text-6xl" aria-hidden="true">0{i + 1}</span>
                <div>
                  <span className="block h-px w-8 bg-primary transition-all duration-500 group-hover:w-16" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
                    {exp.position} <span className="text-primary">/ {exp.companyName}</span>
                  </h3>
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-primary hover:underline">
                      {exp.companyName}
                    </a>
                  )}
                  {exp.description && (
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/68">{exp.description}</p>
                  )}
                  <div className="mt-5">
                    <TagRow tags={getTechTags(exp)} />
                  </div>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:pt-2 sm:text-right">{getPeriod(exp)}</p>
              </Reveal>
            ))
          : fallbackRoles.map((r, i) => (
              <Reveal
                as="li"
                key={r.company}
                delay={i * 90}
                className="group relative grid gap-4 border-t border-border py-10 transition-colors hover:bg-primary/[0.02] sm:grid-cols-[auto_1fr_150px] sm:gap-10"
              >
                <span className="ghost-index text-4xl sm:text-6xl" aria-hidden="true">0{i + 1}</span>
                <div>
                  <span className="block h-px w-8 bg-primary transition-all duration-500 group-hover:w-16" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
                    {r.role} <span className="text-primary">/ {r.company}</span>
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/68">{r.description}</p>
                  <div className="mt-5">
                    <TagRow tags={r.tags} />
                  </div>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:pt-2 sm:text-right">{r.period}</p>
              </Reveal>
            ))}
      </ol>

      <Reveal delay={160}>
        <Link href={config?.cta?.href ?? "/resume"} className="group mt-14 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-primary">
          {config?.cta?.text ?? "View full résumé"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  )
}
