import { IMovieDBConfigurationSchema } from "src/api/movieDb";

export const ON_INITIALISE = "HOME/ON_INITIALISE";
export const INITIALISED = "HOME/INITIALISED";
export const FETCH_MOVIE_DB_CONF_FAILED = "HOME/FETCH_MOVIE_DB_CONF_FAILED";
export const FETCH_MOVIE_DB_CONF_SUCCESS = "HOME/FETCH_MOVIE_DB_CONF_SUCCESS";

export type HomeAction =
  | { type: typeof ON_INITIALISE }
  | { type: typeof INITIALISED }
  | {
      type: typeof FETCH_MOVIE_DB_CONF_SUCCESS;
      payload: {
        configuration: IMovieDBConfigurationSchema;
      };
    }
  | { type: typeof FETCH_MOVIE_DB_CONF_FAILED };

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
