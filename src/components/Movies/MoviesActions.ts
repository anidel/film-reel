import { IMovieDBMovie, IMovieDBMovieResponse } from "../../api/movieDb";

export const ON_LOAD_DISCOVER_MOVIES = "MOVIES/ON_LOAD_DISCOVER_MOVIES";
export const LOAD_DISCOVER_MOVIES_SUCCESS =
  "MOVIES/LOAD_DISCOVER_MOVIES_SUCCESS";
export const LOAD_DISCOVER_MOVIES_FAILED = "MOVIES/LOAD_DISCOVER_MOVIES_FAILED";
export const ON_PERFORM_SEARCH = "MOVIES/ON_PERFORM_SEARCH";
export const ON_PERFORM_SEARCH_SUCCESS = "MOVIES/ON_PERFORM_SEARCH_SUCCESS";
export const ON_PERFORM_SEARCH_FAILED = "MOVIES/ON_PERFORM_SEARCH_FAILED";

export type MoviesAction =
  | { type: typeof ON_LOAD_DISCOVER_MOVIES }
  | { type: typeof LOAD_DISCOVER_MOVIES_FAILED; payload: { error: object } }
  | {
      type: typeof LOAD_DISCOVER_MOVIES_SUCCESS;
      payload: { movies: IMovieDBMovie[] };
    }
  | { type: typeof ON_PERFORM_SEARCH; payload: { searchText: string } }
  | {
      type: typeof ON_PERFORM_SEARCH_SUCCESS;
      payload: { movies: IMovieDBMovie[] };
    }
  | {
      type: typeof ON_PERFORM_SEARCH_FAILED;
      payload: { error: object };
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

export const onPerformSearch = (searchText: string): MoviesAction => ({
  type: ON_PERFORM_SEARCH,
  payload: {
    searchText
  }
});

export const onPerformSearchSuccess = (
  movies: IMovieDBMovieResponse
): MoviesAction => ({
  type: ON_PERFORM_SEARCH_SUCCESS,
  payload: { movies: movies.results }
});

export const onPerformSearchFailed = (error: object): MoviesAction => ({
  type: ON_PERFORM_SEARCH_FAILED,
  payload: { error }
});
