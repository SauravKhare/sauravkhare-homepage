"use client";

import { useQuery } from "react-query";
import Paragraph from "./Paragraph";
import axios from "axios";

type MovieIDS = {
    "trakt": number;
    "slug": string;
    "imdb": string;
    "tmdb": number;
}

type Movie = {
    "title": string;
    "year": number;
    "ids": MovieIDS;
}

type MovieData = {
    "id": string;
    "watched_at": string;
    "action": string;
    "type": string;
    "movie": Movie;
}

export default function LastSeen() {
  async function fetchMovies() {
    const res = await axios.get(
      "https://api.trakt.tv/users/sauravkhare/history/movies?limit=3",
      {
        headers: {
          "Content-Type": "application/json",
          "trakt-api-version": 2,
          "trakt-api-key": process.env.NEXT_PUBLIC_TRAKT_ID,
        },
      }
    );
    return res.data;
  }

  const { isLoading, isError, data, error } = useQuery(
    "movies-query",
    fetchMovies,
    {
      staleTime: 86400,
    }
  );

  if (isLoading) {
    return (
      <Paragraph classname="text-xl font-inter font-normal md:w-55ch text-white">
        Loading......
      </Paragraph>
    );
  }

  if (isError) {
    return (
      <Paragraph classname="text-xl font-inter font-normal md:w-55ch text-white">
        {{ error }}
      </Paragraph>
    );
  }

  return (
    <>
      <div className="flex gap-4">
        {data.map((movie: MovieData) => (
          <a
            key={movie.id}
            href={`https://www.imdb.com/title/${movie.movie.ids.imdb}`}
            target="_blank"
          >
            <p className="text-xl font-inter font-normal text-white">
              {movie.movie.title} {movie.movie.year}
            </p>
          </a>
        ))}
      </div>
    </>
  );
}
