import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Netflix | Browse";
    getUpComingMovies();
  }, []);

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
};

export default useUpComing;
