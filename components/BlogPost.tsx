import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { DotField } from '@/components/DotField'
import { RichText } from '@/components/RichText/RichText'
import { cn, formatNoteDate, getMediaAlt, getMediaUrl } from '@/lib/utils'
import type { Blog, Post } from '@/payload-types'

interface BlogPostProps {
  post: Post
  config?: Blog | null
}

export function BlogPost({ post, config }: BlogPostProps) {
  const labels = config?.labels
  const coverUrl = getMediaUrl(post.coverImage) ?? getMediaUrl(config?.images?.fallbackCover)
  const coverAlt =
    getMediaAlt(post.coverImage) ??
    post.coverImageAlt ??
    getMediaAlt(config?.images?.fallbackCover) ??
    post.title

  const hasReadingNote = Boolean(post.readingNote?.text)
  const hasInThisNote = Boolean(post.inThisNote?.text)
  const bodyColumns = cn(
    'mt-16 grid gap-12',
    hasReadingNote && hasInThisNote && 'lg:grid-cols-[180px_minmax(0,680px)_1fr]',
    hasReadingNote && !hasInThisNote && 'lg:grid-cols-[180px_minmax(0,680px)]',
    !hasReadingNote && hasInThisNote && 'lg:grid-cols-[minmax(0,680px)_1fr]',
    !hasReadingNote && !hasInThisNote && 'lg:grid-cols-[minmax(0,680px)]',
  )

  return (
    <>
      <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground transition hover:text-primary">
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        {labels?.backToNotes ?? 'Back to notes'}
      </Link>

      <article className="mt-16">
        <header className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
          <div className="pointer-events-none absolute -left-12 -top-20 -z-10 h-72 w-[70%]" aria-hidden="true">
            <DotField spacing={30} baseOpacity={0.03} maxOpacity={0.1} radius={140} breathing breatheDuration={13} breatheAmplitude={0.13} />
          </div>
          <div>
            <p className="eyebrow text-primary">
              {post.kind}
              {post.readTime ? ` / ${post.readTime}` : ''} · {formatNoteDate(post.publishedDate)}
            </p>
            <h1 className="mt-5 max-w-5xl font-serif text-6xl leading-[.86] tracking-[-.06em] sm:text-8xl lg:text-[8.5rem]">{post.title}</h1>
          </div>
          <p className="max-w-xs text-lg leading-relaxed text-foreground/65 lg:pb-2">{post.excerpt}</p>
        </header>

        {coverUrl ? (
          <div className="relative mt-14 aspect-[16/7] overflow-hidden bg-card">
            <Image src={coverUrl} alt={coverAlt} fill priority sizes="(max-width: 1024px) 100vw, 1200px" className="object-cover" />
            <div className="absolute inset-0 scanlines opacity-20" />
          </div>
        ) : null}

        <div className={bodyColumns}>
          {hasReadingNote ? (
            <aside className="hidden lg:block">
              {post.readingNote?.label ? <p className="eyebrow">{post.readingNote.label}</p> : null}
              <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground whitespace-pre-line">{post.readingNote?.text}</p>
            </aside>
          ) : null}
          <div className="prose-note">
            <RichText data={post.content} />
          </div>
          {hasInThisNote ? (
            <aside className="hidden xl:block">
              <div className="sticky top-10 border-l border-border/70 pl-5">
                {post.inThisNote?.label ? <p className="eyebrow">{post.inThisNote.label}</p> : null}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">{post.inThisNote?.text}</p>
              </div>
            </aside>
          ) : null}
        </div>
      </article>

      <nav className="mt-10 flex justify-end border-t border-border/70 pt-7">
        <Link href="/blog" className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground hover:text-primary">
          {labels?.allNotes ?? 'All notes'}
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </nav>
    </>
  )
}
