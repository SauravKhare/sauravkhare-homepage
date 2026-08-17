import { Siteglobal } from '@/payload-types'

const disciplines = ['UI systems', 'Frontend', 'Backend', 'Accessibility', 'AI products', 'Quality']

interface NowProps {
  data?: Siteglobal["now"] | null;
}

export function Now({ data }: NowProps) {
  if (data && data.length > 0) {
    return (
      <section aria-labelledby="now-heading" className="my-28 sm:my-36">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="max-w-xl">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              <p id="now-heading" className="eyebrow">Currently</p>
            </div>
            <div className="space-y-4">
              {data.map((item) => (
                <div key={item.id}>
                  <p className="serif-display text-3xl leading-[1.1] sm:text-[2.6rem]">
                    {item.nowCompanyDescription} at{' '}
                    <a
                      href={item.nowCompanyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary transition-colors hover:underline"
                    >
                      {item.nowCompanyName}
                    </a>.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-6">What I work across</p>
            <ul className="flex flex-wrap gap-x-3 gap-y-3">
              {disciplines.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border/70 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section aria-labelledby="now-heading" className="my-28 sm:my-36">
      <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
        <div className="max-w-xl">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <p id="now-heading" className="eyebrow">Currently</p>
          </div>
          <p className="serif-display text-3xl leading-[1.1] sm:text-[2.6rem]">
            Senior Experience Engineer at <span className="text-primary">Publicis Sapient</span>.
          </p>
          <p className="mt-6 text-pretty text-base leading-relaxed text-foreground/70">
            Building product surfaces, APIs, and AI-assisted workflows — and open to select work alongside it.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-6">What I work across</p>
          <ul className="flex flex-wrap gap-x-3 gap-y-3">
            {disciplines.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border/70 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary hover:text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
