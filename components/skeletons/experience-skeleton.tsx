export function ExperienceSkeleton() {
  return (
    <section className="section-space scroll-mt-24" aria-hidden="true">
      <div className="mb-8 max-w-3xl space-y-3">
        <div className="h-3 w-32 rounded bg-muted animate-pulse" />
        <div className="h-10 w-96 rounded bg-muted animate-pulse" />
        <div className="h-4 w-full max-w-xl rounded bg-muted animate-pulse" />
      </div>
      <div className="mt-16 flex flex-col">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="grid gap-4 border-t border-border py-10 sm:grid-cols-[auto_1fr_150px] sm:gap-10"
          >
            <div className="h-16 w-20 rounded bg-muted animate-pulse" />
            <div className="space-y-3">
              <div className="h-8 w-80 rounded bg-muted animate-pulse" />
              <div className="h-4 w-full max-w-2xl rounded bg-muted animate-pulse" />
              <div className="flex gap-2 pt-2">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="h-6 w-16 rounded bg-muted animate-pulse" />
                ))}
              </div>
            </div>
            <div className="h-3 w-24 rounded bg-muted animate-pulse sm:pt-2 sm:text-right" />
          </div>
        ))}
      </div>
    </section>
  )
}
