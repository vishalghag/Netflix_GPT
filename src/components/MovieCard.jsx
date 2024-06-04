import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ posterPath, movieDetails }) => {
  return (
    <div className="w-48 pr-4">
      <img
        alt="movie"
        src={`${IMG_CDN}${posterPath}`}
        onClick={() => console.log(movieDetails, "movieDeatilssss")}
        className=" cursor-pointer"
      />
    </div>
  );
};

export default MovieCard;
