"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

import Paragraph from "@/components/Paragraph";
import LastSeenLoader from "./LastSeenLoader";

type MovieIDS = {
  trakt: number;
  slug: string;
  imdb: string;
  tmdb: number;
};

type Movie = {
  title: string;
  year: number;
  ids: MovieIDS;
  posterUrl?: string;
};

type MovieData = {
  id: string;
  watched_at: string;
  action: string;
  type: string;
  movie: Movie;
};

const endpoint = "https://api.trakt.tv/users";

export default function LastSeen({
  user,
  type,
  limit,
}: {
  user: string;
  type: string;
  limit: number;
}) {
  async function fetchMovies() {
    const traktRes = await axios.get(
      `${endpoint}/${user}/history/${type}?limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
          "trakt-api-version": 2,
          "trakt-api-key": process.env.NEXT_PUBLIC_TRAKT_ID,
        },
      }
    );

    const configRes = await axios.get(
      `https://api.themoviedb.org/3/configuration?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );
    const baseUrl = configRes.data.images.secure_base_url;

    const moviesWithPosters = await Promise.all(
      traktRes.data.map(async (item: MovieData) => {
        try {
          const tmdbRes = await axios.get(
            `https://api.themoviedb.org/3/movie/${item.movie.ids.tmdb}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
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
      })
    );

    return moviesWithPosters;
  }

  const { isLoading, data, error } = useQuery({
    queryKey: ["movies-query"],
    queryFn: fetchMovies,
    staleTime: 86400,
  });

  if (isLoading) {
    return <LastSeenLoader limit={limit} />;
  }

  if (axios.isAxiosError(error)) {
    return (
      <Paragraph classname="text-xl font-geist-sans font-normal md:w-55ch text-white/80 mt-6">
        {error.message}
      </Paragraph>
    );
  }

  return (
    <div className="mt-6 font-inter">
      <div className="flex gap-4 overflow-x-scroll no-scrollbar">
        {data?.map((movie: MovieData) => (
          <div key={movie.id} className="basis-36">
            <a
              key={movie.id}
              href={`https://www.imdb.com/title/${movie.movie.ids.imdb}`}
              target="_blank"
              className="shrink-0 space-y-2"
            >
              <div className="w-32 h-48 rounded-md overflow-hidden">
                {movie.movie.posterUrl ? (
                  <Image
                    src={movie.movie.posterUrl}
                    alt={movie.movie.title}
                    className="w-full h-full object-cover duration-500 hover:scale-105"
                    width={128}
                    height={192}
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                    <span className="text-white/40 text-sm">No Poster</span>
                  </div>
                )}
              </div>
              <p className="text-sm font-geist-sans text-white/80 hover:text-yellow-400 w-32">
                {`${movie.movie.title} (${movie.movie.year})`}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
