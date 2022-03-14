/* 
  Deal with collections later.
*/
type UserMovieCollection = Array<Movie>;

type User = {
  id: string;
  email: string;
  password: string;
  _v: number;
};

type UserMovieList = {
  email: string;
  _id: string;
  movielist: Array<MovieExtended>;
  genres: Array<MovieGenreRating>;
  directors: Array<UserDirectorRating>;
  actors: Array<UserActorRating>;
  __v: number;
};

// The type in the collection
type Movie = {
  collectionID: number;
  inWatchlist: boolean;
  seen: boolean;
  user_rating: number | null;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  title: string;
  id: number;
};

interface APIMovieWithGenre extends Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
  vote_count: number;
}

// The type in the 'movielist'

interface MovieExtended extends Movie {
  backdrop_path: string;
  belongs_to_collection: TMDBCollection;
  budget: number;
  genres: Array<GenreRating>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  video: boolean;
  vote_count: number;
  credits: Credits;
}

interface GenreRating {
  movid?: number;
  name: string;
  id: number;
  rating?: number | null;
  count?: number;
}

interface DirectorRating {
  movid?: number;
  name: string;
  id: number;
  rating: number | null;
  count?: number;
}

interface ActorRating {
  name: string;
  id: number;
  rating: number | null;
  count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface MovieGenreRating {
  id: number;
  movid: number;
  genreId: number;
  name: string;
  rating: number;
}

interface UserDirectorRating {
  movid: number;
  id: number;
  name: string;
  rating: number;
}

interface UserActorRating {
  movid: number;
  id: number;
  name: string;
  rating: number;
}

interface Credits {
  cast: Array<CastCredit>;
  crew: Array<CrewCredit>;
}

/* 
API types
*/
interface TMDBCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

// interface OnLoadResponse {
//   trendingMovies: Array<APIMovieWithGenre>;
//   user: UserMovieList;
//   actors: Array<CastCredit>;
//   directors: Array<CrewCredit>;
// }

// type OnLoadResponse = Array<
//   Array<APIMovieWithGenre> |
//   UserMovieList |
//   Array<NewGenreList> |
//   Array<CastCredit |
//   Array<CrewCredit>
// >

// type CreditFromAPI = {
//   adult: boolean;
//   backdrop_path: string;
//   genre_ids: Array<number>;
//   original_language: string;
//   original_title: string;
//   poster_path: string;
//   vote_count: number;
//   id: number;
//   vote_average: number;
//   video: number;
//   overview: string;
//   release_date: string;
//   title: string;
//   popularity: number;
//   character: string;
//   credit_id: string;
//   order: number;
// };

interface CrewCredit extends Credit {
  name: string;
  department: string;
  job: string;
}

interface CastCredit extends Credit {
  character: string;
}

interface Credit extends Movie {
  credit_id: string;
  release_date: string;
  vote_count: number;
  video: false;
  adult: false;
  vote_average: number;
  title: string;
  genre_ids: Array<number>;
  original_title: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  inWatchlist: boolean;
  seen: boolean;
  user_rating: number | null;
}

/* 
  I have changed the genres from this:
    [
      [genreName]: string,
      [genreName]: string,
      [genreName]: string,
      Array<APIMovieGenre>,
      ...
      ...
    ]
*/
type GenreResponse = Array<NewGenreList>;

type NewGenreList = {
  genreName: string;
  movies: Array<APIMovieWithGenre>;
};

type NewDirectorList = {
  directorName: string;
  movies: Array<CrewCredit>;
};
type NewActorList = {
  actorName: string;
  movies: Array<CastCredit>;
};

interface ListByType<C extends Credit> {
  movies: Array<C>;
  [key: string]: any;
}

// User also has _id and __v.
type CreateUserReturn = {
  newUser: User;
  newMovielistUser: UserMovieList;
  newMovieCollectionUser: MovieCollectionResponse;
};

type MovieCollectionResponse = {
  email: string;
  _id: string;
  person?: {
    id: number;
    name: string;
  };
  movielist: Array<Movie>;
};

type WatchlistResponse = {
  watchlistMovieLists: Array<Array<MovieExtended>>;
  genreMovieLists: Array<Array<APIMovieWithGenre>>;
  actorMovieLists: Array<Array<CastCredit>>;
  directorMovieLists: Array<Array<CrewCredit>>;
};

///////// PROPS TYPES