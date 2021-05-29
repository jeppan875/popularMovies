export interface IMovie {
  id: string,
  poster_path: String | null,
  adult: boolean,
  overview: string,
  release_date: string,
  genre_ids: [number],
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path: string | null,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number
}

export interface IPopularMovies {
  popularMovies: {
    nextPage: number;
    movies: [IMovie]
  };
}
