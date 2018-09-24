import { Cmd, loop, Loop } from "redux-loop";
import {
  fetchMovieDbConfiguration,
  IMovieDBConfigurationSchema
} from "src/api/movieDb";
import {
  HomeAction,
  ON_INITIALISE,
  fetchMovieDbConfigurationFailed,
  fetchMovieDbConfigurationSuccess,
  FETCH_MOVIE_DB_CONF_SUCCESS
} from "src/components/Home/HomeActions";

export interface IHomeStore {
  initialising: boolean;
  movieDbConfiguration: IMovieDBConfigurationSchema | null;
}

const initialState: IHomeStore = {
  initialising: false,
  movieDbConfiguration: null
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
          initialising: true
        },
        Cmd.run(fetchMovieDbConfiguration, {
          args: [],
          failActionCreator: fetchMovieDbConfigurationFailed,
          successActionCreator: fetchMovieDbConfigurationSuccess
        })
      );
    }
    case FETCH_MOVIE_DB_CONF_SUCCESS: {
      const configuration = action.payload.configuration;

      console.log("confi:", configuration);

      return {
        ...state,
        initialising: false,
        movieDbConfiguration: configuration
      };
    }
    default:
      return state;
  }
};
