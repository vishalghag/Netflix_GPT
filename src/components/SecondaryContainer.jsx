import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies || !Object.keys(movies).length) return null;

  return (
    <div className="bg-black">
      <div className="relative -mt-[200px] z-20 bg-transparent">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
      {movies.recentlyViewedVideos.length > 1 && (
        <MovieList
          title={"Recently Watch Video"}
          movies={movies.recentlyViewedVideos}
        />
      )}
      <MovieList title={"Trending"} movies={movies.trendingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRated} />
      <MovieList title={"Up Coming"} movies={movies.upComing} />
    </div>
  );
};

export default SecondaryContainer;
