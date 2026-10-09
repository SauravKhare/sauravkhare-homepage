export function BlogPreviewSkeleton() {
  return (
    <section className="section-space scroll-mt-24" aria-hidden="true">
      <div className="mb-8 max-w-3xl space-y-3">
        <div className="h-3 w-32 rounded bg-muted animate-pulse" />
        <div className="h-10 w-72 rounded bg-muted animate-pulse" />
        <div className="h-4 w-full max-w-xl rounded bg-muted animate-pulse" />
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,.85fr)] lg:gap-16">
        <div className="space-y-4">
          <div className="h-3 w-40 rounded bg-muted animate-pulse" />
          <div className="h-14 w-full max-w-3xl rounded bg-muted animate-pulse" />
          <div className="h-5 w-full max-w-xl rounded bg-muted animate-pulse" />
          <div className="h-4 w-32 rounded bg-muted animate-pulse" />
        </div>
        <div className="space-y-6 border-t border-border/70 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="space-y-3 py-5">
              <div className="h-3 w-32 rounded bg-muted animate-pulse" />
              <div className="h-7 w-56 rounded bg-muted animate-pulse" />
              <div className="h-4 w-full rounded bg-muted animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
