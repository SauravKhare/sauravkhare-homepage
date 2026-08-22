export function CapabilitiesSkeleton() {
  return (
    <section className="section-space scroll-mt-24" aria-hidden="true">
      <div className="mb-8 max-w-3xl space-y-3">
        <div className="h-3 w-48 rounded bg-muted animate-pulse" />
        <div className="h-10 w-72 rounded bg-muted animate-pulse" />
        <div className="h-4 w-full max-w-xl rounded bg-muted animate-pulse" />
      </div>
      <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-square rounded bg-muted animate-pulse" />
            <div className="h-3 w-16 rounded bg-muted animate-pulse" />
            <div className="h-6 w-40 rounded bg-muted animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-muted animate-pulse" />
              <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
