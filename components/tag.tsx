export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] leading-5 tracking-tight text-muted-foreground">
      {children}
    </span>
  )
}

export function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  )
}
