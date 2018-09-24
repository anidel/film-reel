import { compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, install, StoreCreator } from "redux-loop";
import { HomeAction } from "src/components/Home/HomeActions";
import { homeReducer, IHomeStore } from "src/components/Home/HomeReducer";
import {
  moviesReducer,
  IMoviesStore
} from "src/components/Movies/MoviesReducer";
import { MoviesAction } from "./components/Movies/MoviesActions";

export interface IStore {
  homeStore: IHomeStore;
  moviesStore: IMoviesStore;
}

export const enhancer = compose(install());

type Actions = HomeAction | MoviesAction;

const reducer = combineReducers<IStore, Actions>({
  homeStore: homeReducer,
  moviesStore: moviesReducer
});

const enhancedCreateStore = createStore as StoreCreator;

export const store = enhancedCreateStore(
  reducer,
  composeWithDevTools(),
  enhancer
);
