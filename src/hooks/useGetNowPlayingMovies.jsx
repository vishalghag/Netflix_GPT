import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailer } from "../utils/movieSlice";

const useGetNowPlayingMovies = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");

    const videoTrailer = filterData[0];
    const { key } = videoTrailer;
    dispatch(addTrailer(key));
  };
};

export default useGetNowPlayingMovies;
