import { ISearchStore } from "src/components/Search/SearchReducer";
import { IStore } from "src/store";

const getBaseState = (store: IStore): ISearchStore => store.searchStore;

function getKey<T extends IStore, K extends keyof ISearchStore>(
  store: T,
  key: K
) {
  return getBaseState(store)[key];
}

export const getSearchText = (store: IStore): ISearchStore["searchText"] =>
  getKey(store, "searchText");
