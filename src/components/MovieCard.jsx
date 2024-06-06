import React, { useState } from "react";
import { IMG_CDN } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addRecentlyViewedVideo } from "../utils/movieSlice";
import HeartIcon from "../utils/HeartIcon";
import Modal from "./Modal";

const MovieCard = ({ posterPath, movieDetails }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [popUpOpenData, setPopUpOpenData] = useState([]);
  const dispatch = useDispatch();

  const closeModalFn = () => {
    setModalOpen(false);
  };

  const onViewedVideoFn = (movieViewed) => {
    const { original_title, poster_path, release_date, overview, id } =
      movieViewed;
    setPopUpOpenData(movieDetails);
    setModalOpen(!modalOpen);
    // dispatch(
    //   addRecentlyViewedVideo({
    //     original_title,
    //     poster_path,
    //     release_date,
    //     overview,
    //     id,
    //   })
    // );
  };

  return (
    <>
      <div className="relative w-48 pr-4">
        <img
          alt="movie"
          src={`${IMG_CDN}${posterPath}`}
          onClick={() => onViewedVideoFn(movieDetails)}
          className="cursor-pointer"
        />
        <div className="absolute top-0 right-0 m-2">
          <HeartIcon movieLikeID={movieDetails} />
        </div>
      </div>
      {modalOpen && (
        <Modal closeModalFn={closeModalFn} popUpOpenData={popUpOpenData} />
      )}
    </>
  );
};

export default MovieCard;
