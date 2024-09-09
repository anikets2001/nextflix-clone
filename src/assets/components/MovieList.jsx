import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  console.log("movies:", movies?.poster_path);
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <MovieCard posterPath={movies[0]?.poster_path} />
      </div>
    </div>
  );
};

export default MovieList;
