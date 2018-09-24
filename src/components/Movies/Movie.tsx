import * as React from "react";
import { IMovieDBMovie, IMovieDBGenre } from "../../api/movieDb";
import { MoviePoster } from "src/components/MoviePoster/MoviePosterContainer";
import styled from "styled-components";

export interface IMovieProps {
  movie: IMovieDBMovie;
  genres: IMovieDBGenre[];
}

// we're using w185 for poster_size
// ideally this should come from a config file or, better, automatically calculated.
const MovieLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 10px;
`;

export const Movie: React.SFC<IMovieProps> = ({ movie, genres }) => (
  <MovieLayout>
    <MoviePoster movie={movie} />
    <div>Title: {movie.title}</div>
    <div>Released: {movie.release_date}</div>
    <div>
      Genres:{" "}
      {movie.genre_ids
        .map(genreId => genres.find(genre => genre.id === genreId))
        .map(genre => (genre ? genre.name : ""))
        .join(",")}
    </div>
  </MovieLayout>
);
