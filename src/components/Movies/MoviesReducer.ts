import {
  IMovieDBMovie,
  fetchMovieDbDiscover,
  fetchMovieDbSearch
} from "../../api/movieDb";
import { loop, Cmd, Loop } from "redux-loop";
import {
  MoviesAction,
  ON_LOAD_DISCOVER_MOVIES,
  LOAD_DISCOVER_MOVIES_SUCCESS,
  LOAD_DISCOVER_MOVIES_FAILED,
  onLoadDiscoverMoviesSuccess,
  onLoadDiscoverMoviesFailed,
  ON_PERFORM_SEARCH,
  onPerformSearchSuccess,
  onPerformSearchFailed,
  ON_PERFORM_SEARCH_SUCCESS,
  ON_PERFORM_SEARCH_FAILED
} from "src/components/Movies/MoviesActions";

export interface IMoviesStore {
  loading: boolean;
  movies: IMovieDBMovie[];
  error: object | null;
}

const initialState: IMoviesStore = {
  loading: false,
  movies: [],
  error: null
};

export const moviesReducer = function reduce(
  state: IMoviesStore = initialState,
  action: MoviesAction
): IMoviesStore | Loop<IMoviesStore, MoviesAction> {
  switch (action.type) {
    case ON_PERFORM_SEARCH: {
      return loop<IMoviesStore, MoviesAction>(
        {
          ...state,
          loading: true
        },
        Cmd.run(fetchMovieDbSearch, {
          args: [action.payload.searchText],
          successActionCreator: onPerformSearchSuccess,
          failActionCreator: onPerformSearchFailed
        })
      );
    }
    case ON_PERFORM_SEARCH_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case ON_PERFORM_SEARCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        movies: action.payload.movies
      };
    }
    case ON_LOAD_DISCOVER_MOVIES: {
      return loop<IMoviesStore, MoviesAction>(
        {
          ...state,
          loading: true
        },
        Cmd.run(fetchMovieDbDiscover, {
          args: [],
          successActionCreator: onLoadDiscoverMoviesSuccess,
          failActionCreator: onLoadDiscoverMoviesFailed
        })
      );
    }
    case LOAD_DISCOVER_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case LOAD_DISCOVER_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.payload.movies
      };
    default:
      return state;
  }
};
