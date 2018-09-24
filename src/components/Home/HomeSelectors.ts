import { IHomeStore } from "src/components/Home/HomeReducer";
import { IStore } from "src/store";

const getBaseState = (store: IStore): IHomeStore => store.homeStore;

function getKey<T extends IStore, K extends keyof IHomeStore>(
  store: T,
  key: K
) {
  return getBaseState(store)[key];
}

export const getInitialising = (store: IStore): boolean =>
  getKey(store, "loadingConfiguration") && getKey(store, "loadingGenres");

export const getGenres = (store: IStore): IHomeStore["genres"] =>
  getKey(store, "genres");

export const getMovieDBConfiguration = (
  store: IStore
): IHomeStore["movieDbConfiguration"] => getKey(store, "movieDbConfiguration");
