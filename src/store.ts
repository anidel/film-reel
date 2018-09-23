import { compose, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, install, StoreCreator } from "redux-loop";
import { HomeAction } from "src/components/Home/HomeActions";
import { homeReducer, IHomeStore } from "src/components/Home/HomeReducer";

export interface IStore {
  homeStore: IHomeStore
}

export const enhancer = compose(
  install()
)

type Actions = HomeAction

const reducer = combineReducers<IStore, Actions>({
  homeStore: homeReducer 
})

const enhancedCreateStore = createStore as StoreCreator;

export const store = enhancedCreateStore(reducer, composeWithDevTools(), enhancer)