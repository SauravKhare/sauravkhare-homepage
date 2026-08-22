export interface TraktMovie {
  id: number;
  watched_at: string;
  movie: {
    title: string;
    year: number;
    ids: {
      trakt: number;
      slug: string;
      imdb: string;
      tmdb: number;
    };
    posterUrl?: string | null;
  };
}

export interface TraktConfigResponse {
  images: {
    secure_base_url: string;
    poster_sizes: string[];
  };
}

export interface TmdbMovieResponse {
  poster_path: string | null;
}
