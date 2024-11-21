import MovieRow from "./MovieRow";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="xl:-mt-60 md:-mt-24 -mt-12  relative z-10">
          <MovieRow title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieRow title={"Top Rated"} movies={movies.topRatedMovies} />
        </div>
        <MovieRow title={"Popular"} movies={movies.popularMovies} />
        <MovieRow title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    )
  );
};

export default MovieContainer;
