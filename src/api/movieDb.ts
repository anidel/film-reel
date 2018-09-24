import { resolve } from "url";

const apiKey =
  process.env.REACT_APP_MOVIE_DB_API_KEY ||
  "enter api key as MOVIE_DB_API_KEY env";
const MOVIE_DB_API_VERSION = "3";
const MOVIE_DB_BASEURL = "https://api.themoviedb.org/";

export interface IMovieDBConfigurationSchema {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
}

export interface IMovieDBMovie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  total_results: number;
  total_pages: number;
}

export interface IMovieDBMovieResponse {
  page: number;
  results: IMovieDBMovie[];
}

export interface IMovieDBGenre {
  id: number;
  name: string;
}

export interface IMovieDBGenres {
  genres: IMovieDBGenre[];
}

const fetchMovieDbUrlFor = (path: string): string =>
  resolve(
    MOVIE_DB_BASEURL,
    `${MOVIE_DB_API_VERSION}/${path}?api_key=${apiKey}`
  );

function doFetch<T>(url: string): Promise<T> {
  return fetch(url).then(response => response.json());
}

export const fetchMovieDbConfiguration = () =>
  doFetch<IMovieDBConfigurationSchema>(fetchMovieDbUrlFor("configuration"));

export const fetchMovieDbDiscover = (args: string) =>
  doFetch<IMovieDBMovieResponse>(fetchMovieDbUrlFor("discover/movie"));

export const fetchMovieDbGenres = () =>
  doFetch<IMovieDBGenres>(fetchMovieDbUrlFor("genre/movie/list")).then(
    response => response.genres
  );
