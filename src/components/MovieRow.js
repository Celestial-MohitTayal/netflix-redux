import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }) => {
  return (
    <div className="px-6 py-1">
      <h1 className="text-3xl text-zinc-400 py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
