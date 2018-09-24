import * as React from "react";
import { IMovieDBMovie, IMovieDBConfigurationSchema } from "../../api/movieDb";
import { MoviePosterComponent } from "./MoviePoster";
import { IStore } from "../../store";
import { getMovieDBConfiguration } from "../Home/HomeSelectors";
import { connect } from "react-redux";

export interface IMoviePosterProps {
  movie: IMovieDBMovie;
  movieDbConfiguration: IMovieDBConfigurationSchema;
}

type StateProps = Pick<IMoviePosterProps, "movieDbConfiguration">;

const mapStateToProps = (state: IStore): StateProps => ({
  movieDbConfiguration: getMovieDBConfiguration(
    state
  ) as IMovieDBConfigurationSchema
});

class MoviePosterWrapper extends React.PureComponent<IMoviePosterProps> {
  private moviePosterUrl: string;

  constructor(props: IMoviePosterProps) {
    super(props);
    const {
      movieDbConfiguration: {
        images: { secure_base_url, poster_sizes }
      },
      movie: { poster_path }
    } = props;

    // poster_size should ideally adapted to the screen size and be more responsive
    this.moviePosterUrl = `${secure_base_url}${poster_sizes[2]}${poster_path}`;
  }

  public render() {
    return <MoviePosterComponent url={this.moviePosterUrl} />;
  }
}

export const MoviePoster = connect<StateProps>(mapStateToProps)(
  MoviePosterWrapper
);
