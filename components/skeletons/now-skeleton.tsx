export function NowSkeleton() {
  return (
    <section className="my-28 sm:my-36" aria-hidden="true">
      <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
        <div className="max-w-xl space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-muted animate-pulse" />
            <div className="h-3 w-20 rounded bg-muted animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-10 w-full rounded bg-muted animate-pulse" />
            <div className="h-10 w-3/4 rounded bg-muted animate-pulse" />
          </div>
          <div className="space-y-2 pt-2">
            <div className="h-4 w-full rounded bg-muted animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-3 w-32 rounded bg-muted animate-pulse" />
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-10 w-24 rounded-full bg-muted animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
