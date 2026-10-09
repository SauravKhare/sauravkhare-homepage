export function BlogPostSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="h-3 w-28 rounded bg-muted animate-pulse" />
      <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
        <div className="space-y-5">
          <div className="h-3 w-48 rounded bg-muted animate-pulse" />
          <div className="h-24 w-full max-w-3xl rounded bg-muted animate-pulse" />
        </div>
        <div className="h-4 w-56 rounded bg-muted animate-pulse" />
      </div>
      <div className="mt-14 aspect-[16/7] rounded bg-muted animate-pulse" />
      <div className="mt-16 grid gap-12 lg:grid-cols-[180px_minmax(0,680px)_1fr]">
        <div className="hidden space-y-3 lg:block">
          <div className="h-3 w-24 rounded bg-muted animate-pulse" />
          <div className="h-3 w-32 rounded bg-muted animate-pulse" />
        </div>
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-4 w-full rounded bg-muted animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
