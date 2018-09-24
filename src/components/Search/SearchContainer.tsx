import { connect } from "react-redux";
import { ISearchProps, SearchComponent } from "./SearchComponent";
import { getSearchText } from "src/components/Search/SearchSelectors";
import { onSearch } from "src/components/Search/SearchActions";
import { IStore } from "src/store";

type StateProps = Pick<ISearchProps, "searchText">;
type DispatchProps = Pick<ISearchProps, "onSearch">;

const mapStateToProps = (store: IStore): StateProps => ({
  searchText: getSearchText(store)
});

const mapDispatchToProps = {
  onSearch
};

export const SearchContainer = connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);
