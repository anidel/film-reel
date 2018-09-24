import * as React from "react";
import {
  getLoading,
  getMovies,
  getError
} from "src/components/Movies/MoviesSelectors";
import { IMoviesProps } from "src/components/Movies/MoviesComponent";
import { MoviesComponent } from "src/components/Movies/MoviesComponent";
import { IStore } from "src/store";
import {
  onLoadDiscoverMovies,
  onPerformSearch
} from "src/components/Movies/MoviesActions";
import { connect } from "react-redux";
import { getGenres } from "src/components/Home/HomeSelectors";
import { getSearchText } from "../Search/SearchSelectors";
import { Action } from "redux";
import debounce from "lodash-es/debounce";

interface IMoviesWrapperProps {
  searchText: string;
  onPerformSearch(searchText: string): Action;
}

type StateProps = IMoviesProps & Pick<IMoviesWrapperProps, "searchText">;

interface IDispatchProps extends Pick<IMoviesWrapperProps, "onPerformSearch"> {
  onLoadDiscoverMovies(): void;
}

const mapStateToProps = (store: IStore): StateProps => ({
  loading: getLoading(store),
  movies: getMovies(store),
  genres: getGenres(store),
  error: getError(store),
  searchText: getSearchText(store)
});

const mapDispatchToProps: IDispatchProps = {
  onLoadDiscoverMovies,
  onPerformSearch
};

class MoviesWrapper extends React.PureComponent<
  IMoviesProps & IMoviesWrapperProps & IDispatchProps
> {
  // Actually perform a serch query every 150ms
  private onPerformSearch = debounce((searchText: string): void => {
    this.props.onPerformSearch(searchText);
  }, 150);

  public componentDidMount() {
    this.props.onLoadDiscoverMovies();
  }

  public componentWillReceiveProps(
    nextProps: IMoviesProps & IMoviesWrapperProps & IDispatchProps
  ) {
    if (this.props.searchText !== nextProps.searchText) {
      // this happens when the user has emptied the search input
      // Let's just show something.
      if (nextProps.searchText === "") {
        this.props.onLoadDiscoverMovies();
      } else {
        this.onPerformSearch(nextProps.searchText);
      }
    }
  }

  public shouldComponentUpdate(
    nextProps: IMoviesProps & IMoviesWrapperProps & IDispatchProps
  ) {
    if (this.props.searchText.length > 0 && nextProps.searchText === "") {
      return false;
    }

    return true;
  }

  public render() {
    return <MoviesComponent {...this.props} />;
  }
}

export const MoviesContainer = connect<StateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MoviesWrapper);
