import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;

  const mainMovie = movies[0];
  console.log(mainMovie, "mainMovies");

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle movieTitle={original_title} movieOverview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
