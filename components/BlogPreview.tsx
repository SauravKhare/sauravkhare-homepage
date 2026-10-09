import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/section-heading'
import { formatNoteDate } from '@/lib/utils'
import type { Blog, Post } from '@/payload-types'

interface BlogPreviewProps {
  config?: Blog | null
  data?: Post[] | null
}

export function BlogPreview({ config, data }: BlogPreviewProps) {
  if (!data || data.length === 0) {
    return null
  }

  const featured = data.find((post) => post.pinned) ?? data[0]
  const latest = data.filter((post) => post.id !== featured.id).slice(0, 2)
  const heading = config?.heading
  const labels = config?.labels
  const numberOf = (post: Post) => String(data.indexOf(post) + 1).padStart(2, '0')

  return (
    <section id="notes" aria-labelledby="notes-heading" className="section-space scroll-mt-24">
      <Reveal as="header">
        <SectionHeading
          id="notes-heading"
          label={heading?.label ?? 'Field notes'}
          title={heading?.title ?? 'Ideas in progress, left open.'}
          subtitle={heading?.subtitle}
        >
          {!heading?.subtitle
            ? 'Writing about interfaces, systems, and the small decisions that make software feel considered.'
            : null}
        </SectionHeading>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,.85fr)] lg:gap-16">
        <Reveal className="blog-preview-rule pl-5 sm:pl-7">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground">
              <span className="text-primary">{labels?.pinned ?? 'Pinned note'}</span>
              <span aria-hidden="true">/</span>
              <span>{featured.kind}</span>
              {featured.readTime && (
                <>
                  <span aria-hidden="true">/</span>
                  <span>{featured.readTime}</span>
                </>
              )}
            </div>
            <h3 className="mt-5 max-w-3xl font-serif text-4xl leading-[.9] tracking-[-.045em] transition-colors group-hover:text-primary sm:text-6xl">{featured.title}</h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{featured.excerpt}</p>
            <span className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.15em] text-primary">
              {labels?.readNote ?? 'Read the note'}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </Reveal>

        <div className="border-t border-border/70 lg:border-l lg:border-t-0 lg:pl-10">
          <p className="mb-2 pt-6 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground lg:pt-0">{labels?.recent ?? 'Recently written'}</p>
          <div className="divide-y divide-border/70">
            {latest.map((post, index) => (
              <Reveal key={post.id} delay={index * 80}>
                <Link href={`/blog/${post.slug}`} className="blog-index-row group block py-5">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground">
                    {numberOf(post)} / {formatNoteDate(post.publishedDate)}
                    <ArrowUpRight className="ml-auto h-4 w-4 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                  <h4 className="mt-3 font-serif text-2xl leading-none tracking-[-.035em] transition-colors group-hover:text-primary">{post.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link href="/blog" className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.15em] text-primary">
            {labels?.openAll ?? 'Open all notes'}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
