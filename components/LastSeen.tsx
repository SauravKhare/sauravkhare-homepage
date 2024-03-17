"use client";

import { useQuery } from "react-query";
import Paragraph from "./Paragraph";
import axios, { AxiosError } from "axios";

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
		const res = await axios.get(
			`${endpoint}/${user}/history/${type}?limit=${limit}`,
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
			<div className="flex gap-6 overflow-x-scroll no-scrollbar">
				<div className="rounded-md bg-zinc-800 h-7 w-80 animate-pulse"></div>
				<div className="rounded-md bg-zinc-800 h-7 w-64 animate-pulse"></div>
				<div className="rounded-md bg-zinc-800 h-7 w-72 animate-pulse"></div>
			</div>
		);
	}

	if (axios.isAxiosError(error)) {
		return (
			<Paragraph classname="text-xl font-geist-sans font-normal md:w-55ch text-white/80">
				{error.message}
			</Paragraph>
		);
	}

	return (
		<>
			<div className="flex gap-4 overflow-x-scroll no-scrollbar">
				{data?.map((movie: MovieData) => (
					<a
						className="text-xl font-geist-sans font-normal text-white/80 duration-500  hover:text-yellow-400 shrink-0"
						key={movie.id}
						href={`https://www.imdb.com/title/${movie.movie.ids.imdb}`}
						target="_blank"
					>
						<p className="">{`${movie.movie.title} (${movie.movie.year})`}</p>
					</a>
				))}
			</div>
		</>
	);
}
