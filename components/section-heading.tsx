export function SectionHeading({
  id,
  label,
  title,
  children,
}: {
  id?: string
  label: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <header className="mb-4 max-w-3xl">
      <p className="mb-3 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-primary">
        <span className="mark-plus" aria-hidden="true" />
        {label}
      </p>
      <h2
        id={id}
        className="font-serif text-3xl font-medium tracking-[-0.02em] text-balance text-foreground sm:text-[2.6rem] sm:leading-[1.05]"
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {children}
        </p>
      ) : null}
    </header>
  )
}
