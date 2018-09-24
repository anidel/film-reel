import { IMovieDBConfigurationSchema, IMovieDBGenre } from "src/api/movieDb";

export const ON_INITIALISE = "HOME/ON_INITIALISE";
export const INITIALISED = "HOME/INITIALISED";
export const FETCH_MOVIE_DB_CONF_FAILED = "HOME/FETCH_MOVIE_DB_CONF_FAILED";
export const FETCH_MOVIE_DB_CONF_SUCCESS = "HOME/FETCH_MOVIE_DB_CONF_SUCCESS";
export const FETCH_MOVIE_DB_GENRES = "HOME/FETCH_MOVIE_DB_GENRES";
export const FETCH_MOVIE_DB_GENRES_FAILED = "HOME/FETCH_MOVIE_DB_GENRES_FAILED";
export const FETCH_MOVIE_DB_GENRES_SUCCESS =
  "HOME/FETCH_MOVIE_DB_GENRES_SUCCESS";

export type HomeAction =
  | { type: typeof ON_INITIALISE }
  | { type: typeof INITIALISED }
  | {
      type: typeof FETCH_MOVIE_DB_CONF_SUCCESS;
      payload: {
        configuration: IMovieDBConfigurationSchema;
      };
    }
  | { type: typeof FETCH_MOVIE_DB_CONF_FAILED }
  | { type: typeof FETCH_MOVIE_DB_GENRES }
  | { type: typeof FETCH_MOVIE_DB_GENRES_FAILED; payload: { error: object } }
  | {
      type: typeof FETCH_MOVIE_DB_GENRES_SUCCESS;
      payload: { genres: IMovieDBGenre[] };
    };

export const onInitialise = (): HomeAction => ({
  type: ON_INITIALISE
});

export const initialised = (): HomeAction => ({
  type: INITIALISED
});

export const fetchMovieDbConfigurationFailed = (): HomeAction => ({
  type: FETCH_MOVIE_DB_CONF_FAILED
});

export const fetchMovieDbConfigurationSuccess = (
  configuration: IMovieDBConfigurationSchema
): HomeAction => ({
  type: FETCH_MOVIE_DB_CONF_SUCCESS,
  payload: {
    configuration
  }
});

export const fetchMovieDbGenresFailed = (error: object): HomeAction => ({
  type: FETCH_MOVIE_DB_GENRES_FAILED,
  payload: { error }
});

export const fetchMovieDbGenresSuccess = (
  genres: IMovieDBGenre[]
): HomeAction => ({
  type: FETCH_MOVIE_DB_GENRES_SUCCESS,
  payload: { genres }
});
