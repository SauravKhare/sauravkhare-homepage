import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/Reveal'
import { Lastseen } from '@/payload-types'
import { FALLBACK_MOVIES } from '@/lib/fallbacks'

interface LastSeenProps {
  config?: Lastseen | null;
  data?: import('@/fetchers/movies/types').TraktMovie[] | null;
}

export function LastSeen({ config, data }: LastSeenProps) {
  const hasCmsData = data && data.length > 0;
  const heading = config?.heading;

  return (
    <section aria-labelledby="last-seen-heading" className="my-28">
      <Reveal as="header">
        <SectionHeading
          id="last-seen-heading"
          label={heading?.label ?? "Off the clock"}
          title={heading?.title ?? "Last seen"}
          subtitle={heading?.subtitle}
        />
      </Reveal>

      <ul className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
        {hasCmsData
          ? data!.map((item, index) => (
              <Reveal as="li" key={item.id} delay={index * 60} className="group min-w-[42vw] snap-start sm:min-w-0">
                <a
                  href={`https://www.imdb.com/title/${item.movie.ids.imdb}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="dither relative aspect-[2/3] overflow-hidden bg-secondary">
                    {item.movie.posterUrl ? (
                      <img
                        src={item.movie.posterUrl}
                        alt={item.movie.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-sm text-muted-foreground">No Poster</span>
                      </div>
                    )}
                  </div>
                  <p className="mt-3 font-serif text-sm">{item.movie.title}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{item.movie.year}</p>
                </a>
              </Reveal>
            ))
          : FALLBACK_MOVIES.map((movie, index) => (
              <Reveal as="li" key={movie.title} delay={index * 60} className="group min-w-[42vw] snap-start sm:min-w-0">
                <div className="dither relative aspect-[2/3] overflow-hidden bg-secondary">
                  <img src={movie.poster} alt={`Poster for ${movie.title}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                </div>
                <p className="mt-3 font-serif text-sm">{movie.title}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{movie.year} · {movie.director}</p>
              </Reveal>
            ))}
      </ul>
    </section>
  )
}
