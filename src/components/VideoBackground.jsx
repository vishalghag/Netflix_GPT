import React from "react";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const movieTrailer = useSelector((store) => store.movies?.trailer);
  useGetNowPlayingMovies(movieId);

  return (
    <div className=" w-screen ">
      <iframe
        className=" w-screen aspect-video "
        src={`https://www.youtube.com/embed/${movieTrailer}?si=BiRvLtj8Qfg3Kxvq&mute=1&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
