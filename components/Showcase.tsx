import Image from 'next/image'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { TagRow } from '@/components/tag'
import { Reveal } from '@/components/Reveal'
import { Project as ProjectType, Technology, Media } from '@/payload-types'

interface ShowcaseProps {
  data?: ProjectType[] | null;
}

function getProjectTags(project: ProjectType): string[] {
  return (project.technologies ?? [])
    .filter((t): t is Technology => typeof t === "object" && t !== null)
    .map((t) => t.technology);
}

function getScreenshotUrl(project: ProjectType): string | null {
  const screenshot = project.screenshot;
  if (screenshot && typeof screenshot === "object" && "url" in screenshot) {
    return (screenshot as Media).url ?? null;
  }
  return null;
}

const fallbackProjects = [
  { title: 'Poof.', type: 'Live product', year: '2025', description: 'An anonymous, self-destructing chat room powered by serverless real-time messaging.', href: 'https://poof-rho.vercel.app', image: '/projects/poof.png', tags: ['Next.js', 'TypeScript', 'Tailwind', 'ElysiaJS'] },
  { title: 'Grid', type: 'Data interface', year: '2024', description: 'Telemetry for curious fans: dense race data transformed into a calm, readable tool.', href: '#contact', image: '/projects/grid.png', tags: ['React', 'D3', 'SWR', 'Edge'] },
  { title: 'Ledger', type: 'Product system', year: '2024', description: 'A finance workspace designed around hierarchy, useful defaults, and trust.', href: '#contact', image: '/projects/ledger.png', tags: ['Next.js', 'TypeScript', 'Postgres'] },
]

export function Showcase({ data }: ShowcaseProps) {
  const hasCmsData = data && data.length > 0;

  return (
    <section id="work" aria-labelledby="showcase-heading" className="section-space scroll-mt-24">
      <Reveal as="header">
        <SectionHeading id="showcase-heading" label="Selected work" title="Built to be used">
          <span className="text-foreground/65">A few places where product thinking, interface craft, and engineering discipline meet.</span>
        </SectionHeading>
      </Reveal>

      <div className="mt-16 flex flex-col gap-y-20">
        {hasCmsData
          ? data.map((project, index) => {
              const external = project.projectLink.startsWith('http')
              const screenshotUrl = getScreenshotUrl(project)
              return (
                <Reveal key={project.id} delay={index * 80}>
                  <a
                    href={project.projectLink}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer noopener' : undefined}
                    className={`group grid gap-8 sm:items-center sm:gap-14 ${index % 2 === 1 ? 'sm:grid-cols-[340px_1fr]' : 'sm:grid-cols-[1fr_340px]'}`}
                  >
                    <div className={index % 2 === 1 ? 'sm:order-2' : ''}>
                      <div className="flex items-baseline gap-4">
                        <span className="ghost-index text-3xl sm:text-4xl" aria-hidden="true">0{index + 1}</span>
                      </div>
                      <h3 className="mt-4 font-serif text-4xl tracking-[-0.04em] transition-colors group-hover:text-primary sm:text-5xl">{project.projectName}</h3>
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/65">{project.description}</p>
                      <div className="mt-6 flex items-center gap-4">
                        <TagRow tags={getProjectTags(project)} />
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </div>
                    <div className={`corner-frame relative ${index % 2 === 1 ? 'sm:order-1' : ''}`}>
                      <div className="dither relative aspect-[16/10] overflow-hidden bg-card">
                        {external && <ExternalLink className="dither-badge absolute right-3 top-3 h-4 w-4 text-primary" />}
                        {screenshotUrl && (
                          <Image src={screenshotUrl} alt={`Preview of ${project.projectName}`} fill sizes="340px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        )}
                      </div>
                    </div>
                  </a>
                </Reveal>
              )
            })
          : fallbackProjects.map((project, index) => {
              const external = project.href.startsWith('http')
              return (
                <Reveal key={project.title} delay={index * 80}>
                  <a
                    href={project.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer noopener' : undefined}
                    className={`group grid gap-8 sm:items-center sm:gap-14 ${index % 2 === 1 ? 'sm:grid-cols-[340px_1fr]' : 'sm:grid-cols-[1fr_340px]'}`}
                  >
                    <div className={index % 2 === 1 ? 'sm:order-2' : ''}>
                      <div className="flex items-baseline gap-4">
                        <span className="ghost-index text-3xl sm:text-4xl" aria-hidden="true">0{index + 1}</span>
                        <p className="eyebrow text-primary">{project.type} / {project.year}</p>
                      </div>
                      <h3 className="mt-4 font-serif text-4xl tracking-[-0.04em] transition-colors group-hover:text-primary sm:text-5xl">{project.title}</h3>
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/65">{project.description}</p>
                      <div className="mt-6 flex items-center gap-4">
                        <TagRow tags={project.tags} />
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </div>
                    <div className={`corner-frame relative ${index % 2 === 1 ? 'sm:order-1' : ''}`}>
                      <div className="dither relative aspect-[16/10] overflow-hidden bg-card">
                        {external && <ExternalLink className="dither-badge absolute right-3 top-3 h-4 w-4 text-primary" />}
                        <Image src={project.image} alt={`Preview of ${project.title}`} fill sizes="340px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                    </div>
                  </a>
                </Reveal>
              )
            })}
      </div>
    </section>
  )
}
