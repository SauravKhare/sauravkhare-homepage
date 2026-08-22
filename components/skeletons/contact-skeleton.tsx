export function ContactSkeleton() {
  return (
    <section className="section-space scroll-mt-24" aria-hidden="true">
      <div className="mb-8 max-w-3xl space-y-3">
        <div className="h-3 w-32 rounded bg-muted animate-pulse" />
        <div className="h-10 w-96 rounded bg-muted animate-pulse" />
        <div className="h-4 w-full max-w-xl rounded bg-muted animate-pulse" />
      </div>
      <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-4">
          <div className="h-3 w-56 rounded bg-muted animate-pulse" />
          <div className="h-12 w-80 rounded bg-muted animate-pulse" />
        </div>
        <div className="h-4 w-40 rounded bg-muted animate-pulse" />
      </div>
    </section>
  )
}
