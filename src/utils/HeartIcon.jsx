import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLikedMovies } from "./movieSlice";
import { toast } from "react-toastify";

const HeartIcon = ({ movieLikeID }) => {
  const { original_title } = movieLikeID;
  const likedMovies = useSelector((store) => store.movies?.likedMovies);
  const dispatch = useDispatch();

  const toggleLikedMovie = (movieId) => {
    const isLiked = likedMovies.includes(movieId);
    dispatch(addLikedMovies(movieId));
    if (isLiked) {
      toast.success(`Movie ${original_title} removed from liked list`);
    } else {
      toast.success(`Movie ${original_title} added to liked list`);
    }
  };

  const isLiked = likedMovies.includes(movieLikeID.id);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={isLiked ? "red" : "gray"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      onClick={() => toggleLikedMovie(movieLikeID.id)}
      className="size-6 z-30  mr-3 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  );
};

export default HeartIcon;
