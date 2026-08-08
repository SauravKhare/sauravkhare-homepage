import Image from "next/image";
import { getLastSeenMovies } from "@/fetchers/movies";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGrid";

export default async function LastSeen({
  user,
  type,
  limit,
}: {
  user: string;
  type: string;
  limit: number;
}) {
  const movies = await getLastSeenMovies(user, type, limit);

  if (!movies || movies.length === 0) {
    return <p className="text-ink/70">No movies found.</p>;
  }

  return (
    <section className="py-20 bg-dark-primary md:max-w-360 mx-auto">
      <p className="text-sm text-teal-primary font-jakarta uppercase mb-4 px-6 md:px-16">03. LAST SEEN</p>
      <p className="font-fraunces text-[40px] text-light-primary mb-4 px-6 md:px-16">Recently Watched</p>
      <div className="max-sm:-mx-6 md:px-16">
        <StaggerGroup className="flex gap-8 overflow-x-scroll no-scrollbar max-sm:px-6">
          {movies.map((movie: any) => (
            <StaggerItem key={movie.id} className="basis-36 will-change-transform">
              <a
                href={`https://www.imdb.com/title/${movie.movie.ids.imdb}`}
                target="_blank"
                className="shrink-0 group block outline-none"
              >
                <div className="w-32 h-48 md:w-66 md:h-[396] rounded-md overflow-hidden bg-ink/5">
                  {movie.movie.posterUrl ? (
                    <Image
                      src={movie.movie.posterUrl}
                      alt={movie.movie.title}
                      width={262}
                      height={394}
                      className="object-cover transition-all duration-500 ease-out group-hover:scale-105 transform-gpu backface-hidden will-change-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-ink/40 text-sm">No Poster</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col text-[13px] md:text-[18px] text-light-primary font-jakarta transition-colors duration-300">
                  {movie.movie.title}
                  <span className="text-xs">{movie.movie.year}</span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}