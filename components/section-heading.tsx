import { RichText } from '@/components/RichText/RichText'
import { PayloadRichText } from '@/lib/types'

export function SectionHeading({
  id,
  label,
  title,
  subtitle,
  children,
}: {
  id?: string
  label: string
  title: string | PayloadRichText
  subtitle?: PayloadRichText | null
  children?: React.ReactNode
}) {
  return (
    <header className="mb-4 max-w-3xl">
      <p className="mb-3 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-primary">
        <span className="mark-plus" aria-hidden="true" />
        {label}
      </p>
      {typeof title === 'string' ? (
        <h2
          id={id}
          className="font-serif text-3xl font-medium tracking-[-0.02em] text-balance text-foreground sm:text-[2.6rem] sm:leading-[1.05]"
        >
          {title}
        </h2>
      ) : (
        <h2
          id={id}
          className="font-serif text-3xl font-medium tracking-[-0.02em] text-balance text-foreground sm:text-[2.6rem] sm:leading-[1.05]"
        >
          <RichText data={title} className="inline" />
        </h2>
      )}
      {subtitle && (
        <div className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          <RichText data={subtitle} />
        </div>
      )}
      {children ? (
        <div className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {children}
        </div>
      ) : null}
    </header>
  )
}
