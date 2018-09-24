import * as React from "react";
import loadable from "../../decorators/loadable";
import { IMovieDBMovie } from "../../api/movieDb";

export interface IMoviesProps {
  loading: boolean;
  error: object | null;
  movies: IMovieDBMovie[];
}

const SFCMoviesComponent: React.SFC<IMoviesProps> = ({ movies }) => (
  <>
    {movies.map(movie => (
      <div key={movie.id}>{movie.title}</div>
    ))}
  </>
);

export const MoviesComponent = loadable<IMoviesProps>(props => props.loading)(
  SFCMoviesComponent
);
