import * as React from "react";
import { IMovieDBMovie, IMovieDBGenre } from "../../api/movieDb";
import { MoviePoster } from "src/components/MoviePoster/MoviePosterContainer";

export interface IMovieProps {
  movie: IMovieDBMovie;
  genres: IMovieDBGenre[];
}

export const Movie: React.SFC<IMovieProps> = ({ movie, genres }) => (
  <>
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
  </>
);
