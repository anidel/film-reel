import * as React from "react";
import loadable from "../../decorators/loadable";
import { IMovieDBMovie, IMovieDBGenre } from "../../api/movieDb";
import { Movie } from "./Movie";
import styled from "styled-components";

export interface IMoviesProps {
  loading: boolean;
  error: object | null;
  movies: IMovieDBMovie[];
  genres: IMovieDBGenre[];
}

const MoviesLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

const SFCMoviesComponent: React.SFC<IMoviesProps> = ({ movies, genres }) => (
  <MoviesLayout>
    {movies.map(movie => (
      <Movie key={movie.id} movie={movie} genres={genres} />
    ))}
  </MoviesLayout>
);

export const MoviesComponent = loadable<IMoviesProps>(props => props.loading)(
  SFCMoviesComponent
);
