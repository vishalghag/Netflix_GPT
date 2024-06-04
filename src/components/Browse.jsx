import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  useTopRated();
  useUpComing();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
