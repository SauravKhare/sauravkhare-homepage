import axios from "axios";
import { cacheLife, cacheTag } from "next/cache";

const TRAKT_API_KEY = process.env.TRAKT_ID;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

export async function getLastSeenMovies(user: string, type: string, limit: number) {
  "use cache";
  cacheTag("movies");
  cacheLife({
    stale: 300,        // 5 mins: Browser caches the widget without asking the server
    revalidate: 900,   // 15 mins: Next.js fetches new movies in the background
    expire: 86400 * 7, // 7 days: Keep the old cache alive for up to a week even if traffic is low
  });

  const endpoint = `https://api.trakt.tv/users/${user}/history/${type}?limit=${limit}`;

  try {
    const traktRes = await axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": TRAKT_API_KEY,
      },
    });

    const configRes = await axios.get(
      `https://api.themoviedb.org/3/configuration?api_key=${TMDB_API_KEY}`
    );
    const baseUrl = configRes.data.images.secure_base_url;

    // Fetch all posters simultaneously on the server
    const moviesWithPosters = await Promise.all(
      traktRes.data.map(async (item: any) => {
        try {
          const tmdbRes = await axios.get(
            `https://api.themoviedb.org/3/movie/${item.movie.ids.tmdb}?api_key=${TMDB_API_KEY}`
          );
          return {
            ...item,
            movie: {
              ...item.movie,
              posterUrl: tmdbRes.data.poster_path ? `${baseUrl}w342${tmdbRes.data.poster_path}` : null,
            },
          };
        } catch {
          return item;
        }
      })
    );

    return moviesWithPosters;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to fetch movies", {
        message: error.message,
        status: error.response?.status,
        code: error.code,
      });
    } else {
      console.error("Failed to fetch movies", {
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
    return [];
  }
}