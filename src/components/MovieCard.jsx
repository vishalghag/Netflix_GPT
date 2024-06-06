import React, { useState } from "react";
import { IMG_CDN } from "../utils/constant";
import HeartIcon from "../utils/HeartIcon";
import Modal from "./Modal";

const MovieCard = ({ posterPath, movieDetails }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [popUpOpenData, setPopUpOpenData] = useState([]);

  const closeModalFn = () => {
    setModalOpen(false);
    document.title = `Netflix | ${"Movies"}`;
  };

  const onViewedVideoFn = (movieViewed) => {
    const { original_title } = movieViewed;
    document.title = `Netflix | ${original_title}`;
    setPopUpOpenData(movieDetails);
    setModalOpen(!modalOpen);
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
