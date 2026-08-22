import axios from "axios";
import { cacheLife, cacheTag } from "next/cache";
import type { TraktMovie, TraktConfigResponse, TmdbMovieResponse } from "./types";

const TRAKT_API_KEY = process.env.TRAKT_ID;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

export async function getLastSeenMovies(
  user: string,
  type: string,
  limit: number,
): Promise<TraktMovie[]> {
  "use cache";
  cacheTag("movies");
  cacheLife({
    stale: 300,
    revalidate: 900,
    expire: 86400 * 7,
  });

  const endpoint = `https://api.trakt.tv/users/${user}/history/${type}?limit=${limit}`;

  try {
    const traktRes = await axios.get<TraktMovie[]>(endpoint, {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": TRAKT_API_KEY,
      },
    });

    const configRes = await axios.get<TraktConfigResponse>(
      `https://api.themoviedb.org/3/configuration?api_key=${TMDB_API_KEY}`,
    );
    const baseUrl = configRes.data.images.secure_base_url;

    const moviesWithPosters = await Promise.all(
      traktRes.data.map(async (item: TraktMovie) => {
        try {
          const tmdbRes = await axios.get<TmdbMovieResponse>(
            `https://api.themoviedb.org/3/movie/${item.movie.ids.tmdb}?api_key=${TMDB_API_KEY}`,
          );
          return {
            ...item,
            movie: {
              ...item.movie,
              posterUrl: tmdbRes.data.poster_path
                ? `${baseUrl}w342${tmdbRes.data.poster_path}`
                : null,
            },
          };
        } catch {
          return item;
        }
      }),
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
