import * as React from "react";
import {
  getLoading,
  getMovies,
  getError
} from "src/components/Movies/MoviesSelectors";
import { IMoviesProps } from "src/components/Movies/MoviesComponent";
import { MoviesComponent } from "src/components/Movies/MoviesComponent";
import { IStore } from "src/store";
import { onLoadDiscoverMovies } from "src/components/Movies/MoviesActions";
import { connect } from "react-redux";

interface IDispatchProps {
  onLoadDiscoverMovies(): void;
}

const mapStateToProps = (store: IStore): IMoviesProps => ({
  loading: getLoading(store),
  movies: getMovies(store),
  error: getError(store)
});

const mapDispatchToProps: IDispatchProps = {
  onLoadDiscoverMovies
};

class MoviesWrapper extends React.PureComponent<IMoviesProps & IDispatchProps> {
  public componentDidMount() {
    this.props.onLoadDiscoverMovies();
  }

  public render() {
    return <MoviesComponent {...this.props} />;
  }
}

export const MoviesContainer = connect<IMoviesProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MoviesWrapper);
