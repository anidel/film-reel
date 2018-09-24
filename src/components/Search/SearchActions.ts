export const ON_SEARCH = "SEARCH/ON_SEARCH";
export const ON_SEARCH_SUCCESS = "SEARCH/ON_SEARCH_SUCCESS";
export const ON_SEARCH_FAILED = "SEARCH/ON_SEARCH_FAILED";

export type SearchAction =
  | {
      type: typeof ON_SEARCH;
      payload: { searchText: string };
    }
  | { type: typeof ON_SEARCH_SUCCESS }
  | { type: typeof ON_SEARCH_FAILED };

export const onSearch = (searchText: string): SearchAction => ({
  type: ON_SEARCH,
  payload: {
    searchText
  }
});
