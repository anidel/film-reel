import * as React from "react";
import loadable from "../../decorators/loadable";
import { IMovieDBMovie, IMovieDBGenre } from "../../api/movieDb";
import { Movie } from "./Movie";

export interface IMoviesProps {
  loading: boolean;
  error: object | null;
  movies: IMovieDBMovie[];
  genres: IMovieDBGenre[];
}

const SFCMoviesComponent: React.SFC<IMoviesProps> = ({ movies, genres }) => (
  <>
    {movies.map(movie => (
      <Movie key={movie.id} movie={movie} genres={genres} />
    ))}
  </>
);

export const MoviesComponent = loadable<IMoviesProps>(props => props.loading)(
  SFCMoviesComponent
);
