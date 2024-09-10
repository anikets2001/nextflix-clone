import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null; // Ensure null is returned when movies is not available
  
  return (
    <div className="p-4 bg-black text-white">
      <div>
        <h1 className="text-2xl py-2">{title}</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {movies.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;