import { SearchAction, ON_SEARCH } from "src/components/Search/SearchActions";
import { Loop } from "redux-loop";

export interface ISearchStore {
  searchText: string;
}

const initialState: ISearchStore = {
  searchText: ""
};

export const searchReducer = function reduce(
  state: ISearchStore = initialState,
  action: SearchAction
): ISearchStore | Loop<ISearchStore, SearchAction> {
  switch (action.type) {
    case ON_SEARCH: {
      return {
        ...state,
        searchText: action.payload.searchText
      };
    }
    default: {
      return state;
    }
  }
};
