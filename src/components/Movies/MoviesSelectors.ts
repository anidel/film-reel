import { IMoviesStore } from "src/components/Movies/MoviesReducer";
import { IStore } from "src/store";

const getBaseState = (store: IStore): IMoviesStore => store.moviesStore;

function getKey<T extends IStore, K extends keyof IMoviesStore>(
  store: T,
  key: K
) {
  return getBaseState(store)[key];
}

export const getLoading = (store: IStore): IMoviesStore["loading"] =>
  getKey(store, "loading");

export const getMovies = (store: IStore): IMoviesStore["movies"] =>
  getKey(store, "movies");

export const getError = (store: IStore): IMoviesStore["error"] =>
  getKey(store, "error");
