export function LastSeenSkeleton() {
  return (
    <section className="my-28" aria-hidden="true">
      <div className="mb-8 max-w-3xl space-y-3">
        <div className="h-3 w-24 rounded bg-muted animate-pulse" />
        <div className="h-10 w-48 rounded bg-muted animate-pulse" />
        <div className="h-4 w-full max-w-xl rounded bg-muted animate-pulse" />
      </div>
      <div className="mt-10 grid grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="aspect-[2/3] rounded bg-muted animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
            <div className="h-3 w-1/2 rounded bg-muted animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  )
}
