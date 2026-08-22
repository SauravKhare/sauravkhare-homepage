export function ShowcaseSkeleton() {
  return (
    <section className="section-space scroll-mt-24" aria-hidden="true">
      <div className="mb-8 max-w-3xl space-y-3">
        <div className="h-3 w-32 rounded bg-muted animate-pulse" />
        <div className="h-10 w-64 rounded bg-muted animate-pulse" />
        <div className="h-4 w-full max-w-xl rounded bg-muted animate-pulse" />
      </div>
      <div className="mt-16 flex flex-col gap-y-20">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="grid gap-8 sm:items-center sm:gap-14 sm:grid-cols-[1fr_340px]"
          >
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <div className="h-10 w-16 rounded bg-muted animate-pulse" />
                <div className="h-4 w-32 rounded bg-muted animate-pulse" />
              </div>
              <div className="h-12 w-64 rounded bg-muted animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full max-w-xl rounded bg-muted animate-pulse" />
                <div className="h-4 w-3/4 max-w-lg rounded bg-muted animate-pulse" />
              </div>
              <div className="flex gap-2 pt-2">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="h-6 w-16 rounded bg-muted animate-pulse" />
                ))}
              </div>
            </div>
            <div className="aspect-[16/10] rounded bg-muted animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  )
}
