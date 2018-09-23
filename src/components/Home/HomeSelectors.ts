import { IHomeStore } from "src/components/Home/HomeReducer";
import { IStore } from "src/store";

const getBaseState = (store: IStore): IHomeStore =>
  store.homeStore

function getKey<T extends IStore, K extends keyof IHomeStore>(store: T, key: K) {
  return getBaseState(store)[key]
}

export const getInitialising = (store: IStore): IHomeStore['initialising'] =>
  getKey(store, 'initialising')
