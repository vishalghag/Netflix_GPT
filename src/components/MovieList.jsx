import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null; // Return null if movies are not provided

  return (
    <div className="z-40">
      <h1 className=" text-3xl font-medium py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className=" flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movieDetails={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
