import Image from "next/image";
import { getLastSeenMovies } from "@/fetchers/movies";
import { StaggerGroup, StaggerItem } from "./StaggerGrid";

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
    <div className="font-body">
      <StaggerGroup className="flex gap-4 overflow-x-scroll no-scrollbar py-4">
        {movies.map((movie: any) => (
          <StaggerItem key={movie.id} className="basis-36 will-change-transform">
            <a
              href={`https://www.imdb.com/title/${movie.movie.ids.imdb}`}
              target="_blank"
              className="shrink-0 space-y-2 group block outline-none"
            >
              <div className="w-32 h-48 rounded-md overflow-hidden bg-ink/5">
                {movie.movie.posterUrl ? (
                  <Image
                    src={movie.movie.posterUrl}
                    alt={movie.movie.title}
                    width={128}
                    height={192}
                    className="sepia h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:sepia-0 transform-gpu backface-hidden will-change-transform"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-ink/40 text-sm">No Poster</span>
                  </div>
                )}
              </div>
              <p className="font-body text-sm text-ink/80 transition-colors duration-300 group-hover:text-ink">
                {`${movie.movie.title} (${movie.movie.year})`}
              </p>
            </a>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}