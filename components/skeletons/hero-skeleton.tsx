export function HeroSkeleton() {
  return (
    <section className="relative pt-14 sm:pt-20 lg:pt-24" aria-hidden="true">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
        <div className="space-y-6">
          <div className="h-3 w-64 rounded bg-muted animate-pulse" />
          <div className="space-y-2">
            <div className="h-20 w-full rounded bg-muted animate-pulse" />
            <div className="h-20 w-3/4 rounded bg-muted animate-pulse" />
          </div>
          <div className="space-y-2 pt-2">
            <div className="h-4 w-full max-w-xl rounded bg-muted animate-pulse" />
            <div className="h-4 w-full max-w-md rounded bg-muted animate-pulse" />
          </div>
          <div className="h-5 w-40 pt-4 rounded bg-muted animate-pulse" />
        </div>
        <div className="aspect-[4/5] rounded bg-muted animate-pulse lg:pt-2" />
      </div>
      <div className="mt-16 h-12 w-full rounded bg-muted animate-pulse sm:mt-20" />
    </section>
  )
}
