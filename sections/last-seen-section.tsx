import { getLastSeenMovies } from "@/fetchers/movies";
import { LastSeen } from "@/components/LastSeen";

export async function LastSeenSection() {
  const movies = await getLastSeenMovies("saurav", "movies", 8);
  return <LastSeen data={movies} />;
}
