import { Cmd, loop, Loop } from "redux-loop";
import {
  fetchMovieDbConfiguration,
  IMovieDBConfigurationSchema,
  IMovieDBGenre,
  fetchMovieDbGenres
} from "src/api/movieDb";
import {
  HomeAction,
  ON_INITIALISE,
  fetchMovieDbConfigurationFailed,
  fetchMovieDbConfigurationSuccess,
  FETCH_MOVIE_DB_CONF_SUCCESS,
  fetchMovieDbGenresFailed,
  fetchMovieDbGenresSuccess,
  FETCH_MOVIE_DB_GENRES_SUCCESS
} from "src/components/Home/HomeActions";

export interface IHomeStore {
  loadingConfiguration: boolean;
  loadingGenres: boolean;
  movieDbConfiguration: IMovieDBConfigurationSchema | null;
  genres: IMovieDBGenre[];
}

const initialState: IHomeStore = {
  loadingConfiguration: false,
  loadingGenres: false,
  movieDbConfiguration: null,
  genres: []
};

export const homeReducer = function reduce(
  state: IHomeStore = initialState,
  action: HomeAction
): IHomeStore | Loop<IHomeStore, HomeAction> {
  switch (action.type) {
    case ON_INITIALISE: {
      return loop<IHomeStore, HomeAction>(
        {
          ...state,
          loadingConfiguration: true,
          loadingGenres: true
        },
        // MovieDB has a `/configuration` endpoint containing some useful stuff for us
        Cmd.list([
          Cmd.run(fetchMovieDbConfiguration, {
            args: [],
            failActionCreator: fetchMovieDbConfigurationFailed,
            successActionCreator: fetchMovieDbConfigurationSuccess
          }),
          // Also, we pre-load movie genres list here
          Cmd.run(fetchMovieDbGenres, {
            args: [],
            failActionCreator: fetchMovieDbGenresFailed,
            successActionCreator: fetchMovieDbGenresSuccess
          })
        ])
      );
    }
    case FETCH_MOVIE_DB_CONF_SUCCESS: {
      return {
        ...state,
        loadingConfiguration: false,
        movieDbConfiguration: action.payload.configuration
      };
    }
    case FETCH_MOVIE_DB_GENRES_SUCCESS: {
      return {
        ...state,
        loadingGenres: false,
        genres: action.payload.genres
      };
    }
    default:
      return state;
  }
};
