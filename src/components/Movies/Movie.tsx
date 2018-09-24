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
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-right: 10px;
`;

const Date = styled.div`
  font-weight: 500;
  font-size: 12px;
`;

const Genres = styled.div`
  font-weight: 300;
  font-size: 12px;
  flex-wrap: wrap;
`;

const MovieMetadata = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 7px;
  margin-right: 7px;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const MovieHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Popularity = styled.span`
  font-size: 10px;
`;

export const Movie: React.SFC<IMovieProps> = ({ movie, genres }) => (
  <MovieLayout>
    <MoviePoster movie={movie} />
    <MovieMetadata>
      <MovieHeader>
        <Title>{movie.title}</Title>
        <Popularity>{movie.vote_average}</Popularity>
      </MovieHeader>
      <Date>
        <Bold>Released: </Bold>
        {movie.release_date}
      </Date>
      <Genres>
        <Bold>Genres: </Bold>
        {movie.genre_ids
          .map(genreId => genres.find(genre => genre.id === genreId))
          .map(genre => (genre ? genre.name : ""))
          .join(",")}
      </Genres>
    </MovieMetadata>
  </MovieLayout>
);
