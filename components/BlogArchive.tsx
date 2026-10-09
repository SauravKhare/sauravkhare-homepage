import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { DotField } from '@/components/DotField'
import { Reveal } from '@/components/Reveal'
import { RichText } from '@/components/RichText/RichText'
import { formatNoteDate, getMediaAlt, getMediaUrl } from '@/lib/utils'
import type { Blog, Post } from '@/payload-types'

interface BlogArchiveProps {
  config?: Blog | null
  posts?: Post[] | null
}

export function BlogArchive({ config, posts }: BlogArchiveProps) {
  if (!posts || posts.length === 0) {
    return (
      <p className="py-20 text-center text-sm text-muted-foreground">
        No notes yet. Check back soon.
      </p>
    )
  }

  const pinned = posts.find((post) => post.pinned) ?? posts[0]
  const rest = posts.filter((post) => post.id !== pinned.id)
  const archive = config?.archive
  const labels = config?.labels
  const pinnedCover = getMediaUrl(pinned.coverImage) ?? getMediaUrl(config?.images?.fallbackCover)
  const pinnedCoverAlt =
    getMediaAlt(pinned.coverImage) ??
    pinned.coverImageAlt ??
    getMediaAlt(config?.images?.fallbackCover) ??
    pinned.title
  const decorativeUrl = getMediaUrl(config?.images?.decorativeImage)
  const numberOf = (post: Post) => String(posts.indexOf(post) + 1).padStart(2, '0')

  return (
    <div className="mt-16">
      <section className="relative" aria-labelledby="blog-heading">
        <div className="pointer-events-none absolute -inset-x-16 -top-24 -z-10 h-[34rem]" aria-hidden="true">
          {decorativeUrl ? (
            <Image
              src={decorativeUrl}
              alt={getMediaAlt(config?.images?.decorativeImage) ?? ''}
              fill
              sizes="100vw"
              className="object-cover opacity-25 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_40%,#000_0%,transparent_75%)]"
            />
          ) : (
            <DotField spacing={28} baseOpacity={0.035} maxOpacity={0.16} radius={180} breathing breatheDuration={12} breatheAmplitude={0.16} />
          )}
        </div>
        <Reveal as="header" className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="eyebrow flex items-center gap-2.5">
              <span className="mark-plus" aria-hidden="true" />
              {archive?.eyebrow ?? 'Field notes / 2026'}
            </p>
            <h1 id="blog-heading" className="mt-6 max-w-5xl font-serif text-6xl leading-[.84] tracking-[-.06em] sm:text-8xl lg:text-[10rem]">
              {archive?.heading ? (
                <RichText data={archive.heading} className="inline" />
              ) : (
                <>
                  Things worth
                  <br />
                  <span className="text-primary">returning to.</span>
                </>
              )}
            </h1>
          </div>
          <div className="lg:pb-2">
            {archive?.description ? (
              <div className="max-w-sm text-pretty text-lg leading-relaxed text-foreground/65">
                <RichText data={archive.description} />
              </div>
            ) : (
              <p className="max-w-sm text-pretty text-lg leading-relaxed text-foreground/65">
                Essays, experiments, and fragments from the space between interface design and software.
              </p>
            )}
            <p className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground">
              <ArrowDownRight className="h-4 w-4 text-primary" aria-hidden="true" />
              {archive?.note ?? 'A small, growing archive of ideas'}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mt-28" aria-labelledby="pinned-heading">
        <Reveal className="grid gap-8 border-y border-border/70 py-8 lg:grid-cols-[110px_minmax(0,1fr)_280px] lg:gap-12 lg:py-10">
          <div className="flex items-start gap-3 font-mono text-[10px] uppercase tracking-[.16em] text-primary lg:block">
            <span className="block h-px w-8 bg-primary lg:mb-5 lg:w-10" />
            {labels?.pinned ?? 'Pinned note'}
          </div>
          <Link href={`/blog/${pinned.slug}`} className="group block" aria-label={`Read pinned note: ${pinned.title}`}>
            {pinnedCover ? (
              <div className="relative aspect-[16/8] overflow-hidden bg-card">
                <Image
                  src={pinnedCover}
                  alt={pinnedCoverAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-cover transition duration-1000 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute inset-0 scanlines opacity-20" />
                <span className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[.16em] text-white/75">
                  {numberOf(pinned)} / {pinned.kind}
                  {pinned.readTime ? ` / ${pinned.readTime}` : ''}
                </span>
                <ArrowUpRight className="absolute bottom-4 right-5 h-5 w-5 text-white/80 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
              </div>
            ) : null}
            <div className="mt-7">
              <p className="eyebrow text-primary">{formatNoteDate(pinned.publishedDate)}</p>
              <h2 id="pinned-heading" className="mt-3 max-w-4xl font-serif text-4xl leading-[.9] tracking-[-.045em] sm:text-6xl">{pinned.title}</h2>
            </div>
          </Link>
          <div className="flex flex-col justify-end lg:pb-1">
            <p className="text-sm leading-relaxed text-muted-foreground">{pinned.excerpt}</p>
            <Link href={`/blog/${pinned.slug}`} className="group mt-8 inline-flex items-center gap-2 self-start font-mono text-[10px] uppercase tracking-[.15em] text-primary">
              {labels?.enterNote ?? 'Enter the note'}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>

      {rest.length > 0 ? (
        <section className="mt-24" aria-labelledby="archive-heading">
          <Reveal as="header" className="flex items-end justify-between border-b border-border/70 pb-5">
            <div>
              <p className="eyebrow">{archive?.archiveEyebrow ?? 'The archive'}</p>
              <h2 id="archive-heading" className="mt-3 font-serif text-4xl leading-none tracking-[-.04em] sm:text-5xl">{archive?.archiveTitle ?? 'All notes'}</h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground">
              {rest.length + 1} entries
            </span>
          </Reveal>
          <div className="divide-y divide-border/70">
            {rest.map((post, index) => (
              <Reveal key={post.id} delay={index * 70}>
                <Link href={`/blog/${post.slug}`} className="group grid gap-5 py-8 transition-colors hover:bg-primary/[.035] sm:grid-cols-[74px_minmax(0,1fr)_220px_26px] sm:items-center sm:px-4">
                  <span className="font-serif text-3xl text-primary/55 transition-colors group-hover:text-primary">{numberOf(post)}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground">
                      <span>{post.kind}</span>
                      <span className="text-primary">{formatNoteDate(post.publishedDate)}</span>
                      {post.readTime ? <span>{post.readTime}</span> : null}
                    </div>
                    <h3 className="mt-3 font-serif text-3xl leading-[.95] tracking-[-.035em] transition-colors group-hover:text-primary sm:text-4xl">{post.title}</h3>
                  </div>
                  <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
