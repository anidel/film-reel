import { IMovieDBMovie, IMovieDBMovieResponse } from "../../api/movieDb";

export const ON_LOAD_DISCOVER_MOVIES = "MOVIES/ON_LOAD_DISCOVER_MOVIES";
export const LOAD_DISCOVER_MOVIES_SUCCESS =
  "MOVIES/LOAD_DISCOVER_MOVIES_SUCCESS";
export const LOAD_DISCOVER_MOVIES_FAILED = "MOVIES/LOAD_DISCOVER_MOVIES_FAILED";

export type MoviesAction =
  | { type: typeof ON_LOAD_DISCOVER_MOVIES }
  | { type: typeof LOAD_DISCOVER_MOVIES_FAILED; payload: { error: object } }
  | {
      type: typeof LOAD_DISCOVER_MOVIES_SUCCESS;
      payload: { movies: IMovieDBMovie[] };
    };

export const onLoadDiscoverMovies = (): MoviesAction => ({
  type: ON_LOAD_DISCOVER_MOVIES
});

export const onLoadDiscoverMoviesSuccess = (
  movies: IMovieDBMovieResponse
): MoviesAction => ({
  type: LOAD_DISCOVER_MOVIES_SUCCESS,
  payload: { movies: movies.results }
});

export const onLoadDiscoverMoviesFailed = (error: object): MoviesAction => ({
  type: LOAD_DISCOVER_MOVIES_FAILED,
  payload: { error }
});
