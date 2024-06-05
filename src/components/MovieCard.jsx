import React from "react";
import { IMG_CDN } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addRecentlyViewedVideo } from "../utils/movieSlice";
import HeartIcon from "../utils/HeartIcon";

const MovieCard = ({ posterPath, movieDetails }) => {
  const dispatch = useDispatch();

  const recentlyViewedVideoFn = (movieViewed) => {
    const { original_title, poster_path, release_date, overview, id } =
      movieViewed;
    dispatch(
      addRecentlyViewedVideo({
        original_title,
        poster_path,
        release_date,
        overview,
        id,
      })
    );
  };

  return (
    <div className="relative w-48 pr-4">
      <img
        alt="movie"
        src={`${IMG_CDN}${posterPath}`}
        onClick={() => recentlyViewedVideoFn(movieDetails)}
        className="cursor-pointer"
      />
      <div className="absolute top-0 right-0 m-2">
        <HeartIcon movieLikeID={movieDetails} />
      </div>
    </div>
  );
};

export default MovieCard;
