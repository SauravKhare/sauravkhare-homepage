export function BlogArchiveSkeleton() {
  return (
    <div className="mt-16" aria-hidden="true">
      <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
        <div className="space-y-6">
          <div className="h-3 w-40 rounded bg-muted animate-pulse" />
          <div className="h-24 w-full max-w-3xl rounded bg-muted animate-pulse" />
        </div>
        <div className="space-y-4">
          <div className="h-4 w-64 rounded bg-muted animate-pulse" />
          <div className="h-3 w-48 rounded bg-muted animate-pulse" />
        </div>
      </div>
      <div className="mt-28 grid gap-8 border-y border-border/70 py-8 lg:grid-cols-[110px_minmax(0,1fr)_280px] lg:gap-12 lg:py-10">
        <div className="h-3 w-24 rounded bg-muted animate-pulse" />
        <div className="space-y-6">
          <div className="aspect-[16/8] rounded bg-muted animate-pulse" />
          <div className="h-10 w-72 rounded bg-muted animate-pulse" />
        </div>
        <div className="space-y-4">
          <div className="h-4 w-full rounded bg-muted animate-pulse" />
          <div className="h-4 w-2/3 rounded bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  )
}
