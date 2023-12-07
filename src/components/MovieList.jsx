import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ myMovies }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {myMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
