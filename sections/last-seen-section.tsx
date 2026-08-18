import { getLastSeenConfig } from "@/fetchers/globals";
import { getLastSeenMovies } from "@/fetchers/movies";
import { LastSeen } from "@/components/LastSeen";

export async function LastSeenSection() {
  const [config, movies] = await Promise.all([
    getLastSeenConfig(),
    getLastSeenMovies("saurav", "movies", 8),
  ]);
  return <LastSeen config={config} data={movies} />;
}
